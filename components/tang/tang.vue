<template>
	<view>
			<h1 v-for="(item,index) in 10" :key="index">{{item}}</h1>
	</view>
</template>
<script lang="ts" setup>
	const data: String = 'tangdada'
</script>
<script lang="ts">
	export default {
		name: "tang",
		data() {
			return {

			};
		}
	}
</script>

<style>

</style>
