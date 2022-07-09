<template>
	<view>
		<!-- 积分交换 -->
		<!-- <h1>PointExchange</h1> -->
	</view>
</template>

<script lang="ts" setup>
</script>
<script lang="ts">
	export default {
		data() {
			return {

			}
		},
		onLoad() {
			uni.redirectTo({
				url: '../goods/ExchangeGoodsList',
				success: res => {},
				fail: () => {},
				complete: () => {}
			});
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">

</style>
