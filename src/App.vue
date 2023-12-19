<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
  name: 'App',

  components: {
    AppHeader,
    AppMain,
  },
};
</script>

<template>
  <body>
    <AppHeader />
    <AppMain />
  </body>
</template>

<style scoped lang="scss">
@use './assets/scss/partial/variables' as *;

body {
  background-color: $primary-color-bg-main;
}
</style>
