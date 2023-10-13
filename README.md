# Тестовое задание для стажёра Frontend

Разработан интерфейс для сайта [Free-To-Play Games](https://www.freetogame.com/), состоящий из двух страниц:

### Главная страница
- Показывает игры
    - Игры можно отфильтровать по платформе и жанру (например, шутер)
    - Игры можно отсортировать по дате релиза, популярности и тд
- Каждая игра в списке содержит:
	- название
	- дата релиза (в российском формате)
    - издатель
    - жанр
    - картинка
- По клику на игру происходит переход на страницу игры
- При загрузке игр отображается индикатор загрузки
- Если не получилось получить данные, пользователь получает сообщение
  
### Страница игры
- Содержит:	
	- название
	- дату релиза (в российском формате)
    - издателя
    - разработчика
    - жанр
    - постер
    - карусель скриншотов
    - системные требования
- На странице есть кнопка для возврата к списку игр 
- При загрузке игр отображается индикатор загрузки
- Если не получилось получить данные, пользователь получает сообщение

## Технические состовляющие

- Реализован адаптивный интерфейс
- Приложение разработано с помощью React 18+ и Redux Toolkit
- Использован [Free-To-Play Games API](https://www.freetogame.com/api-doc) (с CORS). Вызовы API и обработка данных от него производятся напрямую с фронтенда.
- Роутинг выполнен с использованием [React Router v6](https://reactrouter.com/en/main)
- Использован Фреймворк [Material UI](https://mui.com/material-ui/)
- Использован пакетный менеджер `npm`
- Приложение запускается по адресу `localhost:3001` командой `npm start`
- При переходах по ссылкам страница не перезагружается
- Если карточка игры была открыта, то она доступна при последующих открытиях (перезагрузках) страницы без дополнительного запроса в течение 5 минут
