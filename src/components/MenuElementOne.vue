<template>
  <div class='element-one'>
    <el-breadcrumb separator='o'>
      <el-breadcrumb-item>
        <router-link to='/doctorsearch'>
        <span>Strefa pacjenta</span>
        </router-link>
      </el-breadcrumb-item>

      <el-breadcrumb-item>
        <router-link to='/'>
        <span>Współpraca</span>
        </router-link>
      </el-breadcrumb-item>

      <el-breadcrumb-item>
        <router-link to='/'>
          <span>Pomoc</span>
        </router-link>
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
    padding-top: 2%;
    float: left;
    width: 40vw;
    height: 8vh;
}
span {
    font-size: 1.8vw;
    color: black;
    margin: 0.5vw;
    font-weight: 300;
}

span:hover {
    color: #409eff;
    cursor: pointer;
}
@media only screen and (max-width: 1200px) {
    .element-one {
        margin-left: 400px;
        margin-top: 10vh;
        width: 60vw;
    }

    span {
        font-size: 2vw;
    }
}

@media only screen and (max-width: 1000px) {
    .element-one{
        margin-left: 250px;
        margin-top: 3vh;
        width: 70vw;
    }

    span {
        font-size: 2.5vw;
    }
}

@media only screen and (max-width: 2000px) {
  .element-one {
    margin-top: 1vh;
  }
}

</style>
