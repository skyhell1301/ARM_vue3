export default {
    methods: {
        unitValue (value, unit) {
            if(unit === 'Hz') {
                return (value / 1e9).toFixed(3)
            }
            return value
        },
        unitName (unit) {
            if(unit === 'Hz') {
                return 'GHz'
            }
            return unit
        }
    }
}
