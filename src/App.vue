<template>
  <div id="app">
    <h1>Hello Vue 2 with Vite and Composition API!</h1>
    <Counter />
  </div>
</template>

<script>
import Counter from './components/Counter.vue';

export default {
  name: 'App',
  components: {
    Counter,
  },
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 50px;
}
</style>
