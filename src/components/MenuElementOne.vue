<template>
  <div class='element-one'>
    <el-breadcrumb separator='○'>
      <el-breadcrumb-item>
        <span>Strefa pacjenta</span>
      </el-breadcrumb-item>

      <el-breadcrumb-item>
        <span>Współpraca</span>
      </el-breadcrumb-item>

      <el-breadcrumb-item>
        <span>Pomoc</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
})
</script>

<style scoped>

.element-one {
    margin-left: 500px;
    margin-top: 1vh;
    padding-top: 2%;
    float: left;
    width: 40vw;
    height: 8vh;
}
span {
    font-size: 1.3vw;
    color: black;
    margin: 0.5vw;
}

span:hover {
    color: #7dd87d;
    cursor: pointer;
}
@media only screen and (max-width: 1200px) {
    .element-one {
        margin-left: 400px;
        margin-top: 4vh;
        width: 60vw;
    }

    span {
        font-size: 2vw;
    }
}

@media only screen and (max-width: 800px) {
    .element-one{
        margin-left: 250px;
        margin-top: 1.4vh;
        width: 70vw;
    }

    span {
        font-size: 2vw;
    }
}

</style>
