// #ifndef VUE3
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
import App from './App.vue'
import store from './store'
export function createApp() {
	const app = createSSRApp(App)
	
	app.use(store)
	// 嫌弃在 setup 拿不到 this 就不用了，在 uniapp 特有 globalData 用
	const baseURL = 'http://124.93.196.45:10001/'
	app.config.globalProperties.$http = (fn, url, method = 'GET', data = {}, header = {}) => {
		uni.request({
			url: `${baseURL}${url}`,
			method: method,
			data: data,
			header: header,
			success: res => {
				// console.log("res: ",res);
				fn(res.data)
			},
			fail: () => {},
			complete: () => {}
		});
	}
	return {
		app
	}
}
// #endif
