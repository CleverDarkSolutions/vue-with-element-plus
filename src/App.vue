<template>
  <div id='nav'>
    <div class='top-part'>
      <Logo/>
      <MenuElementOne/>
      <LoginButton/>
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

html {
  scroll-behavior: smooth;
}
#app {
  font-family: 'Noto Sans', sans-serif;
  text-align: center;
  color: black;
}

.nav {
  width: 100%;
  height: 100%;
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
