<template>
	<view>
		<!-- <h1>ApplyMoveCar</h1> -->
		<uni-easyinput v-model="queryData.plateNo" type="text" placeholder="车牌号" />
		<uni-easyinput v-model="queryData.tel" type="text" placeholder="phone number" />
		<uni-easyinput v-model="queryData.idCard" type="idcard" placeholder="身份证号" />
		<uni-easyinput v-model="queryData.province" type="text" placeholder="province" />
		<uni-easyinput v-model="queryData.city" type="text" placeholder="city" />
		<uni-easyinput v-model="queryData.area" type="text" placeholder="区" />
		<uni-easyinput v-model="queryData.photo" type="textarea" :maxlength="-1" placeholder="photo URL" />
		<uni-easyinput v-model="queryData.address" type="textarea" :maxlength="-1" placeholder="详细地址(可选)" />
		<button type="default" @tap='query'>query</button>
	</view>
</template>

<script lang="ts" setup>
	import {
		ref
	} from "vue"

	import {
		useStore
	} from "vuex"
	const store = useStore()
	const queryData = ref({

		// 车牌号
		plateNo: '',
		// 联系电话
		tel: '',
		// 身份证号
		idCard: '',
		// cover url
		photo: '',
		// 省
		province: '',
		city: '',
		// 区
		area: '',
		address: '',
	})
	const query = () => {

		getApp().globalData.$http(d => {
			/*
			code: 500
			msg: "未找到该车辆信息，请确认车牌信息是否正确！"
			*/
			console.log(d);
			uni.showToast({
				title: d.msg
			});
			if (d.code === 200) {
				
				queryData.value = {
					// 车牌号
					plateNo: '',
					// 联系电话
					tel: '',
					// 身份证号
					idCard: '',
					// cover url
					photo: '',
					// 省
					province: '',
					city: '',
					// 区
					area: '',
					address: '',
				}
				store.commit('setMoveCarHistoryList', d.rows)
				uni.navigateTo({
					url: './MoveCarHistoryList',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
			// 文档为 POST
			/*
			
			rows: Array(1)
			0:
			address: ""
			applier: null
			area: "桂B888888"
			city: "桂B888888"
			createBy: "1116005"
			createTime: "2022-07-04 22:44:07"
			id: 14010
			idCard: "桂B888888"
			params: {}
			photo: "桂B888888"
			plateNo: "桂B888888"
			province: "桂B888888"
			remark: null
			searchValue: null
			tel: "桂B888888"
			updateBy: null
			updateTime: null
			userName: null
			*/
			// GET ，给空的请求参数的 14009 条数据
			// }, '/prod-api/api/park/car/history/list', 'GET', {}, {
		}, '/prod-api/api/park/car/history/list', 'GET', queryData.value, {
			Authorization: uni.getStorageSync('user').token
		})
	}


	// console.log('store.state.tang : ', store.state.tang);
	// console.log('store.state.parkingLot.tang : ', store.state.parkingLot.tang);
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
