<script>
export default {
  name: 'AppMainStarVote',

  props: ['starVote'],

  data(){
    return{
        numberOfStars: Math.floor(this.starVote/2),
    }
  },


  methods: {
    stars(n){

        if(n > this.numberOfStars){
            return 'b'
        }else{
            return  'a'
        }
        
    }
  }
}
</script>

<template>
        <span v-for="n in 5">
            {{ stars(n) }}
        </span>
</template>

<style scoped lang="scss"></style>
