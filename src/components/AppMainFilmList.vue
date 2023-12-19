<script>
import AppMainLangFlag from './AppMainLangFlag.vue';
import AppMainPoster from './AppMainPoster.vue';
import AppMainStarVote from './AppMainStarVote.vue';

export default {
  name: 'AppMainSearchFilmList',

  data() {
    return {
      apiImgUrl: 'https://image.tmdb.org/t/p/w342',
      locandina: '',
    };
  },

  components: {
    AppMainLangFlag,
    AppMainPoster,
    AppMainStarVote,
  },

  props: ['title', 'titleOriginal', 'lang', 'vote', 'poster'],
};
</script>

<template>
  <ul>
    <li>Titolo del film: {{ title }}</li>
    <li>Titolo Originale: {{ titleOriginal }}</li>
    <li><AppMainLangFlag :language="lang" /></li>
    <li>Voto medio: {{ vote }}</li>
    <li><AppMainStarVote :starVote="vote" /></li>
  </ul>

  <div>
    <AppMainPoster :locandina="poster" :name="titleOriginal" />
  </div>
</template>

<style scoped lang="scss"></style>
