<script>
import { store } from '../store';
import AppMainSearchFilmList from './AppMainSearchFilmList.vue';

export default {
  name: 'AppMainSearch',

  data() {
    return {
        store,
        AppMainSearchFilmList,
    }
  },
  

};
</script>

<template>
  <div>
    <input type="text" v-model="this.store.searchKey">
    
        <button @click="$emit ('search', this.store.searchKey )">invia</button>
    
    
  </div>

  <ul>
    
    <li v-for="film in this.store.SearchedFilm ">
        <ul>
            <li>Titolo del film: {{ film.title  }}</li>
            <li>Titolo Originale: {{ film.original_title  }}</li>
            <li>Lingua originale:{{ film.original_language }} </li>
            <li>Voto medio: {{ film.vote_average }}</li>
        </ul>
    </li>

   
      
      <!-- <AppMainSearchFilmList
      v-for="film in this.store.SearchedFilm"
      :title="film.title"
      :titleOriginal=" film.original_title"
      :lang="film.original_language"
      :vote="film.vote_average"
      />
      -->
  
  </ul>
 
</template>

<style scoped lang="scss"></style>
