<script>

import axios from 'axios';
import { store } from '../store';

import AppMainSearch from './AppMainSearch.vue';
export default {
  name: 'AppMain',

  data(){
    return{
      store,
    }
  },

  components: {
    AppMainSearch,
  },

  methods: {
    searchFilm(){
      axios.get(this.store.apiUrl + '&query=' + this.store.searchKey).then((response) => {
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
  </main>
 
</template>

<style scoped lang="scss"></style>
