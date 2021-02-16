const state = ()=> ({
    logMessageList: [],
    lastMessage: {},
    counter: 1
})
const mutations = {
    addLogMessage(state, payload) {
        payload.id = state.counter
        payload.time = new Date().toLocaleTimeString()
        state.lastMessage = payload
        if (state.logMessageList.length > 299) {
            state.logMessageList.shift()
        }

        state.logMessageList.push(payload)
        state.counter++
    },
    clearProtocol(state) {
        state.logMessageList = []
        state.counter = 1
    },
}

const getters = {
}

const actions = {
    addLogMessage ({commit}, payload) {
        commit('addLogMessage', payload)
    },
    clearProtocol ({commit}) {
        commit('clearProtocol')
    },
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
