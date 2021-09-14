<template>
  <div class='external-div'>
  <div class='carousel'>
  <p class='header'>Oni także wybrali OnlineMed</p>
  <el-carousel :interval="3000" type='card' loop='true' indicator-position='none'>
    <el-carousel-item v-for="item in images" :key="item">
      <img :src='getImgUrl(item)'>
    </el-carousel-item>
  </el-carousel>
  </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data () {
    return {
      images: [
        'generali.png',
        'pzu.png',
        'nationale.png',
        'hipokrates.png',
        'allianz.png',
        'prudential.png'
      ]
    }
  },
  methods: {
    getImgUrl (pic) { // for some reason this is necessary
      return require('../assets/' + pic)
    }
  }
})
</script>

<style scoped>

  .header {
    position: absolute;
    left: 10%;
    top: 2%;
    font-size: 1.5vw;
    color: #233142;
    font-weight: 900;
    padding-top: 1.5vw;
    padding-left: 0.5vw;
  }
  img {
    width: 10vw;
    height: 7vw;
    margin-top: 2vw;
  }

  .el-carousel__item {
    width: 20vw;
    border-radius: 3vw;
    height: 10vw;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .carousel {
    width: 80%;
    height: 16vw;
    padding: 0.5vw;
    padding-top: 7.5vw;
    border-radius: 2vw;
    margin-left: 10%;
  }

  .external-div {
    background: white;
    width: 50%;
    height: 22vw;
    border-radius: 1vw;
    margin-left: 9%;
    position:absolute;
    top: 130vw;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

</style>
