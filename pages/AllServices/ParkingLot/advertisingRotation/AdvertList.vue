<template>
	<view>
		<!-- 
		"rows": [
		        {
		            "searchValue": null,
		            "createBy": "admin",
		            "createTime": "2021-05-05 12:32:21",
		            "updateBy": null,
		            "updateTime": null,
		            "remark": null,
		            "params": {},
		            "id": 18,
		            "appType": "park",
		            "status": "1",
		            "sort": 1,
		            "advTitle": "新闻",
		            "advImg": "/prod-api/profile/upload/image/2021/05/05/73143911-6ae6-4423-aab5-545f619dc7ac.jpeg",
		            "servModule": "news",
		            "targetId": null,
		            "type": "2"
		        },
 -->
		<!-- 
 default
	interval:5000
	circular 圆形的、环形的、循环的
  -->
		<swiper class="swiper" :circular="true" :indicator-dots="true" :autoplay="true" :interval="3000"
			:duration="500">
			<template v-for="(v,i) in adverts" :key="i">
				<swiper-item>
					<view class="swiper-item">
						<image :src="`${baseURL}${v.advImg}`" mode="widthFix"></image>
					</view>
				</swiper-item>
			</template>
		</swiper>
	</view>
</template>

<script lang="ts" setup>
	import {
		ref
	} from "vue"

	const props = defineProps < {
		// flagURLPark?: string
		flagURLPark: string
	} > ()
	const baseURL = getApp().globalData.baseURL
	const adverts = ref([])
	getApp().globalData.$http(d => {
		// console.log(d);
		adverts.value = d.rows
	}, `/prod-api/api/${props.flagURLPark}/rotation/list`)
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
	.swiper-item {
		display: flex;
		justify-content: center;
	}
</style>
