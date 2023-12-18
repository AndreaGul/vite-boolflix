<script>
export default {
  name: 'AppMainLangFlag',

  props: ['language'],
};
</script>

<template>
  <div v-if="language === 'en'">
    Lingua originale: <img src="../assets/img/en.png" alt="en" />
  </div>
  <div v-else-if="language === 'it'">
    Lingua originale: <img src="../assets/img/it.png" alt="it" />
  </div>
  <div v-else>Lingua originale: {{ language }}</div>
</template>

<style scoped lang="scss">
img {
  width: 20px;
}
</style>
