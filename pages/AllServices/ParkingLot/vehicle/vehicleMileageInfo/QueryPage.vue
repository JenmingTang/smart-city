<template>
	<view>
		<!-- <uni-title title="数据没变请刷新或返回再入"></uni-title> -->
		<button style="margin-top: 10px;" type="default" @tap="refresh">refresh</button>
		<uni-easyinput v-model="plateNoInput" placeholder="输入车牌号" type="text" />
		<button type="default" @tap="query(() => {})">search</button>
		<!-- <h1>myMileageVehicle query</h1> -->
		<!-- 
		 "rows": [
		        {
		            "searchValue": null,
		            "createBy": null,
		            "createTime": null,
		            "updateBy": null,
		            "updateTime": null,
		            "remark": null,
		            "params": {},
		            "id": 16576,
		            "plateNo": "tang",
		            "travelDate": null,
		            "travelDistance": null,
		            "gasFilling": null,
		            "amount": null,
		            "userId": 1116005,
		            "userName": null
		        }
		 -->

		<template v-for="(v,i) in cars" :key="i">
			<uni-card title="" thumbnail="" extra="" note="">

				<uni-title :title="`createTime : ${v.createTime}`" align="center"></uni-title>
				<uni-title :title="`plateNo : ${v.plateNo}`" align="center"></uni-title>
				<uni-title :title="`travelDate : ${v.travelDate}`" align="center"></uni-title>
				<uni-title :title="`travelDistance : ${v.travelDistance}`" align="center"></uni-title>
				<uni-title :title="`gasFilling : ${v.gasFilling}`" align="center"></uni-title>
				<uni-title :title="`amount : ${v.amount}`" align="center"></uni-title>
				<view class="" style="display: flex;">
					<view @tap="delete_(v)" style="flex: 1;">

						<uni-title title="delete" align="center"></uni-title>
					</view>
					<view @tap="update(v)" style="flex: 1;">

						<uni-title title="update" align="center"></uni-title>
					</view>
				</view>
			</uni-card>
		</template>
	</view>
</template>

<script lang="ts" setup>
	// 暴露给 父组件 用，在子组件属性 ref="child" 拿到
	// defineExpose({

	// })
	import {
		ref
	} from "vue"
	import {
		useStore
	} from "vuex"
	const store = useStore()
	const plateNoInput = ref('')

	const cars = ref([])
	let plateNoInputDelete = ''
	const delete_ = v => {
		uni.showModal({
			title: '注意！',
			content: '确定删除它？',
			showCancel: true,
			cancelText: 'cancel',
			confirmText: 'confirm',
			success: res => {
				if (res.confirm) {

					getApp().globalData.$http(d => {
						uni.showToast({
							title: d.msg
						});
						setTimeout(function() {

							if (d.code === 200) {


								plateNoInput.value = plateNoInputDelete
								query(() => plateNoInput.value = '')

							}
						}, 1000);
					}, `/prod-api/api/park/car/consumption/${v.id}`, 'DELETE', {}, {
						Authorization: uni.getStorageSync('user').token
					})
				}
				if (res.cancel) {

				}
			},
			fail: () => {},
			complete: () => {}
		});
	}
	const update = v => {
		store.commit('setUpdateVehicleMileageInfo', v)
		uni.navigateTo({
			url: `./UpdatePage`,
			success: res => {},
			fail: () => {},
			complete: () => {}
		});
	}

	const refresh = () => {
		query(() => {})
	}
	const query = fn => {
		uni.showLoading({
			title: 'loading',
			mask: true,
			complete() {
				// 会占掉 loading 一直存在，直到隐藏 loading
				// setTimeout(function() {
				// 	uni.showToast({
				// 		title: '已经三秒了，请再等下，本来这接口有点慢'
				// 	});
				// }, 3000);
			}
		});
		getApp().globalData.$http(d => {
			plateNoInputDelete = plateNoInput.value
			// if (plateNoInput.value === '') {
			// 	return
			// }

			if (d.code === 200) {
				// plateNoInput.value = ''
				// plateNoInput.value 输入不存在的得 10963 条数据，直接卡爆，一会试后变成 0 条了？？？
				// console.log(d);
				if (d.rows.length === 0) {
					uni.showToast({
						title: '没有记录'
					});
				}

				// 10963条
				// cars.value = d.rows
				if (d.rows.length > 30) {
					cars.value = d.rows.slice(0, 30)
				}
			}
			// console.log(d.msg);
			fn()
			uni.hideLoading()
		}, `/prod-api/api/park/car/consumption?plateNo=${plateNoInput.value}`, 'GET', {}, {
			Authorization: uni.getStorageSync('user').token
		})
	}
	// query(() => {})
</script>
<script lang="ts">
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
</style>
