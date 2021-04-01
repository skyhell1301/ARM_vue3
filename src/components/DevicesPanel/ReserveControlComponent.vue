<template>
  <div class="reserve-control__wrapper">
    <div class="vertical-line-up connect-line-status"></div>
    <div class="reserve-control__container">
      <div class="reserve-control__switch-container switch-container-in">
        <SwitchComponent :is-reserved="isReserved" class="switch switch-up"/>
        <GroundComponent class="switch-container__ground ground-up"/>
      </div>
      <div class="reserve-control__title-container">
        <div class="reserve-control__title">УР</div>
      </div>
      <div class="reserve-control__switch-container switch-container-out">
        <GroundComponent class="switch-container__ground ground-down"/>
        <SwitchComponent :is-reserved="!isReserved" class="switch switch-down"/>
      </div>
    </div>
    <div class="vertical-line-down connect-line-status"></div>
  </div>
</template>

<script>
import SwitchComponent from "@/components/DevicesPanel/SwitchComponent";
import GroundComponent from "@/components/DevicesPanel/GroundComponent";

export default {
  name: 'ReserveControlComponent',
  components: {GroundComponent, SwitchComponent},
  data() {
    return {}
  },
  props: {
    redundancyStatus: {
      type: Number,
      default: 0
    }
  },
  computed: {
    isReserved() {
      return this.redundancyStatus === 1
    }
  }
}
</script>

<style scoped>
.reserve-control__wrapper {
  border-radius: 5px;
  box-shadow: 0px 0px 3px 1px rgba(130, 130, 130, 0.8);
  display: grid;
  background: var(--netral-interface-color);
  user-select: none;
  justify-items: center;
}
.vertical-line-up {
  grid-row: 1;
  grid-column: 1;
  width: 0.1vmax;
  height: 10%;
  align-self: start;
}
.vertical-line-down {
  grid-row: 1;
  grid-column: 1;
  width: 0.1vmax;
  height: 10%;
  align-self: end;
}
.reserve-control__container {
  height: 95%;
  width: 85%;
  display: grid;
  grid-template-rows: 30% 40% 30%;
  justify-items: center;
  align-items: center;
  grid-row: 1;
  grid-column: 1;
  align-self: center;
  justify-self: center;
}

.reserve-control__switch-container {
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  /*box-shadow: inset 0 0 3px 1px rgba(130, 130, 130, 0.8);*/
  border-radius: 5px;
}
.switch-container-in {
  grid-template-rows: 50% 50%;

}
.switch-container-out {
  grid-template-rows: 50% 50%;

}

.switch {
  justify-self: center;
  align-self: center;
  width: 80%;
  z-index: 1;
}

.switch-up {
  grid-row: 1;
  grid-column: 1;
}

.switch-down {
  transform: rotate(180deg);
  grid-row: 2;
  grid-column: 1;
}

.switch-container__ground {
  z-index: 0;
  height: 50%;
  width: 80%;
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column: 1;
}

.ground-up {
}

.ground-down {
  transform: rotate(180deg);
}

.reserve-control__title-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 3px 1px rgba(180, 180, 180, 0.8);
  border-radius: 5px;
}

.connect-line-status {
  background: var(--line-connect-color);
}



</style>