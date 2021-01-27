import { createStore } from 'vuex'
import dialogStatusModule from './modules/dialogsStatusModule'
import ZSParameters from "@/store/modules/ZSParameters";
import ConnectionList from "@/store/modules/ConnectionList";

export default createStore({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    dialogStatus: dialogStatusModule,
    ZSParameters: ZSParameters,
    connectionList: ConnectionList
  }
})
