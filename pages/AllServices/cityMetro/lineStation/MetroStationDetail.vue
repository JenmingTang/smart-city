<template>
	<view>

		<!-- 
"data": {
        "id": 27,
        "name": "8号线",
        "first": "朱辛庄",
        "end": "南锣鼓巷",
        "startTime": "05:10",
        "endTime": "22:10",
        "cityId": 1,
        "stationsNumber": null,
        "km": 60,
        "runStationsName": "西小口",
        "metroStepList": [
            {
                "searchValue": null,
                "createBy": null,
                "createTime": "2018-07-23 02:28:39",
                "updateBy": null,
                "updateTime": "2021-04-05 15:47:09",
                "remark": null,
                "params": {},
                "id": 414,
                "name": "朱辛庄",
                "seq": 0,
                "lineId": 27,
                "firstCh": "Z"
            }, 
 -->
		<uni-card :title="o.name" :extra="`runStationsName : ${o.runStationsName}`" note="">

		</uni-card>
		<template v-for="(v,i) in o.metroStepList" :key="i">
			<view class="" style="display: flex;justify-content: center;">

				<uni-icons type="arrow-down" size="30"></uni-icons>
			</view>
			<uni-card :title="v.name" :extra="`lineId : ${v.lineId}`" note="">

			</uni-card>

		</template>
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
				o: Object | null
			}
		},
		onLoad(d) {

			uni.startPullDownRefresh({
				success() {

				}
			})
			getApp().globalData.$http(d => {
				this.o = d.data
				uni.stopPullDownRefresh()
			}, `/prod-api/api/metro/line/${d.lineId}`)
		},

		onPullDownRefresh() {

			getApp().globalData.$http(d => {
				this.o = d.data
				uni.stopPullDownRefresh()
			}, `/prod-api/api/metro/line/${d.lineId}`)
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
</style>
