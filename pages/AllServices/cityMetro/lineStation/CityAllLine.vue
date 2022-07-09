<template>
	<view>
		<!-- 
		 "data": [
		         {
		             "lineId": 1,
		             "lineName": "16号线"
		         },
		 -->
		<uni-list>
			<template v-for="(v,i) in list" :key="i">

				<uni-list-item :to="`./MetroStationDetail?lineId=${v.lineId}`" :rightText="`lineId : ${v.lineId}`"
					:title="`lineName : ${v.lineName}`" :showArrow="true">
				</uni-list-item>
			</template>
		</uni-list>
	</view>
</template>

<script lang="ts" setup>
	import {
		ref
	} from "vue"
	const list = ref([])

		uni.showLoading({
			title: 'loading'
		});
	getApp().globalData.$http(d => {
		list.value = d.data
		uni.hideLoading();
	}, `/prod-api/api/metro/line/list`)
</script>
<script lang="ts">
	export default {
		data() {
			return {}
		},
		onPullDownRefresh() {
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
</style>
