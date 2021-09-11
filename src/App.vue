<template>
  <div id='nav'>
    <div class='top-part'>
      <Logo/>
      <MenuElementOne/>
      <LoginButton/>
      <MiddleTextOne/>
      <DoctorPic/>
      <Services/>
      <Form/>
      <HowTo/>
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
import Form from './components/Form.vue'
import Services from './components/Services.vue'
import HowTo from './components/HowTo.vue'

export default defineComponent({
  components: {
    Logo,
    MenuElementOne,
    LoginButton,
    MiddleTextOne,
    DoctorPic,
    Form,
    Services,
    HowTo
  }
})
</script>

<style>
#app {
  font-family: 'Noto Sans', sans-serif;
  text-align: center;
  color: black;
}
.top-part {
  width: 100%;
  height: 38vw;
  background: #f2f2f2;
}

.middle-part {
  width: 100%;
  height: 100vh;
  background: #fbf7f7;
}

body {
  padding: none;
  margin: none;
}
</style>
