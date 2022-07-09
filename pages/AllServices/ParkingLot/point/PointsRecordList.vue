<template>
	<view>

		<!-- <h1>PointsRecordList</h1> -->
		<!--
		rows: Array(2)
		0:
		changeDate: "2022-07-04 21:14:46"
		createBy: null
		createTime: null
		event: "兑换商品"
		id: 5282
		params: {}
		remark: null
		score: "-300"
		searchValue: null
		type: "扣除"
		updateBy: null
		updateTime: null
		userId: 1116005
		userName: null
		 -->

		<template v-for="(v,i) in integrals" :key="i">
			<uni-card title="" thumbnail="" extra="" note="">
				<uni-title :title="`changeDate : ${v.changeDate}`" align="center"></uni-title>
				<uni-title :title="`event : ${v.event}`" align="center"></uni-title>
				<uni-title :title="`score : ${v.score}`" align="center"></uni-title>
				<uni-title :title="`type : ${v.type}`" align="center"></uni-title>
			</uni-card>
		</template>
	</view>
</template>

<script lang="ts" setup>
	import {
		ref
	} from "vue"
	const integrals = ref([])

	getApp().globalData.$http(d => {
		// console.log(d);
		integrals.value = d.rows
	}, `/prod-api/api/park/score/list`, 'GET', {}, {
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
