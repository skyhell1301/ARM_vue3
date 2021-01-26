<template>
  <div class="antenna-device-container">
    <display-parameters-component class="text-parameters"
                                  :device-data="antennaParameter"></display-parameters-component>
    <div class="container-control-elements">
      <select class="control-elements" name="Режим" v-model="selectedMode">
        <option v-for="mode in modes" :key="mode.id">
          {{ mode.name }}
        </option>
      </select>
      <custom-button class="control-elements" @buttonClick="sendMode">Установить режим</custom-button>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import DisplayParametersComponent from "@/components/Devices/DisplayParametersComponent";
import CustomButton from "@/components/CustomButton";

export default {
  name: 'AntennaSystemDialog',
  data() {
    return {
      modes: [
        {
          id: 1,
          name: 'Автомат',
          workmode: 0
        },
        {
          id: 2,
          name: 'По программе',
          workmode: 1
        },
      ],
      selectedMode: 'Автомат'
    }
  },
  components: {
    CustomButton,
    DisplayParametersComponent,
  },
  methods: {
    sendMode() {
      let sendsWorkmode = null
      for(let a of this.modes) {
        if (a.name === this.selectedMode) {
          sendsWorkmode = a.workmode
        }
      }
      // console.log(this.selectedMode)
      let obj = {
        id: 1,
        workmode: sendsWorkmode
      }
      this.saveDevice('http://yii-site/nomenklatura/smotrantennaupdate/' + obj.id, 'POST', null, 'qqq', JSON.stringify(obj))
    },
    saveDevice(urlApi, method, caller, jwttok, body) {
      if (jwttok != 'undefined') {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", jwttok);

        var requestOptions = {
          method: method,
          headers: myHeaders,
          body: body,
          redirect: 'follow'
        };

        fetch(urlApi, requestOptions)
            .then(response => response.json())
            .then(result => {
              if (result.token != 'undefined') {
                //console.log(result);
                if (caller != null & caller != 'undefined') caller(result);
              }
            })
            .catch(error => {
              // alert('Ошибка');
              console.log('error', error);
            });
      }
    }
  },
  computed: {
    ...mapState({
      antennaParameter: state => state.ZSParameters.antennaParametersById1
    })
  },
  mounted() {
    console.log(this.antennaParameter)
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
