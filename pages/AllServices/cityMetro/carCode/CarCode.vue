<template>
	<view>
		<!-- data:
cardNum: "2022070616345423069"
createBy: null
createTime: "2022-07-06 16:34:55"
id: 2516
idCard: "1234567890123"
params: {}
phonenumber: "12345678901"
remark: null
searchValue: null
updateBy: null
updateTime: null
userId: 1116005
userName: null
		 -->
		<uni-card :title="`userName : ${carCodes.userName}`" :extra="`createTime : ${carCodes.createTime}`">
			<uni-title :title="`idCard : ${carCodes.idCard}`" align="center"></uni-title>
			<uni-title :title="`phonenumber : ${carCodes.phonenumber}`" align="center"></uni-title>
			<button type="default" @tap="logout">logout</button>
		</uni-card>
	</view>
</template>

<script lang="ts" setup>
	import {
		ref
	} from "vue"
	const carCodes = ref({})
	const show = ref(true)
	const logout = () => {

		// carCodes.value.id 直接报错，因为未定义
		// carCodes.value ok 显示 undefined
		// console.log('carCodes.value===undefined : ',carCodes.value.id===undefined);
		// 'undefined'
		// console.log('typeof carCodes.value : ',typeof carCodes.value);
		// 有时要重启下，
		uni.showModal({
			title: 'confirm',
			content: 'confirm delete the car code',
			success: function(res) {
				if (res.confirm) {
					getApp().globalData.$http(d => {
						uni.showToast({
							title: d.msg
						});
						if (d.code === 200) {
							receiveCard()
						}
					}, `/prod-api/api/metro/card/${carCodes.value.id}`, 'DELETE', {}, {
						Authorization: uni.getStorageSync('user').token
					})
				} else if (res.cancel) {
					console.log('用户点击取消');
				}
			}
		});

	}

	const receiveCard = () => {

		getApp().globalData.$http(d => {
			// 一条数据时
			// true
			// console.log('d instanceof Object : ', d instanceof Object);
			// true
			// console.log('d.constructor===Object : ', d.constructor===Object);
			// true
			// console.log('(typeof d) === 'object' : ', (typeof d) === 'object');
			// 领取了多张卡，但这些卡，每次只能拿到一张，且后端像栈一样存这些领取卡
			// console.log(d);
			uni.showToast({
				title: d.msg
			});
			if (d.code !== 200) {
				setTimeout(function() {
					uni.navigateBack({
						delta: 1
					});
				}, 1500);
			}
			carCodes.value = d.data
		}, `/prod-api/api/metro/card`, 'GET', {}, {
			Authorization: uni.getStorageSync('user').token
		})
	}
	receiveCard()
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
