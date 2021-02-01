const state = ()=> ({
    allParameters: null,
    antennaParametersById1: null,
    antennaParametersById2: null,
    amplifier1DeviceById1: null,//{deviceParameters: Array(4), title: "УМ #1"}
    amplifier1DeviceById2: null, //{deviceParameters: Array(4), title: "УМ #2"}
    MSHUDeviceData1: null, //{deviceParameters: Array(4), title: "МШУ #1"}
    MSHUDeviceData2: null, //{deviceParameters: Array(4), title: "МШУ #2"}
    downConverterDeviceData1: null, // {deviceParameters: {…}, title: "Конвертер вниз №1 20"}
    downConverterDeviceData2: null, //{deviceParameters: {…}, title: "Конвертер вниз №2 21"}
    testTranslyatorDeviceData: null, //{deviceParameters: Array(3), title: "ТЕСТ-ТРАНСЛЯТОР"}
    upConverterDeviceData1: null, // {deviceParameters: {…}, title: "Конвертер вверх №1 20"}
    upConverterDeviceData2: null,
})
const mutations = {
    parametersUpdate(state, payload) {
        state.allParameters = payload
        state.antennaParametersById1 = payload.antennaDeviceDataById[1]
        state.antennaParametersById2 = payload.antennaDeviceDataById[2]
        state.amplifier1DeviceById1 = payload.amplifier1DeviceData1.deviceParameters
        state.amplifier1DeviceById2 = payload.amplifier1DeviceData2.deviceParameters
        state.MSHUDeviceData1 = payload.MSHUDeviceData1.deviceParameters
        state.MSHUDeviceData2 = payload.MSHUDeviceData2.deviceParameters
        state.downConverterDeviceData1 = payload.downConverterDeviceData1.deviceParameters
        state.downConverterDeviceData2 = payload.downConverterDeviceData2.deviceParameters
        state.testTranslyatorDeviceData = payload.testTranslyatorDeviceData.deviceParameters
        state.upConverterDeviceData1 = payload.upConverterDeviceData1.deviceParameters
        state.upConverterDeviceData2 = payload.upConverterDeviceData2.deviceParameters
        // console.log(state.testTranslyatorDeviceData)
    }
}
const getters = {
}
const actions = {
    parametersUpdate({commit}, payload) {
        commit('parametersUpdate', payload)
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
