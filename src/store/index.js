import { createStore } from 'vuex'
import dialogStatus from './modules/ApplicationModules/DialogsModules/dialogsStatus'
import ZSParameters from "@/store/modules/ZSmodules/ZSParameters";
import wsConnectionList from "@/store/modules/ConnectionModules/wsConnectionList";
import protocolModule from "@/store/modules/ZSmodules/protocolModule";
import windowsControl from "@/store/modules/ApplicationModules/DialogsModules/windowsControl";
import controllerConnection from "@/store/modules/ConnectionModules/controllerConnection";

export default createStore({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    dialogStatus: dialogStatus,
    ZSParameters: ZSParameters,
    wsConnectionList: wsConnectionList,
    protocol: protocolModule,
    windowsControl: windowsControl,
    controllerConnection: controllerConnection
  }
})
