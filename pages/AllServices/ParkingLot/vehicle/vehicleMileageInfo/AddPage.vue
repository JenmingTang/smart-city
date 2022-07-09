<template>
	<view>
		<!-- <h1>VehicleMileageInfo add</h1> -->
		<uni-easyinput v-model="data.amount" type="number" placeholder="金额(元)" />
		<uni-easyinput v-model="data.gasFilling" type="digit" placeholder="加油量(升)" />
		<uni-easyinput v-model="data.plateNo" type="text" placeholder="车牌号" />
		<text>行驶日期 : </text>
		<!-- inline-block \ inline 试 -->
		<view class="" style="display: inline-block;">

			<uni-datetime-picker type="date" @change="dateChange" />
		</view>
		<uni-easyinput v-model="data.travelDistance" type="text" placeholder="行驶里程(公里)" />
		<button type="default" @tap="add">add</button>
	</view>
</template>

<script lang="ts" setup>
	import {
		ref
	} from "vue"
	// uni-datetime-picker 的 string value 、Numbervalue 不生效，日期基本用法
	// const single = ref(0)



	const data = ref({
		// 前面报黄色 要 String | Number，ok
		// amount: String | Number,
		// 不用显示默认值
		// amount: 0,
		amount: null,
		gasFilling: null,
		plateNo: '',
		travelDate: '',
		travelDistance: null
	})
	const dateChange = d => {
		// typeof d : string
		// 2022-07-05
		// console.log(typeof d);
		data.value.travelDate = d
	}
	const add = () => {
		getApp().globalData.$http(d => {
			uni.showToast({
				title: d.msg
			});
			if (d.code === 200) {

				data.value = {
					// 前面报黄色 要 String | Number，ok
					// amount: String | Number,
					// 不用显示默认值
					// amount: 0,
					amount: null,
					gasFilling: null,
					plateNo: '',
					// new 对象 会走在当前赋值之前，这里 ok
					travelDate: data.value.travelDate,
					travelDistance: null
				}
				// console.log(data.value);
			}

		}, `/prod-api/api/park/car/consumption`, 'POST', data.value, {
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
