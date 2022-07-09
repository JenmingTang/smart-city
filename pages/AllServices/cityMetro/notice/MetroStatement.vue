<template>
	<view>
		<!-- data:
content: "<p>为保障北京地铁的正常运营秩序，根据2004年12月28日起实施的《北京市地铁运营管理暂行办法》（北京市人民政府令第140号）和2005年8月1日起施行的《城市轨道交通运营管理办法》的规定，北京市地铁有限公司（以下简称“地铁公司”）特制定本须知。 </p><p>凡进入地铁范围者均须自觉遵守本须知。</p><p>一、地铁实行一人一票制，每位成年乘客可免费携带1名身高1.1米以下的儿童乘车，超过1名的，须按超过人数购买成人全票。 </p><p>二、单程票仅限本站当日进站有效，出站时车票由出闸机回收，逾期为废票并予以回收。 </p><p>三、乘客进闸后，停留时限为120分钟。超时出站，要补交最高单程票价车费；如既超时又超程，须先补交超程车资后再补交最高单程票价车费。 </p><p>四、乘客应妥善保管好车票，若在付费区内遗失车票，乘客出站前须到车站售票问讯处补交车票成本费10元和最高单程票价车费后才允许出站。 </p><p>五、老人、离休干部、残疾人凭有效证件可以免费乘坐地铁，办理学生储值票的学生可以享受单程五折扣值优惠。 </p><p>六、需索取发票的乘客，若持单程票，请凭车票在出闸前到车站售票问讯处领取等额发票；若持储值票，请在每次充值后凭电脑小票到车站问讯处领取等额发票。 </p><p>七、地铁公司不办理“深圳通”储值票退、换票业务，乘客需要办理相关业务时，请到“深圳通”公司客户服务中心或指定网点办理。 </p><p>八、已购单程票而未进闸的乘客需办理退票时，须到车站售票问讯处经地铁工作人员验证，车票属于本站当日出售且无进站信息，可按车票面值退票。 </p><p>九、因地铁原因需退票时，持单程票乘客可在5日内到地铁任一车站办理退票，持储值票乘客可在下次进站时免费更新。 </p><p>十、携带重量超过20公斤以上或体积大于0.06立方米的物品乘车时，需购买与车资等额的行李票；重量超过30公斤或长度超过1.6米或体积超过0.1立方米的物品，一律不得携带进站乘车。 </p>"
createBy: null
createTime: "2021-04-03 15:20:53"
id: 1
params: {}
remark: null
searchValue: null
title: "乘车须知"
type: "1"
updateBy: null
updateTime: "2021-05-08 15:11:33" -->
		<!-- 
 data:
 content: "<p>一、地铁实行一人一票制，每位成年乘客可免费携带1名身高1.1米以下的儿童乘车，超过1名的，须按超过人数购买成人全票。 </p><p>二、单程票仅限本站当日进站有效，出站时车票由出闸机回收，逾期为废票并予以回收。 </p><p>三、乘客进闸后，停留时限为120分钟。超时出站，要补交最高单程票价车费；如既超时又超程，须先补交超程车资后再补交最高单程票价车费。 </p><p>四、乘客应妥善保管好车票，若在付费区内遗失车票，乘客出站前须到车站售票问讯处补交车票成本费10元和最高单程票价车费后才允许出站。 </p><p>五、老人、离休干部、残疾人凭有效证件可以免费乘坐地铁，办理学生储值票的学生可以享受单程五折扣值优惠。 </p><p>六、需索取发票的乘客，若持单程票，请凭车票在出闸前到车站售票问讯处领取等额发票；若持储值票，请在每次充值后凭电脑小票到车站问讯处领取等额发票。</p>"
 createBy: null
 createTime: "2021-04-03 15:22:15"
 id: 2
 params: {}
 remark: null
 searchValue: null
 title: "乘车卡领取通知"
 type: "2"
 updateBy: null
 updateTime: "2021-05-08 19:12:52"
 -->
		<!-- 1 乘车须知 2 乘车卡领取通知 3 免责声明 -->

		<template v-for="(v,i) in list" :key="i">

			<uni-card :title="v.title" :extra="v.type==='1'?'乘车须知':v.type==='2'?'乘车卡领取通知':'免责声明'" note="">
				<rich-text :nodes="v.content"></rich-text>
				<uni-title :title="`createTime : ${v.createTime}`" align="center"></uni-title>
				<uni-title :title="`updateTime : ${v.updateTime}`" align="center"></uni-title>
			</uni-card>
		</template>
	</view>
</template>

<script lang="ts" setup>
	import {
		ref
	} from "vue"
	const list = ref([])
	const get = type => {

		getApp().globalData.$http(d => {
			// console.log(d);
			list.value.push(d.data)
		}, `/prod-api/api/metro/statement?type=${type}`)
	}
	get(1)
	get(2)
	get(3)
</script>
<script lang="ts">
	export default {
		data() {
			return {}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
</style>
