<template>
  <div class='footer'>
    <div class='main-textdiv'>
      <Logo/>

      <div class='column-one'>
        <p>Regulamin</p>
        <p>O nas</p>
        <p>RODO</p>
        <p>Kontakt</p>
      </div>

      <div class='column-two'>
        <p>Cennik</p>
        <p>Badania</p>
        <p>Producenci</p>
        <p>Przedstawiciele</p>
      </div>

     <div class='column-two'>
        <p>Cennik</p>
        <p>Badania</p>
        <p>Producenci</p>
        <p>Przedstawiciele</p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Logo from '../components/Logo.vue'

export default defineComponent({
  components: {
    Logo
  }
})
</script>

<style scoped>
.footer {
  height: 30vw;
  width: 100%;
  position: absolute;
  background: radial-gradient(621px at 25.3% 13.8%, rgb(255, 255, 255) 0%, rgb(234, 236, 255) 90%);
  display: flex;
}

.main-textdiv {
  margin-left: 10%;
  margin-top: 5%;
  text-align: left;
  width: 80%;
  height: 65%;
  font-size: 1.3vw;
  border-bottom: 1px solid black;
}

.column-one {
  margin-top: 5%;
  width: 20%;
  height: 30%;
  float: left;
}

.column-two {
  margin-top: 5%;
  margin-left: 10%;
  width: 20%;
  height: 30%;
  float: left;
}

.column-three {
  margin-top: 5%;
  margin-left: 10%;
  width: 20%;
  height: 30%;
  float: left;
}

</style>
