import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

// Устанавливаем глобальные свойства до монтирования
app.config.globalProperties.$iframeData = {
    token: null,
    spaceId: null
};

// Добавляем обработчик postMessage
window.addEventListener('message', (event) => {
    // Можно добавить проверку event.origin для безопасности
    if (event.data?.token && event.data?.spaceId) {
        app.config.globalProperties.$iframeData.token = event.data.token;
        app.config.globalProperties.$iframeData.spaceId = event.data.spaceId;
    }
});

app.mount('#app'); // Монтируем приложение в DOM
