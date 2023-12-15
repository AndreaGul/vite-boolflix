<script>

import axios from 'axios';
import { store } from '../store';

import AppMainSearch from './AppMainSearch.vue';
import AppMainFilmList from './AppMainFilmList.vue';

export default {
  name: 'AppMain',

  data(){
    return{
      store,
    }
  },

  components: {
    AppMainSearch,
    AppMainFilmList,
  },

  methods: {
    searchFilm(event){
      axios.get(this.store.apiUrl + '&query=' + event).then((response) => {
        this.store.SearchedFilm = response.data.results
        console.log( response.data.results)
      })
    }
  },

  
  
};
</script>

<template>
  <main>
    <AppMainSearch @search="searchFilm"/>
    <ul>
      <AppMainFilmList 
      v-for="film in this.store.SearchedFilm"
      :title="film.title"
      :titleOriginal=" film.original_title"
      :lang="film.original_language"
      :vote="film.vote_average"/>
    </ul>
    
  </main>

  
  
 
</template>

<style scoped lang="scss"></style>
