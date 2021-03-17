<template>
  <div ref="test" class="three__container">
  </div>
  <custom-button @buttonClick="init">старт</custom-button>
</template>

<script>
import * as THREE from 'three'
import CustomButton from "@/components/CustomSimpleComponents/CustomButton";

export default {
  name: 'MSHUDialog',
  components: {CustomButton},
  data() {
    return {
      v: this.testVar
    }
  },
  mounted() {
  },
  unmounted() {
  },
  watch: {
    testVar(val) {
      if(this.geometry) {
        console.log(val.deviceParameters.cabinet_temperature.valueParameter)
        this.cube.position.x = val.deviceParameters.cabinet_temperature.valueParameter/ 30
        // this.cube.position.y = val.deviceParameters.AttenuationValue.valueParameter / 30
        // this.cube.rotation.y += 0.01
      }
    }
  },
  methods: {
    init() {
      this.camera = new THREE.PerspectiveCamera(70, 1.6, 0.1, 1000)
      this.camera.position.z = 2;

      this.scene = new THREE.Scene()

      {
        const color = 0xFFFFFF;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(-1, 2, 4);
        this.scene.add(light);
      }

      this.geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
      this.material = new THREE.MeshPhongMaterial({color: 0x44aa88});

      this.cube = new THREE.Mesh(this.geometry, this.material)

      this.scene.add(this.cube);

      this.geometry2 = new THREE.BoxGeometry(1, 0.02, 1);
      this.material2 = new THREE.MeshPhongMaterial({color: 'white'});
      this.pol = new THREE.Mesh(this.geometry2, this.material2)
      this.scene.add(this.pol);

      this.renderer = new THREE.WebGLRenderer({antialias: true});
      this.renderer.setSize(800, 500);

      this.$refs.test.appendChild(this.renderer.domElement);

      this.animation()

    },
    animation() {
      requestAnimationFrame(this.animation);

      this.cube.rotation.x += 0.01;
      this.cube.rotation.y += 0.01;
      this.pol.rotation.x += 0.01;
      this.pol.rotation.y += 0.01;

      this.renderer.render(this.scene, this.camera);
    }
  },
  computed: {
    testVar() {
      return this.$store.getters['devicesParameters/amplifierParameters1']
    }
  }
}
</script>

<style scoped>
.three__container {

}
</style>
