<template>
	<view>
				<!-- <button type="default">AdvertList</button> -->
				<!-- 在新闻页 -->
		<!-- 		
		<uni-section title="广告轮播" sub-title="" type="line">

			<navigator url="./advertisingRotation/AdvertList">
				<button type="default">广告</button>
			</navigator>
		</uni-section>
		 -->
		<uni-section title="意见反馈" sub-title="" type="line">

			<navigator url="./feedback/AddFeedback">
				<!-- <button type="default">AddFeedback</button> -->
				<button type="default">添加反馈</button>
			</navigator>
			<navigator url="./feedback/FeedbackList">
				<!-- <button type="default">FeedbackList</button> -->
				<button type="default">反馈列表</button>
			</navigator>
		</uni-section>
		<uni-section title="地铁资讯" sub-title="" type="line">

			<navigator url="./metroInfo/NewsPage">
				<!-- <button type="default">NewsPage</button> -->
				<button type="default">新闻</button>
			</navigator>
		</uni-section>
		<uni-section title="乘车码" sub-title="" type="line">

			<navigator url="./carCode/ReceivePage">
				<!-- <button type="default">ReceivePage</button> -->
				<button type="default">领取乘车卡</button>
			</navigator>
			<navigator url="./carCode/CarCode">
				<!-- <button type="default">CarCode</button> -->
				<button type="default">查看乘车卡</button>
			</navigator>
		</uni-section>
		<uni-section title="公告" sub-title="" type="line">

			<navigator url="./notice/MetroNoticeList">
				<!-- <button type="default">MetroNoticeList</button> -->
				<button type="default">地铁公告</button>
			</navigator>
			<navigator url="./notice/MetroStatement">
				<!-- <button type="default">MetroStatement</button> -->
				<button type="default">地铁声明</button>
			</navigator>
		</uni-section>
		<uni-section title="失物招领" sub-title="" type="line">

			<navigator url="./LostAndFound/ListPage">
				<!-- <button type="default">ListPage</button> -->
				<button type="default">失物招领处</button>
			</navigator>
		</uni-section>
		<uni-section title="线路站点" sub-title="" type="line">

			<navigator url="./lineStation/GeneralDrawingOfUrbanSubway">
				<!-- <button type="default">GeneralDrawingOfUrbanSubway</button> -->
				<button type="default">北京地铁总览</button>
			</navigator>
			<navigator url="./lineStation/SiteInfoList">
				<!-- <button type="default">SiteInfoList</button> -->
				<button type="default">站点信息</button>
			</navigator>
			<navigator url="./lineStation/CityAllLine">
				<!-- <button type="default">CityAllLine</button> -->
				<button type="default">线路信息</button>
			</navigator>
			<navigator url="./lineStation/MetroStationInquiry">
				<!-- <button type="default">MetroStationInquiry</button> -->
				<button type="default">地铁站查询</button>
			</navigator>
		</uni-section>
	</view>
</template>

<script lang="ts" setup>
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
