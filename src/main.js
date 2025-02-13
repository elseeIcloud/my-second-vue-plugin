import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

window.addEventListener('message', (event) => {
    console.log('Плагин получил данные:', event.data);
    if (event.data.type === 'AUTH_DATA') {
        console.log('Получен токен:', event.data.token);
        console.log('Space ID:', event.data.spaceId);
        console.log('User ID:', event.data.userId);
    }
});

app.mount('#app');

window.parent.postMessage({ type: 'PLUGIN_READY' }, '*');
