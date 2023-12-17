<script>

// import { store } from '../store';


export default {
  name: 'AppMainPoster',

  data(){
    return{
        apiImgUrl: 'https://image.tmdb.org/t/p/w342',
        
    }
  },

//   components: {
//     store,
//   },

  props: ['locandina','name'],
  
  
 

  };





</script>

<template>
        
         <img v-if="this.locandina !== null" :src="this.apiImgUrl + this.locandina" :alt="name">
           <div v-else>Nessuna locandina</div>
         
    
       
</template>

<style scoped lang="scss"></style>

