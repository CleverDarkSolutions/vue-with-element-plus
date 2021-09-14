<template>
  <div id='nav'>
    <div class='top-part'>
      <MiddleTextOne/>
      <DoctorPic/>
      <Services/>
      <HowTo/>
      <Partners/>
      <PromotionBlock/>
      <News/>
    </div>
    <div class='middle-part'>
    </div>
    <div class='third-part'>
    </div>
    <div class='fourth-part'>
    </div>
    <div class='fifth-part'>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import MiddleTextOne from '../components/MiddleTextOne.vue'
import DoctorPic from '../components/DoctorPic.vue'
import Services from '../components/Services.vue'
import HowTo from '../components/HowTo.vue'
import Partners from '../components/Partners.vue'
import PromotionBlock from '../components/PromotionBlock.vue'
import News from '../components/News.vue'

export default defineComponent({
  components: {
    MiddleTextOne,
    DoctorPic,
    Services,
    HowTo,
    Partners,
    PromotionBlock,
    News
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

.fifth-part {
  width: 100%;
  height: 40vw;
  background: #fbf7f7;
}

body {
  padding: none;
  margin: none;
}
</style>
