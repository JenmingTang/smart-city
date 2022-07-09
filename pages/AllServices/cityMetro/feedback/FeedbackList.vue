<template>
	<view>
		<!-- 
		 "rows": [
		         {
		             "searchValue": null,
		             "createBy": null,
		             "createTime": "2022-07-03 23:49:02",
		             "updateBy": null,
		             "updateTime": null,
		             "remark": null,
		             "params": {},
		             "id": 9712,
		             "appType": "park",
		             "title": "title",
		             "content": "content",
		             "userId": 1116005
		         },
		 -->

		<template v-for="(v,i) in feedbacks" :key="i">
			<uni-card @tap="toFeedbackDetail(v)" :title="`title : ${v.title}`" :extra="`createTime : ${v.createTime}`">
				<uni-title title="content:"></uni-title>
				<text>{{v.content}}</text>
			</uni-card>
		</template>
	</view>
</template>

<script lang="ts" setup>
	import {
		ref
	} from "vue"
	const feedbacks = ref([])
	
	const toFeedbackDetail = (v)=>{
		uni.navigateTo({
			url: `./FeedbackDetail?id=${v.id}`,
			success: res => {},
			fail: () => {},
			complete: () => {}
		});
	}
	
	getApp().globalData.$http(d => {
		feedbacks.value = d.rows
	}, `/prod-api/api/metro/feedback/list`, 'GET', {}, {
		Authorization: uni.getStorageSync('user').token
	})
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
