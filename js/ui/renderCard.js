export function renderCard(material) {
    return `
        <article class="card">
            <!-- Заглушка для обкладинки -->
            <img src="https://placehold.co/600x200?text=${encodeURIComponent(material.category)}" alt="Обкладинка" class="card__image">
            
            <h3 class="card__title">${material.title}</h3>
            
            <div class="card__text">
                <p><strong>Нотатки:</strong> ${material.notes}</p>
            </div>
            
            <div class="card__footer">
                <span style="color: var(--color-muted); font-size: 0.875rem;">Статус: ${material.status}</span>
                <span style="color: var(--color-primary); font-weight: bold;">★ ${material.rating}</span>
            </div>
        </article>
    `;
}