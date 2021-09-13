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
      <PromotionBlock/>
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
import PromotionBlock from '../components/PromotionBlock.vue'

export default defineComponent({
  components: {
    Logo,
    MenuElementOne,
    LoginButton,
    MiddleTextOne,
    DoctorPic,
    Services,
    HowTo,
    Partners,
    PromotionBlock
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
  background: #233142;
  border-bottom-right-radius: 10vw;
}
body {
  padding: none;
  margin: none;
}
</style>
