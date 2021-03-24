<template>
  <div class="container-protocol-dialog">
    <div class="text-content-container">
      <div class="protocol-messages-list" ref="scrollDiv">
        <transition-group name="message-list">
          <custom-div v-for="message in getMessageList"
                      :key="message.id" class="protocol-message"
                      @divClick="setSelectMessage(message)"
          >
            <div class="protocol-message__id">{{ message.id }}</div>
            <div class="protocol-message__time">{{ message.time }}</div>
            <div class="protocol-message__text">{{ message.text }}</div>
          </custom-div>
        </transition-group>
      </div>
    </div>
    <div class="container-protocol-dialog-control-elements">
      <custom-button class="protocol-dialog-button" @buttonClick="clearProtocol">Очистить протокол</custom-button>
      <custom-button class="protocol-dialog-button" @buttonClick="isUpdate = false" v-if="isUpdate">Остановить
      </custom-button>
      <custom-button class="protocol-dialog-button" @buttonClick="isUpdate = true" v-else>Возобновить</custom-button>
    </div>
    protocol-dialog-control-elements
  </div>
</template>

<script>
import CustomButton from "@/components/CustomSimpleComponents/CustomButton";
import {mapState} from "vuex";
import CustomDiv from "@/components/CustomSimpleComponents/CustomDiv";

export default {
  name: 'ProtocolDialog',
  components: {CustomDiv, CustomButton},
  data() {
    return {
      isUpdate: true,
      localMessageList: {},
      updateScroll: true,
      selectMessage: null,
      timer: null
    }
  },
  methods: {
    setSelectMessage(message) {
      this.selectMessage = message
      console.log(JSON.parse(this.selectMessage.text))
    },
    scrollDown() {
      if (this.isUpdate) {
        let messageDisplay = this.$refs.scrollDiv
        if (messageDisplay !== undefined && this.updateScroll === true) {
          messageDisplay.scrollTop = messageDisplay.scrollHeight + 1000
        }
      }
    },
    clearProtocol() {
      this.$store.dispatch('protocol/clearProtocol')
      this.localMessageList = {}
    },
    updateLocalMessageList() {
      this.localMessageList = null
      this.localMessageList = Object.assign({}, this.listMessage)

    },
  },
  mounted() {
    this.timer = setInterval(this.scrollDown, 100)
  },
  unmounted() {
    clearInterval(this.timer)
  },
  computed: {
    getMessageList() {
      if (this.isUpdate) {
        this.updateLocalMessageList()
        this.scrollDown()
      }
      return this.localMessageList
    },
    ...mapState({
      listMessage: state => state.protocol.logMessageList,
      lastMessage: state => state.protocol.lastMessage,
    })
  },

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
  overflow: hidden;
  display: grid;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 100%;

}

.protocol-messages-list {
  user-select: none;
  overflow-y: scroll;
  overflow-x: hidden;
  outline: none;
  background: #0d394e;
  color: #47d0ee;
  width: 98%;
  height: 98%;
  max-width: 98%;
  max-height: 98%;
  box-shadow: inset 0 0 5px 0.3px rgba(71, 208, 238, 0.8);
}
.protocol-messages-list::-webkit-scrollbar {
  width: 8px;
}
.protocol-messages-list::-webkit-scrollbar-track {
  border-radius: 4px;

  box-shadow: inset 0px 0px 2px 0.3px rgba(71, 208, 238, 0.8);
}

.protocol-messages-list::-webkit-scrollbar-thumb {
  background-color: #47d0ee;
  border-radius: 4px;
}

.protocol-message {
  transition: all .5s;
  display: flex;
  grid-template-columns: 3% 5% 92%;
  font-size: 1.1em;
}

.protocol-message__id {
  margin: 2px 5px 0 10px;
}

.protocol-message__time {
  margin: 2px 5px 0 5px;
}

.protocol-message__text {
  margin: 2px 5px 0 5px;
}

.container-protocol-dialog-control-elements {
  user-select: none;
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
  outline: none;
  cursor: pointer;
  background: #0b2a39;
  box-shadow: 0 0 5px 1px rgb(28, 123, 173);
}

.message-list-leave-active {
  opacity: 0;
}

.message-list-enter-from {
  transform: translateX(50px);
  opacity: 0;
}

.message-list-leave-to {
  transform: translateY(-30px);
  opacity: 0;
}


</style>
