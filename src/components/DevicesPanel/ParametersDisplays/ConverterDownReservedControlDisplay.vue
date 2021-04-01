<template>
  <ReserveControlComponent :redundancy-status="reservedStatus"  title="Управление резервом конвертора вниз"/>
</template>

<script>
import ReserveControlComponent from "@/components/DevicesPanel/ReserveControlComponent";
export default {
  name: 'ConvertorDownReservedControlDisplay',
  components: {ReserveControlComponent},
  computed:{
    redundancyData() {
      return this.$store.getters['devicesParameters/convertorRedundancy2']
    },
    reservedStatus() {
      return this.redundancyData?.Status.valueParameter || 0
    }
  }
}
</script>

<style scoped>

</style>