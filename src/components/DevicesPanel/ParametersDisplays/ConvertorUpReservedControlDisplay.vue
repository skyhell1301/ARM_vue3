<template>
  <ReserveControlComponent :redundancy-status="reservedStatus"  title="Управление резервом конвертора вверх"/>
</template>

<script>
import ReserveControlComponent from "@/components/DevicesPanel/ReserveControlComponent";
export default {
  name: 'ConvertorUpReservedControlDisplay',
  components: {ReserveControlComponent},
  computed:{
    redundancyData() {
      return this.$store.getters['devicesParameters/convertorRedundancy1']
    },
    reservedStatus() {
      return this.redundancyData?.Status.valueParameter || 0
    }
  }
}
</script>

<style scoped>

</style>