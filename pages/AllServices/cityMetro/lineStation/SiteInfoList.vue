<template>
	<view>


		<view class="" style="display: flex;">
			<view class="" style="flex: 1;">

				<uni-easyinput v-model="searchValue" type="text" placeholder="地铁站名" />
			</view>
			<button type="default" @tap="search">search</button>
		</view>

		<!-- 
			 "data": [
			         {
			             "name": "奥体中心",
			             "lines": [
			                 {
			                     "lineId": 7,
			                     "lineName": "8号线"
			                 },
			                 {
			                     "lineId": 27,
			                     "lineName": "8号线"
			                 }
			             ]
			         },
			 -->

		<uni-collapse accordion="true">
			<template v-for="(v,i) in list" :key="i">
				<uni-collapse-item v-if="i===0" :open="true" :show-animation="true" :title="`name : ${v.name}`">
					<template v-for="(v1,i1) in v.lines" :key="i1">
						<view class="" @tap="toDetail(v1)">
							<uni-card :title="v1.lineName" :extra="`lineId : ${v1.lineId}`" note=" ">
							</uni-card>
						</view>
					</template>
					<button type="default" @tap="toSiteInfo(v)">查看{{v.name}}前后站点信息</button>
				</uni-collapse-item>
				<uni-collapse-item v-else :show-animation="true" :title="`name : ${v.name}`">
					<template v-for="(v1,i1) in v.lines" :key="i1">
						<view class="" @tap="toDetail(v1)">
							<uni-card :title="v1.lineName" :extra="`lineId : ${v1.lineId}`" note=" ">
							</uni-card>
						</view>
					</template>
					<button type="default" @tap="toSiteInfo(v)">查看{{v.name}}前后站点信息</button>
				</uni-collapse-item>
			</template>
		</uni-collapse>
	</view>
</template>

<script lang="ts" setup>
	import {
		ref
	} from "vue"
	import {
		useStore
	} from "vuex"
	const store = useStore()
	const baseURL = getApp().globalData.baseURL
	const searchValue = ref('')
	const list = ref([])
	const toDetail = v => {
		uni.navigateTo({
			url: `./MetroStationDetail?lineId=${v.lineId}`,
			success: res => {},
			fail: () => {},
			complete: () => {}
		});
	}
	const toSiteInfo = v => {
		// console.log('aaaaaaaaaaa');
		// v.name 建国门
		const newV = v.lines.map((v1, i, arr) => {
			v1.currentName = v.name
			return v1
		})
		//ok
		// console.log("newV : ",newV);
		store.commit('setSiteInfo', newV)
		uni.navigateTo({
			url: './SiteInfo',
			success: res => {},
			fail: () => {},
			complete: () => {}
		});
	}
	const search = () => {
		// uni.startPullDownRefresh({
		// 	success() {

		// 	}
		// })
		uni.showLoading({
			title: 'loading'
		});
		getApp().globalData.$http(d => {
			// console.log('list : ', d);
			list.value = d.data
			// uni.stopPullDownRefresh()
			uni.hideLoading();
			// data.value = d.data
			// 搜索不到返回 0，后端处理了
		}, `/prod-api/api/metro/step/list?name=${searchValue.value}`)
	}
</script>
<script lang="ts">
	export default {
		data() {
			return {}
		},

		onPullDownRefresh() {
			// setTimeout(function() {
			// 	uni.stopPullDownRefresh()
			// }, 2000);
			// getApp().globalData.$http(d => {
			// 	// console.log(d);
			// 	this.list.value = d.data
			// 	uni.stopPullDownRefresh()
			// 	// data.value = d.data
			// 	// 搜索不到返回 0，后端处理了
			// }, `/prod-api/api/metro/step/list?name=${this.searchValue.value}`)
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
</style>
