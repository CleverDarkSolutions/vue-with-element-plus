<template>
  <div id='nav'>
    <div class='top-part'>
      <Logo/>
      <MenuElementOne/>
      <LoginButton/>
      <DefaultVue/>
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
import DefaultVue from './views/DefaultView.vue'

export default defineComponent({
  components: {
    DefaultVue,
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
</style>
