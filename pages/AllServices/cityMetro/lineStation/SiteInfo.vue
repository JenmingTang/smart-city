<template>
	<view>
		<!-- crowd 拥挤度 stepInfo 站点信息-->
		<uni-section :title="`经过${obj.stepInfo.name}站点的线路列表`" :sub-title="`拥挤度 : ${obj.stepInfo.crowd}`" type="line">

		</uni-section>
		<!-- obj.lineList 经过该站点（传进来数据的站点，如建国门）的线路列表 
		就是交叉上了建国门站点
		-->
		<!-- 
		 0:
		 cityId: 1
		 cityName: "北京市"
		 createBy: null
		 createTime: "2018-07-23 02:28:40"
		 end: "积水潭"
		 endTime: "22:20"
		 first: "内环(积水潭)"
		 id: 31
		 name: "2号线"
		 params: {}
		 remark: null
		 searchValue: null
		 startTime: "05:10"
		 updateBy: null
		 updateTime: "2021-04-05 14:53:43"
		 -->
		<template v-for="(v,i) in obj.lineList" :key="i">
			<uni-card :title="`${v.name}`" thumbnail="" :extra="`cityName : ${v.cityName}`" note="">
				<uni-title :title="`first : ${v.first}`" align="center"></uni-title>
				<uni-title :title="`end : ${v.end}`" align="center"></uni-title>
				<uni-title :title="`startTime : ${v.startTime}`" align="center"></uni-title>
				<uni-title :title="`endTime : ${v.endTime}`" align="center"></uni-title>

				<!-- 	
				<uni-title :title="`createTime : ${v.createTime}`" align="center"></uni-title>
				<uni-title :title="`updateTime : ${v.updateTime}`" align="center"></uni-title>
			 -->
			</uni-card>
		</template>
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
	// 有时报未定义异常，因为请求是异步的，渲染走时没拿到数据就报了
	const obj = ref({
		stepInfo: {
			name: ''
		}
	})

	// ok
	// console.log(store.getters.getSiteInfo);
	const data = store.getters.getSiteInfo
	// console.log('store.getters.getSiteInfo : ', store.getters.getSiteInfo);
	// 不改变源数组，返回新数组，arr 源数组
	const newData = data.map((v, i, arr) => {
		return v.lineId
	})
	// console.log('newData : ', newData);
	// console.log('newData.toString() : ', newData.toString());
	getApp().globalData.$http(d => {
		// object
		// console.log('dada : ', d);
		obj.value = d.data
		//拿到对象的字段名
		// console.log(Object.keys(obj.value));
	}, `/prod-api/api/metro/line?name=${data[0].currentName}&lineIds=${newData.toString()}`)
	// }, `/prod-api/api/metro/line?name=建国门&lineIds=31,33,35,38`)
</script>
<script lang="ts">
	export default {
		data() {
			return {}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
</style>
