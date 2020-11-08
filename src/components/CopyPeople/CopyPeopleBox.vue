<template>
  <div class="rectangle8" @click="redirectToUser()">
    <div class="img-container">
    <img src="../../../public/armstrong-face.jpg">
    </div>
    <div class="user-details">
      <div class="nickname">
          {{ user.nickname }}
      </div>
      <div>
        Hi! I am sharing my lifestyle to help you save {{ user.saveFromIncomePct }}% of your monthly income.
      </div>
      <div class="preferences">
        <div class="preference">{{ user.age }} years old</div>
        <div v-for="pref of user.prefs" :key="pref" class="preference">{{ pref}}</div>
        <div class="preference">{{ user.area }}</div>
        <div class="preference">Saves {{ user.saveFromIncomePct }}%</div>
        <div class="preference">{{ user.monthlyIncome }} euros / month</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  props: {
    user: {
      type: Object
    }
  },
  methods: {
    redirectToUser () {
      this.$router.push({ path: '/copy-user', params: { user: this.$data.user } })
    }
  }
})
export default class CopyPeopleBox extends Vue {}
</script>

<style scoped>
.nickname {
  font-size: 1.5em;
  font-weight: 500;
}
.img-container {
  align-self: center;
  margin: 20px;
}
.user-details {
  text-align: left;
}
.rectangle8 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  width: 25rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  padding: 0.5rem;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  cursor: pointer;
}
.rectangle8 h3 {
  text-align: left;
  margin-left: 0.5rem;
}
.preference {
  display: inline-block;
  /* margin-bottom: 0.375rem; */
  padding: 0.25rem 0.5rem;

  background: rgba(0, 123, 255, 0.4);
  color: white;
  box-sizing: border-box;
  border-radius: 310px;
  width: fit-content;

  margin: 5px 5px 5px 0;

  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 13px;

}
</style>
