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
        let pushAllowed = true
        state.webSocketConnectionList.forEach(function (item) {
            if (payload.url === item.url) {
                pushAllowed = false
            }
        })
        if (pushAllowed) {
            state.webSocketConnectionList.push(payload)
        }
    },
    lifeMarkUpdate(state, payload) {
        let pattern = /(\d{2})\.(\d{2})\.(\d{4})/
        state.webSocketConnectionList.forEach(function (item) {
            if (payload.url === item.url) {
                item.lifeMark = new Date(payload.lifeMark.replace(pattern, '$3-$2-$1'))
            }
        })
    },
    closeConnectionToWS(state, payload) {
        let index = null
        for (let i = 0; i < state.webSocketConnectionList.length; i++) {
            if (state.webSocketConnectionList[i].url === payload) {
                index = i
                break
            }
        }
        if (index === null) {
            return
        }
        state.webSocketConnectionList.splice(index, 1)
    },
    setInfoMessage(state, payload) {
        state.infoMessage = payload
    }
}
const getters = {
    getLifeMarkWS(state, url) {
        for (let conn of state.webSocketConnectionList) {
            if (conn.url === url) {
                return conn
            } else {
             return null
            }
        }
    },
    getWebSocket: state => url => {
        let ws = null
        state.webSocketConnectionList.forEach(function (item) {
            if (item.url === url) {
                ws = item.ws
            }
        })
        return ws
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
