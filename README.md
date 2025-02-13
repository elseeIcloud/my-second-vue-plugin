# DRUID Plugin Example

Этот проект представляет собой шаблон для создания плагинов на Vue.js 3.

## 📁 Структура проекта

```
exapmle/
├── public/               # Статические файлы
│   ├── favicon.ico       # Иконка
│   ├── index.html        # Основной HTML-файл
├── src/                  # Исходный код
│   ├── assets/           # Статические ресурсы (CSS, изображения)
│   ├── components/       # Компоненты Vue
│   │   ├── Example.vue   # Пример компонента
│   ├── App.vue           # Основной компонент
│   ├── main.js           # Точка входа
├── .gitignore            # Игнорируемые файлы Git
├── jsconfig.json         # Конфигурация путей
├── package.json          # Описание зависимостей
├── README.md             # Документация проекта
├── webpack.config.js     # Конфигурация Webpack
├── yarn.lock             # Фиксация зависимостей
```

## 🚀 Установка и запуск

### Установка зависимостей
```sh
yarn install
```

### Запуск в режиме разработки
```sh
yarn dev
```
После запуска сервер доступен по адресу `http://localhost:8080`.

### Сборка в production
```sh
yarn build
```

## 🔧 Основные файлы

### `index.html`
Главный HTML-файл, содержащий контейнер `<div id="app"></div>` для Vue-приложения.

### `App.vue`
Основной компонент, содержащий логику и рендеринг приложения.

### `Example.vue`
Пример компонента Vue с пропсами и стилями.

### `main.js`
Точка входа, создающая Vue-приложение и монтирующая его в `#app`. Также содержит механизм обмена сообщениями с родительским приложением:

```js
window.addEventListener('message', (event) => {
    console.log('Плагин получил данные:', event.data);
    if (event.data.type === 'AUTH_DATA') {
        console.log('Получен токен:', event.data.token);
        console.log('Space ID:', event.data.spaceId);
        console.log('User ID:', event.data.userId);
    }
});

window.parent.postMessage({ type: 'PLUGIN_READY' }, '*');
```

В `event.data` могут приходить такие параметры:
- `type: 'AUTH_DATA'` — тип сообщения, передающего аутентификационные данные.
- `token` — токен пользователя, хранящийся в `localStorage`.
- `spaceId` — идентификатор текущего пространства пользователя.
- `userId` — идентификатор пользователя.

### `webpack.config.js`
Конфигурация Webpack для сборки проекта, включая поддержку Vue и CSS.

## 📜 Лицензия
Этот проект распространяется под лицензией MIT.

