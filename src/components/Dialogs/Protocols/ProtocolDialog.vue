<template>
  <div class="container-protocol-dialog">
    <div class="text-content-container">
      <div v-if="!test" class="text-content-window"
           ref="scrollDiv"
      >
        <div class="text-content"
             v-for="item in getMessageList"
             :key="item.id"
        >
          <div class="text-content-id">
              {{item.id}}
          </div>

          <div class="text-content-message">
            <pre>
              {{item.text}}
            </pre>
          </div>
        </div>
      </div>
      <textarea class="test-text-area" v-model="getTextMessageList" v-else>
      </textarea>
    </div>
    <div class="container-protocol-dialog-control-elements">
      <custom-button class="protocol-dialog-button" @buttonClick="clearProtocol">Очистить протокол</custom-button>
      <custom-button class="protocol-dialog-button" @buttonClick="scrollToElement" v-if="isUpdate">Остановить</custom-button>
      <custom-button class="protocol-dialog-button" @buttonClick="isUpdate = true" v-else>Возобновить</custom-button>
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
      test: false,
      localMessageList: {},
      localTextMessages: '',
      updateScroll: true
    }
  },

  watch: {
  },
  updated() {


  },
  methods: {
    scrollDown() {
      let messageDisplay = this.$refs.scrollDiv
      console.log(messageDisplay.scrollHeight)
      // if (messageDisplay.scrollTop === messageDisplay.scrollHeight) {
      //   messageDisplay.scrollTop = messageDisplay.scrollHeight
      // }
    },
    updateScrollStatus() {

    },
    clearProtocol() {

      this.$store.dispatch('protocol/clearProtocol')
      this.localMessageList = {}
    },
    updateMessageList () {
      this.localMessageList = {}
      // this.localMessageList = Object.assign({}, this.listMessage.slice().reverse())
      this.localMessageList = Object.assign({}, this.listMessage)
      if(this.updateScroll) {
        this.scrollDown()
      }
    },
    updateTextMessages () {

      this.localTextMessages += this.lastMessage.id + '.  ' + this.lastMessage.text + '\n'
    }
  },
  mounted() {
    // this.$refs.scrollDiv.scrollTop = this.$refs.scrollDiv.scrollHeight
    this.$refs.scrollDiv.addEventListener('scroll', this.updateScrollStatus)
  },
  computed: {
    getTextMessageList () {
      this.updateTextMessages()
      return this.localTextMessages
    },
    getMessageList () {
      if(this.isUpdate) {
        this.updateMessageList()
        // return this.$store.state.protocol.logMessageList.slice().reverse()
        return this.$store.state.protocol.logMessageList
      } else {
        return this.localMessageList
      }
    },
    ...mapState ({
      listMessage: state => state.protocol.logMessageList,
      lastMessage: state => state.protocol.lastMessage,
    })
  },

}
</script>

<style scoped>
.test-text-area {
  width: 98%;
  height: 98%;
  max-width: 98%;
  max-height: 98%;
}
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
  //direction: rtl;
  //transform: rotate(180deg);
  overflow-y:scroll;
  width: 95%;
  height: 98%;
  border: 1px #47d0ee solid;
  display: flex;
  flex-direction: column;
}
.text-content {
  //direction: ltr;
  //transform: rotate(180deg);
  font-size: .9em;
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
