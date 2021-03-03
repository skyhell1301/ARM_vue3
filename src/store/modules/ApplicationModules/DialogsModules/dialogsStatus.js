const state = ()=> ({
    antennaSystemDialogStatus: {status: false, focus: false},
    amplifierDialogStatus: {status: false, focus: false},
    testTranslatorDialogStatus: {status: false, focus: false},
    LNADialogStatus: {status: false, focus: false},
    upConverterDialogStatus: {status: false, focus: false},

    LANSettingsDialogStatus: {status: false, focus: false},
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
    changeTestTranslatorDialogStatus (state, payload) {
        if(state.testTranslatorDialogStatus.status === true && payload === true) {
            state.testTranslatorDialogStatus.focus = !state.testTranslatorDialogStatus.focus
        } else {
            state.testTranslatorDialogStatus.status = payload
        }
    },
    changeLNADialogStatus (state, payload) {
        if(state.LNADialogStatus.status === true && payload === true) {
            state.LNADialogStatus.focus = !state.LNADialogStatus.focus
        } else {
            state.LNADialogStatus.status = payload
        }
    },
    changeUpConverterDialogStatus (state, payload) {
        if(state.upConverterDialogStatus.status === true && payload === true) {
            state.upConverterDialogStatus.focus = !state.upConverterDialogStatus.focus
        } else {
            state.upConverterDialogStatus.status = payload
        }
    },


    changeLANSettingsDialogStatus (state, payload) {
        if(state.LANSettingsDialogStatus.status === true && payload === true) {
            state.LANSettingsDialogStatus.focus = !state.LANSettingsDialogStatus.focus
        } else {
            state.LANSettingsDialogStatus.status = payload
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
    changeTestTranslatorDialogStatus ({commit}, payload) {
        commit('changeTestTranslatorDialogStatus', payload)
    },
    changeLNADialogStatus ({commit}, payload) {
        commit('changeLNADialogStatus', payload)
    },
    changeUpConverterDialogStatus ({commit}, payload) {
        commit('changeUpConverterDialogStatus', payload)
    },

    changeLANSettingsDialogStatus ({commit}, payload) {
        commit('changeLANSettingsDialogStatus', payload)
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
