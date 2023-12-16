<script>

export default {
  name: 'AppMainSearchFilmList',
  
  props: ['title','titleOriginal','lang','vote'],

  methods: {
    // flag(){
      
    //     if(this.lang === 'en'){
    //       return 'en'
    //     }
    //     else if(this.lang === 'it'){
    //       return 'it'
    //     }
        
    //    },
    },

    
  };



</script>

<template>
   
         <ul>
            <li>Titolo del film: {{ title  }}</li>
            <li>Titolo Originale: {{ titleOriginal }}</li>
            <li v-if="lang === 'en'">Lingua originale: <img src="../assets/img/en.png" alt="en"> </li>
            <li v-else-if="lang ==='it'">Lingua originale: <img src="../assets/img/it.png" alt="it"> </li>
            <li v-else>Lingua originale: {{ lang }}</li>
            <li>Voto medio: {{ vote }}</li>
           
           
        </ul>
    
       
</template>

<style scoped lang="scss"></style>

