<script>
export default {
  name: 'ConnectToWebSocket',
  data () {
    return {
      store: null
    }
  },
  methods: {
    connectToWS (wsUrl, store){
      this.store = store
      let checkWebSocketConnection = store.getters['wsConnectionList/getWebSocket'](wsUrl)
      let mes
      if(checkWebSocketConnection === null && wsUrl !== '') {

        mes = 'Начало подключения к WebSocket серверу (url: ws://' + wsUrl + ')'
        console.log(mes)
        store.dispatch('wsConnectionList/setInfoMessage', {message: mes, status: 'ok'})

        let webSocketConnection = new WebSocket('ws://' + wsUrl)

        webSocketConnection.onopen = function (event) {
          mes = 'Соединение установлено c WebSocket сервером (url: ' + event.target.url + ')'
          console.log(mes)
          store.dispatch('wsConnectionList/setInfoMessage', {message: mes, status: 'ok'})
          let connectWS = {
            ws: webSocketConnection,
            userUrl: wsUrl,
            realUrl: event.target.url,
            lifeMark: new Date().toString(),
          }
          store.dispatch('wsConnectionList/newConnectionToWS', connectWS)
        }

        webSocketConnection.onmessage = function (event) {
          // console.log(event.data)
          let logMessage = {text: event.data}
          store.dispatch('protocol/addLogMessage', logMessage)
          let parameters = JSON.parse(event.data).DeviceParameters
          let lifeMark = JSON.parse(event.data).livetag
          if (parameters !== null && parameters !== undefined) {
            store.dispatch('ZSParameters/parametersUpdate', parameters)
          }
          if (lifeMark !== null && lifeMark !== undefined) {
            store.dispatch('wsConnectionList/lifeMarkUpdate', {lifeMark: lifeMark, url: event.target.url})
          }
        }

        webSocketConnection.onclose = function (event) {
          if (event.wasClean) {
            mes = `Соединение закрыто чисто, код=${event.code}. Причина= ${event.reason}`
            store.dispatch('wsConnectionList/setInfoMessage', {message: mes, status: 'ok'})
            console.log(mes)
          } else {
            mes = `Соединение прервано, код=${event.code}`
            store.dispatch('wsConnectionList/setInfoMessage', {message: mes, status: 'error'})
            console.log(mes)
          }
          store.dispatch('wsConnectionList/closeConnectionToWS', event.target.url)
        }
      } else {
        if (wsUrl !== '') {
          mes = 'Уже имеется подключение до данному url: ws://' + wsUrl
          store.dispatch('wsConnectionList/setInfoMessage', {message: mes, status: 'error'})
          console.log(mes)
        } else {
          mes = 'Введите URL WebSocket сервера'
          store.dispatch('wsConnectionList/setInfoMessage', {message: mes, status: 'error'})
          console.log(mes)
        }
      }
    },

    closeConnectToWS (wsUrl, store) {
      let webSocketConnection = store.getters['wsConnectionList/getWebSocket'](wsUrl)
      // console.log(webSocketConnection)
      if (webSocketConnection !== null) {
        webSocketConnection.close(1000, 'Инициализация отключения состороны клиента')
      } else {
        let mes = 'Данного подключения не существует'
        store.dispatch('wsConnectionList/setInfoMessage', {message: mes, status: 'error'})
        console.log(mes)
      }
    },
  }
}
</script>
