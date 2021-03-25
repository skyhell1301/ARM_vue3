<template>
  <div class="protocol-button-wrapper">
    <div class="protocol-button-border">
      <ProtocolIcon fill="#285876" width="70%" height="70%"></ProtocolIcon>
      <div class="protocol-button-title">
        <div>{{$t('Interface.protocol')}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import ProtocolIcon from '../../assets/images/SVGIconComponents/ProtocolIcon'
export default {
  name: 'ProtocolButtonComponent',
  components: {
    ProtocolIcon
  }
}
</script>

<style scoped>
.protocol-button-wrapper {
  display: grid;
  width: 100%;
  height: 100%;
  max-height: 100%;
  box-shadow: 0px 0px 3px .5px rgba(88, 88, 88, 0.8);
  border-radius: 7px;
  background: linear-gradient(45deg, #f6f1f5 0%, #fcf7fb 100%);
  justify-items: center;
  align-items: center;
}

.protocol-button-border {
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
.protocol-button-border:hover {
  background: var(--contrast-color);
  cursor: pointer;
}

.protocol-button-title {
  text-transform: uppercase;
  display: grid;
  width: 100%;
  height: 100%;
  justify-items: start;
  align-items: center;
}
</style>
