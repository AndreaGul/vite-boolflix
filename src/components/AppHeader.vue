<script>
import axios from 'axios';

import { store } from '../store';

import AppHeaderSearch from './AppHeaderSearch.vue';
export default {
  name: 'Appheader',

  data() {
    return {
      store,
    };
  },

  components: {
    AppHeaderSearch,
  },

  methods: {
    searchFilmESeries(event) {
      axios
        .get(this.store.apiUrlFilm, {
          params: {
            api_key: this.store.apiKey,
            query: event,
          },
        })
        .then((response) => {
          this.store.searchedFilm = response.data.results;
          console.log('Film', response.data.results);
        });

      axios
        .get(this.store.apiUrlSeries, {
          params: {
            api_key: this.store.apiKey,
            query: event,
          },
        })
        .then((response) => {
          this.store.searchedSeries = response.data.results;
          console.log('Series', response.data.results);
        });
    },
  },
};
</script>

<template>
  <header class="d-flex justify-content-between align-items-center p-3">
    <h2>BoolFlix</h2>
    <AppHeaderSearch @search="searchFilmESeries" />
  </header>
</template>

<style scoped lang="scss"></style>
