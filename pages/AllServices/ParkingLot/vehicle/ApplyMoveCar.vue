<template>
	<view>
		<!-- 
		已申请：
		{
			
			桂B888888
			桂B888888
			桂B888888
			桂B888888
			桂B888888
			桂B888888
			桂B888888
			地址啥都没写
		}
		 -->
		<!-- <h1>ApplyMoveCar</h1> -->
		<uni-easyinput v-model="queryData.plateNo" type="text" placeholder="车牌号" />
		<uni-easyinput v-model="queryData.tel" type="text" placeholder="phone number" />
		<uni-easyinput v-model="queryData.idCard" type="idcard" placeholder="身份证号" />
		<uni-easyinput v-model="queryData.province" type="text" placeholder="province" />
		<uni-easyinput v-model="queryData.city" type="text" placeholder="city" />
		<uni-easyinput v-model="queryData.area" type="text" placeholder="区" />
		<uni-easyinput v-model="queryData.photo" type="textarea" :maxlength="-1" placeholder="photo URL" />
		<uni-easyinput v-model="queryData.address" type="textarea" :maxlength="-1" placeholder="详细地址(可选)" />
		<button type="default" @tap='apply'>apply</button>
	</view>
</template>

<script lang="ts" setup>
	import {
		ref
	} from "vue"
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
	const apply = () => {

		getApp().globalData.$http(d => {
			/*
			code: 500
			msg: "未找到该车辆信息，请确认车牌信息是否正确！"
			*/
			// console.log(d);
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
			}
		}, '/prod-api/api/park/car/move', 'POST', queryData.value, {
			Authorization: uni.getStorageSync('user').token
		})
	}
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
