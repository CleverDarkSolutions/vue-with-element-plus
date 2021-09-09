<template>
<div>
  <div class='logo'>
    <h3>MedicoTele © </h3>
    <el-icon>
      <list class='list-style' />
    </el-icon>
  </div>
</div>
</template>

<script>
import { defineComponent } from 'vue'
import { List } from '@element-plus/icons'

export default defineComponent({
  name: 'Logo',
  components: {
    List
  }
})
</script>

<style scoped>

.list-style {
    width: 40px;
    height: 40px;
    float: left;
    position: relative;
    right: 30px;
    margin-top: 12px;
}

.logo {
    width: 250px;
    position: absolute;
    left: 5%;
    top: 3vh;
    border: 4px solid black;
    border-radius: 50px;
    padding: 2px;
    padding-left: 52px;
    font-family: 'Urbanist', sans-serif;
    font-size: 21px;
    user-select: none;
}

h3 {
    float: left;
    text-align: center;
}

@media only screen and (max-width: 800px){
    .logo {
        width: 150px;
        font-size: 13px;
        border: 2px solid black;
        padding-left: 20px;
    }

    .list-style {
        width: 20px;
        height: 20px;
        right: 10px;
    }
}

</style>
