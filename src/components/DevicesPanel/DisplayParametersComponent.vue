<template>
  <div class="wrapper_parameters"
       :id="'Parameters-' + ID"
  >
    <div class="table_parameters"
         v-for="param in deviceData"
         :key="param.id">
      <div class="param">{{ param.nameParameter }}</div>
      <div class="value">{{ param.valueParameter }}</div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DisplayParametersComponent',
  data () {
    return {
      ID: (function () {
        const one = Math.floor((Math.random() * 1000000) + 1) + ''
        const two = Math.floor((Math.random() * 1000000) + 1) + ''
        const three = Math.floor((Math.random() * 1000000) + 1) + ''
        return 'id' + one + two + three
      })(),
      titleDevice: 'title',
      dataArray: [],
    }
  },
  props: {
    deviceData: {
      type: Object
    },
    fontSizeCoefficient: {
      type: Number,
      default: 0.09
    }
  },
  methods: {
    updateData () {

    }
  },
  mounted () {
    // this.updateData()
  },
  watch: {
    deviceData () {
      this.updateData()
    }
  }
}
</script>

<style scoped>

.wrapper_parameters {
  font-size: .7em;
  display: grid;
  width: 100%;
  height: 100%;
}

.table_parameters {
  user-select: none;
  cursor: pointer;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 50% 50%;
  font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
  text-align: left;
  align-items: center;
  white-space: nowrap;
  width: 100%;
  height: 100%;
}

.param {
  margin-left: 10%;
}

.value {
  margin-right: 10%;
  text-align: right;
}
</style>
