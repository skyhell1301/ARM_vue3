<template>
  <div class="ground-container">
    <div class="ground-line vertical-ground-line"></div>
    <div class="ground-line horizontal-ground-line"></div>
  </div>
</template>

<script>
export default {
  name: 'GroundComponent',
  data () {
    return {
    }
  },
}
</script>

<style scoped>
.ground-container {
  display: grid;
}
.ground-line {
  background: var(--main-color);
}
.vertical-ground-line {
  width: 0.1vmax;
  height: 100%;
  grid-row: 1;
  grid-column: 1;
  justify-self: center;
}
.horizontal-ground-line {
  width: 100%;
  height: 0.2vmax;
  grid-row: 1;
  grid-column: 1;
  align-self: end;
}

</style>
