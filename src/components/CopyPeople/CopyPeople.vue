<template>
  <div class="copy-people">
    <h2>Copy people</h2>
    <p>Best matches based on your preferences</p>
    <br/>
    <CopyPeopleBox :users="users"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CopyPeopleBox from '@/components/CopyPeople/CopyPeopleBox.vue'

@Component({
  components: {
    CopyPeopleBox
  },
  computed: {
    users () {
      return this.$store.getters.users
    }
  }
})
export default class CopyPeople extends Vue {
  created () {
    this.$store.dispatch('bindUsers')
  }
}
</script>

<style scoped></style>
