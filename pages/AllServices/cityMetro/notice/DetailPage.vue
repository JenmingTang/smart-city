<template>
	<view>
		<!-- 
		 data:
		 content: "<p><span style=\"color: rgb(59, 59, 59);\">北京地铁运营一分公司为深入贯彻地铁公司安全运营理念，降低设备使用故障率、提高各岗位应对突发事件的能力，更好地为乘客提供优质服务。2021 年 3 月 16 日公司安全质量部会同 6 号线乘务中心于五里桥车辆段内开展公司级手摇道岔演练。</span></p>"
		 createBy: "admin"
		 createTime: "2021-05-08 19:55:28"
		 id: 8
		 params: {}
		 remark: null
		 searchValue: null
		 title: "夯实安全基础，提高处置能力"
		 updateBy: ""
		 updateTime: null
		 -->
		<uni-card :title="data.title" thumbnail="" :extra="data.createTime" note="">
			<rich-text :nodes="data.content"></rich-text>
		</uni-card>
	</view>
</template>

<script lang="ts" setup>
	import {
		ref
	} from "vue"
</script>
<script lang="ts">
	export default {
		data() {
			return {
				// 有时报错，说未定义，其实是请求走得慢，先拿这里了
				// 现在给个默认值，使其浏览器不报错
				data: {
					title: ''
				}
			}
		},
		onLoad(d) {
			getApp().globalData.$http(d => {
				// console.log(d);
				/*
				"<p><span style="color: rgb(59, 59, 59);">北京地铁运营一分公司为深入贯彻地铁公司安全运营理念，降低设备使用故障率、提高各岗位应对突发事件的能力，更好地为乘客提供优质服务。2021 年 3 月 16 日公司安全质量部会同 6 号线乘务中心于五里桥车辆段内开展公司级手摇道岔演练。</span></p>"
				*/ 
				this.data = d.data
			}, `/prod-api/api/metro/notice/${d.id}`)
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
</style>
