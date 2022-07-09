<template>
	<view>
		<template v-for="(v,i) in pages" :key="i">
			<navigator :url="v.path">
				<button type="default">{{v.name}}</button>
			</navigator>

		</template>
	</view>
</template>

<script lang="ts" setup>
	const pages = [{
			// name: 'InfoCorrection',
			name: '信息纠错',
			path: '/pages/AllServices/ParkingLot/InfoCorrection'
		},
		{
			// name: 'QueryPage',
			name: '停车场列表',
			path: '/pages/AllServices/ParkingLot/ParkingLot/QueryPage'
		},
		// 只能由其他页面调用
		// {
		// 	name: 'QueryParkingDetail',
		// 	path: '/pages/AllServices/ParkingLot/ParkingLot/QueryParkingDetail'
		// },
		{
			// name: 'QueryParkingRecords',
			name: '停车记录',
			path: '/pages/AllServices/ParkingLot/ParkingLot/QueryParkingRecords'
		},
		// 停车场充值关闭，apis 内部错误，详情看 recharge/RechargePage 页
		// {
		// 	name: 'RecordPage',
		// 	path: '/pages/AllServices/ParkingLot/recharge/RecordPage'
		// },
		// {
		// 	name: 'RechargePage',
		// 	path: '/pages/AllServices/ParkingLot/recharge/RechargePage'
		// },
		// 停车场充值关闭，apis 内部错误，详情看 recharge/RechargePage 页

		{
			// name: 'ExchangeGoodsList',
			name: '换购商品',
			path: '/pages/AllServices/ParkingLot/goods/ExchangeGoodsList'
		},
		// {
		// 	name: 'AdvertList',
		// 	path: '/pages/AllServices/ParkingLot/advertisingRotation/AdvertList'
		// },
		{
			// name: 'AddFeedback',
			name: '添加反馈',
			path: '/pages/AllServices/ParkingLot/feedback/AddFeedback?URL=' + 'park'
		},
		{
			// name: 'FeedbackList',
			name: '反馈列表',
			path: '/pages/AllServices/ParkingLot/feedback/FeedbackList?URL=' + 'park'
		},
		{
			// name: 'NewsPage',
			name: '新闻',
			path: '/pages/AllServices/ParkingLot/news/NewsPage'
		},
		// {
		// 	name: 'NewsClassification',
		// 	path: '/pages/AllServices/ParkingLot/news/NewsClassification'
		// },
		{
			// name: 'PointExchange',
			name: '积分兑换',
			path: '/pages/AllServices/ParkingLot/point/PointExchange'
		},
		{
			// name: 'ListOfPointsGrades',
			name: '积分等级',
			path: '/pages/AllServices/ParkingLot/point/ListOfPointsGrades'
		},
		{
			// name: 'PointsRecordList',
			name: '积分记录',
			path: '/pages/AllServices/ParkingLot/point/PointsRecordList'
		},
		{
			// name: 'MyVehicleInfo',
			name: '我的车辆信息',
			path: '/pages/AllServices/ParkingLot/vehicle/myVehicleInfo/MyVehicleInfo'
		},
		{
			// name: 'VehicleMileageInfo',
			name: '车辆里程信息',
			path: '/pages/AllServices/ParkingLot/vehicle/vehicleMileageInfo/VehicleMileageInfo'
		},
		{
			// name: 'ApplyMoveCar',
			name: '申请挪车',
			path: '/pages/AllServices/ParkingLot/vehicle/ApplyMoveCar'
		},
		{
			// name: 'MoveCarHistory',
			name: '挪车历史',
			path: '/pages/AllServices/ParkingLot/vehicle/MoveCarHistory'
		},
	]
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
