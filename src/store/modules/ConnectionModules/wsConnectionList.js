const state = () => ({
    webSocketConnectionList: [
    ],
    infoMessage: {
        message: '',
        status: ''
    }
})
const mutations = {
    newConnectionToWS(state, payload) {
        // console.log(state.webSocketConnectionList)
        let pushAllowed = true
        state.webSocketConnectionList.forEach(function (item) {
            if (payload.realUrl === item.realUrl) {
                pushAllowed = false
            }
        })
        if (pushAllowed) {
            if(payload.isMain) {
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
        state.webSocketConnectionList.forEach(function (item) {
            if (payload.url === item.realUrl) {
                item.lifeMark = date.toString()
            }
        })
    },
    closeConnectionToWS(state, payload) {
        let index = null
        for (let i = 0; i < state.webSocketConnectionList.length; i++) {
            if (state.webSocketConnectionList[i].realUrl === payload) {
                index = i
                break
            }
        }
        if (index === null) {
            return
        }
        if(state.webSocketConnectionList[index] === state.mainConnection) {
            state.mainConnection = {}
        }
        state.webSocketConnectionList.splice(index, 1)
    },
    setInfoMessage(state, payload) {
        state.infoMessage = payload
    }
}
const getters = {
    getLifeMarkWS: state => url => {
        for (let conn of state.webSocketConnectionList) {
            if (conn.userUrl === url) {
                return conn
            } else {
             return null
            }
        }
    },
    getWebSocket: state => url => {
        let ws = null
        state.webSocketConnectionList.forEach(function (item) {
            if (item.userUrl === url) {
                ws = item.ws
            }
        })
        return ws
    },
    ARM1Status: state =>{
        let status = {connection: false, status: 'none'}
        state.webSocketConnectionList.forEach(function (item) {
            if (item.deviceName === 'ARM1') {
                status.connection = true
                status.status = item.status
            }
        })
        return status
    },
    ARM2Status: state =>{
        let status = {connection: false, status: 'none'}
        state.webSocketConnectionList.forEach(function (item) {
            if (item.deviceName === 'ARM2') {
                status.connection = true
                status.status = item.status
            }
        })
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
        state.webSocketConnectionList.forEach(function (item) {
            if(item.isMain) {
                address = item.ip + ':' + item.port
            }
        })
        console.log(address)
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
