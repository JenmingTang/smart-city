<template>
	<view>
		<!-- General drawing of urban subway 城市地铁总图 -->
		<!-- 
		 data:
		 code: 131
		 createBy: null
		 createTime: "2018-07-23 02:15:27"
		 id: 1
		 imgUrl: "/prod-api/profile/upload/image/2021/05/08/554f2392-1e1c-4449-b95c-327a5f7ec91d.jpeg"
		 name: "北京市"
		 params: {}
		 remark: null
		 searchValue: null
		 updateBy: null
		 updateTime: "2021-05-08 12:34:06"
		 
		 Object
		 -->
		<uni-title :title="data.name" align="center"></uni-title>
		<movable-area :scale-area="true">
			<!-- scale	Boolean	false	
			是否支持双指缩放，
			默认缩放手势生效区域是在movable-view内
			 movable-view 很小，那就改 movable-area 的 scale
			 -->
			<movable-view x="200" y="150" direction="all" :inertia="true" :out-of-bounds="true" :scale="true"
				scale-min="0.5" scale-max="10" :scale-value="scale_">
				<!-- 必须套一层，不然图片显示不正常 -->
				<view class="">
					<image :src="`${baseURL}${data.imgUrl}`" mode=""></image>
				</view>


			</movable-view>
		</movable-area>
		<view class="" style="display: flex;">
			<button type="default" style="flex: 1;" @tap="changeScale(0.5)">+</button>
			<button type="default" style="flex: 1;" @tap="changeScale(-0.5)">-</button>
		</view>
		<!-- <h1>{{scale_}}</h1> -->
		<!-- 垂直 y 轴 -->


	</view>
</template>

<script lang="ts" setup>
	import {
		ref
	} from "vue"
	const baseURL = getApp().globalData.baseURL
	const data = ref({})
	const scale_ = ref(5)

	const changeScale = v => {
		// 不能改变其值，只能重新赋值
		scale_.value += (v)
	}

	uni.showLoading({
		title: 'loading'
	});
	getApp().globalData.$http(d => {
		// console.log(d);
		data.value = d.data
		uni.hideLoading();
	}, `/prod-api/api/metro/city`)
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
	movable-view {
		display: flex;
		align-items: center;
		justify-content: center;
		// 值大了看不到边边
		height: 1px;

		width: 1px;
		// background-color: #007AFF;
		// color: #fff;
	}

	movable-area {
		// height: 300px;
		height: 600px;
		width: 100%;
		background-color: #D8D8D8;
		overflow: hidden;
	}

	// .max {
	// 	width:500rpx;
	// 	height: 500rpx;
	// }
</style>
