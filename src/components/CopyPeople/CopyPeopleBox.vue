<template>
  <div class="rectangle8">
    <img src="../../../public/armstrong-face.jpg">
    <div>
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
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'
import { User } from '../../interfaces/User.interface'

export default class CopyPeopleBox extends Vue {
  /* props:{
    users: new Array<User>()
  } */
}
</script>

<style scoped>
.rectangle8 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #606060;
  border-radius: 20px;
  width: 20rem;
  margin: auto;
  padding: 1rem;
}
.rectangle8 h3 {
  text-align: left;
  margin-left: 0.5rem;
}
.preferences button {
  margin-bottom: 0.375rem;
  padding: 0.25rem 0.5rem;

  background: rgba(0, 123, 255, 0.4);
  color: white;
  box-sizing: border-box;
  border-radius: 10px;
}
</style>
