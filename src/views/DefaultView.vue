<template>
  <div id='nav'>
    <div class='top-part'>
      <Logo/>
      <MenuElementOne/>
      <LoginButton/>
      <MiddleTextOne/>
      <DoctorPic/>
      <Services/>
      <HowTo/>
      <Partners/>
    </div>
    <div class='middle-part'>
    </div>
    <div class='third-part'>
    </div>
    <div class='fourth-part'>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Logo from '../components/Logo.vue'
import MenuElementOne from '../components/MenuElementOne.vue'
import LoginButton from '../components/LoginButton.vue'
import MiddleTextOne from '../components/MiddleTextOne.vue'
import DoctorPic from '../components/DoctorPic.vue'
import Services from '../components/Services.vue'
import HowTo from '../components/HowTo.vue'
import Partners from '../components/Partners.vue'

export default defineComponent({
  components: {
    Logo,
    MenuElementOne,
    LoginButton,
    MiddleTextOne,
    DoctorPic,
    Services,
    HowTo,
    Partners
  }
})
</script>

<style scoped>

.top-part {
  width: 100%;
  height: 38vw;
  background: #f2f2f2;
}

.middle-part {
  width: 100%;
  height: 40vw;
  background: #fbf7f7;
}

.third-part {
    width: 100%;
    height: 45vw;
    background: linear-gradient(to top, #dfe9f3 0%, white 100%);
    border-top-right-radius: 10vw;
}

.fourth-part {
  width: 100%;
  height: 40vw;
  background: radial-gradient(circle at 10% 20%, rgba(216, 241, 230, 0.46) 0.1%, rgba(233, 226, 226, 0.28) 90.1%);
}
body {
  padding: none;
  margin: none;
}
</style>
