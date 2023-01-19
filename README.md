# Тестовое задание

Создай двухстраничное веб-приложение по макету.

# Технические требования

1. Использовать React / Vue
2. npm / yarn
3. Стейт-менеджер Redux / Mobx / etc
4. Webpack
5. React Router v5. При переходе между страницами приложение не должно перезагружаться

Можно использовать любые библиотеки компонентов (Material UI, Reactstrap, etc)

# Функциональные требования

Двухстраничное приложение.

1 **страница: список товаров со ссылками**

Список товаров формируется из json-файла (подробнее в разделе бэкенд), в котором находится массив объектов product.

На макете светло-серым цветом обозначены названия соответтвующих свойств объектов product.

По умолчанию отсортировать список по названию товара по возрастанию.

С каждого товара можно перейти на карточку соответствующего товара.

2 **страница: карточка товара**

Содержит карточку товара и кнопку “Назад”.

Использовать данные о продукте из json-файла. Некоторые данные могут отсутствовать, в таком случае соответствующий элемент не должен отображаться в карточке.
