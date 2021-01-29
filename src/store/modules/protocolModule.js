const state = ()=> ({
    logMessageList: [],
    counter: 1
})
const mutations = {
    addLogMessage(state, payload) {
        payload.id = state.counter
        state.logMessageList.push(payload)
        if (state.logMessageList.length > 99) {
            state.logMessageList.shift()
        }
        state.counter++
    },
    clearProtocol(state) {
        state.logMessageList = []
    }
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
