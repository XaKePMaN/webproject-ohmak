import { materials } from './data/materials.js';
import { Store } from './services/store.js';
import { renderList } from './ui/renderList.js';

// 1. Ініціалізуємо сховище нашими даними
const store = new Store(materials);

// 2. Отримуємо відсортований за алфавітом перелік
const sortedItems = store.sortedByTitle();

// 3. Перетворюємо масив у HTML-розмітку
const html = renderList(sortedItems);

// 4. Вставляємо розмітку на сторінку (шукаємо тег <main> у твоєму index.html)
const container = document.querySelector('main');
if (container) {
    // Очищаємо попередній тестовий вміст <main> і вставляємо наш каталог
    container.innerHTML = html;
} else {
    console.error('Контейнер <main> не знайдено на сторінці.');
}

// 5. Виведення в консоль для перевірки (Завдання 5)
console.log('Статистика записів за категоріями:');
console.table(store.countByCategory());