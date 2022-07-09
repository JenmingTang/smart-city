<template>
	<view>

		<uni-easyinput v-model="data.idCard" placeholder="idCard" type="idcard" />
		<uni-easyinput v-model="data.phonenumber" placeholder="phonenumber" type="text" />
		<uni-easyinput v-model="data.userName" placeholder="userName" type="text" />
		<button type="default" @tap='submit'>submit</button>
	</view>
</template>

<script lang="ts" setup>
	import {
		ref
	} from "vue"
	const data = ref({
		idCard: null,
		phonenumber: null,
		userName: null
	})

	const submit = () => {

		getApp().globalData.$http(d => {
			uni.showToast({
				title: d.msg
			});
			if (d.code === 200) {
				data.value = {
					idCard: null,
					phonenumber: null,
					userName: null
				}
			}
		}, `/prod-api/api/metro/card`, 'POST', data.value, {
			Authorization: uni.getStorageSync('user').token
		})
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
