<template>
  <div class="LVSsettings__wrapper">
    <div class="LVSsettings__wrapper-title">Конфигурация контроллера</div>
    <div class="controller-connection__wrapper">
      <div class="controller-connection__container">
        <div class="controller-connection__inputs-container">
          <input type="text" placeholder="IP-адресс контроллера" v-model="controllerIP">
          <input type="number" placeholder="Порт контроллера" v-model="controllerPort">
          <div style="display: flex; flex-direction: column">
            <label style="justify-self: end">Период мониторинга (мс)</label>
            <input type="number" placeholder="Период опроса (мс)" v-model="controllerPeriod">
          </div>
        </div>
        <div class="controller-connection__buttons-container">
          <custom-button @buttonClick="setControllerConfiguration">Установить</custom-button>
          <label :class="{'message-error-status': controllerMessage.status === 'error'}"
          >
            {{ controllerMessage.message }}
          </label>
        </div>
      </div>
    </div>
    <div class="LVSsettings__wrapper-title">Подключение к АРМ</div>
    <div class="arm-connection__wrapper">
      <div class="arm-connection__container">
        <div class="arm-connection__inputs-container">
          <input class="arm-connection__input" type="text" v-model="wsIp" autocomplete="on" list="ipList"
                 placeholder="Введите ip-адрес">
          <input class="arm-connection__input" type="number" v-model="wsPort" autocomplete="on" list="portList"
                 placeholder="Введите порт">
          <input class="arm-connection__input" type="url" v-model="wsUrl" autocomplete="on" list="urlList"
                 placeholder="Введите url">
          <datalist id="urlList">
            <option v-for="url in urlList"
                    :key="url"
            >
              {{ url }}
            </option>
          </datalist>
          <datalist id="ipList">
            <option v-for="ip in ipList"
                    :key="ip"
            >
              {{ ip }}
            </option>
          </datalist>
          <datalist id="portList">
            <option v-for="port in portList"
                    :key="port"
            >
              {{ port }}
            </option>
          </datalist>
          <select ref="nameDeviceSelect" class="arm-connection__select" style=" grid-row: 2; grid-column: 1"
                  v-model="selectDeviceName">
            <option v-for="name in getNamesConnections"
                    :key="name.id"
            >
              {{ name }}
            </option>
          </select>
        </div>
        <div class="arm-connection__buttons-container">
          <custom-button class="arm-connection__button" @buttonClick="connectWS">Соединение</custom-button>
          <custom-button class="arm-connection__button" @buttonClick="closeConnectWS">Закрыть соединение</custom-button>
        </div>
      </div>
    </div>
    <div class="info-message" :class="{'message-error-status': message.status === 'error'}">{{ message.message }}</div>
    <div class="list-connection__wrapper">
      <div class="list-connection__title">Список подключений</div>
      <div class="list-connection__container">
      <div class="list-connection__table-row" style="align-self: end">
        <div class="list-connection__cell">Устройство</div>
        <div class="list-connection__cell">Адрес</div>
        <div class="list-connection__cell">Метка жизни</div>
      </div>
      <div v-for="ws in connectWSList"
           :key="ws.id"
           class="list-connection__table-row"
      >
        <custom-div class="list-connection__cell" @divClick="wsUrl = ws.url, wsIp = ws.ip,
        wsPort = ws.port, selectDeviceName = ws.deviceName">{{ ws.deviceName }}</custom-div>
        <custom-div class="list-connection__cell" @divClick="wsUrl = ws.url, wsIp = ws.ip,
        wsPort = ws.port, selectDeviceName = ws.deviceName">{{ ws.userUrl }}</custom-div>
        <div class="list-connection__cell">{{ ws.lifeMark }}</div>
      </div>
    </div>
    </div>
    <input type="text" v-model="igorUrl" style="margin-top: 20px;">
    <custom-button @buttonClick="setIgorUrl">Установить URL Игоря</custom-button>
    <div style="margin-top: 10px;">Установлен:</div>
    <div>{{$store.state.ZSParameters.igorUrl}}</div>
  </div>
</template>

<script>
import CustomButton from "@/components/CustomSimpleComponents/CustomButton";
import {mapState} from "vuex";
import CustomDiv from "@/components/CustomSimpleComponents/CustomDiv";
import connectToWebSocket from "@/mixins/connectToWebSocket";
import RESTRequest from "@/mixins/REST";

export default {
  name: 'SettingDialog',
  components: {
    CustomDiv,
    CustomButton,
  },
  data() {
    return {
      nameDevicesList: ['ARM1', 'ARM2', 'Protocol'],
      wsUrl: '',
      wsIp: '',
      wsPort: '',
      ipList: ['10.10.0.16', '10.10.0.11', '10.10.0.122'],
      portList: [8081, 8083],
      urlList: ['/', '/state', '/protocol'],
      selectDeviceName: '',
      controllerIP: '10.10.0.122',
      controllerPort: '8083',
      controllerPeriod: 1000,
      controllerMessage: {status: 'ok', message: ''},
      igorUrl: ''
    }
  },
  mixins: [connectToWebSocket, RESTRequest],
  methods: {
    connectWS() {
      if (this.selectDeviceName === '') {
        this.$store.dispatch('wsConnectionList/setInfoMessage', {
          message: 'Укажите усторойство подключения',
          status: 'error'
        })
        this.$refs.nameDeviceSelect.focus()
      } else {
        if(this.wsIp === '') {
          this.$store.dispatch('wsConnectionList/setInfoMessage', {
            message: 'Укажите IP-адрес',
            status: 'error'
          })
        } else {
          if(this.wsPort === '') {
            this.$store.dispatch('wsConnectionList/setInfoMessage', {
              message: 'Укажите порт',
              status: 'error'
            })
        } else {
            if(this.wsUrl === '') {
              this.$store.dispatch('wsConnectionList/setInfoMessage', {
                message: 'Укажите URL',
                status: 'error'
              })
          } else {
              this.saveInputDataInLocalStorage()
              let address = {}
              address.ip = this.wsIp
              address.port = this.wsPort
              address.url = this.wsUrl
              address.full = this.wsIp + ':' + this.wsPort + this.wsUrl
              address.isMain = this.selectDeviceName.substring(0, this.selectDeviceName.length - 1) === 'ARM' ? true : false
              this.connectToWS(address, this.selectDeviceName, this.$store)
              this.selectDeviceName = ''
            }
          }
        }
      }
    },
    closeConnectWS() {
      let address = {}
      address.ip = this.wsIp
      address.port = this.wsPort
      address.url = this.wsUrl
      address.full = this.wsIp + ':' + this.wsPort + this.wsUrl
      this.closeConnectToWS(address, this.$store)
    },
    async setControllerConfiguration() {
      if (this.getMainConnectionAddress !== null && this.getMainConnectionAddress !== undefined) {
        let context = this
        this.controllerMessage.message = 'Устанавливаются значения контроллера'
        this.$store.dispatch('protocol/addLogMessage', {text: this.controllerMessage.message})
        this.controllerMessage.status = 'ok'
        let message = {}
        message.ip = this.controllerIP
        message.port = this.controllerPort
        message.period = this.controllerPeriod
        let response = await this.sendRESTCommand('http://' + this.getMainConnectionAddress + '/settings/controller',
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
      } else {
        this.controllerMessage.message = 'Подключитесь к AРМу'
        this.controllerMessage.status = 'error'
        this.$store.dispatch('protocol/addLogMessage', {text: this.controllerMessage.message})
        console.log(this.controllerMessage.message)
      }
    },
    saveInputDataInLocalStorage () {
      localStorage.setItem('wsIp', this.wsIp);
      localStorage.setItem('wsPort', this.wsPort);
      localStorage.setItem('wsUrl', this.wsUrl);
    },
    setIgorUrl () {
      this.$store.dispatch('ZSParameters/setIgorUrl', this.igorUrl)
    }
  },
  mounted() {
    if(localStorage.getItem('wsIp')) {
      this.wsIp = localStorage.getItem('wsIp')
    }
    if(localStorage.getItem('wsPort')) {
      this.wsPort = localStorage.getItem('wsPort')
    }
    if(localStorage.getItem('wsUrl')) {
      this.wsUrl = localStorage.getItem('wsUrl')
    }
  },
  computed: {
    ...mapState({
      connectWSList: state => state.wsConnectionList.webSocketConnectionList,
      message: state => state.wsConnectionList.infoMessage,

    }),
    getNamesConnections() {
      let list = [...this.nameDevicesList]
      let storeList = this.$store.getters['wsConnectionList/getNamesConnections']
      storeList.forEach(function (name) {
        if (list.indexOf(name) != -1) {
          list.splice(list.indexOf(name), 1)
        }
      })
      return list
    },
    getMainConnectionAddress () {
      return this.$store.getters['wsConnectionList/getMainConnectionAddress']
    }
  }
}
</script>

<style scoped>

.LVSsettings__wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  font-size: 2.5vmin;
}
.LVSsettings__wrapper-title {
  margin-top: 15px;
  margin-bottom: 5px;
}

.controller-connection__wrapper {
  border: 1px black solid;
  width: 80%;
  padding: 20px;
  height: 15%;
}
.controller-connection__container {
  display: grid;
  grid-template-columns: 60% 35%;
  height: 100%;
  width: 100%;
  grid-column-gap: 5%;
}
.controller-connection__inputs-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;

}
.controller-connection__buttons-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.arm-connection__wrapper {
  border: 1px black solid;
  width: 80%;
  height: 15%;
  padding: 20px;
}

.arm-connection__container {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 60% 35%;
  grid-column-gap: 5%;
}

.arm-connection__inputs-container {
  justify-content: space-around;
  display: flex;
  flex-direction: column;
}

.arm-connection__buttons-container {
  display: flex;
  flex-direction: column;
}

.info-message {
  margin: 20px;
  text-align: center;
  color: green;
}

.message-error-status {
  color: red;
}

.list-connection__wrapper {
  width: 87%;
}

.list-connection__title {
  text-align: center;
}

.list-connection__container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
}

.list-connection__table-row {
  display: grid;
  grid-template-columns: 20% 40% 40%;
  width: 100%;
  text-align: center;
}

.list-connection__cell {
  width: 100%;
  height: 100%;
  justify-self: center;
  align-self: center;
  cursor: pointer;
  border: 1px black solid;

}


</style>
