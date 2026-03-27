const card = ` <div class="card">
            <div class="card_img">
                <img src="img/shrek.png" alt="shrek">
            </div>
            <div class="card_text">
                <div class="card_up">
                    <p class="card_title">Название продукта</p>
                    <div class="card_setters">
                        <div class="card_coout">
                            <button class="minus">-</button>
                            <span>1</span>
                            <button class="plus">+</button>
                        </div>
                        <div class="card_price">100р</div>
                    </div>
                </div>
                <p class="card_desc">Краткое описание продукта или товара</p>
                <button class="card_btn">Добавить в корзину</button>
            </div>
        </div>`;

for (let i = 0; i < 12; i++) {
    document.querySelector('main').innerHTML += card;
}