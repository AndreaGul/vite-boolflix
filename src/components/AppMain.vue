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
    <ul class="container-fluid row m-0 g-0">
      <li
        v-for="film in this.store.searchedFilm"
        class="col-12 col-sm-4 col-lg-3 col-xl-2 g-3"
      >
        <AppMainFilmList
          :title="film.title"
          :titleOriginal="film.original_title"
          :lang="film.original_language"
          :vote="film.vote_average"
          :poster="film.backdrop_path"
        />
      </li>

      <li
        v-for="series in this.store.searchedSeries"
        class="col-12 col-sm-4 col-lg-3 col-xl-2 g-3"
      >
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
