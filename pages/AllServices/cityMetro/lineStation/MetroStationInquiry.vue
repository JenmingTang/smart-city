<template>
	<view>

		<view class="" style="display: flex;">
			<view class="" style="flex: 1;">

				<uni-easyinput v-model="searchValue" type="text" placeholder="地铁站名" />
			</view>
			<button type="default" @tap="search">search</button>
		</view>
		<!-- 	3.7.2.根据站点名和线路编号查找站点信息 -->

		<button type="default" @tap="toSiteInfo">查看站点信息</button>
		<!-- 
		 data: Array(4)
		 0:
		 currentName: "建国门"
		 lineId: 31
		 lineName: "2号线"
		 nextStep:
		 lines: Array(2)
		 0:
		 lineId: 31
		 lineName: "2号线"
		 [[Prototype]]: Object
		 1: {lineId: 38, lineName: '2号线'}
		 length: 2
		 [[Prototype]]: Array(0)
		 name: "北京站"
		 [[Prototype]]: Object
		 preStep:
		 lines: Array(4)
		 0:
		 lineId: 21
		 lineName: "6号线"
		 [[Prototype]]: Object
		 1:
		 lineId: 24
		 lineName: "6号线"
		 [[Prototype]]: Object
		 2: {lineId: 31, lineName: '2号线'}
		 3: {lineId: 38, lineName: '2号线'}
		 length: 4
		 [[Prototype]]: Array(0)
		 name: "朝阳门"
		 [[Prototype]]: Object
		 reachTime: 9
		 [[Prototype]]: Object
		 -->

		<uni-collapse accordion="true">
			<template v-for="(v,i) in list" :key="i">
				<uni-collapse-item v-if="i===0" :open="true" :show-animation="true"
					:title="`${v.currentName} ${v.lineName}`">



					<uni-card :title="`${v.preStep.name}`" thumbnail="" extra="" note="">

						<template v-for="(v1,i1) in v.preStep.lines" :key="i1">
							<uni-card :title="`${v1.lineName}`" thumbnail="" extra="" note="">
							</uni-card>

						</template>
					</uni-card>

					<view class="" style="display: flex;justify-content: center;">

						<uni-icons type="arrow-down" size="30"></uni-icons>
					</view>
					<view class="" style="background-color: antiquewhite;">

						<uni-card :title="`${v.currentName}`" thumbnail="" :extra="`${v.lineName}`" note="">
						</uni-card>
					</view>

					<view class="" style="display: flex;justify-content: center;">

						<uni-icons type="arrow-down" size="30"></uni-icons>
					</view>
					<uni-card :title="`${v.nextStep.name}`" thumbnail="" extra="" note="">

						<template v-for="(v1,i1) in v.nextStep.lines" :key="i1">
							<uni-card :title="`${v1.lineName}`" thumbnail="" extra="" note="">
							</uni-card>

						</template>
					</uni-card>
				</uni-collapse-item>

				<uni-collapse-item v-else :show-animation="true" :title="`${v.currentName} ${v.lineName}`">



					<uni-card :title="`${v.preStep.name}`" thumbnail="" extra="" note="">

						<template v-for="(v1,i1) in v.preStep.lines" :key="i1">
							<uni-card :title="`${v1.lineName}`" thumbnail="" extra="" note="">
							</uni-card>

						</template>
					</uni-card>

					<view class="" style="display: flex;justify-content: center;">

						<uni-icons type="arrow-down" size="30"></uni-icons>
					</view>
					<view class="" style="background-color: antiquewhite;">

						<uni-card :title="`${v.currentName}`" thumbnail="" :extra="`${v.lineName}`" note="">
						</uni-card>
					</view>

					<view class="" style="display: flex;justify-content: center;">

						<uni-icons type="arrow-down" size="30"></uni-icons>
					</view>
					<uni-card :title="`${v.nextStep.name}`" thumbnail="" extra="" note="">

						<template v-for="(v1,i1) in v.nextStep.lines" :key="i1">
							<uni-card :title="`${v1.lineName}`" thumbnail="" extra="" note="">
							</uni-card>

						</template>
					</uni-card>
				</uni-collapse-item>
			</template>
		</uni-collapse>
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
	const baseURL = getApp().globalData.baseURL
	const searchValue = ref('')
	const list = ref([])
	const toSiteInfo = () => {
		if (list.value.length === 0) {
			uni.showToast({
				title: '未搜索到信息'
			});
		} else {
			store.commit('setSiteInfo',list.value)
			uni.navigateTo({
				url: './SiteInfo',
				success: res => {},
				fail: () => {},
				complete: () => {}
			});
		}
	}
	const search = () => {

		uni.showLoading({
			title: 'loading'
		});
		getApp().globalData.$http(d => {
			if (d.code === 400) {
				uni.showToast({
					title: '请输入搜索内容！'
				});
			}
			if (d.data.length === 0) {

				uni.showToast({
					title: '未查询到任何信息！请尝试更改搜索内容'
				});
			}
			console.log(d);
			list.value = d.data
			uni.hideLoading();
		}, `/prod-api/api/metro/list?currentName=${searchValue.value}`)
	}
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
