<template>
	<!-- <view class="container"></view> -->
	<view>
	</view>
</template>

<script lang="ts" setup>
	import {
		onMounted
	} from "vue"
	onMounted(() => {
		// if(uni.getStorageSync('user')==''){
		if (uni.getStorageSync('user') != '') {
			// uni.redirectTo({
			// 	url: 'guide',
			// 	success: res => {},
			// 	fail: () => {},
			// 	complete: () => {}
			// });
			uni.switchTab({
				url: '../home/home'
			})
		} else {
			uni.redirectTo({
				url: '../my/login',
				success: res => {},
				fail: () => {},
				complete: () => {}
			});
		}
	})
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
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>
