<template>
	<view>
		<uni-grid :column="4">
			<template v-for="(v,i) in servers" :key="i">
				<uni-grid-item>
					<view @tap="toService(v)" class="service-view">

						<image :src="`${baseURL}${v.imgUrl}`"></image>

						<text class="text">{{v.serviceName}}</text>
					</view>
				</uni-grid-item>
			</template>
			<uni-grid-item>

				<view @tap="toAllServicesPage" class="service-view">

					<image
						:src="`${baseURL}/prod-api/profile/upload/image/2021/05/10/814fc6c4-de48-48a1-95f8-de3e749e348d.png`">
					</image>

					<text class="text">more service</text>
				</view>
			</uni-grid-item>
		</uni-grid>
	</view>
	<!-- 
	 rows: Array(12)
	 0:
	 createBy: null
	 createTime: "2020-10-23 16:17:56"
	 id: 17
	 imgUrl: "/prod-api/profile/upload/image/2021/05/10/814fc6c4-de48-48a1-95f8-de3e749e348d.png"
	 isRecommend: "N"
	 link: "park/index"
	 params: {}
	 pid: 1
	 remark: null
	 searchValue: null
	 serviceDesc: "查询停车场"
	 serviceName: "停哪儿"
	 serviceType: "车主服务"
	 sort: 0
	 updateBy: null
	 updateTime: "2021-05-10 09:20:12"
	 -->
</template>

<script lang="ts" setup>
	import {
		ref
	} from "vue"
	const baseURL = getApp().globalData.baseURL
	const servers = ref([])
	const toAllServicesPage = () => {
		uni.switchTab({
			url: '/pages/AllServices/AllServicesPage'
		})
	}
	const toService = v => {
		switch (v.serviceName) {
			case '停哪儿':
				uni.navigateTo({
					url: '../AllServices/ParkingLot/ParkingLot'
				})

				break;
			case '城市地铁':
				uni.navigateTo({
					url: '../AllServices/cityMetro/CityMetro'
				})

				break;
			default:
				break;
		}
	}
	getApp().globalData.$http(d => {

		// console.log(d);
		servers.value = d.rows.slice(0, 7)
		// servers.value = d.rows
	}, '/prod-api/api/service/list')
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
	.service-view {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		image {
			width: 3rem;
			height: 3rem;
		}
	}
</style>
