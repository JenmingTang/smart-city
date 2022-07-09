<template>
	<view>
		<!-- <h1>VehicleMileageInfo update</h1> -->

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

		<uni-easyinput v-model="data.amount" type="number" placeholder="金额(元)" />
		<uni-easyinput v-model="data.gasFilling" type="digit" placeholder="加油量(升)" />
		<uni-easyinput v-model="data.plateNo" type="text" placeholder="车牌号" />
		<text>行驶日期 : </text>
		<!-- inline-block \ inline 试 -->
		<view class="" style="display: inline-block;">
			<!-- v-model 能用 -->
			<uni-datetime-picker v-model="data.travelDate" type="date" @change="dateChange" />
		</view>
		<uni-easyinput v-model="data.travelDistance" type="text" placeholder="行驶里程(公里)" />
		<button type="default" @tap="update">update</button>
	</view>
</template>

<script lang="ts" setup>
	import {
		ref
	} from "vue"

	import {
		useStore
	} from "vuex"

	// 2021-3-20
	const datetimePicker = ref('')
	const store = useStore()
	const data = ref({
		amount: null,
		gasFilling: null,
		id: null,
		plateNo: '',
		travelDate: '',
		travelDistance: null
	})

	const data1 = store.getters.getUpdateVehicleMileageInfo
	data.value.amount = data1.amount
	data.value.gasFilling = data1.gasFilling
	data.value.id = data1.id
	data.value.plateNo = data1.plateNo
	data.value.travelDate = data1.travelDate
	data.value.travelDistance = data1.travelDistance
	// 
	datetimePicker.value = data1.travelDate
	// 
	const sourceData = data.value
	const update = () => {
		
		// console.log('data.value : ', data.value);
		getApp().globalData.$http(d1 => {
			uni.showToast({
				title: d1.msg
			});
			if (d1.code !== 200) {
				console.log('d1.code !== 200');
				data.value = sourceData
			}
		}, `/prod-api/api/park/car/consumption`, 'PUT', data.value, {
			Authorization: uni.getStorageSync('user').token
		})
	}
	const dateChange = () => {

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
