<template>
<v-app>
  <div id="app">
    <router-view/>
  </div>
</v-app>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background: black;
}

button {
  cursor: pointer;
}
h2 {
  margin-top: 0;
  font-style: normal;
  font-weight: 600;
  font-size: 34px;
  line-height: 41px;
  padding-top: 50px;
}
img {
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
}

.v-btn {
  background-color: #007BFF !important;
}
.v-chip {
  background-color: rgba(255, 255, 255, 0.1) !important;
}

</style>
