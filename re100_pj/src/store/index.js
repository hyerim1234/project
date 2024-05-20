// createStore 라는 함수를 받아와서 거기에 정의할 수 있는 오브젝트가 state,getter,mutation,action
// import { createStore } from 'vuex'

// const tabModule = {
//   state: {
//     currentTab: '실시간 정보'
//   },
//   mutations: {
//     setCurrentTab (state, tab) {
//       state.currentTab = tab
//     }
//   },
//   actions: {
//     changeTab ({ commit }, tab) {
//       commit('setCurrentTab', tab)
//     }
//   }
// }

// export default createStore({
//   modules: {
//     tab: tabModule
//   }
// })

// vx란? 상태 관리 패턴 라이브러리 모든 컴포넌트를 위한 중앙 집중식 스토어를 제공해준다.
// 상태가 예측 가능한 방식으로 변경될 수 있도록 하는 규ㅣㄱ과 함께 애플리케이션의 모든 구성 요소에 대한 중앙 집중식 저장소 역할을 한다.
// 중앙 저장소에 저장된 데이터는 쉽게 바꿀 수 없으며 특정 함수 mutation action 에서만 데이터 변경이 가능하고 변경 상태 관리 가능함.

import { createStore } from 'vuex'

const store = createStore({
  state: {
    currentTab: '실시간 정보'
  },
  mutations: {
    setTab (state, tab) {
      state.currentTab = tab
    }
  },
  actions: {
    changeTab ({ commit }, tab) {
      commit('setTab', tab)
    }
  },
  getters: {
    currentTab: state => state.currentTab
  }
})

export default store
