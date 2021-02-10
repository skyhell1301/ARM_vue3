const state = ()=> ({
    allParameters: {},
    monitoringType: '',
    monitoringState: false

})
const mutations = {
    ZSParametersUpdate(state, payload) {
        state.allParameters = payload
        state.monitoringState = payload.state === 'On' ? true : false
        state.monitoringType = state.monitoringState ? 'ok' : 'none'
    }
}
const getters = {
}

const actions = {
    ZSParametersUpdate({commit}, payload) {
        commit('ZSParametersUpdate', payload)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
