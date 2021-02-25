<template>
  <transition-group class="windows-panel-container"
                    name="window-list"
                    tag="div">
    <div v-for="wind in windowsList"
          :key="wind.document.title"
          class="window-list-item"
    >
      <div class="window-list-item-container-title" @click="wind.focus()">
        <div class="window-list-item-title">{{$t('Interface.' + wind.document.titleKey)}}</div>
      </div>
      <close-icon @click="closeWindow(wind)" class="window-list-item-cross">

      </close-icon>
    </div>
  </transition-group>

</template>

<script>
import {mapState} from "vuex";
import CloseIcon from "@/assets/images/SVGIconComponents/CloseIcon";

export default {
  name: 'WindowsPanelComponent',
  components: {CloseIcon},
  data () {
    return {
      winList: null
    }
  },
  methods: {
    closeWindow (wind) {
      wind.close()
    }
  },
  computed: {
    ...mapState({
      windowsList: state => state.windowsControl.windowsList
    })
  }
}
</script>

<style scoped>
.windows-panel-container {

  display: flex;
}
.window-list-item {
  height: 80%;
  width: 7%;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 1px rgba(135, 135, 135, 1);
  margin: 5px;
  display: grid;
  grid-template-columns: 80% 20%;
  transition: transform 0.2s ease;
  background: #285876;
}


.window-list-item:hover {
  transform: scale(1.05);
  box-shadow: 0px 0px 5px 3px rgba(135, 135, 135, 1);
}

.window-list-item-container-title {
  user-select: none;
  display: grid;
  height: 100%;
  font-size: .8em;
  margin: 0 5%;
  text-align: start;
  justify-items: center;
  align-items: center;
  color: #e7e7e7;
  cursor: pointer;
}
.window-list-item-container-title:hover {
  color: #00d6ff;
}

.window-list-item-title {
  text-align: center;
  text-shadow: 1px 1px 3px rgba(106, 102, 102, 0.5);
}

.window-list-item-cross {
  fill: #e7e7e7;
  height: 30%;
  justify-self: center;
  align-self: center;
  cursor: pointer;
}
.window-list-item-cross:hover {
  fill: #00d6ff;
}

.window-list-leave-active {
  opacity: 0;
  position: absolute;
}
.window-list-enter-from {
  transform: translateX(30px);
  opacity: 0;
}
.window-list-leave-to {
  transform: translateY(-30px);
  opacity: 0;
}
</style>
