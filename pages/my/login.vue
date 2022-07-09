<template>
	<view>
		<!-- <h1>{{data}}</h1> -->

		<uni-easyinput v-model="username" placeholder="username" />
		<uni-easyinput v-model="password" placeholder="password" type="password" />
		<button type="default" @tap='login'>login</button>
	</view>
</template>

<script lang="ts" setup>
	import {
		ref
	} from "vue"
	const username = ref('')
	const password = ref('')
	const login = () => {
		// ok
		// console.log(`${username.value}`);

		getApp().globalData.$http(d => {
			// 这不打印？？
			// console.log('token : ', d.token);
			// console.log("d: ",d);
			uni.showToast({
				title: d.msg
			});
			if (d.code == 200) {
				uni.setStorageSync('user', {
					token: d.token
				})
				setTimeout(() => {
					uni.switchTab({
						url: '../home/home'
					})
				}, 500);
			}
		}, '/prod-api/api/login', 'POST', {
			"username": username.value,
			"password": password.value
		})
	}

	// vue3 原生全局不得，因为 setup 没有 this，uniapp 这个的
	// let data: String = getApp().globalData.name


	// 刷新页面这里有走一次
	// getApp().globalData.$http(d => {
	// 	console.log(d);
	// }, 'prod-api/press/press/list')




	// onMounted(() => {
	// 	this.$http(d => {
	// 		console.log(d);
	// 	}, 'prod-api/press/press/list')

	// })
</script>
<script lang="ts">
	export default {
		data() {
			return {

			}
		},
		mounted() {
			// data not define, setup 在实例之前，理应可以啊？？
			// data = 'tang'
			// this.$http(d => {
			// 	console.log(d);
			// }, 'prod-api/press/press/list')
		},
		methods: {

		}
	}
</script>

<style>

</style>
