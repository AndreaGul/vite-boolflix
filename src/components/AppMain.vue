<script>
import { store } from '../store';

import AppMainFilmList from './AppMainFilmList.vue';

export default {
  name: 'AppMain',

  data() {
    return {
      store,
    };
  },

  components: {
    AppMainFilmList,
  },
};
</script>

<template>
  <main>
    <ul>
      <li v-if="this.store.searchedFilm.length"><h2>Film</h2></li>
      <li v-for="film in this.store.searchedFilm">
        <AppMainFilmList
          :title="film.title"
          :titleOriginal="film.original_title"
          :lang="film.original_language"
          :vote="film.vote_average"
          :poster="film.backdrop_path"
        />
      </li>

      <li v-if="this.store.searchedSeries.length"><h2>Series</h2></li>
      <li v-for="series in this.store.searchedSeries">
        <AppMainFilmList
          :title="series.name"
          :titleOriginal="series.original_name"
          :lang="series.original_language"
          :vote="series.vote_average"
          :poster="series.backdrop_path"
        />
      </li>
    </ul>
  </main>
</template>

<style scoped lang="scss"></style>
