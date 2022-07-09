<template>
	<view>
		<!-- <h1>EX</h1> -->
		<!-- 
		
		"rows": [
		        {
		            "searchValue": null,
		            "createBy": "1",
		            "createTime": "2021-04-12 09:34:16",
		            "updateBy": "1",
		            "updateTime": "2021-05-08 12:54:04",
		            "remark": null,
		            "params": {},
		            "id": 1,
		            "name": "500元加油卡",
		            "price": 500,
		            "score": 300,
		            "cover": "",
		            "total": 500,
		            "saleQuantity": 100,
		            "description": "<p><br></p>"
		        },
 -->


		<uni-collapse accordion="true">
			<template v-for="(v,i) in products" :key="i">
				<uni-collapse-item v-if="i===0" :open="true" :show-animation="true" :title="v.name">
					<!-- 
					就算是自定义组件，有 emit click，@tap 就能用
					 当前：H5
					 -->
					<uni-card @tap="pointExchange(v)" :title="v.name" :extra="`price : ${v.price}`">
						<uni-title :title="`score : ${v.score}`"></uni-title>
						<uni-title :title="`total : ${v.total}`"></uni-title>
						<uni-title :title="`saleQuantity : ${v.saleQuantity}`"></uni-title>
					</uni-card>
				</uni-collapse-item>
				<uni-collapse-item v-else :show-animation="true" :title="v.name">

					<uni-card @tap="pointExchange(v)" :title="v.name" :extra="`price : ${v.price}`">
						<uni-title :title="`score : ${v.score}`"></uni-title>
						<uni-title :title="`total : ${v.total}`"></uni-title>
						<uni-title :title="`saleQuantity : ${v.saleQuantity}`"></uni-title>
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
	const products = ref([])
	const pointExchange = v => {
		// v.id
		uni.showModal({
			title: 'tip',
			content: '确定兑换？',
			success: function(res) {
				if (res.confirm) {
					// 能拿到
					// console.log(v.id);
					getApp().globalData.$http(d => {
						uni.showToast({
							title: d.msg
						});
					}, `/prod-api/api/park/score/consume/${v.id}`, 'POST', {}, {
						Authorization: uni.getStorageSync('user').token
					})
				} else if (res.cancel) {

				}
			}
		});
	}
	getApp().globalData.$http(d => {
		// console.log(d);
		products.value = d.rows
	}, '/prod-api/api/park/product/list')
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
