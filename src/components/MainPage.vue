<template src="./MainPage.html"></template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class MainPage extends Vue {
  name = 'Bob'
  income = 1000
  setExpense () {
    console.log('SET EXPENSE')
  }

  copyOthers () {
    console.log('COPY OTHERS')
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./MainPage.css"></style>
