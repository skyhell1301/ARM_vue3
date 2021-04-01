<template>
  <ReserveControlComponent :redundancy-status="reservedStatus"/>
</template>

<script>
import ReserveControlComponent from "@/components/DevicesPanel/ReserveControlComponent";
export default {
  name: 'LNAReservedControlDisplay',
  components: {ReserveControlComponent},
  computed: {
    reservedStatus() {
      return this.$store.getters['devicesParameters/reservedStatusLNA'] ? 1 : 0
    }
  }
}
</script>

<style scoped>

</style>