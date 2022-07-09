<template>
	<view>

		<navigator url="/pages/my/ChangePasswordPage">
			<!-- <button type="default">ChangePasswordPage</button> -->
			<button type="default">修改密码</button>
		</navigator>
		<navigator url="/pages/my/login" open-type="redirect">
			<!-- <button type="default" @tap="logout">logout</button> -->
			<button type="default" @tap="logout">登出</button>
		</navigator>
	</view>
</template>

<script lang="ts" setup>
	const logout = () => uni.removeStorageSync('user')
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

<style>

</style>
