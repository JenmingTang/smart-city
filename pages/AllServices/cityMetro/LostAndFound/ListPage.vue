<template>
	<view>
		<!-- 
"data": [
        {
            "publishDate": "2021-05-10",
            "metroFoundList": [
                {
                    "searchValue": null,
                    "createBy": null,
                    "createTime": "2021-05-10 11:36:06",
                    "updateBy": null,
                    "updateTime": null,
                    "remark": "",
                    "params": {},
                    "id": 6,
                    "imgUrl": "/prod-api/profile/upload/image/2021/05/10/ed997996-d26c-43f3-b169-86330362c90f.png",
                    "foundTime": "2021-05-09",
                    "foundPlace": "霍营地铁站",
                    "claimPlace": "霍营地铁站服务中心"
                },
                {
                    "searchValue": null,
                    "createBy": null,
                    "createTime": "2021-05-10 11:36:37",
                    "updateBy": null,
                    "updateTime": null,
                    "remark": "",
                    "params": {},
                    "id": 7,
                    "imgUrl": "/prod-api/profile/upload/image/2021/05/10/41d5125b-2081-4a6c-ae55-55245b3cd4d1.png",
                    "foundTime": "2021-05-10",
                    "foundPlace": "五道口地铁站",
                    "claimPlace": "五道口地铁站服务中心"
                },
                {
                    "searchValue": null,
                    "createBy": null,
                    "createTime": "2021-05-10 11:40:12",
                    "updateBy": null,
                    "updateTime": null,
                    "remark": "",
                    "params": {},
                    "id": 8,
                    "imgUrl": "/prod-api/profile/upload/image/2021/05/10/517e75e9-e1d4-4d6d-b467-09f3e7bcf209.png",
                    "foundTime": "2021-05-10",
                    "foundPlace": "王府井地铁站",
                    "claimPlace": "王府井地铁服务中心"
                }
            ]
        }, 
 -->

		<uni-collapse accordion="true">
			<template v-for="(v,i) in list" :key="i">
				<uni-collapse-item v-if="i===0" :open="true" :show-animation="true"
					:title="`publishDate : ${v.publishDate}`">
					<template v-for="(v1,i1) in v.metroFoundList" :key="i1">
						<view class="" @tap="toDetail(v1)">

							<uni-card :cover="`${baseURL}${v1.imgUrl}`">
								<template v-slot:actions>
									<view class="card-actions">
										<uni-title :title="`foundPlace : ${v1.foundPlace}`"></uni-title>
										<uni-title :title="`claimPlace : ${v1.claimPlace}`"></uni-title>
										<uni-title :title="`createTime : ${v1.createTime}`"></uni-title>
									</view>
								</template>
							</uni-card>
						</view>
					</template>
				</uni-collapse-item>
				<uni-collapse-item v-else :show-animation="true" :title="`publishDate : ${v.publishDate}`">
					<template v-for="(v1,i1) in v.metroFoundList" :key="i1">
						<view class="" @tap="toDetail(v1)">

							<uni-card :cover="`${baseURL}${v1.imgUrl}`">
								<template v-slot:actions>
									<view class="card-actions">
										<uni-title :title="`foundPlace : ${v1.foundPlace}`"></uni-title>
										<uni-title :title="`claimPlace : ${v1.claimPlace}`"></uni-title>
										<uni-title :title="`createTime : ${v1.createTime}`"></uni-title>
									</view>
								</template>
							</uni-card>
						</view>
					</template>
				</uni-collapse-item>
			</template>
		</uni-collapse>
	</view>
</template>

<script lang="ts" setup>
	import {
		ref
	} from "vue"
	const list = ref([])
	const baseURL = getApp().globalData.baseURL
	const toDetail = v1 => {
		uni.navigateTo({
			url: `./DetailPage?id=${v1.id}`,
			success: res => {},
			fail: () => {},
			complete: () => {}
		});
	}
	getApp().globalData.$http(d => {
		list.value = d.data
		console.log(d.data);
	}, `/prod-api/api/metro/found/list`)
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
