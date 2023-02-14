<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import { onMounted } from "vue";

onMounted(() => {
  setTimeout(() => {
    document.getElementsByClassName('glue')[0].style.display = "none"
  }, 10000)
})

</script>

<template>
  <div class="glue">
    <div class="semi-ball"></div>
    <div class="semi-ball"></div>
    <div class="ball">
      <div class="small-ball"></div>
    </div>
  </div>
</template>

<style scoped>
.semi-ball:nth-child(1) {
  width: 90px;
  height: 45px;
  border-radius: 12rem 12rem 0 0;
  border: 4px solid black;
  background-color: red;
}
.semi-ball:nth-child(2) {
  width: 90px;
  height: 45px;
  border-radius: 0 0 12rem 12rem;
  border: 4px solid black;
  background-color: white;
}

.glue {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: rotacao 2s linear infinite;  
  position: absolute;
  top: 400px;
  left: -200px;
}

@keyframes rotacao {
  0% {
    rotate: 0deg;    
  }
  25% {
    rotate: 90deg;
    top: 350px;
    left: 100px;
  }
  50% {
    rotate: 180deg;
    top: 400px;
    left: 500px;
  }
  75% {
    rotate: 240deg;
    top: 350px;
    left: 950px;
  }
  100% {
    rotate: 360deg;
    top: 400px;
    left: 1400px;
  }
}

.small-ball {
  width: 12.25px;
  height: 12.25px;
  border-radius: 12rem 12rem;
  background-color: gray;
}

.ball {
  position: absolute;
  top: 38%;
  width: 24.5px;
  height: 24.5px;
  border-radius: 12rem 12rem;
  rotate: 270deg;
  display: grid;
  place-items: center;
  border: 5px solid black;
  background-color: white;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
