<template>
  <div class="clock-wrapper">
    <div class="rotate-line"></div>
    <div class="rotate-line rotate-line__reverse"></div>
    <div class="clock__container">
      <div class="time time-back">00:00:00</div>
      <div class="time">{{time}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClockComponent',
  data () {
    return {
      time: '',
      timer: ''
    }
  },
  methods: {
    updateTime () {
      let cd = new Date()
      this.time = this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2) + ':' + this.zeroPadding(cd.getSeconds(), 2)
    },
    zeroPadding (num, digit) {
      let zero = ''
      for (let i = 0; i < digit; i++) {
        zero += '0'
      }
      return (zero + num).slice(-digit)
    }
  },
  mounted () {
    this.timer = setInterval(this.updateTime, 1000)
    // gsap.to('#rotate-background', {duration: 10, repeat: -1, rotation: 360, ease: 'linear'})
  }
}
</script>

<style scoped>
@font-face {
  font-family: "LCD";
  src: local("LCD"),
  url(../../assets/fonts/9299.ttf) format("truetype");
}
@font-face {
  font-family: "perfo";
  src: local("perfo"),
  url(../../assets/fonts/perfo.ttf) format("truetype");
}

.clock-wrapper {
  font-weight: normal;
  overflow: hidden;
  display: grid;
  width: 100%;
  height: 100%;
  color: #00d6ff;
  background: #0d394e;
  border-radius: 7px;
}
.rotate-line{
  animation: gradient-rotate 10s linear infinite;
  position: relative;
  left: 50%;
  z-index: 1;
  grid-row: 1;
  grid-column: 1;
  width: 100%;
  height: 70%;
  justify-self: center;
  align-self: center;
  transform-origin: 0;
  background: linear-gradient(0deg, rgba(13,57,78,0) 0%, rgba(0,213,255,0.9) 45%, rgba(0,213,255,0.9) 55%, rgba(13,57,78,0) 100%);
}
.rotate-line__reverse {
  animation: gradient-rotate 10s linear infinite reverse;
}
@keyframes gradient-rotate { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }

.clock__container {
  font-family: LCD;
  text-shadow: 0 0 5px #0aafe6, 0 0 5px rgba(10, 175, 230, 0);
  box-shadow: inset 0px 0px 8px -1px #47d0ee;
  z-index: 2;
  grid-row: 1;
  grid-column: 1;
  display: grid;
  background: #0d394e;
  border-radius: 7px;
  width: 97%;
  height: 93%;
  justify-self: center;
  align-self: center;
}

.time {
  font-size: 3em;
  grid-row: 1;
  grid-column: 1;
  justify-self: center;
  align-self: center;
}

.time-back {
  opacity: .1;
}
</style>
