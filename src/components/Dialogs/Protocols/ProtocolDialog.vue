<template>
  <div class="container-protocol-dialog">
    <div class="text-content-container">
      <div class="text-content-window"
      >
        <div class="text-content"
             v-for="item in listMessage.slice().reverse()"
             :key="item.id"
        >
          <div class="text-content-id">{{item.id}}</div>
          <div class="text-content-message">{{item.text}}</div>
        </div>
      </div>
    </div>
    <div class="container-protocol-dialog-control-elements">
      <custom-button class="protocol-dialog-button" @buttonClick="clearProtocol">Очистить протокол</custom-button>
    </div>protocol-dialog-control-elements
  </div>
</template>

<script>
import CustomButton from "@/components/ComponentsForPopupWindow/CustomButton";
import {mapState} from "vuex";

export default {
  name: 'ProtocolDialog',
  components: {CustomButton},
  data () {
    return {
      isUpdate: true,
      unsubscribe:''
    }
  },
  updated() {
  },
  computed: {
    ...mapState ({
      listMessage: state => state.protocol.logMessageList,
    })
  },
  methods: {
    clearProtocol() {
      this.$store.dispatch('protocol/clearProtocol')
    }
  }
}
</script>

<style scoped>
.container-protocol-dialog {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 90% 10%;
  background: #0d394e;
  justify-items: center;
  align-items: center;
}

.text-content-container {
  overflow:hidden;
  display: grid;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 100%;
}

.text-content-window {
  overflow-y:scroll;
  width: 95%;
  height: 98%;
  border: 1px #47d0ee solid;
  display: flex;
  flex-direction: column;
}
.text-content {
  margin-bottom: 2px;
  color: #47d0ee;
  border-bottom: #47d0ee .5px solid;
  display: grid;
  grid-template-columns: 5% 95%;
}
.text-content-id {
  width: 95%;
  height: 100%;
  border-right: #47d0ee .5px solid;
  text-align: center;
}
.text-content-message {
  margin: 5px;
}

.container-protocol-dialog-control-elements {
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 50% 50%;
  width: 95%;
}

.protocol-dialog-button {
  font-size: 1em;
  width: 30%;
  color: #00d6ff;
  border: 1px solid #00d6ff;
  border-radius: 10px;
  background: #0d394e;
}
.protocol-dialog-button:hover {
  background: #0b2a39;
  box-shadow: 0px 0px 5px 1px rgb(28, 123, 173);
}
</style>
