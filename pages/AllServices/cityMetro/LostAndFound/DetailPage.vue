<template>
	<view>
		<!-- 
		data:
		claimPlace: "霍营地铁站服务中心"
		createBy: null
		createTime: "2021-05-10 11:36:06"
		foundPlace: "霍营地铁站"
		foundTime: "2021-05-09"
		id: 6
		imgUrl: "/prod-api/profile/upload/image/2021/05/10/ed997996-d26c-43f3-b169-86330362c90f.png"
		params: {}
		remark: ""
		searchValue: null
		updateBy: null
		updateTime: null
 -->

		<uni-card :cover="`${baseURL}${v1.imgUrl}`">
			<template v-slot:actions>
				<view class="card-actions">
					<uni-title :title="`foundTime : ${v1.foundTime}`"></uni-title>
					<uni-title :title="`foundPlace : ${v1.foundPlace}`"></uni-title>
					<uni-title :title="`claimPlace : ${v1.claimPlace}`"></uni-title>
					<uni-title :title="`createTime : ${v1.createTime}`"></uni-title>
				</view>
			</template>
		</uni-card>
	</view>
</template>

<script lang="ts" setup>
	import {
		ref
	} from "vue"
	const baseURL = getApp().globalData.baseURL
</script>
<script lang="ts">
	export default {
		data() {
			return {
				v1: Object | null
			}
		},
		onLoad(d) {

			getApp().globalData.$http(d1 => {
				// console.log(d1);
				this.v1 = d1.data
			}, `/prod-api/api/metro/found/${d.id}`)
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
</style>
