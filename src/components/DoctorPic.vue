<template>
  <div>
    <img class='doctor-picture' src='../assets/harold.png'>
    <img class='signature' src='../assets/polecam.png'>
    <span class='extra-info'> dr. hab. Paul Smith jest z nami od 10 lat</span>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
})
</script>

<style scoped>

.doctor-picture {
    width: 40vw;
    height: 30vw;
    position: absolute;
    right: 20%;
    top: 15%;
}

.signature {
    height: 10vw;
    width: 15vw;
    position: absolute;
    right: 10%;
    top: 30%;
}

.extra-info {
    position: absolute;
    top: 75%;
    right: 30%;
    width: 20vw;
    font-size: 2vw;
}
</style>
