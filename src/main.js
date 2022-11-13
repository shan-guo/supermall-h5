import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import eventBus from "_vue3-eventbus@2.0.0@vue3-eventbus";

createApp(App).use(store).use(router).use(eventBus).mount('#app')
