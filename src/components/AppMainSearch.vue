<script>
import { store } from '../store';


export default {
  name: 'AppMainSearch',

  data() {
    return {
        store,
    }
  },
  

};
</script>

<template>
  <div>
    <input type="text" v-model="this.store.searchKey">
    <button @click="$emit ('search')">invia</button>
  </div>

 
 
</template>

<style scoped lang="scss"></style>
