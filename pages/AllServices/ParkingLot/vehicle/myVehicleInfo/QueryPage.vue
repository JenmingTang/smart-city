<template>
	<view>
		<!-- <uni-title title="数据没变请刷新或返回再入"></uni-title> -->
		<button style="margin-top: 10px;" type="default" @tap="refresh">refresh</button>
		<!-- <h1>myVehicleInfo query</h1> -->
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
		            "id": 4950,
		            "userId": 1116005,
		            "plateNo": "桂B888888",
		            "type": "汽油车",
		            "userName": null
		        }
		    ], 
		 -->

		<template v-for="(v,i) in cars" :key="i">
			<uni-card :cover="v.photo">
				<template v-slot:actions>
					<uni-title :title="`createTime : ${v.createTime}`" align="center"></uni-title>
					<uni-title :title="`plateNo : ${v.plateNo}`" align="center"></uni-title>
					<uni-title :title="`type : ${v.type}`" align="center"></uni-title>
					<view class="" style="display: flex;">
						<!-- 不要将其他组件嵌套在文本组件中，因为在不同平台上可能会有显示差异。 -->
						<!-- <text @tap="delete_(v)" style="flex: 1;"> -->
						<view @tap="delete_(v)" style="flex: 1;">

							<uni-title title="delete" align="center"></uni-title>
						</view>
						<view @tap="update(v)" style="flex: 1;">

							<uni-title title="update" align="center"></uni-title>
						</view>
					</view>
				</template>
			</uni-card>
		</template>
	</view>
</template>

<script lang="ts" setup>
	// 暴露给 父组件 用，在子组件属性 ref="child" 拿到
	defineExpose({

	})
	import {
		ref
	} from "vue"
	const cars = ref([])
	const refresh = () => {
		query(() => {})
	}
	const delete_ = v => {

		getApp().globalData.$http(d => {
			uni.showToast({
				title: d.msg
			});
			if (d.code === 200) {
				query(() => {})
			}
		}, `/prod-api/api/park/car/${v.id}`, 'DELETE', {}, {
			Authorization: uni.getStorageSync('user').token
		})
	}
	const update = v => {
		uni.navigateTo({
			url: `./UpdatePage?id=${v.id}&plateNo=${v.plateNo}&type=${v.type}`,
			success: res => {},
			fail: () => {},
			complete: () => {}
		});
	}
	const query = fn => {
		uni.showLoading({
			title: 'loading',
			mask: true
		});
		getApp().globalData.$http(d => {
			cars.value = d.rows
			fn()
			uni.hideLoading()
		}, '/prod-api/api/park/car/my', 'GET', {}, {
			Authorization: uni.getStorageSync('user').token
		})
	}
	query(() => {})
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
