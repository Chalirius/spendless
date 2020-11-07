<template>
  <div class="copy-people">
    <h2>Copy people</h2>
    <p>Best matches based on your preferences</p>
    <br/>
    <CopyPeopleBox :user="user" v-for="user of users" :key="user.id"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
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
