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
  <div class="container-fluid img-container p-0">
    <img
      v-if="this.locandina !== null"
      :src="this.store.apiImgUrl + this.locandina"
      :alt="name"
    />
    <img v-else src="../assets/img/image-not-foud.png" alt="Image not found" />
  </div>
</template>

<style scoped lang="scss">
.img-container {
  height: 100%;

  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 100%;

    object-fit: cover;
    display: inline-block;
  }
}
</style>
