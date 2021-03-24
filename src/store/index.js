import { createStore } from 'vuex'
import dialogStatus from './modules/ApplicationModules/DialogsModules/dialogsStatus'
import ZSParameters from "@/store/modules/ZSmodules/ZSParameters";
import wsConnectionList from "@/store/modules/ConnectionModules/wsConnectionList";
import protocolModule from "@/store/modules/ZSmodules/protocolModule";
import windowsControl from "@/store/modules/ApplicationModules/DialogsModules/windowsControl";
import systemConnection from "@/store/modules/ConnectionModules/systemConnection"
import devicesParameters from "@/store/modules/ZSmodules/devicesParameters";
import cyclogramms from "@/store/modules/ZSmodules/cyclogramms";

export default createStore({
  devtools: false,
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    dialogStatus: dialogStatus,
    devicesParameters: devicesParameters,
    wsConnectionList: wsConnectionList,
    protocol: protocolModule,
    windowsControl: windowsControl,
    systemConnection: systemConnection,
    ZSParameters: ZSParameters,
    cyclogramms: cyclogramms
  }
})
