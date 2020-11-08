<template>
  <div>
    <h2>Choose you preferences</h2>

      <v-chip-group style="margin-top: 30px;"
        active-class="primary--text"
        multiple
        column>
        <v-chip v-for="pref of allPrefs" :key="pref"
              class="mr-2"
              dark
              @click="addOrRemovePref(pref)"
            >
            {{ pref }}
            </v-chip>

    </v-chip-group>

    <v-btn @click="savePreferences()" style="margin-top: 400px;"
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
      allPrefs: ['Ethical buying', 'Vegan', 'Libertarian', 'Organic', 'Investing', 'Doomsday prepping'],
      chosenPrefs: new Map()
    }
  },
  methods: {
    addOrRemovePref (pref: string) {
      const prefMap: Map<string, boolean> = this.$data.chosenPrefs
      if (!prefMap.has(pref)) {
        return prefMap.set(pref, true)
      }
      const currentPrefValue = prefMap.get(pref)
      prefMap.set(pref, !currentPrefValue)
    },
    savePreferences () {
      const prefsMap: Map<string, boolean> = this.$data.chosenPrefs
      const preferences: string[] = []
      for (const chosenPref of prefsMap.entries()) {
        if (chosenPref[1]) {
          preferences.push(chosenPref[0])
        }
      }
      if (preferences?.length) {
        this.$emit('childToParent', preferences)
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
