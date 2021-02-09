export default {
    methods: {
        connectToWS(wsUrl, deviceName, store) {
            console.log('qqqqqqqqqq')

            this.store = store
            let checkWebSocketConnection = store.getters['wsConnectionList/getWebSocket'](wsUrl)
            let mes
            if (checkWebSocketConnection === null && wsUrl !== '') {

                mes = 'Начало подключения к WebSocket серверу (url: ws://' + wsUrl + ')'
                console.log(mes)
                store.dispatch('protocol/addLogMessage', {text: mes})
                store.dispatch('wsConnectionList/setInfoMessage', {message: mes, status: 'ok'})

                let webSocketConnection = new WebSocket('ws://' + wsUrl)

                webSocketConnection.onopen = function (event) {
                    mes = 'Соединение установлено c WebSocket сервером (url: ' + event.target.url + ')'
                    console.log(mes)
                    store.dispatch('protocol/addLogMessage', {text: mes})
                    store.dispatch('wsConnectionList/setInfoMessage', {message: mes, status: 'ok'})
                    let connectWS = {
                        ws: webSocketConnection,
                        deviceName: deviceName,
                        status: 'ok',
                        userUrl: wsUrl,
                        realUrl: event.target.url,
                        lifeMark: new Date().toString(),
                    }
                    store.dispatch('wsConnectionList/newConnectionToWS', connectWS)
                }

                webSocketConnection.onmessage = function (event) {
                    // let logMessage = {text: event.data}
                    // console.log(event.data)
                    store.dispatch('protocol/addLogMessage', {text: event.data})
                    // let parameters = JSON.parse(event.data).DeviceParameters
                    let ZSData = JSON.parse(event.data)
                    let lifeMark = JSON.parse(event.data).livetag
                    // if(lifeMark !== undefined)
                    // store.dispatch('protocol/addLogMessage', {text: lifeMark})

                    if (lifeMark !== null && lifeMark !== undefined) {
                        store.dispatch('wsConnectionList/lifeMarkUpdate', {lifeMark: lifeMark, url: event.target.url})
                    } else {
                        if (ZSData !== null && ZSData !== undefined) {
                            if (ZSData.DeviceParameters !== null && ZSData.DeviceParameters !== undefined) {
                                store.dispatch('devicesParameters/parametersUpdate', ZSData.DeviceParameters)
                            }
                            store.dispatch('ZSParameters/ZSParametersUpdate', ZSData)
                        }
                    }
                }

                webSocketConnection.onclose = function (event) {
                    if (event.wasClean) {
                        mes = `Соединение закрыто чисто, код=${event.code}. Причина= ${event.reason}`
                        store.dispatch('wsConnectionList/setInfoMessage', {message: mes, status: 'ok'})
                        console.log(mes)
                        store.dispatch('protocol/addLogMessage', {text: mes})
                    } else {
                        mes = `Соединение прервано, код=${event.code}`
                        store.dispatch('wsConnectionList/setInfoMessage', {message: mes, status: 'error'})
                        console.log(mes)
                        store.dispatch('protocol/addLogMessage', {text: mes})
                    }
                    store.dispatch('wsConnectionList/closeConnectionToWS', event.target.url)
                }
            } else {
                if (wsUrl !== '') {
                    mes = 'Уже имеется подключение до данному url: ws://' + wsUrl
                    store.dispatch('wsConnectionList/setInfoMessage', {message: mes, status: 'error'})
                    console.log(mes)
                    store.dispatch('protocol/addLogMessage', {text: mes})
                } else {
                    mes = 'Введите URL WebSocket сервера'
                    store.dispatch('wsConnectionList/setInfoMessage', {message: mes, status: 'error'})
                    console.log(mes)
                    store.dispatch('protocol/addLogMessage', {text: mes})
                }
            }
        },


        closeConnectToWS(wsUrl, store) {
            let webSocketConnection = store.getters['wsConnectionList/getWebSocket'](wsUrl)
            if (webSocketConnection !== null) {
                webSocketConnection.close(1000, 'Инициализация отключения состороны клиента')
            } else {
                let mes = 'Данного подключения не существует'
                store.dispatch('wsConnectionList/setInfoMessage', {message: mes, status: 'error'})
                console.log(mes)
                store.dispatch('protocol/addLogMessage', {text: mes})
            }
        },
    }
}