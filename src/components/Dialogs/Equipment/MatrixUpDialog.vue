<template>
  <div class="matrix-up-dialog__wrapper">
    <MatrixView class="matrix-up-dialog__matrix" :input-parameters="localData"></MatrixView>
    <div class="matrix-up-dialog__control-container" ref="output_input">
      <div v-for="out in localData" :key="out" >
        <label>Output {{out.nameParameter}}</label>
        <input type="number" max="8" min="0" v-model="out.valueParameter">
      </div>
      <custom-button @buttonClick="setMatrixData">Установить</custom-button>
    </div>
  </div>
</template>

<script>
import MatrixView from "@/components/DevicesPanel/MatrixView";
import CustomButton from "@/components/CustomSimpleComponents/CustomButton";
import REST from "@/mixins/REST";

export default {
  name: 'MatrixUpDialog',
  data() {
    return {
      connectList: [0, 0, 0, 0, 0, 0, 0, 0],
      localData: {
        Output1: {valueParameter: 0, nameParameter: '1'},
        Output2: {valueParameter: 0, nameParameter: '2'},
        Output3: {valueParameter: 0, nameParameter: '3'},
        Output4: {valueParameter: 0, nameParameter: '4'},
        Output5: {valueParameter: 0, nameParameter: '5'},
        Output6: {valueParameter: 0, nameParameter: '6'},
        Output7: {valueParameter: 0, nameParameter: '7'},
        Output8: {valueParameter: 0, nameParameter: '8'}
      }
    }
  },
  components: {CustomButton, MatrixView},
  mixins:[REST],
  methods: {
    async setMatrixData () {
      let context = this
      let response = await this.sendRESTCommand('http://yii-site/nomenklatura/smotrmatrixupdate/30', 'POST',
          null, 'qqq', JSON.stringify(this.localData))
      if (response.ok) {
        context.$store.dispatch('protocol/addLogMessage', {text: 'Конфигурация установлена'})
      } else {
        response.text().then(function (text) {
          context.$store.dispatch('protocol/addLogMessage', {text: text})
        })
      }
    }
  },
  mounted() {
    if(this.MatrixUpData) {
      for(let outKey in this.MatrixUpData) {
        this.localData[outKey].valueParameter = this.MatrixUpData[outKey].valueParameter
      }
    }
  },
  computed: {
    MatrixUpData () {
      return this.$store.getters['devicesParameters/matrixUpParameters']?.deviceParameters
    }
  },
  watch: {
    localData () {
      console.log(this.localData)
    }
  }
}
</script>

<style scoped>
.matrix-up-dialog__wrapper {
  font-size: 1.5em;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: 80% 20%;
  justify-items: center;
  align-items: center;
}

.matrix-up-dialog__matrix {
  box-shadow: inset 0px 0px 5px .5px rgba(88, 88, 88, 0.8);
  height: 70%;
  width: 80%;
}

.matrix-up-dialog__control-container {
  display: flex;
  flex-direction: column;
}
</style>