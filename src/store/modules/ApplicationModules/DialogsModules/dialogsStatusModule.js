const state = ()=> ({
    antennaSystemDialogStatus: {status: false, focus: false},
    amplifierDialogStatus: {status: false, focus: false},
    settingDialogStatus: {status: false, focus: false},
    protocolDialogStatus: {status: false, focus: false}
})
const mutations = {
    changeAntennaSystemDialogStatus (state, payload) {
        if(state.antennaSystemDialogStatus.status === true && payload === true) {
            state.antennaSystemDialogStatus.focus = !state.antennaSystemDialogStatus.focus
        } else {
            state.antennaSystemDialogStatus.status = payload
        }
    },
    changeAmplifierDialogStatus (state, payload) {
        if(state.amplifierDialogStatus.status === true && payload === true) {
            state.amplifierDialogStatus.focus = !state.amplifierDialogStatus.focus
        } else {
            state.amplifierDialogStatus.status = payload
        }
    },
    changeSettingDialogStatus (state, payload) {
        if(state.settingDialogStatus.status === true && payload === true) {
            state.settingDialogStatus.focus = !state.settingDialogStatus.focus
        } else {
            state.settingDialogStatus.status = payload
        }
    },
    changeProtocolDialogStatus (state, payload) {
        if(state.protocolDialogStatus.status === true && payload === true) {
            state.protocolDialogStatus.focus = !state.protocolDialogStatus.focus
        } else {
            state.protocolDialogStatus.status = payload
        }
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
