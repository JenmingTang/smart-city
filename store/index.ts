import { createStore } from 'vuex'

/*

 setup 下 ok
	
		import {
			useStore
		} from "vuex"
		const store = useStore()
		console.log('store.state.tang : ', store.state.tang);
		// 模块的 state 调用，其他选项无需分模块
		console.log('store.state.parkingLot.tang : ', store.state.parkingLot.tang);
*/

const parkingLot = {
	state: () => ({
		tang: 'tangOfParkingLot',
		moveCarHistoryList: []
	}),
	getters: {
		// store.getters.getMoveCarHistoryList 能拿到该数组
		getMoveCarHistoryList(state) {
			return state.moveCarHistoryList
		}
	},
	// set
	mutations: {
		// 第二参数 为 any
		// store.commit('setMoveCarHistoryList', 10)
		setMoveCarHistoryList(state: any, d) {

			state.moveCarHistoryList = d
		}
	},
	//异步的 set
	actions: {
	},
	modules: {
	}
}
const cityMetro = {
	state: () => ({
		siteInfo:[]
	}),
	getters: {
		getSiteInfo(state) {
			return state.siteInfo
		}
	},
	// set
	mutations: {
		setSiteInfo(state: any, d) {
			state.siteInfo = d
		}
	},
	//异步的 set
	actions: {
	},
	modules: {
	}
}
const vehicle = {
	state: () => ({
		updateVehicleMileageInfo:Object
	}),
	getters: {
		// store.getters.getMoveCarHistoryList 能拿到该数组
		getUpdateVehicleMileageInfo(state) {
			return state.updateVehicleMileageInfo
		}
	},
	// set
	mutations: {
		// 第二参数 为 any
		// store.commit('setMoveCarHistoryList', 10)
		setUpdateVehicleMileageInfo(state: any, d) {
			state.updateVehicleMileageInfo = d
		}
	},
	//异步的 set
	actions: {
	},
	modules: {
	}
}

export default createStore({
	state: () => ({
		tang: 'tang',
		feedbackURL:''
	}),
	getters: {
		getFeedbackURL(state){
			return state.feedbackURL
		}
	},
	mutations: {
		setFeedbackURL(state,d){
			state.feedbackURL = d
		}
	},
	actions: {
	},
	modules: {
		// ES6 特性
		// parkingLot:parkingLot
		parkingLot,
		vehicle,
		cityMetro
	}
})
