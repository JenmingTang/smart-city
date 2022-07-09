<template>
	<view>

		<!-- <h1>ListOfPointsGrades</h1> -->
		<!-- 
		 rows: Array(3)
		 0:
		 createBy: null
		 createTime: null
		 id: 2
		 name: "白金"
		 params: {}
		 remark: null
		 score: 2000
		 searchValue: null
		 updateBy: null
		 updateTime: null
		 -->
		<template v-for="(v,i) in levels" :key="i">

			<view class="" style="display: flex;">
				<view class="" style="flex: 1;">
					<uni-title :title="`name : ${v.name}`" align="center"></uni-title>
				</view>
				<view class="" style="flex: 1;">
					<uni-title :title="`score : ${v.score}`" align="center"></uni-title>
				</view>
			</view>
		</template>
	</view>
</template>

<script lang="ts" setup>
	import {
		ref
	} from "vue"
	const levels = ref([])

	getApp().globalData.$http(d => {
		// console.log(d);
		if (d.msg === '请求访问：/api/park/score/level/list，认证失败，无法访问系统资源') {
			uni.showToast({
				title: '请重新登录'
			});

		}
		levels.value = d.rows
	}, `/prod-api/api/park/score/level/list`, 'GET', {}, {
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
