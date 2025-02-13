import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

window.addEventListener('message', (event) => {
    console.log('Плагин получил данные:', event.data);
});

app.mount('#app');

window.parent.postMessage({ type: 'PLUGIN_READY' }, '*');
