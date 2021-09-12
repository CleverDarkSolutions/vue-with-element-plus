<template>
    <div>
      <p class='header'>Jak to działa?</p>
        <el-steps class="progress-bar" :active='step' align-center>
          <el-step title="Załóż konto"></el-step>
          <el-step title="Wybierz specjalistę"></el-step>
          <el-step title="Umów wizytę"></el-step>
          <el-step title="Gotowe !"></el-step>
        </el-steps>
        <el-button @click='nextStep' class='btn'>Dalej</el-button>
        <div class='step-description'>
            <el-icon></el-icon>
            {{ this.descriptions[this.step] }}
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data () {
    return {
      step: 0,
      descriptions: [
        'desc1', // to be changed
        'desc2',
        'desc3',
        'desc4'
      ]
    }
  },
  methods: {
    nextStep () {
      if (this.step++ > 2) this.step = 0
    }
  }
})
</script>

<style scoped>

.header {
    font-size: 3vw;
    font-weight: 900;
    position: absolute;
    top: 80vw;
    left: 10%;
}

.progress-bar {
    position: absolute;
    top: 93vw;
    left: 0%;
    width: 80%;
}

.btn {
    position: absolute;
    top: 115vw;
    left: 60%;
    z-index: 1;
}

.step-description {
    position: absolute;
    top: 100vw;
    left: 6%;
    width: 70%;
    height: 15vw;
    text-align: left;
}

</style>
