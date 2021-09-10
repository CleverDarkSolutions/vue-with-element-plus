<template>
  <div id='nav'>
    <div class='top-part'>
      <Logo/>
      <MenuElementOne/>
      <LoginButton/>
      <MiddleTextOne/>
      <DoctorPic/>
    </div>
    <div class='middle-part'>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Logo from './components/Logo.vue'
import MenuElementOne from './components/MenuElementOne.vue'
import LoginButton from './components/LoginButton.vue'
import MiddleTextOne from './components/MiddleTextOne.vue'
import DoctorPic from './components/DoctorPic.vue'

export default defineComponent({
  components: {
    Logo,
    MenuElementOne,
    LoginButton,
    MiddleTextOne,
    DoctorPic
  }
})
</script>

<style>
#app {
  font-family: 'Urbanist', sans-serif;
  text-align: center;
  color: black;
}
.top-part {
  width: 100%;
  height: 50vw;
  background: #f9f9f9;
}

.middle-part {
  width: 100%;
  height: 100vh;
  background: #fcfefe;
}

body {
  padding: none;
  margin: none;
}
</style>
