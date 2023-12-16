<script>

import AppMainLangFlag from './AppMainLangFlag.vue';

export default {
  name: 'AppMainSearchFilmList',

  components: {
    AppMainLangFlag,
  },
  
  props: ['title','titleOriginal','lang','vote'],

 
  };



</script>

<template>
   
         <ul>
            <li>Titolo del film: {{ title  }}</li>
            <li>Titolo Originale: {{ titleOriginal }}</li>
            <li><AppMainLangFlag :language="lang"/></li>
            <li>Voto medio: {{ vote }}</li>
           
           
        </ul>
    
       
</template>

<style scoped lang="scss"></style>

