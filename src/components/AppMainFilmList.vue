<script>


import AppMainLangFlag from './AppMainLangFlag.vue';
import AppMainPoster from './AppMainPoster.vue'

export default {
  name: 'AppMainSearchFilmList',

  data(){
  return{
    apiImgUrl: 'https://image.tmdb.org/t/p/w342',
    locandina: '',
  }
  },

  components: {
    AppMainLangFlag,
    AppMainPoster,
    
  },
  
  props: ['title','titleOriginal','lang','vote','poster'],

  
  };





</script>

<template>
   
         <ul>
            <li>Titolo del film: {{ title  }}</li>
            <li>Titolo Originale: {{ titleOriginal }}</li>
            <li><AppMainLangFlag :language="lang"/></li>
            <li>Voto medio: {{ vote }}</li>
            <li><AppMainPoster :locandina="poster" :name="titleOriginal" /></li>
          
           
        </ul>
    
       
</template>

<style scoped lang="scss"></style>

