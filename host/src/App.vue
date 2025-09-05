<script setup>
import HelloWorld from './components/HelloWorld.vue'
import ReactButton from 'mfe-react/Button';
import SvelteButton from 'mfe-svelte/Button';
import ReactDOMServer from "react-dom/server";

async function fetchReactComponent() {
  return new Promise(async (resolve, reject) => {
    try {
      const res = (await import("mfe-react/Button")).default;
      resolve(
        ReactDOMServer.renderToString(
          res({
            caption: "React Button in vue",
          })
        )
      );
    } catch (err) {
      reject(err);
    }
  });
}

const reactButton = await fetchReactComponent();
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <div v-html="reactButton"></div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
