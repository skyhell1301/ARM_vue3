export default {
    methods: {
        connectToWS(address, deviceName, store) {
            this.store = store
            let checkWebSocketConnection = store.getters['wsConnectionList/getWebSocket'](address.full)
            let mes
            if (checkWebSocketConnection === null && address.full !== '' || checkWebSocketConnection === undefined && address.full !== '') {

                mes = 'Начало подключения к WebSocket серверу (url: ws://' + address.full + ')'
                console.log(mes)
                store.dispatch('protocol/addLogMessage', {text: mes})
                store.dispatch('wsConnectionList/setInfoMessage', {message: mes, status: 'ok'})

                let webSocketConnection = new WebSocket('ws://' + address.full)

                webSocketConnection.onopen = function (event) {
                    mes = 'Соединение установлено c WebSocket сервером (url: ' + event.target.url + ')'
                    console.log(mes)
                    store.dispatch('protocol/addLogMessage', {text: mes})
                    store.dispatch('wsConnectionList/setInfoMessage', {message: mes, status: 'ok'})
                    let connectWS = {
                        ws: webSocketConnection,
                        deviceName: deviceName,
                        ip: address.ip,
                        port: address.port,
                        url: address.url,
                        isMain: address.isMain,
                        status: 'ok',
                        userUrl: address.full,
                        realUrl: event.target.url,
                        lifeMark: new Date().toString(),
                    }
                    store.dispatch('wsConnectionList/newConnectionToWS', connectWS)
                }

                webSocketConnection.onmessage = function (event) {
                    // console.log(event.data)
                    store.dispatch('protocol/addLogMessage', {text: event.data})
                    let parameters = JSON.parse(event.data)?.DeviceParameters
                    let ZSData = JSON.parse(event.data)?.state
                    let lifeMark = JSON.parse(event.data)?.livetag
                    let configuration = JSON.parse(event.data)?.configuration

                    if (lifeMark !== null && lifeMark !== undefined) {
                        store.dispatch('wsConnectionList/lifeMarkUpdate', {lifeMark: lifeMark, url: event.target.url})
                    }
                    if (parameters !== null && parameters !== undefined) {
                        store.dispatch('devicesParameters/parametersUpdate', parameters)
                    }
                    if (ZSData !== null && ZSData !== undefined) {
                        store.dispatch('ZSParameters/ZSParametersUpdate', ZSData)
                    }
                    if (configuration !== null && configuration !== undefined) {
                        store.dispatch('devicesParameters/unitsConfigurationUpdate', configuration)
                    }
                }

                webSocketConnection.onclose = function (event) {
                    if (event.wasClean) {
                        mes = `Соединение c ${event.target.url} закрыто чисто, код=${event.code}. Причина: ${event.reason}`
                        store.dispatch('wsConnectionList/setInfoMessage', {message: mes, status: 'ok'})
                        console.log(mes)
                        store.dispatch('protocol/addLogMessage', {text: mes})
                    } else {
                        mes = `Соединение c ${event.target.url} прервано, код=${event.code}`
                        store.dispatch('wsConnectionList/setInfoMessage', {message: mes, status: 'error'})
                        console.log(mes)
                        store.dispatch('protocol/addLogMessage', {text: mes})
                    }
                    store.dispatch('wsConnectionList/closeConnectionToWS', event.target.url)
                }
            } else {
                if (address.full !== '') {
                    mes = 'Уже имеется подключение до данному url: ws://' + address.full
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
            let webSocketConnection = store.getters['wsConnectionList/getWebSocket'](wsUrl.full)
            // console.log(webSocketConnection)
            if (webSocketConnection !== null && webSocketConnection !== undefined) {
                webSocketConnection.ws.close(1000, 'Инициализация отключения состороны клиента')
            } else {
                let mes = 'Данного подключения не существует'
                store.dispatch('wsConnectionList/setInfoMessage', {message: mes, status: 'error'})
                console.log(mes)
                store.dispatch('protocol/addLogMessage', {text: mes})
            }
        },
    }
}
