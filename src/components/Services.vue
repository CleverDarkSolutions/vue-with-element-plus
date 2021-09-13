<template>
    <div>
        <p class='header'>U nas otrzymać możesz : </p>
      <div class='service-one'>
        <img src='../assets/recepta.png' style='width: 15vw; height: 16vh; margin-top: 2vw'>
        <p class='image-header'>Receptę </p>
        <p class='description'>E-receptę odbierzesz poprzez pocztę elektroniczną lub SMS.</p>
      </div>
      <div class='service-two'>
        <img src='../assets/skierowanie.png'>
        <p class='image-header'>Skierowanie </p>
        <p class='description'>Potrzebujesz skierowania do specjalisty? Zajmiemy się tym.</p>
      </div>
      <div class='service-three'>
        <img src='../assets/zwolnienie.png'>
        <p class='image-header'>Zwolnienie</p>
        <p class='description'>W razie choroby twojej lub bliskiego wystawimy ci zwolnienie.</p>
      </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
})
</script>

<style scoped>

.header {
    position: absolute;
    top: 40vw;
    left: 10%;
    text-align: center;
    font-size: 3vw;
    font-weight: 900;
}

.image-header {
  font-size: 2vw;
  color: black;
  text-align: center;
  font-weight: 700;
}

img {
    width: 20vw;
    height: 20vh;
}

.service-one {
    padding: 1vw;
    width: 20vw;
    position: absolute;
    top: 50vw;
    left: 10%;
    background: #ecfeff;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.service-two {
    padding: 1vw;
    width: 20vw;
    position: absolute;
    top: 50vw;
    left: 40%;
    background: #ecfeff;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.service-three {
    padding: 1vw;
    width: 20vw;
    position: absolute;
    top: 50vw;
    left: 70%;
    background: #ecfeff;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
