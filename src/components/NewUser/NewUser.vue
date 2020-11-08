<template>
  <div class="new-user-container">
  <Nickname v-if="!nickname" v-on:childToParent="storeNickname" />
  <MoreDetails v-if="nickname && !moreDetailsDone" v-on:childToParent="storeDetails"/>
  <Preferences v-if="nickname && moreDetailsDone && !prefs.length"  v-on:childToParent="storePreferences"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Nickname from './Nickname.vue'
import MoreDetails from './MoreDetails.vue'
import Preferences from './Preferences.vue'
import { db } from '@/firestore'
import { User } from '@/model/users'

@Component({
  data () {
    return {
      nickname: '',
      moreDetailsDone: false,
      age: null,
      area: '',
      saveFromIncomePct: null,
      monthlyIncome: null,
      prefs: []
    }
  },
  methods: {

    // Triggered when `childToParent` event is emitted by the child.
    storeNickname (value: string) {
      this.$data.nickname = value?.trim()
    },
    storeDetails (value: {age: number; area: string; saveFromIncomePct: number; monthlyIncome: number}) {
      this.$data.age = value?.age
      this.$data.area = value?.area
      this.$data.saveFromIncomePct = value?.saveFromIncomePct
      this.$data.monthlyIncome = value?.monthlyIncome

      this.$data.moreDetailsDone = true
    },
    async storePreferences (value: string[]) {
      this.$data.prefs = value

      const id = db.collection('_').doc().id

      const user: User = {
        id: id,
        nickname: this.$data.nickname,
        age: this.$data.age,
        area: this.$data.area,
        numberOfCopiers: 0,
        saveFromIncomePct: this.$data.saveFromIncomePct,
        monthlyIncome: this.$data.monthlyIncome,
        prefs: this.$data.prefs
      }
      await db
        .collection('users')
        .doc(id)
        .set(user)

      this.$router.push('main')
    }
  },
  components: {
    Nickname,
    MoreDetails,
    Preferences
  }
})
export default class NewUser extends Vue {}
</script>

<style scoped>
  .new-user-container {
    width: 20em;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
  }
</style>
