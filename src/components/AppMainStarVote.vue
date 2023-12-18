<script>
export default {
  name: 'AppMainStarVote',

  props: ['starVote'],

  data() {
    return {
      numberOfStars: Math.floor(this.starVote / 2),
    };
  },
};
</script>

<template>
  <span v-for="n in 5">
    <span v-if="n > this.numberOfStars">
      <font-awesome-icon icon="fa-regular fa-star" />
    </span>
    <span v-else><font-awesome-icon icon="fa-solid fa-star" /></span>
  </span>
</template>

<style scoped lang="scss"></style>
