<template>
    <div>
      <el-button class='login-button' :icon='icon' :circle='isPortable'> <p class='text'> {{ text }} </p> </el-button>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data () {
    return {
      isPortable: '',
      text: 'Zaloguj',
      icon: ''
    }
  },
  methods: {
    resizeButton () {
      if (window.innerWidth <= 1000) {
        this.isPortable = 'circle'
        this.text = ''
        this.icon = 'el-icon-edit'
      } else {
        this.isPortable = ''
        this.text = 'Zaloguj'
        this.icon = ''
      }
    }
  },
  created () {
    window.addEventListener('resize', () => { this.resizeButton() })
    this.resizeButton()
  }
})
</script>

<style scoped>

.login-button {
    margin-top: 5vh;
    margin-right: 3%;
    position: absolute;
    top: 2vh;
    right: 1vw;
    font-size: 1.5vw;
    background: none;
    border: 2px solid black;
    color: black;
}

@media only screen and (max-width: 1000px) {
    .login-button {
        margin-top: 3vh;
    }
}

@media only screen and (min-width: 1000px) {
    .login-button {
        margin-top: 4vh;
        top: 1.2vh;
    }
}

@media only screen and (min-width: 1400px) {
    .login-button {
        margin-right: 10%;
        margin-top: 1vw;
    }
}

@media only screen and (min-width: 1800px) {
    .login-button {
        margin-right: 20%;
        margin-top: 1vw;
    }
}

</style>
