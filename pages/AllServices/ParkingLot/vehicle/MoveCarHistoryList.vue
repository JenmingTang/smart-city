<template>
	<view>
		<!-- 
		 
		 rows: Array(1)
		 0:
		 address: ""
		 applier: null
		 area: "桂B888888"
		 city: "桂B888888"
		 createBy: "1116005"
		 createTime: "2022-07-04 22:44:07"
		 id: 14010
		 idCard: "桂B888888"
		 params: {}
		 photo: "桂B888888"
		 plateNo: "桂B888888"
		 province: "桂B888888"
		 remark: null
		 searchValue: null
		 tel: "桂B888888"
		 updateBy: null
		 updateTime: null
		 userName: null
		 -->
		<template v-for="(v,i) in store.getters.getMoveCarHistoryList" :key="i">
			<uni-card :cover="v.photo">
				<template v-slot:actions>
					<uni-title :title="`createTime : ${v.createTime}`" align="center"></uni-title>
					<uni-title :title="`plateNo : ${v.plateNo}`" align="center"></uni-title>
					<uni-title :title="`tel : ${v.tel}`" align="center"></uni-title>
					<uni-title :title="`idCard : ${v.idCard}`" align="center"></uni-title>
					<uni-title :title="`province : ${v.province}`" align="center"></uni-title>
					<uni-title :title="`city : ${v.city}`" align="center"></uni-title>
					<uni-title :title="`area : ${v.area}`" align="center"></uni-title>
				</template>
			</uni-card>
		</template>
	</view>
</template>

<script lang="ts" setup>
	import {
		useStore
	} from "vuex"
	const store = useStore()
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
