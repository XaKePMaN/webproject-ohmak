// Базовий клас сутності
export class Material {
    // Приватне поле
    #id;

    // Конструктор із полями сутності
    constructor({ id, title, category, status, rating, notes }) {
        this.#id = id;
        this.title = title;
        this.category = category;
        this.status = status;
        this.rating = rating;
        this.notes = notes;
    }

    // Геттер для приватного поля
    get id() {
        return this.#id;
    }

    // Метод перевірки відповідності пошуковому запиту
    matches(query) {
        if (!query) return true;
        const lowerQuery = query.toLowerCase();
        return this.title.toLowerCase().includes(lowerQuery) || 
        this.notes.toLowerCase().includes(lowerQuery);
    }

    // Змістовний метод предметної області (чи є запис улюбленим)
    isFavorite() {
        return this.rating === 5;
    }

    // Метод для короткого опису (буде перевизначений нижче)
    getSummary() {
        return `${this.title} [${this.category}]`;
    }

    // Статичний метод для створення екземпляра з об'єкта
    static fromObject(obj) {
        return new Material(obj);
    }
}

// Похідний клас для ігор
export class GameMaterial extends Material {
    constructor(data) {
        // Виклик конструктора батьківського класу
        super(data);
        // Специфічне поле для ігор (якщо його немає в об'єкті, ставимо 'PC' за замовчуванням)
        this.platform = data.platform || 'PC';
    }

    // Перевизначення методу з викликом батьківського методу через super
    getSummary() {
        return `${super.getSummary()} — Платформа: ${this.platform}`;
    }
}