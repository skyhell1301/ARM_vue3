<template>
  <div class="container-protocol-dialog">
    <div class="text-content-container">
      <select class="protocol-messages-list" ref="scrollDiv"
              size="100"
              v-model="selectMessage"
      >
        <transition-group name="message-list">
          <option v-for="message in getMessageList"
                  :key="message.id"
                  :value="message"
                  class="protocol-message"
          >
            {{ message.id + '. ' + message.time + ' ' + message.text }}
          </option>
        </transition-group>
      </select>
    </div>
    <div class="container-protocol-dialog-control-elements">
      <custom-button class="protocol-dialog-button" @buttonClick="clearProtocol">Очистить протокол</custom-button>
      <custom-button class="protocol-dialog-button" @buttonClick="isUpdate = false" v-if="isUpdate">Остановить</custom-button>
      <custom-button class="protocol-dialog-button" @buttonClick="isUpdate = true" v-else>Возобновить</custom-button>
    </div>protocol-dialog-control-elements
  </div>
</template>

<script>
import CustomButton from "@/components/CustomSimpleComponents/CustomButton";
import {mapState} from "vuex";

export default {
  name: 'ProtocolDialog',
  components: {CustomButton},
  data () {
    return {
      isUpdate: true,
      localMessageList: {},
      updateScroll: true,
      selectMessage: null
    }
  },
  watch: {
    selectMessage () {
      console.log(this.selectMessage.text)
    },
    localMessageList () {
      if(this.updateScroll) {
        this.scrollDown()
      }
    }
  },
  methods: {
    scrollDown() {
      let messageDisplay = this.$refs.scrollDiv
      if (messageDisplay !== undefined && this.updateScroll === true) {
          messageDisplay.scrollTop = messageDisplay.scrollHeight + 1000
      }
    },
    clearProtocol() {
      this.$store.dispatch('protocol/clearProtocol')
      this.localMessageList = {}
    },
    updateLocalMessageList () {
      this.localMessageList = null
      this.localMessageList = Object.assign({}, this.listMessage)

    },
  },
  computed: {
    getMessageList () {
      if(this.isUpdate) {
        this.updateLocalMessageList()
      }
      return this.localMessageList
    },
    ...mapState ({
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
  overflow:hidden;
  display: grid;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 100%;
}

.protocol-messages-list {
  //overflow: auto;
  outline: none;
  background: #0d394e;
  color: #47d0ee;
  width: 98%;
  height: 98%;
  max-width: 98%;
  max-height: 98%;
}

.protocol-message {
  transition: all .5s;
  display: flex;
  flex-direction: column;
  font-size: 1.1em;
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
  position: absolute;
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
