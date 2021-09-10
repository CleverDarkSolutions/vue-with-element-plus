<template>
    <div>
        <p class='header'>U nas otrzymać możesz : </p>
      <div class='service-one'>
        <img src='../assets/recepta.png'>
        <span>Recepta </span>
      </div>
      <div class='service-two'>
        <img src='../assets/skierowanie.png'>
        <span>Skierowanie </span>
      </div>
      <div class='service-three'>
        <img src='../assets/zwolnienie.png'>
        <span>Zwolnienie lekarskie </span>
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
    top: 45vw;
    left: 10%;
    text-align: center;
    font-size: 3vw;
    font-weight: 900;
}

img {
    width: 20vw;
    height: 20vh;
}

.service-one {
    position: absolute;
    top: 55vw;
    left: 5%;
}

.service-two {
    position: absolute;
    top: 55vw;
    left: 35%;
}

.service-three {
    position: absolute;
    top: 55vw;
    left: 65%;
}
</style>
