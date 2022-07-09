<template>
	<view>
		<!-- 
		data: Array(5)
		0:
		appType: "park"
		createBy: null
		createTime: null
		id: 13
		name: "国内新闻"
		params: {}
		parentId: null
		remark: null
		searchValue: null
		sort: 1
		status: "Y"
		updateBy: null
		updateTime: null
		 -->

		<!-- 
		  使用竖向滚动时，需要给 <scroll-view> 一个固定高度，通过 css 设置 height；使用横向滚动时，需要给<scroll-view>添加white-space: nowrap;样式。
		  -->
		<scroll-view style=" white-space: nowrap;" class="" :scroll-x="true" scroll-left="120">
			<template v-for="(v,i) in newsArr" :key="i">
				<!-- inline:宽高、padding、margin 不可设置 -->
				<!-- 可变长 any 类型 -->
				<text @tap="emit('myTap',v)" style="margin: 10px 20px;display: inline-block;">{{v.name}}</text>
			</template>
		</scroll-view>
	</view>
</template>

<script lang="ts" setup>
	import {
		ref
	} from "vue"
	const newsArr = ref([])
	const emit = defineEmits(['myTap'])
	const props = defineProps < {
		// flagURLPark?: string
		flagURLPark: string
	} > ()
	// 拿出 props
	// console.log('props : ',props.flagURLPark);
	getApp().globalData.$http(d => {
		// console.log(d);
		newsArr.value = d.data
	}, `/prod-api/api/${props.flagURLPark}/press/category/list`)
</script>
<script lang="ts">
	export default {
		data() {
			return {

			}
		},
		mounted() {
			// ok
			// console.log('this.props.flagURLPark : ', this.props.flagURLPark);
		},
		onLoad() {},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
</style>
