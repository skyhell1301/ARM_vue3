const state = ()=> ({
    antennaSystemDialogStatus: false,
    amplifierDialogStatus: false,
    settingDialogStatus: false,
    protocolDialogStatus: false
})
const mutations = {
    changeAntennaSystemDialogStatus (state, payload) {
        state.antennaSystemDialogStatus = payload
    },
    changeAmplifierDialogStatus (state, payload) {
        state.amplifierDialogStatus = payload
    },
    changeSettingDialogStatus (state, payload) {
        state.settingDialogStatus = payload
    },
    changeProtocolDialogStatus (state, payload) {
        state.protocolDialogStatus = payload
    },
}
const getters = {
}
const actions = {
    changeAntennaSystemDialogStatus ({commit}, payload) {
        commit('changeAntennaSystemDialogStatus', payload)
    },
    changeAmplifierDialogStatus ({commit}, payload) {
        commit('changeAmplifierDialogStatus', payload)
    },
    changeSettingDialogStatus ({commit}, payload) {
        commit('changeSettingDialogStatus', payload)
    },
    changeProtocolDialogStatus ({commit}, payload) {
        commit('changeProtocolDialogStatus', payload)
    },
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
