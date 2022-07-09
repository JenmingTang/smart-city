<template>
	<view>
		<!-- 
rows: Array(24)
0:
address: "天津市邦仓储威物流"
createBy: null
createTime: null
entryTime: "2021-04-11 17:24:37"
id: 1
lotId: 4
monetary: "5"
outTime: "2021-04-11 18:24:45"
params: {}
parkName: "天津市邦仓储威物流停车场"
parkNo: "1"
plateNumber: "辽B12345"
remark: null
searchValue: null
updateBy: null
updateTime: null 
 -->


		<uni-collapse accordion="true">
			<template v-for="(v,i) in records" :key="i">
				<uni-collapse-item v-if="i===0" :open="true" :show-animation="true" :title="v.parkName">

					<uni-card :title="v.parkName" :extra="`monetary : ${v.monetary}`">
						<uni-title :title="`plateNumber : ${v.plateNumber}`"></uni-title>
						<uni-title :title="`address : ${v.address}`"></uni-title>
						<uni-title :title="`lotId : ${v.lotId}`"></uni-title>
						<uni-title :title="`entryTime : ${v.entryTime}`"></uni-title>
						<uni-title :title="`outTime : ${v.outTime}`"></uni-title>
					</uni-card>
				</uni-collapse-item>
				<uni-collapse-item v-else :show-animation="true" :title="v.parkName">

					<uni-card :title="v.parkName" :extra="`monetary : ${v.monetary}`">
						<uni-title :title="`plateNumber : ${v.plateNumber}`"></uni-title>
						<uni-title :title="`address : ${v.address}`"></uni-title>
						<uni-title :title="`lotId : ${v.lotId}`"></uni-title>
						<uni-title :title="`entryTime : ${v.entryTime}`"></uni-title>
						<uni-title :title="`outTime : ${v.outTime}`"></uni-title>
					</uni-card>
				</uni-collapse-item>
			</template>
		</uni-collapse>
	</view>
</template>

<script lang="ts" setup>
	import {
		ref
	} from "vue"
	const records = ref([])
	getApp().globalData.$http(d => {
		// console.log(d);
		records.value = d.rows
	}, '/prod-api/api/park/lot/record/list')
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
