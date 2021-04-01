export default {
    methods: {
        connectToWS(address, deviceName, store) {
            let checkWebSocketConnection = store.getters['wsConnectionList/getWebSocket'](address.full)
            let mes = ''
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
                    //Отправка уникального ID окна клиента
                    webSocketConnection.send(JSON.stringify({'clientid': store.state.app_id}))
                }

                webSocketConnection.onmessage = function (event) {
                    // console.log(event)

                    let jsonData = JSON.parse(event.data)

                    if ('livetag' in jsonData) {
                        store.dispatch('wsConnectionList/lifeMarkUpdate', {lifeMark: jsonData.livetag, url: event.target.url})
                    }
                    if ('DeviceParameters' in jsonData) {
                        store.dispatch('devicesParameters/parametersUpdate', jsonData.DeviceParameters)
                    } else {
                        if(!store.state.ZSParameters.monitoringState) {
                            store.dispatch('devicesParameters/parametersUpdate', null)
                        }
                        store.dispatch('protocol/addLogMessage', {text: event.data})
                    }
                    if ('cyclogram' in jsonData) {
                        store.dispatch('cyclogramms/updateCyclogrammsList', jsonData.cyclogram)
                    }
                    if ('cyclogramstatus' in jsonData) {
                        store.dispatch('cyclogramms/updateCommandExecuteStatus', jsonData.cyclogramstatus)
                    }
                    if ('state' in jsonData) {
                        store.dispatch('ZSParameters/ZSParametersUpdate', jsonData.state)
                    }
                    if ('configuration' in jsonData) {
                        store.dispatch('devicesParameters/unitsConfigurationUpdate', jsonData.configuration)
                    }
                    event = null
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
                    const ARM1status = store.getters['wsConnectionList/ARM1Status']
                    const ARM2status = store.getters['wsConnectionList/ARM2Status']
                    if(!ARM1status.connection && !ARM2status.connection) {
                        store.dispatch('devicesParameters/clearParameters')
                        store.dispatch('ZSParameters/ZSParametersUpdate', 'Off')
                    }
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
                webSocketConnection = null
            } else {
                let mes = 'Данного подключения не существует'
                store.dispatch('wsConnectionList/setInfoMessage', {message: mes, status: 'error'})
                console.log(mes)
                store.dispatch('protocol/addLogMessage', {text: mes})
            }
        },
    }
}
