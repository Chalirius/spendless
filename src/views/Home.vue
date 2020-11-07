<template>
  <div class="home">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CopyPeople from '@/components/CopyPeople.vue' // @ is an alias to /src

@Component({
  components: {
    CopyPeople
  }
})
export default class Home extends Vue {}
</script>
