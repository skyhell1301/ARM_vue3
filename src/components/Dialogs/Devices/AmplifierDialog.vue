<template>
  <div class="amplifier-device-container">
    <display-parameters-component class="text-parameters"
                                  :device-data="amplifier1DeviceById1"></display-parameters-component>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import DisplayParametersComponent from "@/components/DevicesPanel/DysplayParametersComponents/DisplayParametersComponent";

export default {
  name: 'AmplifierDialog',
  data() {
    return {}
  },
  components: {
    DisplayParametersComponent,
  },
  methods: {
    sendMode() {
      let sendsWorkmode = null
      let obj = {
        id: 1,
        workmode: sendsWorkmode
      }
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
  computed: {
    ...mapState({
      amplifier1DeviceById1: state => state.ZSParameters.amplifier1DeviceById1
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
