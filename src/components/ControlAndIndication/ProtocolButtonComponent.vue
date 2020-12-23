<template>
  <div class="protocol-button-container">
    <div class="protocol-button-border-div">
      <ProtocolIcon fill="#285876" width="80%" height="80%"></ProtocolIcon>
      <div class="protocol-button-title">ПРОТОКОЛ</div>
    </div>
  </div>
</template>

<script>
import ProtocolIcon from '../../assets/images/SVGIconComponents/ProtocolIcon'
export default {
  name: 'ProtocolButtonComponent',
  components: {ProtocolIcon}
}
</script>

<style scoped>
.protocol-button-container {
  display: grid;
  width: 95%;
  height: 95%;
  border: 1px black solid;
  border-radius: 7px;
  background: linear-gradient(45deg, #f6f1f5 0%, #fcf7fb 100%);
  justify-items: center;
  align-items: center;
}

.protocol-button-border-div {
  width: 95%;
  height: 80%;
  border: 2px solid #285876;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 25% 75%;
  justify-items: center;
  align-items: center;
  transition: all .3s;
}
.protocol-button-border-div:hover {
  background: #00d6ff;
  cursor: pointer;
}

.protocol-button-title {
  justify-self: start;
}
</style>
