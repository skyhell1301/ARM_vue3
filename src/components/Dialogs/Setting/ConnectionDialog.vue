<template>
  <div class="container-setting">
    <div class="control-elements-connection-container">
      <div style="margin-bottom: 5px">Конфигурация контроллера</div>
      <div class="controller__container">
        <div class="controller__input-parameters">
          <label>IP-адресс контроллера</label>
          <input style="width: 80%; margin-bottom: 10px;" type="text" placeholder="IP-адресс контроллера" v-model="controllerIP">
          <label>Порт контроллера</label>
          <input style="width: 80%; margin-bottom: 10px;" type="text" placeholder="Порт контроллера" v-model="controllerPort">
          <label>Период опроса (мс)</label>
          <input style="width: 80%" type="number" placeholder="Период опроса (мс)" v-model="controllerPeriod">
        </div>
        <custom-button style=" margin-top: 25%; width: 90%; height: 15%; justify-self: center; align-self: start; grid-column: 2; grid-row: 1;" @buttonClick="setControllerConfiguration">Установить</custom-button>
        <label style="grid-column: 2; grid-row: 1; align-self: end; margin-bottom: 20px; justify-self: center; width: 90%;"
               class="info-message"
               :class="{'message-error-status': controllerMessage.status === 'error'}"
        >
          {{controllerMessage.message}}
        </label>
      </div>
      <div style="margin-bottom: 5px">WebSocket</div>
      <div class="web-socket__container">
        <label>URL</label>
        <div class="control-elements-connection">
          <input class="control-elements-in-container control-elements-input" type="url" v-model="wsUrl" autocomplete="on">
          <select ref="nameDeviceSelect" class="control-elements-in-container" style=" grid-row: 2; grid-column: 1" v-model="selectDeviceName">
            <option v-for="name in getNamesConnections"
                    :key="name.id"
            >
              {{name}}
            </option>
          </select>
          <custom-button class="control-elements-in-container" @buttonClick="connectWS">Соединение</custom-button>
          <select class="control-elements-in-container control-elements-select" v-model="selectWSURl">
            <option>10.10.0.16:8081</option>
            <option>10.10.0.122:8083/protocol</option>
            <option>10.10.0.122:8083/state</option>
          </select>
          <custom-button class="control-elements-in-container" @buttonClick="closeConnectWS">Закрыть соединение</custom-button>
        </div>
      </div>
    </div>
    <div class="info-message" :class="{'message-error-status': message.status === 'error'}">{{message.message}}</div>
    <div class="connection-table-title">Список подключений WebSocket</div>
    <div class="table-container">
      <div class="connection-table" style="align-self: end">
        <div class="cell-connection-table">Устройство</div>
        <div class="cell-connection-table">URL</div>
        <div class="cell-connection-table">Метка жизни</div>
      </div>
      <div v-for="ws in connectWSList"
            :key="ws.id"
           class="connection-table"
      >
        <custom-div class="cell-connection-table" @divClick="wsUrl = ws.userUrl">{{ws.deviceName}}</custom-div>
        <custom-div class="cell-connection-table" @divClick="wsUrl = ws.userUrl">{{ws.userUrl}}</custom-div>
        <div class="cell-connection-table">{{ws.lifeMark}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from "@/components/ComponentsForPopupWindow/CustomButton";
import {mapState} from "vuex";
import CustomDiv from "@/components/ComponentsForPopupWindow/CustomDiv";
import connectToWebSocket from "@/mixins/connectToWebSocket";
import RESTRequest from "@/mixins/REST";
export default {
  name: 'SettingDialog',
  components: {
    CustomDiv,
    CustomButton,
  },
  data () {
    return {
      nameDevicesList: ['ARM1', 'ARM2'],
      wsUrl: '10.10.0.16:8081',
      selectDeviceName: '',
      selectWSURl: 'Выберите недавние',
      controllerIP: '10.10.0.122',
      controllerPort: '8083',
      controllerPeriod: 1000,
      controllerMessage: {status: 'ok', message: ''}
    }
  },
  mixins: [connectToWebSocket, RESTRequest],
  methods: {
    connectWS () {
      if(this.selectDeviceName === '') {
        this.$store.dispatch('wsConnectionList/setInfoMessage', {message: 'Укажите усторойство подключения',status: 'error'})
        this.$refs.nameDeviceSelect.focus()
      } else {
        this.connectToWS(this.wsUrl, this.selectDeviceName, this.$store)
      }
    },
    closeConnectWS () {

      this.closeConnectToWS(this.wsUrl, this.$store)
    },
    async setControllerConfiguration () {
      // if(!this.connectWSList) {
        let context = this
        this.controllerMessage.message = 'Устанавливаются значения контроллера'
        this.$store.dispatch('protocol/addLogMessage', {text: this.controllerMessage.message})
        this.controllerMessage.status = 'ok'
        let message = {}
        message.ip = this.controllerIP
        message.port = this.controllerPort
        message.period = this.controllerPeriod
        let response = await this.sendRESTCommand('http://10.10.0.122:8083/settings/controller',
            'POST', null, 'qqq', JSON.stringify(message))
        if (response.ok) {
          context.controllerMessage.message = 'Конфигурация установлена'
          this.$store.dispatch('protocol/addLogMessage', {text: this.controllerMessage.message})
          context.controllerMessage.status = 'ok'
        } else {
          response.text().then(function (text) {
            context.controllerMessage.message = text
            context.controllerMessage.status = 'error'
          })
        }
      // } else {
      //   console.log('qwer')
      // }
    },
  },
  watch: {
    selectWSURl () {
      this.wsUrl = this.selectWSURl
    }
  },
  computed: {
    ...mapState({
      connectWSList: state => state.wsConnectionList.webSocketConnectionList,
      message: state => state.wsConnectionList.infoMessage,
    }),
    getNamesConnections () {
      let list = [...this.nameDevicesList]
      let storeList = this.$store.getters['wsConnectionList/getNamesConnections']
      storeList.forEach(function (name) {
        if(list.indexOf(name) != -1) {
          list.splice(list.indexOf(name), 1)
        }
      })
      return list
    }

  }
}
</script>

<style scoped>

.container-setting {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}
.control-elements-connection-container {
  margin: 20px;
  width: 80%;
}
.control-elements-connection {
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
}
.control-elements-in-container {
  justify-self: start;
  align-self: start;
  width: 100%;
  height: 100%;
  grid-column: 2;
}

.control-elements-input {
  grid-column: 1;
  grid-row: 1;
  z-index: 2;
  width: 90%;
  height: 75%;
}
.control-elements-select {
  z-index: 1;
  grid-column: 1;
  grid-row: 1;
}

.info-message {
  margin: 20px;
  text-align: center;
  color: green;
}

.message-error-status {
  color: red;
}

.connection-table-title {
}

.table-container {
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-items: center;
}

.connection-table {
  display: grid;
  grid-template-columns: 20% 40% 40%;
  width: 100%;
  text-align: center;
}

.cell-connection-table {
  width: 100%;
  height: 100%;
  justify-self: center;
  align-self: center;
  cursor: pointer;
  border: 1px black solid;

}

.controller__container {
  border: 1px black solid;
  display: grid;
  grid-template-columns: 60% 40%;
  margin-bottom: 20px;
}
.controller__input-parameters {
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.web-socket__container {
  border: 1px black solid;
  padding: 20px;
}


</style>
