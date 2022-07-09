<template>
	<view>
		<!-- 
		 -->
		<AdvertList flagURLPark="metro" />
		<NewsClassification flagURLPark="metro" @my-tap="myTap" />
		<uni-list>
			<template v-for="(v,i) in newsList" :key="i">
				<!-- to link @click showArrow -->
				<uni-list-item :to="`../../ParkingLot/news/NewsDetail?id=${v.id}&flagURLPark=metro`" :clickable="true"
					:showArrow="true" :title="v.title" :note="`commentNum : ${v.commentNum}`"
					:thumb="`${baseURL}${v.cover}`" thumb-size="lg" :rightText="v.publishDate"></uni-list-item>
			</template>
		</uni-list>
	</view>
</template>

<script lang="ts" setup>
	import {
		ref
	} from "vue"
	// 导入组件，绝对相对都得
	import AdvertList from '@/pages/AllServices/ParkingLot/advertisingRotation/AdvertList';
	import NewsClassification from "@/pages/AllServices/ParkingLot/news/NewsClassification.vue"
	const baseURL = getApp().globalData.baseURL
	const newsList = ref([])

	const getNewsListByTypeId = (id: Number) => {
		uni.showLoading({
			title: 'loading...',
			mask: true
		});
		getApp().globalData.$http(d => {
			// console.log(d);
			newsList.value = d.rows
			uni.hideLoading()
		}, `/prod-api/api/metro/press/press/list?type=${id}`)

	}
	// 地铁
	// 新闻 默认
	getNewsListByTypeId(4)

	// 带出新闻分类
	// arr.id 新闻列表类型 id
	// const myTap = (arr) => console.log(arr.id);
	const myTap = arr => {
		// 切换新闻类别
		// ok
		// console.log(arr);
		// ok
		// console.log(arr.id);
		getNewsListByTypeId(arr.id)
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
