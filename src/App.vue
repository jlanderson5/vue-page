
<template>
  <div id="app">
    <nav>
      <router-link to="/about">About</router-link> |
      <router-link to="/random-facts">Random Facts</router-link> |
      <router-link to="/contact">Contact</router-link> |
      <router-link :to="{ name: 'AppLink', params: { link: 'https://example.com' } }">External Site</router-link>
    </nav>
    <router-view />
    <GoBackButton />
  </div>
</template>

<script>
import GoBackButton from './components/GoBackButton.vue';

export default {
  name: 'App',
  components: {
    GoBackButton
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
