<template>
	<view>
		<!-- 
		data:
		appType: "park"
		content: "唐大大是无敌的"
		createBy: null
		createTime: "2022-07-03 23:57:24"
		id: 9713
		params: {}
		remark: null
		searchValue: null
		title: "唐大大"
		updateBy: null
		updateTime: null
		userId: 1116005 
		 -->
		 <uni-card :title="`title : ${v.title}`" :extra="`createTime : ${v.createTime}`">
		 	<uni-title title="content:"></uni-title>
		 	<text>{{v.content}}</text>
		 </uni-card>
	</view>
</template>

<script lang="ts" setup>
</script>
<script lang="ts">
	export default {
		data() {
			return {
				v:{}
			}
		},
		onLoad(d) {
			// console.log(d);
			getApp().globalData.$http(d1 => {
				// console.log(d1);
				this.v = d1.data
			}, `/prod-api/api/metro/feedback/${d.id}`, 'GET', {}, {
				Authorization: uni.getStorageSync('user').token
			})
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
</style>
