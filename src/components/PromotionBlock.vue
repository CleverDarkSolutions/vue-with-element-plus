<template>
    <div class='promotionBlock'>
        <div class='div-one'>
          <el-rate class='stars' disabled v-model='value' show-score
          ></el-rate>
          <p> Ponad 200 000 zadowolonych klientów</p>
        </div>
        <div class='div-two'>
          <p class='big-text'>5000</p>
          <span style='position:relative; bottom: 2vw;'>specjalistów w całym kraju</span>
        </div>
        <div class='div-three'>
          <p class='big-text'>24/7</p>
          <span style='position:relative; bottom: 2vw;'>pomoc techniczna z konsultantem</span>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data () {
    return {
      value: 4.8
    }
  }
})
</script>

<style scoped>

.promotionBlock {
  position: absolute;
  top: 130vw;
  left: 70%;
  background-color: white;
  width: 22vw;
  height: 30vw;
  border-radius: 3vw;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.stars {
    margin-top: 3vw;
}

.big-text {
    font-size: 2.5vw;
    color: #233142;
    font-weight: 900;
}

.div-one {
    width: 60%;
    position: absolute;
    left: 23%;
    top: 0%;
    border-radius: 2vw;
    font-size: 1vw;
}

.div-two {
    width: 60%;
    position: absolute;
    left: 23%;
    top: 30%;
    border-radius: 2vw;
    font-size: 1vw;
}

.div-three {
    width: 60%;
    position: absolute;
    left: 23%;
    top: 60%;
    border-radius: 2vw;
    font-size: 1vw;
}
</style>
