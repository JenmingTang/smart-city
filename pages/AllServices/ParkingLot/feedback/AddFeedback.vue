<template>
	<view>

		<uni-easyinput v-model="data.title" placeholder="title" type="text" />
		<uni-easyinput v-model="data.content" placeholder=content type="textarea" />
		<button type="default" @tap='submit'>submit</button>
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
		}, '/prod-api/api/park/feedback', 'POST', data.value, {
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
		onLoad(d) {
			// 不搞了，因为 feedback list 那，一进来就请求了，放到 组件钩子函数那要重新改
			// feedback 重用，在 停哪儿、城市地铁 模块
			// d.URL
			// this.store.commit('setFeedbackURL',d.URL)
			// console.log(d);
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
</style>
