<template>
	<view>
		<uni-easyinput v-model="data.content" placeholder="content" type="text" />
		<uni-easyinput v-model="data.name" placeholder="name" type="text" />
		<uni-easyinput v-model="data.photo" placeholder="photo URL" type="text" />
		<uni-easyinput v-model="data.remark" placeholder="remark" type="textarea" />
		<uni-easyinput v-model="data.spotCount" placeholder="spot count" type="digit" />
		<button type="default" @tap="submit">submit</button>
	</view>
</template>

<script lang="ts" setup>
	import {
		ref
	} from "vue"
	const data = ref({
		content: '',
		name: '',
		photo: '',
		remark: '',
		spotCount: 0,
	})
	const submit = () => {
		// 填了 name1
		// 填了 name1
		// 填了 name1
		// 转整
		data.value.spotCount = parseInt(data.value.spotCount)

		getApp().globalData.$http(d => {
			uni.showToast({
				title: d.msg
			});
			if (d.code == 200) {
				data.value = {
					content: '',
					name: '',
					photo: '',
					remark: '',
					spotCount: 0,
				}
			}
		}, '/prod-api/api/park/correct', 'POST', data.value, {
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
