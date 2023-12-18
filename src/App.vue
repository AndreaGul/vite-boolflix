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

<style scoped lang="scss"></style>
