<script>
export default {
  name: 'ConnectToWebSocket',
  data () {
    return {
      webSocketConnectionList: null,
      webSocketConnection: null
    }
  },
  methods: {
    connectToWS (wsUrl, store){
      let checkWebSocketConnection = store.getters['connectionList/getWebSocket'](`ws://${wsUrl}/`)
      let mes
      if(checkWebSocketConnection === null) {
        mes = 'Начало подключения к WebSocket серверу (url: ws://' + wsUrl + ')'
        console.log(mes)
        store.dispatch('connectionList/setInfoMessage', {message: mes, status: 'ok'})
        let webSocketConnection = new WebSocket('ws://' + wsUrl)
        webSocketConnection.onopen = function (event) {
          // console.log(event)
          mes = 'Соединение установлено c WebSocket сервером (url: ws://' + wsUrl + ')'
          console.log(mes)
          store.dispatch('connectionList/setInfoMessage', {message: mes, status: 'ok'})
          let connectWS = {
            ws: webSocketConnection,
            url: event.target.url,
            lifeMark: new Date(),
          }
          store.dispatch('connectionList/newConnectionToWS', connectWS)
        }

        webSocketConnection.onmessage = function (event) {
          console.log(event.data)
          let parameters = JSON.parse(event.data).DeviceParameters
          let lifeMark = JSON.parse(event.data).livetag
          if (parameters !== null && parameters !== undefined) {
            store.dispatch('ZSParameters/parametersUpdate', parameters)
          }
          if (lifeMark !== null && lifeMark !== undefined) {
            store.dispatch('connectionList/lifeMarkUpdate', {lifeMark: lifeMark, url: event.target.url})
          }
        }

        webSocketConnection.onclose = function (event) {
          if (event.wasClean) {
            mes = `Соединение закрыто чисто, код=${event.code}. Причина= ${event.reason}`
            store.dispatch('connectionList/setInfoMessage', {message: mes, status: 'ok'})
            console.log(mes)
          } else {
            mes = `Соединение прервано, код=${event.code}`
            store.dispatch('connectionList/setInfoMessage', {message: mes, status: 'error'})
            console.log(mes)
          }
          store.dispatch('connectionList/closeConnectionToWS', event.target.url)
        }
      } else {
        mes = 'Уже имеется подключение до данному url: ws://' + wsUrl
        store.dispatch('connectionList/setInfoMessage', {message: mes, status: 'error'})
        console.log(mes)
      }
    },
    closeConnectToWS (wsUrl, store) {
      let webSocketConnection = store.getters['connectionList/getWebSocket'](`ws://${wsUrl}/`)
      if (webSocketConnection !== null) {
        webSocketConnection.close(1000, 'Инициализация отключения состороны клиента')
      } else {
        let mes = 'Данного подключения не существует'
        store.dispatch('connectionList/setInfoMessage', {message: mes, status: 'error'})
        console.log(mes)
      }
    }
  }
}
</script>
