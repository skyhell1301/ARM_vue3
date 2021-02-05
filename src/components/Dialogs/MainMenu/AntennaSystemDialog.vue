<template>
  <div class="antenna-device-container">
    <display-parameters-component style="font-size: 1em;" :device-data="antennaParameters"/>
    <div class="container-control-elements">
      <select class="control-elements" name="Режим" v-model="selectedMode">
        <option v-for="mode in workModeList" :key="mode">
          {{ mode }}
        </option>
      </select>
      <custom-button class="control-elements" @buttonClick="sendMode">Установить режим</custom-button>
    </div>
  </div>
</template>

<script>
import DisplayParametersComponent from "@/components/DevicesPanel/DysplayParametersComponents/DisplayParametersComponent";
import CustomButton from "@/components/ComponentsForPopupWindow/CustomButton";
import {mapState} from "vuex";

export default {
  name: 'AntennaSystemDialog',
  data() {
    return {
      selectedMode: '',
      workModeList: ['По программе', 'Автомат']
    }
  },
  components: {
    CustomButton,
    DisplayParametersComponent,
  },
  methods: {
    updateLocalData () {
      console.log(this.antennaParameters)
      if(this.antennaParameters !== undefined) {
        this.workModeList = this.antennaParameters.workmode.val_list
      }
    },
    sendMode() {
      let obj = {id: this.antennaParameters.id.valueParameter}
      obj.workmode = this.antennaParameters.workmode.val_list.indexOf(this.selectedMode)
      this.sendMessage('http://yii-site/nomenklatura/smotrantennaupdate/' + obj.id, 'POST', null, 'qqq', JSON.stringify(obj))
    },
    sendMessage(urlApi, method, caller, jwttok, body) {
      if (jwttok != 'undefined') {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", jwttok);

        let requestOptions = {
          method: method,
          headers: myHeaders,
          body: body,
          redirect: 'follow'
        };

        fetch(urlApi, requestOptions)
            .then(response => response.json())
            .then(result => {
              if (result.token != 'undefined') {
                if (caller != null & caller != 'undefined') caller(result);
              }
            })
            .catch(error => {
              console.log('error', error);
            });
      }
    }
  },
  updated() {
    this.updateLocalData()
  },
  computed: {
    ...mapState({
      antennaParameters: state => state.ZSParameters.antennaParameters1.deviceParameters
    })
  },
  mounted() {
  }
}
</script>

<style scoped>
.antenna-device-container {
  display: grid;
  grid-template-rows: 70% 30%;
  width: 100%;
  height: 100%;
  font-size: 7vmin;
}

.container-control-elements {
  align-self: center;
  justify-self: center;
  display: flex;
}

.control-elements {
  font-size: .5em;
}

.text-parameters {
  width: 100%;
  height: 100%;
}


</style>
