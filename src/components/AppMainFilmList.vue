<script>

export default {
  name: 'AppMainSearchFilmList',

  props: ['title','titleOriginal','lang','vote']
};
</script>

<template>
   <li>
         <ul>
            <li>Titolo del film: {{ title  }}</li>
            <li>Titolo Originale: {{ titleOriginal }}</li>
            <li>Lingua originale:{{ lang }} </li>
            <li>Voto medio: {{ vote }}</li>
        </ul>
    </li>
       
</template>

<style scoped lang="scss"></style>

