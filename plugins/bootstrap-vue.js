import { defineNuxtPlugin } from '#app';
import * as BootstrapVueNext from 'bootstrap-vue-next';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'; // Optional: BootstrapVueNext CSS

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(BootstrapVueNext);
});