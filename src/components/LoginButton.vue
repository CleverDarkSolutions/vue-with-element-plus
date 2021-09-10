<template>
    <div>
      <el-button class='login-button' type='info' :icon='icon' :circle='isPortable'> {{ text }} </el-button>
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
    margin-top: 2vh;
    margin-right: 50px;
    position: absolute;
    top: 2vh;
    right: 1vw;
    width: 150px;
    font-size: 21px;
    background: #f2f2f2;
    border: 10px black inset;
    color: black;
}

@media only screen and (max-width: 1000px) {
    .login-button {
        margin-right: 10px;
        margin-top: 2vh;
        width: 50px;
        border: 2px black inset;
    }
}

@media only screen and (min-width: 1000px) {
    .login-button {
        margin-right: 20px;
        margin-top: 4vh;
        width: 100px;
        font-size: 19px;
        top: 1.2vh;
        border: 5px black inset;
    }
}

@media only screen and (min-width: 1400px) {
    .login-button {
        margin-right: 100px;
        width: 150px;
        font-size: 22px;
    }
}

@media only screen and (min-width: 1800px) {
    .login-button {
        margin-right: 300px;
        width: 200px;
        font-size: 25px;
    }
}

</style>
