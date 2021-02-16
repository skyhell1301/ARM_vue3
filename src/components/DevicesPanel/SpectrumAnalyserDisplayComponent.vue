<template>
  <div class="spectrum-analyser-container">
    <svg class="spectrum" viewBox="0 0 170 100" preserveAspectRatio="none">
      <rect width="100%" height="100%" fill="black"/>
      <path d="M 6 94 C 6 94 14 90 20 84 C 24 78 26.466 73.581 32 72 C 34 78 35.792 80.717 40 80 C 46.2 78.944 50 66 50 66 C 50 66 52.667 74 56 74 C 58 74 60 64 62 62 C 63.7 60.3 65.629 66.393 68 66 C 70.193 65.637 71.004 62.665 72.06 60.709 C 80 46 82 4 88 4 C 92 4 98 66 102.654 66.631 C 105.728 67.048 103.548 54.648 108 56 C 111.94 57.196 114 68 118 70 C 120.686 71.343 122.269 62.066 122.269 62.066 C 122.269 62.066 122.818 74.56 127.574 76.253 C 131.029 77.483 136 74 137.073 70.702 C 142 74 144 78 148 84 C 154 90 164 94 164 94"
            fill="none"
            stroke="red"
            stroke-width="1px"
      />
    </svg>
    <div class="buttons-container">
      <div class="button-1 buttons"></div>
      <div class="button-2 buttons"></div>
      <div class="button-3 buttons"></div>
      <div class="button-4 buttons"></div>
      <div class="button-5 buttons"></div>
      <div class="button-6 buttons"></div>
      <div class="button-7 buttons"></div>
      <div class="button-8 buttons"></div>
      <div class="button-9 buttons"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpectrumAnalyserDisplayComponent'
}
</script>

<style scoped>
.spectrum-analyser-container {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 80% 20%;
  justify-items: center;
  align-items: center;
}
.spectrum {
  border-radius: 3%;
  height: 97%;
  width: 98%;
  grid-column: 1;
}

.buttons-container {
  width: 100%;
  height: 100%;
  grid-column: 2;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 33% 33% 33%;
}
.buttons {
  justify-self: center;
  align-self: center;
  background: linear-gradient(135deg, rgb(158, 158, 158) 0%, rgb(243, 240, 240) 100%);
  box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.3);
  height: 25%;
  width: 55%;
  border-radius: 20%;
}
</style>
