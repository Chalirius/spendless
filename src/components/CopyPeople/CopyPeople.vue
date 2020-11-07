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
import { User } from '../../interfaces/User.interface'
import { testUsers } from '../../Constants'
import CopyPeopleBox from '@/components/CopyPeople/CopyPeopleBox.vue'

@Component({
  components: {
    CopyPeopleBox
  },
  data () {
    return {
      testUsers: testUsers
    }
  }
})

export default class CopyPeople extends Vue {}
</script>

<style scoped></style>
