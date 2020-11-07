<template>
  <div class="copy-people">
    <h2>Copy people</h2>
    <p>Best maches based on your preferences</p>
    <br>
    <div class="rectangle8">
      <h3>Simon</h3>
      <p>Hi! I am sharing my lifestyle to help you save 20% of your monthly income.</p>
      <div class="preferences">
        <button>23 years</button>&nbsp;<button>Vegan</button>&nbsp;<button>Helsinki</button>
        <br>
        <button>Saves 20%</button>&nbsp;<button>€1000/month</button>&nbsp;<button>Married</button>
      </div>
    </div>
    <br>
    <div class="rectangle8">
      <h3>Amanda</h3>
      <p>Hi! I am sharing my lifestyle to help you save 30% of your monthly income.</p>
      <div class="preferences">
        <button>23 years</button>&nbsp;<button>Vegan</button>&nbsp;<button>Helsinki</button>
        <br>
        <button>Saves 20%</button>&nbsp;<button>€1000/month</button>&nbsp;<button>Married</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default class CopyPeople extends Vue {}
</script>

<style scoped>
.rectangle8 {
  width: 19.9375rem;
  height: 11.625rem;
  top: 9.3125rem;
  padding: 0 0.5rem;
  margin: auto;

  border: 0.5px solid #000000;
  box-sizing: border-box;
  border-radius: 40px;
}

.rectangle8 h3 {
  text-align: left;
  margin-left: 0.5rem;
}

.preferences button {
  margin-bottom: 0.375rem;
  padding: 0.25rem 0.5rem;

  background: #F879D8;
  border: 0.5px solid #000000;
  box-sizing: border-box;
  border-radius: 40px;
}

</style>
