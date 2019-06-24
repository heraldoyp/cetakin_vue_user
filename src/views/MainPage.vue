<template>
  <div class="about">
    <h1>This is an Main Page</h1>
    <div v-for="print in printData">
      <p>{{ print.filename }}</p>
    </div>

  </div>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex';

  export default {
    name: 'mainPage',
    data (){
      return{
        test: 'heraldo',
      }
    },
    computed: {
      printData () {
        return this.$store.getters.loadedPrintData
      }
    }
  }
</script>

<style>
  
</style>
