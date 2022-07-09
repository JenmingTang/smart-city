<template>
	<view>

		<uni-easyinput v-model="data.title" placeholder="title" type="text" />
		<uni-easyinput v-model="data.content" placeholder="content" type="textarea" />
		<button type="default" @tap='submit'>submit</button>
	</view>
</template>

<script lang="ts" setup>
	import {
		ref
	} from "vue"
	const baseURL = getApp().globalData.baseURL
	const data = ref({
		content: '',
		title: ''
	})

	const submit = () => {

		getApp().globalData.$http(d => {
			uni.showToast({
				title: d.msg
			});
			if (d.code === 200) {
				data.value = {
					content: '',
					title: ''
				}
			}
		}, `/prod-api/api/metro/feedback`, 'POST', data.value, {
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
