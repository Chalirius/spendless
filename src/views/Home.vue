<template>
  <div class="home">
    <MainPage/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MainPage from '@/components/MainPage.vue' // @ is an alias to /src

@Component({
  components: {
    MainPage
  }
})
export default class Home extends Vue {}
</script>
