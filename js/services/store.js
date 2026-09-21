import { Material } from '../models/Material.js';

export class Store {
    #items = [];

    constructor(items) {
        // Конвертуємо прості об'єкти в екземпляри класу Material
        this.#items = items.map(Material.fromObject);
    }

    // Повертає копію всього масиву
    all() {
        return [...this.#items];
    }

    // Пошук за рядком (використовує метод matches з класу Material)
    search(query) {
        return this.#items.filter(item => item.matches(query));
    }

    // Фільтрація за категорією
    byCategory(category) {
        return this.#items.filter(item => item.category === category);
    }

    // Пошук одного елемента за ID
    byId(id) {
        return this.#items.find(item => item.id === id);
    }

    // Сортування за назвою (створюємо копію, сортуємо з урахуванням української мови)
    sortedByTitle() {
        return [...this.#items].sort((a, b) => {
            return a.title.localeCompare(b.title, 'uk');
        });
    }

    // Підрахунок кількості записів у кожній категорії (використовуємо reduce)
    countByCategory() {
        return this.#items.reduce((acc, item) => {
            const category = item.category;
            acc[category] = (acc[category] || 0) + 1;
            return acc;
        }, {});
    }
}