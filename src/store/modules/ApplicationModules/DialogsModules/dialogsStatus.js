const state = ()=> ({
    antennaSystemDialogStatus: {status: false, focus: false},
    amplifierDialogStatus: {status: false, focus: false},
    testTranslyatorDialogStatus: {status: false, focus: false},
    MSHUDialogStatus: {status: false, focus: false},
    upConverterDialogStatus: {status: false, focus: false},

    LVSSettingDialogStatus: {status: false, focus: false},
    protocolDialogStatus: {status: false, focus: false},
    applicationSettingsDialogStatus: {status: false, focus: false}
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
    changeTestTranslyatorDialogStatus (state, payload) {
        if(state.testTranslyatorDialogStatus.status === true && payload === true) {
            state.testTranslyatorDialogStatus.focus = !state.testTranslyatorDialogStatus.focus
        } else {
            state.testTranslyatorDialogStatus.status = payload
        }
    },
    changeMSHUDialogStatus (state, payload) {
        if(state.MSHUDialogStatus.status === true && payload === true) {
            state.MSHUDialogStatus.focus = !state.MSHUDialogStatus.focus
        } else {
            state.MSHUDialogStatus.status = payload
        }
    },
    changeUpConverterDialogStatus (state, payload) {
        if(state.upConverterDialogStatus.status === true && payload === true) {
            state.upConverterDialogStatus.focus = !state.upConverterDialogStatus.focus
        } else {
            state.upConverterDialogStatus.status = payload
        }
    },


    changeLVSSettingDialogStatus (state, payload) {
        if(state.LVSSettingDialogStatus.status === true && payload === true) {
            state.LVSSettingDialogStatus.focus = !state.LVSSettingDialogStatus.focus
        } else {
            state.LVSSettingDialogStatus.status = payload
        }
    },
    changeProtocolDialogStatus (state, payload) {
        if(state.protocolDialogStatus.status === true && payload === true) {
            state.protocolDialogStatus.focus = !state.protocolDialogStatus.focus
        } else {
            state.protocolDialogStatus.status = payload
        }
    },
    changeApplicationSettingsDialogStatus (state, payload) {
        if(state.applicationSettingsDialogStatus.status === true && payload === true) {
            state.applicationSettingsDialogStatus.focus = !state.applicationSettingsDialogStatus.focus
        } else {
            state.applicationSettingsDialogStatus.status = payload
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
    changeTestTranslyatorDialogStatus ({commit}, payload) {
        commit('changeTestTranslyatorDialogStatus', payload)
    },
    changeMSHUDialogStatus ({commit}, payload) {
        commit('changeMSHUDialogStatus', payload)
    },
    changeUpConverterDialogStatus ({commit}, payload) {
        commit('changeUpConverterDialogStatus', payload)
    },

    changeLVSSettingDialogStatus ({commit}, payload) {
        commit('changeLVSSettingDialogStatus', payload)
    },
    changeProtocolDialogStatus ({commit}, payload) {
        commit('changeProtocolDialogStatus', payload)
    },
    changeApplicationSettingsDialogStatus ({commit}, payload) {
        commit('changeApplicationSettingsDialogStatus', payload)
    },


}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
