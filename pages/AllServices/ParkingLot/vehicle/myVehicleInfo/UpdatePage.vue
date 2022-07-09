<template>
	<view>
		<!-- <h1>myVehicleInfo update</h1> -->

		<uni-easyinput v-model="q.id" placeholder="id" type="number" />
		<uni-easyinput v-model="q.plateNo" placeholder="车牌号" type="text" />
		<!-- <uni-easyinput v-model="q.type" placeholder="type" type="text" /> -->
		<uni-data-checkbox v-model="value" :localdata="range"></uni-data-checkbox>
		<button type="default" @tap='update(q,value)'>update</button>
	</view>
</template>

<script lang="ts" setup>
	import {
		ref
	} from "vue"
	// const value = ref(1)
	const range = [{
		// 必须为数字类型
		"value": 0,
		"text": "新能源车"
	}, {
		"value": 1,
		"text": "汽油车"
	}]

	const update = (d, value) => {

		d.type = range[value]['text']
		// console.log(d);
		getApp().globalData.$http(d1 => {
			uni.showToast({
				title: d1.msg
			});
			if (d1.code !== 200) {
				console.log('d1.code !== 200');
			}
			setTimeout(function() {

				uni.navigateBack({
					delta: 1
				});
			}, 1000);
		}, `/prod-api/api/park/car`, 'PUT', d, {
			Authorization: uni.getStorageSync('user').token
		})
	}
</script>
<script lang="ts">
	export default {
		data() {
			return {
				// q: {}
				// ok
				q: Object,
				value: 1
			}
		},
		onLoad(d) {
			// 文档中 parkCar 参数是假的，测试了 没parkCar 也能 code === 200
			// d.id:number,d.plateNo:string,d.type:string
			if (d.type === '汽油车') {

			} else {
				this.value = 0
			}
			this.q = {
				id: d.id,
				plateNo: d.plateNo,
				type: d.type
			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
</style>
