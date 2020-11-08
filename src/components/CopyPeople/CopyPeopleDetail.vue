<template>
  <div class="details">
    <div class="user-details">
      <div class="img-container">
        <img src="../../../public/armstrong-face.jpg">
      </div>
      <div>
        <div class="nickname">Alex</div>
        <div>
          Hi! I am sharing my lifestyle to help you save 20% of your monthly income.
        </div>
      </div>
    </div>
    <div class="preferences">
      <div class="preference">23 years old</div>
      <div class="preference">Vegan</div>
      <div class="preference">Helsinki</div>
      <div class="preference">Saves 20%</div>
      <div class="preference">1000€ / month</div>
    </div>
    <div class="monthly-data">
      <div class="single-piece-data">
        <span class="title">Recurring Expenses</span><br>
        <span class="percentage">50%</span>
      </div>
      <div class="single-piece-data">
        <span class="title">Savings</span><br>
        <span class="percentage">20%</span>
      </div>
      <div class="single-piece-data">
        <span class="title">Rainy Day Fund</span><br>
        <span class="percentage">10%</span>
      </div>
      <div class="single-piece-data">
        <span class="title">Investing</span><br>
        <span class="percentage">10%</span>
      </div>
      <div class="single-piece-data">
        <span class="title">Discretionary Fund</span><br>
        <span class="percentage">10%</span>
      </div>
    </div>
    <p>With your current income, you could save €4176 in 12 months</p>
    <button>Copy</button>
  </div>
</template>

<style scoped>
.details {
  justify-content: center;
}
.details button {
  color: white;
  background: #007BFF;
  border-radius: 10px;
  width: 18rem;
  height: 2.5rem;
}
.nickname {
  font-size: 1.5em;
  font-weight: 500;
}
.img-container {
  align-self: center;
  margin: 20px;
}
.user-details {
  display: flex;
}
.preference {
  display: inline-block;
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
.monthly-data {
  display: inline-block;
}
.single-piece-data {
  margin: 5px;
  text-align: left;
  background: rgba(0, 123, 255, 0.4);
  color: white;
  border-radius: 10px;
  width: 9rem;
  padding: 0.5rem;
}
.title {
  font-size: 0.7rem;
}
.percentage {
  font-size: 2.125rem;
  font-weight: 700;
}
</style>
