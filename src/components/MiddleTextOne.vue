<template>
    <div class='item'>
        <p class='text'>Znajdziemy <span class='green-text'>Ci</span> najlepszego <span class='green-text'> lekarza </span></p>
        <p class='smaller-text'>Profesjonalna konsultacja bez wychodzenia z domu. Wybierz spośród kilku tysięcy specjalistów w calym kraju</p>
        <el-button class='btn' type='success' round>Umów się na wizytę online już teraz </el-button>
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

.btn {
    width: 30vw;
    font-size: 1.5vw;
    position: relative;
    top: 2.5vw;
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
