import { renderCard } from './renderCard.js';

export function renderList(items) {
    if (items.length === 0) {
        return `
            <div class="alert alert--warning">
                Нічого не знайдено
            </div>
        `;
    }

    // Для красивого відображення обгорнемо картки в сітку за допомогою inline-стилів 
    // (або тут міг би бути клас на кшталт .grid-container)
    return `
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px; padding: 24px;">
            ${items.map(renderCard).join('')}
        </div>
    `;
}