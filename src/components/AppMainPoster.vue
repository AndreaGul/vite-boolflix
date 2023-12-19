<script>
import { store } from '../store';

export default {
  name: 'AppMainPoster',
  data() {
    return {
      store,
    };
  },

  props: ['locandina', 'name'],
};
</script>

<template>
  <div>
    <img
      class="container-fluid"
      v-if="this.locandina !== null"
      :src="this.store.apiImgUrl + this.locandina"
      :alt="name"
    />
    <div v-else>Nessuna locandina</div>
  </div>
</template>

<style scoped lang="scss"></style>
