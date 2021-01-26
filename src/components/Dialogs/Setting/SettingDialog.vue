<template>
  <div class="container-setting">
    <div>Web Socket</div>
    <input type="text" v-model="wsUrl">
    <custom-button @buttonClick="connectWS">Соединение</custom-button>
  </div>
</template>

<script>
import CustomButton from "@/components/CustomButton";
export default {
  name: 'SettingDialog',
  components: {
    CustomButton
  },
  data () {
    return {
      wsUrl: '10.10.0.16:8081'
    }
  },
  methods: {
    connectWS () {
      this.$root.connectToWS(this.wsUrl)
      // Create a new WebSocket.

    }
  }
}
</script>

<style scoped>

</style>
