<template>
<div>
  <router-link to='/'>
  <div class='logo'>
    <h3> OnlineMed © </h3>
  </div>
  </router-link>
</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Logo',
  components: {
  }
})
</script>

<style scoped>
.logo {
    width: 170px;
    position: absolute;
    left: 10%;
    top: 3vh;
    border: 4px solid black;
    border-radius: 50px;
    padding: 2px;
    padding-left: 52px;
    font-size: 18px;
    user-select: none;
    color: black;
}

h3 {
    float: left;
    text-align: center;
}

@media only screen and (max-width: 1000px){
    .logo {
        width: 100px;
        font-size: 13px;
        border: 2px solid black;
        padding-left: 10px;
    }

    .list-style {
        width: 20px;
        height: 20px;
        right: 10px;
    }
}

</style>
