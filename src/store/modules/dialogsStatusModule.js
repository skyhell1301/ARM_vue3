const state = ()=> ({
    antennaSystemDialogStatus: false,
    amplifierDialogStatus: false
})
const mutations = {
    changeAntennaSystemDialogStatus (state, payload) {
        state.antennaSystemDialogStatus = payload
    },
    changeAmplifierDialogStatus (state, payload) {
        state.amplifierDialogStatus = payload
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
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
