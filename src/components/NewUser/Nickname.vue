<template>
  <div>
    <h2>Your<br/>nickname</h2>
    <v-text-field v-model="nickname"
    class="nickname-input"
      hide-details="auto"
      dark>
      </v-text-field>

    <v-btn @click="trySaveNickname()" style="margin-top: 250px;"
  color="primary"
  block
  depressed
  elevation="2"
  dark
  rounded
>Continue</v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  data () {
    return {
      nickname: ''
    }
  },
  methods: {
    trySaveNickname () {
      const cleanedNickname = this.$data.nickname?.replace(/\s/g, '')
      if (cleanedNickname) {
        this.$emit('childToParent', cleanedNickname)
      }
    }
  }
})

export default class Nickname extends Vue {
}
</script>

<style scoped>
  .nickname-input {
    margin-top: 33vh;
  }
</style>
