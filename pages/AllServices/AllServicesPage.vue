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
		</uni-grid>
	</view>
</template>

<script lang="ts" setup>
	import {
		ref
	} from "vue"
	const baseURL = getApp().globalData.baseURL
	const servers = ref([])
	const toService = (v) => {
		switch (v.serviceName) {
			case '停哪儿':
				uni.navigateTo({
					url: 'ParkingLot/ParkingLot'
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
		// servers.value = d.rows.slice(0, 7)
		servers.value = d.rows
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
