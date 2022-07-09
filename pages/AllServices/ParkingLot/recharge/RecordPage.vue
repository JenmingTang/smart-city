<template>
	<view>
	</view>
</template>

<script lang="ts" setup>
	import {
		ref
	} from "vue"
	const records = ref([])
	getApp().globalData.$http(d => {
		// rows []
		// length 0
		// console.log(d);
	}, '/prod-api/api/park/recharge/list', 'GET', {}, {
		Authorization: uni.getStorageSync('user').token
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

</style>
