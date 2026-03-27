const cardTemplate = `
    <div class="card_img">
        <img src="img/shrek.png" alt="shrek">
    </div>
    <div class="card_text">
        <div class="card_up">
            <p class="card_title">Название продукта</p>
            <div class="card_setters">
                <div class="card_count">
                    <button class="minus">-</button>
                    <span class="count-value">1</span>
                    <button class="plus">+</button>
                </div>
                <div class="card_price">100р</div>
            </div>
        </div>
        <p class="card_desc">Краткое описание продукта или товара</p>
        <button class="card_btn">Добавить в корзину</button>
    </div>
`;

// Функция для создания одной карточки
function createCard() {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.innerHTML = cardTemplate;
    return cardElement;
}

// Функция для настройки логики кнопок внутри карточки
function setupCardLogic(card) {
    // Находим элементы внутри конкретной карточки
    const minusBtn = card.querySelector('.minus');
    const plusBtn = card.querySelector('.plus');
    const countSpan = card.querySelector('.count-value');

    // Получаем начальное значение
    let count = parseInt(countSpan.textContent);

    // Обработчик для кнопки "-"
    minusBtn.addEventListener('click', () => {
        if (count > 1) {
            count--;
            countSpan.textContent = count;
        }
    });

    // Обработчик для кнопки "+"
    plusBtn.addEventListener('click', () => {
        count++;
        countSpan.textContent = count;
    });
    
    // Обработчик для кнопки "Добавить в корзину" (для примера)
    const addToCartBtn = card.querySelector('.card_btn');
    addToCartBtn.addEventListener('click', () => {
        alert(`Добавлено в корзину: ${count} шт.`);
    });
}

// Основной код для генерации карточек
const mainContainer = document.querySelector('main');

for (let i = 0; i < 12; i++) {
    const newCard = createCard(); // Создаем новый элемент карточки
    setupCardLogic(newCard);      // Настраиваем логику для этой карточки
    mainContainer.appendChild(newCard); // Добавляем карточку на страницу
}