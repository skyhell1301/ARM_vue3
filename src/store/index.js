import { createStore } from 'vuex'
import dialogStatusModule from './modules/dialogsStatusModule'
import ZSParameters from "@/store/modules/ZSParameters";

export default createStore({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    dialogStatus: dialogStatusModule,
    ZSParameters: ZSParameters
  }
})
