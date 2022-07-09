<template>
	<view>
		<!-- 

			data:
			address: "金辉大厦"
			allPark: "90"
			createBy: null
			createTime: null
			distance: "15"
			id: 2
			imgUrl: "/prod-api/profile/upload/image/2021/11/22/4bc2249c-f295-4e76-889f-15044321e77c.jpg"
			open: "Y"
			params: {}
			parkName: "金辉大厦停车场"
			priceCaps: "60"
			rates: "6"
			remark: null
			searchValue: null
			updateBy: null
			updateTime: null
			vacancy: "60" 
 -->
		<uni-card :cover="`${baseURL}${v.imgUrl}`">
			<template v-slot:actions>
				<view class="card-actions">

					<uni-title :title="`open : ${v.open==='Y'?'opened':'closed'}`"></uni-title>
					<uni-title :title="`distance : ${v.distance}`"></uni-title>
					<uni-title :title="`vacancy : ${v.vacancy}`"></uni-title>
					<uni-title :title="`rates : ${v.rates}`"></uni-title>
					<uni-title :title="`priceCaps : ${v.priceCaps}`"></uni-title>
				</view>
			</template>
		</uni-card>
	</view>
</template>

<script lang="ts" setup>
	const baseURL = getApp().globalData.baseURL

	// uni.$on('toParkingLotDetail', d => {
	// 	console.log(d);
	// })
	// uni.$once('toParkingLotDetail', d => {

	// })
</script>
<script lang="ts">
	import {
		ref
	} from "vue"
	const v = ref({})
	export default {
		data() {
			return {

			}
		},
		onLoad(d) {
			// d.id
			// console.log(d);

			getApp().globalData.$http(d1 => {
				console.log(d1);
				v.value = d1.data
				/*
				 */
			}, `/prod-api/api/park/lot/${d.id}`)
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">

</style>
