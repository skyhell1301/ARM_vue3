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
      return this.$store.getters['devicesParameters/reservedStatusLNA']
    }
  }
}
</script>

<style scoped>

</style>