<template>
	<view>
		<!-- 
		已添加：
			桂B888888
		 
		 
		 -->
		<!-- <h1>myVehicleInfo add</h1> -->

		<uni-easyinput v-model="plateNo" placeholder="车牌号" />
		<!-- 车辆类型就两 汽油车 新能源车 -->
		<!-- 
		value: 0,
						range: [{"value": 0,"text": "篮球"	},{"value": 1,"text": "足球"},{"value": 2,"text": "游泳"}]
		change(e){
						console.log('e:',e);
					}
				 
		 -->
		<!-- 起名 type、value 都得-->
		<uni-data-checkbox v-model="value" :localdata="range"></uni-data-checkbox>
		<button type="default" @tap='add'>add</button>
		<!-- 起名 type、value 都得-->
		<!-- <h1>{{type}}</h1> -->
	</view>
</template>

<script lang="ts" setup>
	import {
		ref
	} from "vue"
	const plateNo = ref('')
	const value = ref(1)
	const range = [{
		// 必须为数字类型
		"value": 0,
		"text": "新能源车"
	}, {
		"value": 1,
		"text": "汽油车"
	}]

	const add = () => {
		// ok
		// console.log(range[value.value]['text']);
		getApp().globalData.$http(d => {
			uni.showToast({
				title: d.msg
			});
			if (d.code === 200) {
				plateNo.value = ''
				value.value = 1
			}
		}, '/prod-api/api/park/car', 'POST', {
			plateNo: plateNo.value,
			type: range[value.value]['text']
		}, {
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
