<template>
  <div class="clock-wrapper">
    <div id="rotate-background" class="rotate-background"></div>
    <div class="clock__container">
      <div class="time__container">
        <div class="time time-back">00:00:00</div>
        <div class="time">{{time}}</div>
      </div>
      <div class="date__container">
        <div class="date">{{date}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClockComponent',
  data () {
    return {
      time: '',
      date: '',
      timer: ''
    }
  },
  methods: {
    updateTime () {
      let cd = new Date()
      this.time = this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2) + ':' + this.zeroPadding(cd.getSeconds(), 2)
      this.updateDate()
    },
    updateDate () {
      this.date = new Date().toLocaleString(this.$i18n.locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      // cd.toDateString()
      // this.date = cd.getDate() + ' ' + cd.getMonth + ' ' + cd.getFullYear()
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
  font-family: "Opel-LCD-3";
  src: local("Opel-LCD-3"),
  url(../../assets/fonts/10617.ttf) format("truetype");
}

.clock-wrapper {
  font-weight: normal;
  overflow: hidden;
  display: grid;
  width: 100%;
  height: 100%;

  color: #00d6ff;
  border-radius: 7px;
}
.rotate-background {
  animation: gradient-rotate 10s linear infinite;
  z-index: 1;
  grid-row: 1;
  grid-column: 1;
  width: 800%;
  height: 800%;
  justify-self: center;
  align-self: center;
  background:  linear-gradient(to right, rgba(13,57,78,1) 0%, rgba(13,57,78,1) 49%, rgba(0,213,255,0.98) 50%, rgba(0,213,255,1) 51%, rgba(13,57,78,0.98) 52%, rgba(13,57,78,0.96) 100%);
}
@keyframes gradient-rotate { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }

.clock__container {
  font-family: LCD;
  box-shadow: inset 0px 0px 8px -1px #47d0ee;
  z-index: 2;
  grid-row: 1;
  grid-column: 1;
  display: grid;
  grid-template-rows: 75% 25%;
  background: #0d394e;
  border-radius: 7px;
  width: 97%;
  height: 95%;
  justify-self: center;
  align-self: center;
}
.time__container {
  display: grid;
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

.date__container {
  font-family: Opel-LCD-3;
  display: grid;
  justify-items: center;
  align-items: start;

}
.date {
  font-size: .8em;
}
</style>
