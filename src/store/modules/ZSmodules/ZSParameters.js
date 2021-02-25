const state = ()=> ({
    monitoringType: '',
    monitoringState: false,
    igorUrl: 'http://smotr/monitoring/state',
    configuration: null

})
const mutations = {
    ZSParametersUpdate(state, payload) {
        state.monitoringState = payload === 'On' ? true : false
        state.monitoringType = state.monitoringState ? 'ok' : 'none'
    },
    ZSConfigurationUpdate(state, payload) {
        state.configuration = payload
    },
    setIgorUrl(state, payload) {
        state.igorUrl = payload
        console.log('URL ' + payload + ' для Игоря установлен. Ставьте лайки, подписывайтесь на канал.')
    }
}
const getters = {
}

const actions = {
    ZSParametersUpdate({commit}, payload) {
        commit('ZSParametersUpdate', payload)
    },
    ZSConfigurationUpdate({commit}, payload) {
        commit('ZSConfigurationUpdate', payload)
    },
    setIgorUrl({commit}, payload) {
        commit('setIgorUrl', payload)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
