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
  <div class="banner-container">
    <ul class="list-container p-3">
      <li>
        <h4>{{ title }}</h4>
      </li>
      <li>Titolo Originale: {{ titleOriginal }}</li>
      <li><AppMainLangFlag :language="lang" /></li>
      <li>Voto medio: {{ vote }}</li>
      <li><AppMainStarVote :starVote="vote" /></li>
    </ul>

    <div class="poster-container">
      <AppMainPoster :locandina="poster" :name="titleOriginal" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.banner-container {
  height: 350px;
  position: relative;
  border-radius: 5px;
  overflow: hidden;

  .list-container {
    height: 100%;
    width: 100%;
    position: absolute;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
    opacity: 0;
    overflow: auto;
  }

  .list-container:hover {
    opacity: 1;
    border: #fff solid 2px;
    border-radius: 5px;
  }

  .poster-container {
    height: 100%;
  }
}
</style>
