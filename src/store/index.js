import { createStore } from 'vuex'
import dialogStatusModule from './modules/ApplicationModules/DialogsModules/dialogsStatusModule'
import ZSParameters from "@/store/modules/ZSParameters";
import wsConnectionList from "@/store/modules/ConnectionModules/wsConnectionList";
import protocolModule from "@/store/modules/protocolModule";
import windowsControl from "@/store/modules/ApplicationModules/DialogsModules/windowsControl";

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
    wsConnectionList: wsConnectionList,
    protocol: protocolModule,
    windowsControl: windowsControl
  }
})
