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
		name: 'AddPage',
		path: '/pages/AllServices/ParkingLot/vehicle/vehicleMileageInfo/AddPage'
	},
	// {
	// 	name: 'DeletePage',
	// 	path: '/pages/AllServices/ParkingLot/vehicle/vehicleMileageInfo/DeletePage'
	// },
	// {
	// 	name: 'UpdatePage',
	// 	path: '/pages/AllServices/ParkingLot/vehicle/vehicleMileageInfo/UpdatePage'
	// },
	{
		name: 'QueryPage',
		path: '/pages/AllServices/ParkingLot/vehicle/vehicleMileageInfo/QueryPage'
	}, ]
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
