<template>
  <div class="stand-as-container">
    <svg class="svg-stand" viewBox="0 0 80 80">
      <path d="M 13 50 L 30 50 L 30 55 L 13 55 Z M 13 31 L 30 31 L 30 36 L 13 36 Z M 13 12 L 30 12 L 30 17 L 13 17 Z M 34 66 L 8 66 C 8 66 6 66 4 64 C 2 62 2 60 2 60 L 2 8 C 2 8 2 6 4 4 C 6 2 8 2 8 2 L 64 2 C 64 2 66 2 68 4 C 70 6 70 8 70 8 L 70 36 L 63.89 36.005 L 63.955 27.928 L 9.909 27.928 L 10 40 L 33.944 40.142 L 34.01 46.249 L 10.041 46.249 L 10 57 C 10 57 10 58 11 59 C 12 60 13 60 13 60 L 34.076 59.909 Z M 10 21 L 64 21 L 64 8 L 10 8 Z M 54 31 L 60 31 L 60 35 C 60 35 59 37 57 37 C 55 37 54 35 54 35 Z M 44 31 L 50 31 L 50 35 C 50 35 49 37 47 37 C 45 37 44 35 44 35 Z M 44 12 L 50 12 L 50 16 C 50 16 49 18 47 18 C 45 18 44 16 44 16 Z M 54 12 L 60 12 L 60 16 C 60 16 59 18 57 18 C 55 18 54 16 54 16 Z M 43 55 L 60 40 L 62 40 L 78 55 L 78 63 L 61 48 L 43 63 Z M 53 61 L 53 78 L 47 78 L 47 66 Z M 74 66 L 74 78 L 68 78 L 68 61 Z"
            fill="rgb(127, 127, 127)"
      />
    </svg>
    <div class="border-div"></div>
    <div class="stand-title">К стойке АС</div>
  </div>
</template>

<script>
export default {
  name: 'StandAntannaSystemComponent'
}
</script>

<style scoped>
.stand-as-container {
  font-family: "sans-serif";
  font-size: .7em;
  font-weight: bold;
  display: grid;
  grid-template-rows: 70% 3% 27%;
  justify-items: center;
  align-items: center;
  border: 2px solid rgb(127, 127, 127);
  border-radius: 5%;
}
.svg-stand {
  width: 100%;
  height: 90%;
}
.border-div {
  width: 100%;
  height: 100%;
  border-top: 1px solid rgb(127, 127, 127);
}
.stand-title {
  margin-top: 5%;
  width: 100%;
  height: 100%;
}
</style>
