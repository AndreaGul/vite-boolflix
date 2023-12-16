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
     searchFilmESeries(event){
      axios.get(this.store.apiUrlFilm,{ 
         params: {
          api_key: this.store.apiKey,
           query: event,
         }
      } ).then((response) => {
         this.store.searchedFilm = response.data.results
         console.log('Film', response.data.results)
       })

       axios.get(this.store.apiUrlSeries, {
        params: {
          api_key: this.store.apiKey,
          query: event,
        }
       }).then(response => {
        this.store.searchedSeries = response.data.results
        console.log('Series',response.data.results)
       })

     },

    // individualSearch(apiUrl,apiKey,query){
    //   axios.get(apiUrl,{ 
    //     params: {
    //       api_key: apiKey,
    //       query: query,
    //     }
    //   } ).then((response) => {
    //     if(response.data.results){
    //       console.log( response.data.results)
    //        return response.data.results
    //     }
    //   })
    // },
    // searchFilm(event){
    //   this.store.SearchedFilm = this.individualSearch(this.store.apiUrl,this.store.apiKey,event)
      
    //   console.log(this.store.SearchedFilm)
    // }
  },


 
  
};
</script>

<template>
  <main>
    <AppMainSearch @search="searchFilmESeries"/>
    <ul>
      <li v-if="this.store.searchedFilm.length"><h2>Film</h2></li>
      <li v-for="film in this.store.searchedFilm">
        <AppMainFilmList 
        
        :title="film.title"
        :titleOriginal=" film.original_title"
        :lang="film.original_language"
        :vote="film.vote_average"/>
      </li>

      <li v-if="this.store.searchedSeries.length"><h2>Series</h2></li>
      <li v-for="series in this.store.searchedSeries">
        <AppMainFilmList 
        
        :title="series.name"
        :titleOriginal=" series.original_name"
        :lang="series.original_language"
        :vote="series.vote_average"/>
      </li>
      
    </ul>
    
  </main>

  
  
 
</template>

<style scoped lang="scss"></style>
