<template>
	<view>

		<uni-easyinput v-model="oldPassword" placeholder="oldPassword" type="password" />
		<uni-easyinput v-model="newPassword" placeholder="newPassword" type="password" />
		<button type="default" @tap='change'>change</button>
	</view>
</template>
<script setup lang="ts">
	import {
		ref
	} from "vue"
	const newPassword = ref('')
	const oldPassword = ref('')
	const change = () => {
		getApp().globalData.$http(d => {
			uni.showToast({
				title: d.msg
			});
			if (d.code == 200) {
				setTimeout(() => {
					uni.removeStorageSync('user')
					uni.redirectTo({
						url: './login',
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
				}, 500);
			}
		}, '/prod-api/api/common/user/resetPwd', 'PUT', {
			"newPassword": newPassword.value,
			"oldPassword": oldPassword.value
		}, {
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
