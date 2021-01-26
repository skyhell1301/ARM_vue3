<script>
export default {
  name: 'ConnectToWebSocket',
  methods: {
    connectToWS (wsUrl, store){
      console.log('Starting Connection to WebSocket Server')
      this.webSocketConnection = new WebSocket('ws://' + wsUrl)
      this.webSocketConnection.onopen = function (event) {
        console.log(event)
        console.log('Successfully connected to WebSocket Server')
      }

      this.webSocketConnection.onmessage = function (event) {
        let parameters = JSON.parse(event.data).DeviceParameters
        let lifeMark = JSON.parse(event.data).livetag
        if (parameters !== null && parameters !== undefined) {
          store.dispatch('ZSParameters/parametersUpdate', parameters)
        }
        if (lifeMark !== null && lifeMark !== undefined) {
          store.dispatch('backEndParameters/lifeMarkUpdate', lifeMark)
        }
      }
    }
  }
}
</script>
