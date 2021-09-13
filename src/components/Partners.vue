<template>
  <div class='carousel'>
  <el-carousel :interval="5000" type='card' arrow="always">
    <el-carousel-item v-for="item in images" :key="item">
      <img :src='getImgUrl(item)'>
    </el-carousel-item>
  </el-carousel>
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
        'hipokrates.png'

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
  img {
    width: 20vw;
    height: 10vw;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .carousel {
    width: 70%;
    margin-left: 10%;
  }

</style>
