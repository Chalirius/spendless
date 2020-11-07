<template>
  <div class="rectangle8">
    <img src="../../../public/armstrong-face.jpg">
    <h3>Simon</h3>
    <p style="width: 200px;">
      Hi! I am sharing my lifestyle to help you save 20% of your monthly income.
    </p>
    <div class="preferences">
      <button>23 years</button>&nbsp;<button>Vegan</button>&nbsp;<button>
        Helsinki
      </button>
      <br />
      <button>Saves 20%</button>&nbsp;<button>€1000/month</button>&nbsp;<button>
        Married
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default class CopyPeopleBox extends Vue {}
</script>

<style scoped>
.rectangle8 {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.rectangle8 h3 {
  text-align: left;
  margin-left: 0.5rem;
}
.preferences button {
  margin-bottom: 0.375rem;
  padding: 0.25rem 0.5rem;

  background: #f879d8;
  border: 0.5px solid #000000;
  box-sizing: border-box;
  border-radius: 40px;
}
</style>
