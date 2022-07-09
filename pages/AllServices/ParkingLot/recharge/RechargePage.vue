<template>
	<view>
		<uni-easyinput v-model="money" placeholder="money" type="digit" />
		<uni-data-checkbox v-model="payType" :localdata="range"></uni-data-checkbox>
		<button type="default" @tap="submit">submit</button>
	</view>
</template>

<script lang="ts" setup>
	import {
		ref
	} from "vue"
	// 0.0 渲染为 0，0.1 为0.1
	const money = ref(0.0)
	const payType = ref(0)
	const range = [{
		"value": 0,
		"text": "微信"
	}, {
		"value": 1,
		"text": "支付宝"
	}, {
		"value": 2,
		"text": "电子支付"
	}]
	const submit = () => {
		// 死循环,ok : payType.value
		// console.log(payType);
		console.log(parseInt(money.value));
		getApp().globalData.$http(d => {
			uni.showToast({
				title: d.msg
			});
			console.log(d);
		}, '/prod-api/api/park/recharge/pay', 'POST', {

			// =======================
			/*
			code:500
			Optional long parameter 'money' is present but cannot be translated into a null value due to being declared as a primitive type. 
			Consider declaring it as object wrapper for the corresponding primitive type.
			存在可选长参数“money”，但由于被声明为基元类型（java 的 long，非 Long，因而无法接受 null，因为此参数是可选的）
			，因此无法将其转换为null值。
			考虑将其声明为相应基元类型的对象包装器。
			
			
				大意是说 如果参数是非必须的，则会赋值为null，因此参数应该是一个object，它才能接受这个null值。
			而上面代码参数id 的类型 为 long，它接受不了null值。
			
			解决办法：
				后端：
					@RequestParam(value = "from", required = false) long money
					改为
					@RequestParam(value = "from", required = false) Long money
				将long类型换成对象类型Long，问题解决。
			*/
			// =======================

			money: money.value,
			// patType: range[payType.value]['text']
			patType: range[payType.value].text
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
