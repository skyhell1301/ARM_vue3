const state = ()=> ({
    antennaSystemDialogStatus: false,
    amplifierDialogStatus: false,
    settingDialogStatus: false
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
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
