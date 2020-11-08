<template>
  <div>
    <h2>Tell more about yourself</h2>

    <div class="inputs-container">
      <v-select v-model="age"
        :items="ages"
        filled
        label="AGE"
        dark></v-select>

    <v-text-field v-model="area"
        hide-details="auto"
        label="AREA"
        filled
        dark></v-text-field>

    <v-select style="margin-top: 33px;" v-model="saveFromIncomePct"
      :items="[5, 10, 20, 30, 40, 50, 60, 70, 80, 90]"
      suffix="%"
      filled
      label="I WANT TO SAVE FROM MY INCOME"
      dark
    ></v-select>

    <v-text-field v-model="monthlyIncome"
        hide-details="auto"
        label="MY MONTHLY INCOME"
        suffix="€"
        filled
        dark></v-text-field>
    </div>

    <v-btn @click="trySaveDetails()" style="margin-top: 130px;"
      color="primary"
      block
      depressed
      elevation="2"
      dark
      rounded>Continue</v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

const allowedAges: number[] = (() => {
  const ages: number[] = []
  for (let i = 18; i < 90; i++) {
    ages.push(i)
  }
  return ages
})()

@Component({
  data () {
    return {
      ages: allowedAges,
      age: null,
      area: '',
      saveFromIncomePct: null,
      monthlyIncome: null
    }
  },
  methods: {
    trySaveDetails () {
      const cleanedArea = this.$data.area?.replace(/\s/g, '')
      if (this.$data.age &&
      cleanedArea &&
      this.$data.saveFromIncomePct &&
      this.$data.monthlyIncome &&
      !isNaN(this.$data.monthlyIncome)
      ) {
        const data = {
          age: this.$data.age,
          area: cleanedArea,
          saveFromIncomePct: this.$data.saveFromIncomePct,
          monthlyIncome: this.$data.monthlyIncome
        }
        this.$emit('childToParent', data)
      }
    }
  }
})

export default class MoreDetails extends Vue {
}

</script>

<style scoped>
.inputs-container {
  margin-top: 5em
}
</style>
