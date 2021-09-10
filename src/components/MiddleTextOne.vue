<template>
    <div class='item'>
        <p class='text'>Znajdziemy <span class='green-text'>Ci</span> najlepszego <span class='green-text'> lekarza </span></p>
        <p class='smaller-text'>Profesjonalna konsultacja bez wychodzenia z domu. Wybierz sposrod kilku tysiecy specjalistow w calym kraju</p>
        <p class='smaller-text green-text' style="font-weight: 1000">Umów wizyte juz teraz !</p>
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
    height: 40vh;
}

.text {
    font-size: 3vw;
    font-weight: 900;
    text-align: center;
}

.green-text {
    color: #42b883;
}

.smaller-text {
    font-size: 1.5vw;
    font-weight: 700;
    text-align: left;
}

</style>
