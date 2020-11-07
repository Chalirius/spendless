<template>
  <div class="copy-people">
    <h2>Copy people</h2>
    <p>Best matches based on your preferences</p>
    <br/>
    <CopyPeopleBox/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CopyPeopleBox from '@/components/CopyPeople/CopyPeopleBox.vue'

@Component({
  components: {
    CopyPeopleBox
  }
})
export default class CopyPeople extends Vue {}
</script>

<style scoped></style>
