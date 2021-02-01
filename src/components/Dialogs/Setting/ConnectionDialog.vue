<template>
  <div class="container-setting">
    <div class="control-elements-connection-container">
      <div>WebSocket url</div>
      <div class="control-elements-connection">
        <input class="control-elements-in-container control-elements-input" type="url" v-model="wsUrl" autocomplete="on">
        <custom-button class="control-elements-in-container" @buttonClick="connectWS">Соединение</custom-button>
        <select class="control-elements-in-container control-elements-select" v-model="selectWSURl">
          <option>10.10.0.16:8081</option>
          <option>10.10.0.122:8082/name1</option>
          <option>10.10.0.122:8082/name2</option>
        </select>
        <custom-button class="control-elements-in-container" @buttonClick="closeConnectWS">Закрыть соединение</custom-button>
      </div>
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
      wsUrl: '10.10.0.16:8081',
      selectWSURl: 'Выберите недавние'
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
