<template>
  <div>
    <img class='doctor-picture' src='../assets/harold.png'>
    <img class='signature' src='../assets/polecam.png'>
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
</style>
