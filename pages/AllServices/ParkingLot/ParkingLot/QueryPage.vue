<template>
	<view>
		<uni-collapse accordion="true">
			<template v-for="(v,i) in parkingLots" :key="i">
				<uni-collapse-item v-if="i===0" :open="true" :show-animation="true" :title="v.parkName">
					<uni-card @tap="toParkingLotDetail(v)" :cover="`${baseURL}${v.imgUrl}`">
						<template v-slot:actions>
							<view class="card-actions">
								<!-- 
								 /*
								 rows:
								 	0:
								 		address: "大连市国际大厦F1楼"
								 		allPark: "90" 总停车位
								 		createBy: null
								 		createTime: null
								 		distance: "20" 距离（米
								 		id: 1
								 		imgUrl: "/prod-api/profile/upload/image/2021/11/22/0e57fd23-1287-4bb5-a3e8-1222ab0ead40.jpg"
								 		open: "Y"
								 		params: {}
								 		parkName: "国际大厦停车场"
								 		priceCaps: "30"
								 		rates: "5"
								 		remark: null
								 		searchValue: null
								 		updateBy: null
								 		updateTime: null
								 		vacancy: "30"
								 */
								 -->
								<uni-title :title="`open : ${v.open==='Y'?'opened':'closed'}`"></uni-title>
								<uni-title :title="`distance : ${v.distance}`"></uni-title>
								<uni-title :title="`vacancy : ${v.vacancy}`"></uni-title>
								<uni-title :title="`rates : ${v.rates}`"></uni-title>
								<uni-title :title="`priceCaps : ${v.priceCaps}`"></uni-title>
							</view>
						</template>
					</uni-card>
				</uni-collapse-item>
				<uni-collapse-item v-else :show-animation="true" :title="v.parkName">
					<uni-card @tap="toParkingLotDetail(v)" :cover="`${baseURL}${v.imgUrl}`">
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
				</uni-collapse-item>
			</template>
		</uni-collapse>
	</view>
</template>

<script lang="ts" setup>
	import {
		ref
	} from "vue"
	const baseURL = getApp().globalData.baseURL
	const parkingLots = ref([])
	getApp().globalData.$http(d => {
		parkingLots.value = d.rows.sort((a, b) => (a.distance + 0) - (b.distance + 0))
		// console.log(parkingLots.value);
		// parkingLots.value = d.rows

		// console.log(d);
		/*
		rows:
			0:
				address: "大连市国际大厦F1楼"
				allPark: "90"
				createBy: null
				createTime: null
				distance: "20"
				id: 1
				imgUrl: "/prod-api/profile/upload/image/2021/11/22/0e57fd23-1287-4bb5-a3e8-1222ab0ead40.jpg"
				open: "Y"
				params: {}
				parkName: "国际大厦停车场"
				priceCaps: "30"
				rates: "5"
				remark: null
				searchValue: null
				updateBy: null
				updateTime: null
				vacancy: "30"
		*/
	}, '/prod-api/api/park/lot/list')
	const toParkingLotDetail = v => {
		uni.navigateTo({
			// 第一种
			url: `QueryParkingDetail?id=${v.id}`,
			// url: `QueryParkingDetail`,
			success: res => {},
			fail: () => {},
			complete: () => {}
		});
		//第二种，uni.$on() 66：2指数式增长？？，
		// uni.$once() 且那边第一次需要注册监听器，所以第一次不响应（单单刷新当前页出现，重启应用后操作有，所以不能用）
		// uni.$emit('toParkingLotDetail', v.id)
		//第三种，Vuex、全局等
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
