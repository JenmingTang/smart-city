<template>
	<view>
		<!-- <h1>NewsDetail</h1> -->
		<!-- 
		 data:
		 appType: "park"
		 commentNum: 302
		 content: "<p>5月10日周一上午9时，中央纪委国家监委网站发布一条重磅消息：江西省政协副主席肖毅涉嫌严重违纪违法，目前正接受中央纪委国家监委纪律审查和监察调查。</p><p>&nbsp;</p><p>肖毅</p><p>资料图肖毅 资料图</p><p>　　肖毅出生于1962年5月，江西赣州人，一直在本省工作，曾任上犹县副县长、县委常委、县委副书记、政法委书记，瑞金市市长、市委书记，赣州市副市长、市委常委，江西省驻京办副主任、主任，江西省政府副秘书长等职。</p><p>&nbsp;</p><p>　　2015年4月，肖毅任抚州市委书记，2018年1月当选江西省政协副主席，继续兼任抚州市委书记，直到今年3月卸任该职务。</p><p>&nbsp;</p><p>　　2003年至2006年，肖毅先后任赣州市副市长、市委常委，兼任瑞金市委书记，时任江西省委常委、赣州市委书记的是潘逸阳。潘于2014年9月被查，2017年4月被判处有期徒刑20年，并处罚金400万。</p><p>&nbsp;</p><p>　　肖毅简历</p><p>&nbsp;</p><p>　　肖毅，男，汉族，1962年5月出生，江西赣州人，1981年9月参加工作，1984年8月加入中国共产党。</p><p>&nbsp;</p><p>　　1981年9月起&nbsp; 崇义县崇义中学教师、公安局干部、政府办秘书、副主任</p><p>&nbsp;</p><p>　　1987年2月&nbsp; 崇义县聂都乡党委副书记（主持工作）、人大主席</p><p>&nbsp;</p><p>　　1988年4月&nbsp; 崇义县政府办副主任</p><p>&nbsp;</p><p>　　1988年7月&nbsp; 崇义县体改办主任兼政府办副主任</p><p>&nbsp;</p><p>　　1990年2月&nbsp; 崇义县经济委员会主任、县委办公室主任</p><p>&nbsp;</p><p>　　1992年10月</p><p>上犹县政府副县长</p><p>&nbsp;</p><p>&nbsp;</p><p>　　1994年1月&nbsp; 上犹县委常委，县政府副县长</p><p>&nbsp;</p><p>　　1995年3月&nbsp; 上犹县委副书记</p><p>&nbsp;</p><p>　　1996年1月&nbsp; 龙南县委副书记兼政法委书记</p><p>&nbsp;</p><p>　　1996年6月&nbsp; 瑞金市委副书记，市政府代市长</p><p>&nbsp;</p><p>　　1997年1月&nbsp; 瑞金市委副书记，市政府市长</p><p>&nbsp;</p><p>　　2001年1月&nbsp; 瑞金市委书记</p><p>&nbsp;</p><p>　　2003年6月&nbsp; 赣州市政府副市长，瑞金市委书记</p><p>&nbsp;</p><p>　　2004年4月&nbsp; 赣州市委常委，瑞金市委书记</p><p>&nbsp;</p><p>　　2006年11月&nbsp; 江西省政府驻北京办事处副主任、党组副书记</p><p>&nbsp;</p><p>　　2007年7月&nbsp; 江西省政府驻北京办事处主任、党组书记</p><p>&nbsp;</p><p>　　2009年8月&nbsp; 江西省政府副秘书长，省政府驻北京办事处主任、党组书记</p><p>&nbsp;</p><p>　　2015年4月&nbsp; 抚州市委书记</p><p>&nbsp;</p><p>　　2018年1月&nbsp; 江西省政协副主席，抚州市委书记</p><p>&nbsp;</p><p>　　2021年3月&nbsp; 江西省政协副主席</p><p>&nbsp;</p><p>　　（简历摘自人民网）</p>"
		 cover: "/prod-api/profile/upload/image/2021/05/10/043c0628-d205-4dcf-a167-174a6c8860d2.png"
		 createBy: "1"
		 createTime: "2021-05-10 10:47:56"
		 hot: "N"
		 id: 135
		 likeNum: 814
		 params: {}
		 publishDate: "2021-05-10"
		 readNum: 3456
		 remark: null
		 searchValue: null
		 status: "Y"
		 subTitle: null
		 tags: null
		 title: "中纪委周一打虎，刚卸任市委书记的副部级官员落马"
		 top: "N"
		 type: "13"
		 updateBy: "1111122"
		 updateTime: "2022-06-27 13:50:22"
		 -->
		<uni-title :title="news.title" align="center" type="h1"></uni-title>
		<uni-title :title="`${news.createTime}   readNum : ${news.readNum}`" align="right" type="h3"></uni-title>
		<uni-title :title="`likeNum : ${news.likeNum}`" type="h3"></uni-title>
		<rich-text :nodes="news.content"></rich-text>
		<uni-title :title="`commentNum : ${news.commentNum}`" type="h2"></uni-title>
		<!-- 评论列表 
		
		无法获取指定新闻评论列表
		code:500
		-->



		<!-- 评论列表 -->
		<!-- width 平台自动 100% ；position: sticky;相对于父元素吸-->
		<view class="bottom-bar">
			<view class="bottom-bar-item">

				<uni-easyinput @confirm="commentSubmit(news,flagURLPark)" v-model="comment"
					placeholder="Let me say something" />
			</view>
			<view class="bottom-bar-item bottom-bar-item-right">
				<!-- 方的 -->
				<!-- <uni-tag text="标签"></uni-tag> -->

				<uni-tag text="like" type="primary" @click="like(news,flagURLPark)" :circle="true"></uni-tag>
			</view>

		</view>
		<!--  -->
		<!-- <h1>{{flagURLPark}}</h1> -->
	</view>
</template>

<script lang="ts" setup>
	import {
		ref
	} from "vue"
	const comment = ref('')
	const commentSubmit = (news, flagURLPark) => {
		// console.log('aaaaaaaaaaaaaaaaaa');
		getApp().globalData.$http(d => {
			/*
			code:500
			
			"
			### Error updating database.  Cause: java.sql.SQLSyntaxErrorException: Unknown column 'content' in 'field list'
			### The error may exist in URL [jar:file:/D:/zhcsnew/server-v2/ljxl-admin.jar!/BOOT-INF/lib/sc-common-3.3.0.jar!/mapper/news/ComNewsCommentMapper.xml]
			### The error may involve com.ljxl.sc.common.mapper.ComNewsCommentMapper.insertComNewsComment-Inline
			### The error occurred while setting parameters
			### SQL: insert into com_news_comment          ( app_type,             news_id,             content,             comment_date,             user_id,             like_num )           values ( ?,             ?,             ?,             ?,             ?,             ? )
			### Cause: java.sql.SQLSyntaxErrorException: Unknown column 'content' in 'field list'
			; bad SQL grammar []; nested exception is java.sql.SQLSyntaxErrorException: Unknown column 'content' in 'field list'"
			*/
			// console.log(d);


			uni.showToast({
				title: d.msg
			});
			comment.value = ''
			if (d.code === 200) {

			}

		}, `/prod-api/api/${flagURLPark}/press/pressComment`, 'POST', {
			"newsId": news.id,
			"content": comment.value
		}, {
			Authorization: uni.getStorageSync('user').token
		})
	}
	const like = (news, flagURLPark) => {
		// setup 拿不到 data选项下的变量，传进来可以
		// console.log(news);
		// setup 拿不到 data选项下的变量，传进来可以
		console.log('asdasda : ', flagURLPark);
		getApp().globalData.$http(d => {
			if (d.code === 200) {

				uni.showToast({
					title: '点赞成功'
				});
				// news 是组件实例 data 的，为响应式
				news.likeNum++
			}

		}, `/prod-api/api/${flagURLPark}/press/press/like/${news.id}`, 'PUT', {}, {
			Authorization: uni.getStorageSync('user').token
		})
	}
</script>
<script lang="ts">
	export default {
		data() {
			return {
				news: {}
			}
		},
		// 停哪儿、城市地铁 公用，
		onLoad(d) {
			//d.id
			// console.log(d.id);
			// this.flagURLPark 在 data 选项下的
			this.flagURLPark = d.flagURLPark
			console.log('this.flagURLPark : ', this.flagURLPark);
			getApp().globalData.$http(d1 => {
				// console.log(d1);
				this.news = d1.data
			}, `/prod-api/api/${d.flagURLPark}/press/press/${d.id}`)


			/*
			无法获取指定新闻评论列表
			code:500
			"
			### Error querying database.  Cause: java.sql.SQLSyntaxErrorException: Unknown column 'c.content' in 'field list'
			### The error may exist in URL [jar:file:/D:/zhcsnew/server-v2/ljxl-admin.jar!/BOOT-INF/lib/sc-common-3.3.0.jar!/mapper/news/ComNewsCommentMapper.xml]
			### The error may involve com.ljxl.sc.common.mapper.ComNewsCommentMapper.selectComNewsCommentList-Inline
			### The error occurred while setting parameters
			### SQL: SELECT c.id, c.app_type, c.news_id, c.content, c.comment_date, c.user_id, c.like_num, n.`title`, u.`user_name` FROM com_news_comment c LEFT JOIN com_news n ON n.`id` = c.`news_id` LEFT JOIN sys_user u ON u.`user_id` = c.`user_id` WHERE c.app_type = ? order by comment_date asc
			### Cause: java.sql.SQLSyntaxErrorException: Unknown column 'c.content' in 'field list'
			; bad SQL grammar []; nested exception is java.sql.SQLSyntaxErrorException: Unknown column 'c.content' in 'field list'"
			*/
			// console.log('d.id : ',d.id);
			// getApp().globalData.$http(d2 => {
			// 	console.log(d2);
			// }, `/prod-api/api/park/press/comments/list?newsId=${d.id}`)
		},
		methods: {

		}
	}
</script>
<style scoped lang="scss">
	.bottom-bar {
		// background-color: aqua;
		// height: 50px;
		position: sticky;
		bottom: 0;
		display: flex;
		background-color: white;
		// 自定义组件无法操作 css3
		// uni-easyinput {
		// 	background-color: aqua;
		// }

		// view==div span==text，可以用 css3
		view {
			// background-color: aqua;
			flex: 1;
		}

		.bottom-bar-item-right {
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
</style>
