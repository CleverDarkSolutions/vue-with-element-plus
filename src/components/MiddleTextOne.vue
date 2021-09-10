<template>
    <div class='item'>
        <p class='text'>Znajdziemy <span class='green-text'>ci</span> najlepszego <span class='green-text'> lekarza </span></p>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
})
</script>

<style scoped>

.item {
    position: absolute;
    top: 20%;
    left: 10%;
    width: 30vw;
    height: 50vh;
}

.text {
    font-size: 4vw;
    font-weight: 900;
}

.green-text {
    color: #42b883;
}

</style>
