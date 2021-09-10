<template>
  <div id='nav'>
    <div class='top-part'>
      <Logo/>
      <MenuElementOne/>
      <LoginButton/>
    </div>
    <div class='middle-part'>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Logo from './components/Logo.vue'
import MenuElementOne from './components/MenuElementOne.vue'
import LoginButton from './components/LoginButton.vue'

export default defineComponent({
  components: {
    Logo,
    MenuElementOne,
    LoginButton
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}
.top-part {
  width: 100%;
  height: 70vh;
  background: #f9f9f9;
}

.middle-part {
  width: 100%;
  height: 100vh;
  background: #fcfefe;
}

body {
  padding: none;
  margin: none;
}
</style>
