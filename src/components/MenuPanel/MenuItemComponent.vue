<template>
  <div class="menu-item-container" v-click-outside="contentClose">
    <div :class="{'content-open': contentOpen}" class="title-menu-item-container" @click="clickMenuItem">
      <div class="title-menu-item">
        {{titleMenuItem}}
      </div>
    </div>
    <keep-alive>
      <transition name="menu-content-animation">
        <div v-show="contentOpen" class="content-menu-item" @click="contentClose">
          <slot></slot>
        </div>
      </transition>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'MenuItemComponent',
  data () {
    return {
      MenuItemId: (function () {
        const one = Math.floor((Math.random() * 1000000) + 1) + ''
        const two = Math.floor((Math.random() * 1000000) + 1) + ''
        const three = Math.floor((Math.random() * 1000000) + 1) + ''
        return 'menu-item-id-' + one + two + three
      })(),
      contentOpen: false
    }
  },
  props: {
    titleMenuItem: {
      type: String,
      default: 'None'
    },
  },
  methods: {
    clickMenuItem () {
      this.contentOpen = !this.contentOpen
    },
    contentClose () {
      this.contentOpen = false
    }
  },
}
</script>

<style scoped>
.menu-item-container {
  display: flex;
  height: 95%;
  margin: 0 .1%;
  border-radius: 10px;
  transition: box-shadow .3s;
  width: 12vmax;
}
.content-open {
  transition: background-color .5s ease;
  background: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 0px 0px 4px 1px rgba(148,148,148,0.71);
}
.menu-item-container:hover {
  box-shadow: 0px 0px 4px 1px rgba(148,148,148,0.71);
}

.title-menu-item-container {
  display: grid;
  cursor: pointer;
  height: 100%;
  width: 100%;
}

.title-menu-item {
  user-select: none;
  z-index: 2;
  justify-self: center;
  align-self: center;
  font-size: .8em;
  margin: 0 .3vmax;
}

.content-menu-item {
  z-index: 2;
  background: white;
  transform-origin: 0 0;
  position: absolute;
  top: 95%;
  display: flex;
  box-shadow: 0px 4px 5px 1px rgba(148,148,148,0.71);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
}

.menu-content-animation-enter-active {
  animation: bounce-out .4s reverse;
}
.menu-content-animation-leave-active {
  animation: bounce-out .2s;
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
}
</style>
