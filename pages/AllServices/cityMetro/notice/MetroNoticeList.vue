<template>
	<view>
		<!-- 
		 "rows": [
		         {
		             "searchValue": null,
		             "createBy": "admin",
		             "createTime": "2021-05-08 19:55:28",
		             "updateBy": "",
		             "updateTime": null,
		             "remark": null,
		             "params": {},
		             "id": 8,
		             "title": "夯实安全基础，提高处置能力",
		             "content": "<p><span style=\"color: rgb(59, 59, 59);\">北京地铁运营一分公司为深入贯彻地铁公司安全运营理念，降低设备使用故障率、提高各岗位应对突发事件的能力，更好地为乘客提供优质服务。2021 年 3 月 16 日公司安全质量部会同 6 号线乘务中心于五里桥车辆段内开展公司级手摇道岔演练。</span></p>"
		         },
		-->
		<uni-list>
			<template v-for="(v,i) in noticeList" :key="i">
				<view class="" style="margin: 10px 20px;">

					<uni-list-item :to="`./DetailPage?id=${v.id}`" :clickable="true" :showArrow="true" :title="v.title"
						:rightText="v.createTime">
					</uni-list-item>
					<!-- <text>{{v.child.content}}</text> -->
					<!-- <rich-text :nodes="v.child.content"></rich-text> -->
					<!-- noticeListDetail[i].content 不得
					 noticeListDetail.pop().title 不得 未定义，其实有
					 -->
					<!-- <uni-title :title="noticeListDetail.pop().content"></uni-title> -->
					<!-- <rich-text :nodes="noticeListDetail[i]"></rich-text> -->
				</view>
			</template>
		</uni-list>
	</view>
</template>

<script lang="ts" setup>
	// setup 比渲染走得早
	import {
		ref
	} from "vue"
	const noticeList = ref([])
	const noticeListDetail = ref([])
	getApp().globalData.$http(d => {
		// console.log(d);
		noticeList.value = d.rows
		d.rows.forEach((v, i, arr) => {
			getApp().globalData.$http(d => {
				// noticeList.value.push(d.data)
				// 
				noticeList.value[i].child = d.data
				// noticeListDetail.value.push(d.data)
			}, `/prod-api/api/metro/notice/${v.id}`)
		})
		// 可以，对应得 detail 当作它的孩子存着
		// 但是渲染那挂不上去，一直未定义
		// console.log('noticeList.value : ', noticeList.value);
	}, `/prod-api/api/metro/notice/list`)

	// ok
	// console.log('noticeListDetail.value : ', noticeListDetail.value);
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
