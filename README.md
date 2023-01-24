## Тестовое задание в ТП Лаб

Деплой: https://verchkafeya.github.io/tp-lab-test/

Необходимо создать двухстраничное веб-приложение по [макету](https://www.figma.com/file/UPrQgRRFML8msDeFnyiXt4/Test-TPLab?node-id=0%3A1&t=r7VlKMWPANKa3O0G-0)

Оценка работы осуществляется по следующим критериям:

### Технические требования

- [x] Использовать React / Vue **_(использован React)_**
- [x] Использование пакетного менеджера npm / yarn **_(использован npm)_**
- [x] Стейт-менеджер Redux / Mobx / etc **_(использован Redux Toolkit)_**
- [x] Webpack
- [x] React Router v5. При переходе между страницами приложение не должно перезагружаться **_(использован React Router v6)_**

### Функциональные требования

#### Страница №1: список товаров со ссылками

По умолчанию отсортировать список по названию товара по возрастанию.

С каждого товара можно перейти на карточку соответствующего товара.

- [x] Список товаров со ссылками на переход к карточке **_(выполнено)_**
- [x] Сортировка списка по разным параметрам **_(выполнено)_**
- [x] Поиск по списку (название товара / категория / прочее ) **_(выполнено)_**
- [ ] Другие фильтры по своему усмотрению. Внешний вид в одном стиле с остальными элементами **_(выполнено)_**
- [x] Пагинация списка (разбиение на страницы) **_(выполнено)_**
- [x] Выбор количества товаров, отображаемых на одной странице (если реализована пагинация списка) **_(выполнено)_**

#### Страница №2: карточка товара

- [x] Содержит карточку товара и кнопку “Назад” **_(выполнено)_**

### Дополнительно

- [x] Реализацию на TypeScript **_(использован React)_**
- [x] Использование пре-пост процессоров CSS **_(использован Sass)_**
- [x] Применение методолгии БЭМ для CSS **_(наименования классов согласно БЭМ)_**
- [ ] Реализацию ленивой подгрузки компонентов
- [x] Адаптивную верстку **_(полоса прокрутки не появляется при уменьшении экрана до 320px)_**
- [x] Выбор языка - русский или английский. После переключения языка все интерфейсные тексты выводятся на выбранном языке (переводить содержимое products.json не нужно) **_(есть возможность выбора языка)_**
- [x] Запоминание состояния приложения при обновлении страницы (например, выбранную сортировку, номер страницы в списке карточек и т.д.) **_(реализована связть глобального стейта приложения и localStorage с использованием redux-persit)_**