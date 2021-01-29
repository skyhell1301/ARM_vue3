<template>
  <div class="container-setting">
    <div class="control-elements-connection">
      <div>WebSocket url</div>
      <input type="url" v-model="wsUrl" autocomplete="on">
      <custom-button @buttonClick="connectWS">Соединение</custom-button>
      <custom-button @buttonClick="closeConnectWS">Закрыть соединение</custom-button>
    </div>
    <div class="info-message" :class="{'message-error-status': message.status === 'error'}">{{message.message}}</div>
    <div class="connection-table-title">Список подключений WebSocket</div>
    <div class="table-container">
      <div class="connection-table" style="align-self: end">
        <div class="cell-connection-table">URL</div>
        <div class="cell-connection-table">Метка жизни</div>
      </div>
      <div v-for="ws in connectWSList"
            :key="ws.id"
           class="connection-table"
      >
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
export default {
  name: 'SettingDialog',
  components: {
    CustomDiv,
    CustomButton
  },
  data () {
    return {
      wsUrl: '10.10.0.122:8082/name1',
    }
  },
  methods: {
    connectWS () {
      this.$root.newConnectToWS(this.wsUrl)
    },
    closeConnectWS () {
      this.$root.closeConnectToWS(this.wsUrl)
    },
  },
  computed: {
    ...mapState({
      connectWSList: state => state.wsConnectionList.webSocketConnectionList,
      message: state => state.wsConnectionList.infoMessage,
    }),

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
.control-elements-connection {
  margin: 20px;
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
  grid-template-columns: 50% 50%;
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
</style>
