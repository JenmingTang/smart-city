<template>
	<view>
		<AdvertList flagURLPark="park" />
		<NewsClassification flagURLPark="park" @my-tap="myTap" />
		<!-- 
		新闻
		rows: Array(10)
		0:
		appType: "park"
		commentNum: 302
		content: "<p>5月10日周一上午9时，中央纪委国家监委网站发布一条重磅消息：江西省政协副主席肖毅涉嫌严重违纪违法，目前正接受中央纪委国家监委纪律审查和监察调查。</p><p>&nbsp;</p><p>肖毅</p><p>资料图肖毅 资料图</p><p>　　肖毅出生于1962年5月，江西赣州人，一直在本省工作，曾任上犹县副县长、县委常委、县委副书记、政法委书记，瑞金市市长、市委书记，赣州市副市长、市委常委，江西省驻京办副主任、主任，江西省政府副秘书长等职。</p><p>&nbsp;</p><p>　　2015年4月，肖毅任抚州市委书记，2018年1月当选江西省政协副主席，继续兼任抚州市委书记，直到今年3月卸任该职务。</p><p>&nbsp;</p><p>　　2003年至2006年，肖毅先后任赣州市副市长、市委常委，兼任瑞金市委书记，时任江西省委常委、赣州市委书记的是潘逸阳。潘于2014年9月被查，2017年4月被判处有期徒刑20年，并处罚金400万。</p><p>&nbsp;</p><p>　　肖毅简历</p><p>&nbsp;</p><p>　　肖毅，男，汉族，1962年5月出生，江西赣州人，1981年9月参加工作，1984年8月加入中国共产党。</p><p>&nbsp;</p><p>　　1981年9月起&nbsp; 崇义县崇义中学教师、公安局干部、政府办秘书、副主任</p><p>&nbsp;</p><p>　　1987年2月&nbsp; 崇义县聂都乡党委副书记（主持工作）、人大主席</p><p>&nbsp;</p><p>　　1988年4月&nbsp; 崇义县政府办副主任</p><p>&nbsp;</p><p>　　1988年7月&nbsp; 崇义县体改办主任兼政府办副主任</p><p>&nbsp;</p><p>　　1990年2月&nbsp; 崇义县经济委员会主任、县委办公室主任</p><p>&nbsp;</p><p>　　1992年10月</p><p>上犹县政府副县长</p><p>&nbsp;</p><p>&nbsp;</p><p>　　1994年1月&nbsp; 上犹县委常委，县政府副县长</p><p>&nbsp;</p><p>　　1995年3月&nbsp; 上犹县委副书记</p><p>&nbsp;</p><p>　　1996年1月&nbsp; 龙南县委副书记兼政法委书记</p><p>&nbsp;</p><p>　　1996年6月&nbsp; 瑞金市委副书记，市政府代市长</p><p>&nbsp;</p><p>　　1997年1月&nbsp; 瑞金市委副书记，市政府市长</p><p>&nbsp;</p><p>　　2001年1月&nbsp; 瑞金市委书记</p><p>&nbsp;</p><p>　　2003年6月&nbsp; 赣州市政府副市长，瑞金市委书记</p><p>&nbsp;</p><p>　　2004年4月&nbsp; 赣州市委常委，瑞金市委书记</p><p>&nbsp;</p><p>　　2006年11月&nbsp; 江西省政府驻北京办事处副主任、党组副书记</p><p>&nbsp;</p><p>　　2007年7月&nbsp; 江西省政府驻北京办事处主任、党组书记</p><p>&nbsp;</p><p>　　2009年8月&nbsp; 江西省政府副秘书长，省政府驻北京办事处主任、党组书记</p><p>&nbsp;</p><p>　　2015年4月&nbsp; 抚州市委书记</p><p>&nbsp;</p><p>　　2018年1月&nbsp; 江西省政协副主席，抚州市委书记</p><p>&nbsp;</p><p>　　2021年3月&nbsp; 江西省政协副主席</p><p>&nbsp;</p><p>　　（简历摘自人民网）</p>"
		cover: "/prod-api/profile/upload/image/2021/05/10/043c0628-d205-4dcf-a167-174a6c8860d2.png"
		createBy: "1"
		createTime: "2021-05-10 10:47:56"
		hot: "N"
		id: 135
		likeNum: 814
		params: {}
		publishDate: "2021-05-10"
		readNum: 3456
		remark: null
		searchValue: null
		status: "Y"
		subTitle: null
		tags: null
		title: "中纪委周一打虎，刚卸任市委书记的副部级官员落马"
		top: "N"
		type: "13"
		updateBy: "1111122"
		updateTime: "2022-06-27 13:50:22" 
		新闻
		 -->
		<uni-list>
			<template v-for="(v,i) in newsList" :key="i">
				<!-- to link @click showArrow -->
				<!-- 绝对路径 不得，导入组件的 -->
				<!-- <uni-list-item :to="`@/pages/AllServices/ParkingLot/news/NewsDetail?id=${v.id}&flagURLPark=park`" -->
				<uni-list-item :to="`./NewsDetail?id=${v.id}&flagURLPark=park`" :clickable="true" :showArrow="true"
					:title="v.title" :note="`commentNum : ${v.commentNum}`" :thumb="`${baseURL}${v.cover}`"
					thumb-size="lg" :rightText="v.publishDate"></uni-list-item>
			</template>
		</uni-list>
	</view>
</template>

<script lang="ts" setup>
	// 导入组件，必须加 ./ 开始，后缀可加可不加
	import AdvertList from '../advertisingRotation/AdvertList';
	import NewsClassification from './NewsClassification';
	import {
		ref
	} from "vue"
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
		}, `/prod-api/api/park/press/press/list?type=${id}`)

	}
	// 国内新闻 默认
	getNewsListByTypeId(13)

	// 带出新闻分类
	// arr.id 新闻列表类型 id
	// const myTap = (arr) => console.log(arr.id);
	const myTap = (arr) => {
		// 切换新闻类别
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
