<template>
  <div id='nav'>
    <div class='top-part'>
      <Logo/>
      <MenuElementOne/>
      <LoginButton/>
    </div>
    <div class='middle-part'>
    </div>
    <router-view/>
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
  font-family: 'Noto Sans', sans-serif;
  text-align: center;
  color: black;
}

body {
  padding: none;
  margin: none;
  background: #fbf7f7;
}

a:-webkit-any-link {
  color: black;
}
</style>
