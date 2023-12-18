<script>
import { store } from '../store';

export default {
  name: 'AppMainSearch',

  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="input-group search-bar">
    <input
      type="text"
      class="form-control search-input"
      placeholder="Cerca"
      aria-label="Example text with button addon"
      aria-describedby="button-addon1"
      v-model="this.store.searchKey"
    />
    <button
      @click="$emit('search', this.store.searchKey)"
      class="btn btn-light border-start border"
      type="button"
      id="button-addon1"
    >
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
    </button>
  </div>
</template>

<style scoped lang="scss">
div {
  .search-bar {
    width: 250px;

    .search-input:focus {
      box-shadow: none;
      border: #000 solid 1px;
    }
  }
}
</style>
