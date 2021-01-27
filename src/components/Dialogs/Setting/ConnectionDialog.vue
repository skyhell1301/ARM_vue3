<template>
  <div class="container-setting">
    <div class="control-elements-connection">
      <div>WebSocket url</div>
      <input type="text" v-model="wsUrl">
      <custom-button @buttonClick="connectWS">Соединение</custom-button>
      <custom-button @buttonClick="closeConnectWS">Закрыть соединение</custom-button>
    </div>
    <div class="info-message" :class="{'message-error-status': message.status === 'error'}">{{message.message}}</div>
    <div style="align-self: end">Список подключений WebSocket</div>
    <div class="connection-table" style="align-self: end">
      <div class="cell-connection-table">URL</div>
      <div class="cell-connection-table">Метка жизни</div>
    </div>
    <div v-for="ws in connectWSList"
          :key="ws.url"
         class="connection-table"
    >
      <div class="cell-connection-table">{{ws.url}}</div>
      <div class="cell-connection-table">{{ws.lifeMark}}</div>
    </div>
  </div>
</template>

<script>
import CustomButton from "@/components/CustomButton";
import {mapState} from "vuex";
export default {
  name: 'SettingDialog',
  components: {
    CustomButton
  },
  data () {
    return {
      wsUrl: '10.10.0.16:8081'
    }
  },
  methods: {
    connectWS () {
      this.$root.newConnectToWS(this.wsUrl)
    },
    closeConnectWS () {
      this.$root.closeConnectToWS(this.wsUrl)
    }
  },
  computed: {
    ...mapState({
      connectWSList: state => state.connectionList.webSocketConnectionList,
      message: state => state.connectionList.infoMessage,
    })
  }
}
</script>

<style scoped>

.container-setting {
  width: 100%;
  height: 100%;
  grid-template-rows: 20% 10% 5% 5% 60%;
  display: grid;
  justify-items: center;
  align-items: center;
}

.connection-table {
  display: grid;
  grid-template-columns: 50% 50%;
  width: 80%;
  align-self: start;
  text-align: center;
}

.cell-connection-table {
  border: 1px black solid;

}

.info-message {
  text-align: center;
  color: green;
}

.message-error-status {
  color: red;
}
</style>
