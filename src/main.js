import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.config.globalProperties.$iframeData = {
    token: null,
    spaceId: null,
};

window.addEventListener('message', (event) => {
    if (event.data?.token && event.data?.spaceId) {
        app.config.globalProperties.$iframeData.token = event.data.token;
        app.config.globalProperties.$iframeData.spaceId = event.data.spaceId;
        console.log('Плагин получил данные:', event.data);
    }
});

app.mount('#app');

window.parent.postMessage({ type: 'PLUGIN_READY' }, '*');
