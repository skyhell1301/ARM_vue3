<template>
  <div class="container-protocol-dialog">
    <div class="text-content-container">
      <div class="text-content-window"
      >
        <div class="text-content"
             v-for="item in logMessageList.slice().reverse()"
             :key="item.id"
        >
          <div class="text-content-id">{{item.id}}</div>
          <div class="text-content-message">{{item.text}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'ProtocolDialog',
  computed: {
    ...mapState({
      logMessageList: state => state.protocol.logMessageList,
    })
  },
  methods: {
    scrollToElement() {
      const el = this.$el.getElementsByClassName('scroll-to-me')[0];

      if (el) {
        el.scrollIntoView();
      }
    }
  }
}
</script>

<style scoped>
.container-protocol-dialog {
  width: 100%;
  height: 100%;
  display: grid;
}

.text-content-container {
  background: #0d394e;
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
  height: 95%;
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
</style>
