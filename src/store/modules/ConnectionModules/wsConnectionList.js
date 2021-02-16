const state = () => ({
    webSocketConnectionList: [],
    infoMessage: {
        message: '',
        status: ''
    }
})
const mutations = {
    newConnectionToWS(state, payload) {
        let pushAllowed = state.webSocketConnectionList.find(wsConn => wsConn.realUrl === payload.realUrl) === undefined ? true : false
        if (pushAllowed) {
            if (payload.isMain) {
                state.webSocketConnectionList.forEach(function (item) {
                    item.isMain = false
                })
            }
            state.webSocketConnectionList.push(payload)
        }
    },
    lifeMarkUpdate(state, payload) {
        let pattern = /(\d{2})\.(\d{2})\.(\d{4})/
        let date = new Date(payload.lifeMark.replace(pattern, '$3-$2-$1'))
        let wsConnection = state.webSocketConnectionList.find(wsConn => wsConn.realUrl === payload.url)
            if (wsConnection) {
                wsConnection.lifeMark = date.toString()
            }
    },
    closeConnectionToWS(state, payload) {
        const wsCon = state.webSocketConnectionList.find(wsConn => wsConn.realUrl === payload)
        let index = state.webSocketConnectionList.indexOf(wsCon)
        if (index === -1) return
        state.webSocketConnectionList.splice(index, 1)
    },
    setInfoMessage(state, payload) {
        state.infoMessage = payload
    }
}
const getters = {
    getWebSocket: state => url => {
        let ws = state.webSocketConnectionList.find(wsCon => wsCon.userUrl === url)
        return ws
    },
    ARM1Status: state => {
        let status = {connection: false, status: 'none'}
        const ws = state.webSocketConnectionList.find(webSocket => webSocket.deviceName === 'ARM1')
        if (ws !== undefined) {
            status.connection = true
            status.status = ws.status
        }
        return status
    },
    ARM2Status: state => {
        let status = {connection: false, status: 'none'}
        const ws = state.webSocketConnectionList.find(webSocket => webSocket.deviceName === 'ARM2')
        if (ws !== undefined) {
            status.connection = true
            status.status = ws.status
        }
        return status
    },
    getNamesConnections: state => {
        let list = []
        state.webSocketConnectionList.forEach(function (item) {
            list.push(item.deviceName)
        })
        return list
    },
    getMainConnectionAddress: state => {
        let address = null
        const ws = state.webSocketConnectionList.find(webSocket => webSocket.isMain)
        if (ws !== undefined) {
            address = ws.ip + ':' + ws.port
        }
        return address
    }
}
const actions = {
    lifeMarkUpdate({commit}, payload) {
        commit('lifeMarkUpdate', payload)
    },
    newConnectionToWS({commit}, payload) {
        commit('newConnectionToWS', payload)
    },
    closeConnectionToWS({commit}, payload) {
        commit('closeConnectionToWS', payload)
    },
    setInfoMessage({commit}, payload) {
        commit('setInfoMessage', payload)
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
