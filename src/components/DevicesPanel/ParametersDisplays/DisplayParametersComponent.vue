<template>
  <div class="wrapper_parameters"
  >
    <div class="table_parameters"
         v-for="data in deviceData"
         :key="data">
      <div class="param" v-if="data.unit">{{$t('DevicesParameters.' + data.deviceType + '.' + data.nameParameter)
      + ' (' + $t('units.' + unitName(data.unit)) + ')'}}</div>
      <div class="param" v-else>{{$t('DevicesParameters.' + data.deviceType + '.' + data.nameParameter) }}</div>
      <div class="value" v-if="data.value_list && typeof data.value_list[data.valueParameter]">{{ $t('DevicesParameters.' + data.deviceType + '.values.' + data.value_list[data.valueParameter]) }}</div>
      <div class="value" v-else>{{ unitValue(data.valueParameter, data.unit)}}</div>
    </div>
    <slot/>
  </div>
</template>

<script>
import unitsChange from "@/mixins/unitsChange";

export default {
  name: 'DisplayParametersComponent',
  data () {
    return {
      namesList: {},
    }
  },
  props: {
    deviceData: {
      type: Object,
      default: null
    },
    deviceType: {
      type: String
    }
  },
  mixins: [unitsChange]
}
</script>

<style scoped>

.wrapper_parameters {
  font-size: .65em;
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
