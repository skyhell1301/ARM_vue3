<template>
  <div class="wrapper_parameters"
       :id="'Parameters-' + ID"
  >
    <div class="table_parameters"
         v-for="param in deviceData"
         :key="param">
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
      dataArray: null,
    }
  },
  props: {
    deviceData: {
      type: Object
    },
  },
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
  grid-template-columns: 65% 35%;
  font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
  text-align: left;
  align-items: center;
  width: 100%;
  height: 100%;
}

.param {
  justify-self: start;
  margin-left: 7px;
}

.value {
  margin-right: 7px;
  justify-self: end;
  text-align: end;
}
</style>
