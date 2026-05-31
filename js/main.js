const reviewsSwiper = new Swiper('.reviewsSwiper', {
    loop: true,
    autoplay: { delay: 4000, disableOnInteraction: false },
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.reviews-wrapper .swiper-button-next',
        prevEl: '.reviews-wrapper .swiper-button-prev'
    },
    pagination: { el: '.swiper-pagination', clickable: true },
    breakpoints: { 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }
});

const promoProducts = [
    { id: 27, discountPrice: 44, originalPrice: 55, discountPercent: 20, name: "Пирожное «Эклер»", nameEn: "Eclair", image: "eclair.png" },
    { id: 80, discountPrice: 130, originalPrice: 180, discountPercent: 28, name: "Сдоба пасхальная пряная", nameEn: "Spiced Easter pastry", image: "pashalnaya.webp" },
    { id: 6, discountPrice: 63, originalPrice: 70, discountPercent: 10, name: "Хлеб бородинский", nameEn: "Borodinsky Bread", image: "borodinsky.webp" }
];

const allProducts = [
    { id: 1, name: "Хлеб «Батоша» фирменный", nameEn: "Batosh signature bread", desc: "Пшеничный хлеб по особому рецепту", descEn: "Wheat bread according to a special recipe", price: 65, image: "bread1.webp", category: "bread", badge: "Хит", date: 2025 },
    { id: 2, name: "Хлеб ржано-пшеничный", nameEn: "Rye-wheat bread", desc: "Смесь ржаной и пшеничной муки", descEn: "Mixture of rye and wheat flour", price: 55, image: "bread2.webp", category: "bread", badge: "", date: 2024 },
    { id: 4, name: "Хлеб пшеничный 2 сорт 600г", nameEn: "Wheat bread 2nd grade 600g", desc: "Пшеничная мука 2 сорта", descEn: "Wheat flour 2nd grade", price: 65, image: "pshen2_600.webp", category: "bread", badge: "", date: 2024 },
    { id: 5, name: "Хлеб пшеничный", nameEn: "Wheat bread", desc: "Классический белый хлеб", descEn: "Classic white bread", price: 50, image: "bread5.webp", category: "bread", badge: "", date: 2025 },
    { id: 30, name: "Хлеб домашний", nameEn: "Homemade bread", desc: "Домашний хлеб по традиционному рецепту", descEn: "Homemade bread according to traditional recipe", price: 70, image: "domashny.webp", category: "bread", badge: "", date: 2024 },
    { id: 31, name: "Хлеб гречневый", nameEn: "Buckwheat bread", desc: "С гречневой мукой", descEn: "With buckwheat flour", price: 85, image: "grechka.jfif", category: "bread", badge: "", date: 2024 },
    { id: 33, name: "Хлеб кукурузный 500г", nameEn: "Corn bread 500g", desc: "С кукурузной мукой", descEn: "With corn flour", price: 90, image: "kukuruza500.webp", category: "bread", badge: "", date: 2024 },
    { id: 37, name: "Хлеб подовый 1 сорт", nameEn: "Hearth bread 1st grade", desc: "Классический подовый хлеб", descEn: "Classic hearth bread", price: 55, image: "podovoy.webp", category: "bread", badge: "", date: 2024 },
    { id: 47, name: "Сельский бездрожжевой", nameEn: "Rustic yeast-free", desc: "Хлеб на закваске", descEn: "Sourdough bread", price: 85, image: "selskiy.webp", category: "bread", badge: "Полезно", date: 2025 },
    { id: 93, name: "Хмелевой бездрожжевой", nameEn: "Hop yeast-free bread", desc: "На хмелевой закваске", descEn: "On hop sourdough", price: 90, image: "hmel.webp", category: "bread", badge: "Полезно", date: 2025 },
    { id: 94, name: "Чиабатта хлеб", nameEn: "Ciabatta bread", desc: "Итальянская чиабатта", descEn: "Italian ciabatta", price: 80, image: "ciabatta.webp", category: "bread", badge: "", date: 2024 },
    { id: 6, name: "Хлеб бородинский", nameEn: "Borodinsky bread", desc: "Заварной ржаной хлеб с тмином", descEn: "Custard rye bread with caraway", price: 70, image: "borodinsky.webp", category: "rye", badge: "", date: 2024, isPromo: true, discountPrice: 63 },
    { id: 7, name: "Хлеб ржано-пшеничный 650г", nameEn: "Rye-wheat bread 650g", desc: "Смесь ржаной и пшеничной муки", descEn: "Mix of rye and wheat flour", price: 65, image: "rp_650.webp", category: "rye", badge: "", date: 2024 },
    { id: 48, name: "Хлеб многозерновой 'Пуравита Мульти'", nameEn: "Multigrain bread 'Puravita Multi'", desc: "Смесь злаков и семян", descEn: "Mix of cereals and seeds", price: 95, image: "puravita.webp", category: "rye", badge: "", date: 2024 },
    { id: 51, name: "Батон вс багет", nameEn: "Baguette premium", desc: "Французский багет", descEn: "French baguette", price: 55, image: "baget.webp", category: "baton", badge: "", date: 2024 },
    { id: 52, name: "Батон Турецкий", nameEn: "Turkish baton", desc: "Батон по-турецки", descEn: "Turkish style baton", price: 52, image: "turetskiy.jfif", category: "baton", badge: "", date: 2024 },
    { id: 54, name: "Батон Молочный", nameEn: "Milk baton", desc: "Сдобный батон на молоке", descEn: "Rich milk baton", price: 55, image: "molochniy.webp", category: "baton", badge: "", date: 2024 },
    { id: 55, name: "Батон школьный", nameEn: "School baton", desc: "Классический школьный батон", descEn: "Classic school baton", price: 42, image: "shkolniy.webp", category: "baton", badge: "", date: 2024 },
    { id: 59, name: "Отрубной батон нарезной", nameEn: "Bran sliced baton", desc: "С отрубями", descEn: "With bran", price: 60, image: "bread4.webp", category: "baton", badge: "Полезно", date: 2025 },
    { id: 61, name: "Домашний багет", nameEn: "Homemade baguette", desc: "Домашний багет", descEn: "Homemade baguette", price: 50, image: "dom_baget.jfif", category: "baton", badge: "", date: 2024 },
    { id: 63, name: "Булочка с маком", nameEn: "Poppy seed bun", desc: "Сдобная булочка с маком", descEn: "Rich bun with poppy seeds", price: 40, image: "mak_bun.webp", category: "pastry", badge: "", date: 2024 },
    { id: 13, name: "Симит", nameEn: "Simit", desc: "Турецкий бублик с кунжутом", descEn: "Turkish bagel with sesame", price: 50, image: "simit.jpg", category: "pastry", badge: "", date: 2025 },
    { id: 64, name: "Булочка сдобная Гребешок", nameEn: "Scallop bun", desc: "Сдобная булочка гребешок", descEn: "Scallop-shaped bun", price: 42, image: "grebeshok.webp", category: "pastry", badge: "", date: 2024 },
    { id: 65, name: "Булочка с лимоном", nameEn: "Lemon bun", desc: "С лимонной цедрой", descEn: "With lemon zest", price: 45, image: "lemon_bun.webp", category: "pastry", badge: "", date: 2024 },
    { id: 67, name: "Булочка сдобная 'Улитка'", nameEn: "Snail bun", desc: "Сдобная булочка в форме улитки", descEn: "Snail-shaped bun", price: 42, image: "snail.webp", category: "pastry", badge: "", date: 2024 },
    { id: 71, name: "Булочка для гамбургера", nameEn: "Hamburger bun", desc: "Для бургеров", descEn: "For burgers", price: 35, image: "burger_bun.webp", category: "pastry", badge: "", date: 2024 },
    { id: 72, name: "Трубочка сдобная творожная с малиной", nameEn: "Curd raspberry tube", desc: "С творогом и малиной", descEn: "With curd and raspberry", price: 55, image: "trubochka.webp", category: "pastry", badge: "", date: 2024 },
    { id: 75, name: "Булочка фруктовая", nameEn: "Fruit bun", desc: "С фруктовой начинкой", descEn: "With fruit filling", price: 48, image: "fruit_bun.webp", category: "pastry", badge: "", date: 2024 },
    { id: 76, name: "Булочка сдобная", nameEn: "Rich bun", desc: "Сдобная булочка", descEn: "Rich bun", price: 35, image: "rich_bun.webp", category: "pastry", badge: "", date: 2024 },
    { id: 77, name: "Пирожное Тирамису", nameEn: "Tiramisu cake", desc: "Сливки, шоколад, сыр маскарпоне", descEn: "Cream, chocolate, mascarpone cheese", price: 65, image: "tiramisu.png", category: "pastry", badge: "", date: 2024 },
    { id: 79, name: "Кулич Пасхальный 400 г", nameEn: "Easter cake 400g", desc: "Пасхальный кулич", descEn: "Easter cake", price: 250, image: "kulich.webp", category: "pastry", badge: "Сезон", date: 2024 },
    { id: 80, name: "Сдоба пасхальная пряная", nameEn: "Spiced Easter pastry", desc: "Пряная сдоба", descEn: "Spiced pastry", price: 180, image: "pashalnaya.webp", category: "pastry", badge: "Сезон", date: 2024 },
    { id: 81, name: "Печенье вс Вишневое", nameEn: "Cherry cookie", desc: "С вишневым конфитюром и шоколадом", descEn: "With cherry confiture and chocolate", price: 55, image: "cherry_cookie.png", category: "small", badge: "", date: 2024 },
    { id: 82, name: "Печенье вс Инжирное", nameEn: "Fig cookie", desc: "С инжиром и грецким орехом", descEn: "With figs and walnuts", price: 50, image: "fig_cookie.png", category: "small", badge: "", date: 2024 },
    { id: 83, name: "Печенье овсяное", nameEn: "Oatmeal cookies", desc: "С хлопьями", descEn: "With flakes", price: 35, image: "oatmeal.png", category: "small", badge: "Полезно", date: 2024 },
    { id: 84, name: "Печенье Ванильное Мягкое", nameEn: "Soft vanilla cookie", desc: "С малиновой начинкой", descEn: "With raspberry filling", price: 40, image: "vanilla_cookie.png", category: "small", badge: "", date: 2024 },
    { id: 78, name: "Печенье вс Апельсин", nameEn: "Orange cookie", desc: "С апельсиновой цедрой и кокосом", descEn: "With orange zest and coconut", price: 45, image: "orange_cookie.png", category: "small", badge: "", date: 2024 },
    { id: 87, name: "Лаваш вс", nameEn: "Lavash premium", desc: "Тонкий лаваш", descEn: "Thin lavash", price: 35, image: "lavash.webp", category: "small", badge: "", date: 2024 },
    { id: 24, name: "Пирожное «Картошка»", nameEn: "Potato cake", desc: "Классическое пирожное", descEn: "Classic cake", price: 45, image: "kartoshka.png", category: "confectionery", badge: "", date: 2025 },
    { id: 27, name: "Пирожное «Эклер»", nameEn: "Eclair", desc: "Заварное с кремом", descEn: "Choux pastry with cream", price: 55, image: "eclair.png", category: "confectionery", badge: "", date: 2024, isPromo: true, discountPrice: 44 },
    { id: 85, name: "Пирожное Медовое с сгущенкой", nameEn: "Honey cake with condensed milk", desc: "Медовое пирожное со сгущенкой", descEn: "Honey cake with condensed milk", price: 55, image: "medovoe.png", category: "confectionery", badge: "", date: 2024 },
    { id: 95, name: "Капкейк Каприз", nameEn: "Caprice cupcake", desc: "С чизкейком, ежевикой и клубникой", descEn: "With cheesecake, blackberry and strawberry", price: 75, image: "cupcake_caprice.png", category: "confectionery", badge: "", date: 2024 },
    { id: 96, name: "Кекс 'Морковно-апельсиновый'", nameEn: "Carrot-orange cake", desc: "С морковью, апельсином и орехами", descEn: "With carrots, orange and nuts", price: 85, image: "carrot_cake.webp", category: "confectionery", badge: "", date: 2024 },
    { id: 97, name: "Пирожное Цветочный рай", nameEn: "Floral paradise cake", desc: "С творожным сыром и ягодами", descEn: "With curd cheese and berries", price: 55, image: "floral_cake.png", category: "confectionery", badge: "", date: 2024 }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let displayedCount = 9, currentFiltered = [...allProducts], currentCategory = "all", currentSort = "default", searchTerm = "", isLoading = false, currentLang = 'ru';

function saveCart() { localStorage.setItem('cart', JSON.stringify(cart)); updateCartUI(); updateAllCartControls(); }
function updateCartUI() { document.getElementById('cartCount').innerText = cart.reduce((sum, item) => sum + item.quantity, 0); if (document.getElementById('cartItemsContainer')) renderCartModal(); updateCheckoutButtonState(); }
function getProductPrice(p) { return p.isPromo ? p.discountPrice : p.price; }

function addToCart(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;
    const existing = cart.find(item => item.id === productId);
    const currentPrice = getProductPrice(product);
    if (existing) existing.quantity++;
    else cart.push({ id: product.id, name: product.name, nameEn: product.nameEn, price: currentPrice, originalPrice: product.price, isPromo: product.isPromo || false, quantity: 1 });
    saveCart();
}

function updateCartItemQuantity(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) cart = cart.filter(i => i.id !== productId);
        saveCart();
    }
}

function updateAllCartControls() {
    document.querySelectorAll('.product-card').forEach(card => {
        const productId = parseInt(card.dataset.id);
        const priceDiv = card.querySelector('.price');
        if (!priceDiv) return;
        const existingControl = priceDiv.querySelector('.cart-action-container');
        if (existingControl) existingControl.remove();

        const cartItem = cart.find(item => item.id === productId);
        const product = allProducts.find(p => p.id === productId);
        if (!product) return;

        const currentPrice = getProductPrice(product);
        const priceHtml = product.isPromo ? `<div class="price-with-discount"><span class="old-price-card">${product.price} ₽</span><span class="discount-price">${currentPrice} ₽</span></div>` : `<span>${currentPrice} ₽</span>`;
        const controlHtml = (cartItem && cartItem.quantity > 0) ?
            `<div class="cart-action-container quantity-control"><button class="cart-decr" data-id="${product.id}">-</button><span>${cartItem.quantity}</span><button class="cart-incr" data-id="${product.id}">+</button></div>` :
            `<div class="cart-action-container"><button class="add-to-cart-btn" data-id="${product.id}"><i class="fas fa-cart-plus"></i> ${currentLang === 'ru' ? 'В корзину' : 'Add to cart'}</button></div>`;

        priceDiv.innerHTML = priceHtml + controlHtml;

        const addBtn = priceDiv.querySelector('.add-to-cart-btn');
        if (addBtn) addBtn.addEventListener('click', (e) => { e.stopPropagation(); addToCart(product.id); });
        const decrBtn = priceDiv.querySelector('.cart-decr');
        if (decrBtn) decrBtn.addEventListener('click', (e) => { e.stopPropagation(); updateCartItemQuantity(product.id, -1); });
        const incrBtn = priceDiv.querySelector('.cart-incr');
        if (incrBtn) incrBtn.addEventListener('click', (e) => { e.stopPropagation(); updateCartItemQuantity(product.id, 1); });
    });
}

function removeFromCart(productId) { cart = cart.filter(item => item.id !== productId); saveCart(); }

function getCartTotalWithDelivery() {
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const deliverySelect = document.getElementById('checkoutDelivery');
    return subtotal + ((deliverySelect && (deliverySelect.value.includes('Доставка') || deliverySelect.value.includes('Delivery'))) ? 200 : 0);
}

function updateCheckoutTotal() {
    const totalElement = document.getElementById('checkoutTotal');
    if (totalElement) totalElement.innerText = getCartTotalWithDelivery();
}

function updateCheckoutButtonState() {
    const submitBtn = document.querySelector('.submit-order');
    if (submitBtn) {
        if (cart.length === 0) {
            submitBtn.classList.add('disabled');
            submitBtn.disabled = true;
        } else {
            submitBtn.classList.remove('disabled');
            submitBtn.disabled = false;
        }
    }
}

function renderCartModal() {
    const container = document.getElementById('cartItemsContainer');
    if (!container) return;
    if (cart.length === 0) {
        container.innerHTML = `<div class="empty-cart">${currentLang === 'ru' ? 'Корзина пуста' : 'Cart is empty'}</div>`;
        updateCheckoutTotal();
        updateCheckoutButtonState();
        return;
    }
    container.innerHTML = cart.map(item => {
        const name = currentLang === 'ru' ? item.name : (item.nameEn || item.name);
        return `<div class="cart-item"><div class="cart-item-info"><div class="cart-item-title">${name}${item.isPromo ? ' 🔥' : ''}</div><div class="cart-item-price">${item.price} ₽</div></div><div class="cart-item-quantity"><button onclick="updateCartItemQuantity(${item.id}, -1)">-</button><span>${item.quantity}</span><button onclick="updateCartItemQuantity(${item.id}, 1)">+</button></div><div class="cart-item-total">${item.price * item.quantity} ₽</div><button class="cart-item-remove" onclick="removeFromCart(${item.id})"><i class="fas fa-trash-alt"></i></button></div>`;
    }).join('');
    updateCheckoutTotal();
    updateCheckoutButtonState();
}

function renderPromo() {
    const promoGrid = document.getElementById('promoGrid');
    if (!promoGrid) return;
    promoGrid.innerHTML = '';
    promoProducts.forEach(promo => {
        const product = allProducts.find(p => p.id === promo.id);
        if (!product) return;
        const card = document.createElement('div');
        card.className = 'promo-card';
        const nameText = currentLang === 'ru' ? promo.name : promo.nameEn;
        const currentPrice = promo.discountPrice;
        card.innerHTML = `<div class="promo-img" style="background-image: url('images/${promo.image}');"></div><div class="promo-content"><h4 class="promo-title">${nameText}</h4><p class="promo-desc">${currentLang === 'ru' ? product.desc : product.descEn}</p><div class="promo-price-row"><span class="old-price">${promo.originalPrice} ₽</span><span class="new-price">${currentPrice} ₽</span></div><div class="promo-cart-btn"><button class="add-to-cart-promo" data-id="${promo.id}"><i class="fas fa-cart-plus"></i> ${currentLang === 'ru' ? 'В корзину' : 'Add to cart'}</button></div></div>`;

        const addBtn = card.querySelector('.add-to-cart-promo');
        if (addBtn) {
            addBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                addToCart(promo.id);
            });
        }

        card.addEventListener('click', (e) => {
            if (e.target === addBtn || addBtn.contains(e.target)) return;
            showPage('catalog', true);
            setTimeout(() => {
                const targetCard = document.querySelector(`.product-card[data-id="${promo.id}"]`);
                if (targetCard) targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 300);
        });
        promoGrid.appendChild(card);
    });
}

function filterAndSort() {
    let filtered = allProducts.filter(p =>
        (currentCategory === "all" || p.category === currentCategory) &&
        (p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (p.nameEn && p.nameEn.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (p.descEn && p.descEn.toLowerCase().includes(searchTerm.toLowerCase())))
    );

    if (currentSort === "priceAsc") filtered.sort((a, b) => getProductPrice(a) - getProductPrice(b));
    else if (currentSort === "priceDesc") filtered.sort((a, b) => getProductPrice(b) - getProductPrice(a));
    else if (currentSort === "nameAsc") filtered.sort((a, b) => a.name.localeCompare(b.name));
    else if (currentSort === "nameDesc") filtered.sort((a, b) => b.name.localeCompare(a.name));
    else if (currentSort === "newFirst") filtered.sort((a, b) => (b.date || 0) - (a.date || 0));
    else if (currentSort === "oldFirst") filtered.sort((a, b) => (a.date || 0) - (b.date || 0));

    currentFiltered = filtered;
    displayedCount = Math.min(9, currentFiltered.length);
    renderCatalog(true);
}

function createProductCard(prod) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-id', prod.id);
    const nameText = currentLang === 'ru' ? prod.name : (prod.nameEn || prod.name);
    const descText = currentLang === 'ru' ? prod.desc : (prod.descEn || prod.desc);
    const isPromo = prod.isPromo === true;
    const currentPrice = isPromo ? prod.discountPrice : prod.price;
    const priceHtml = isPromo ? `<div class="price-with-discount"><span class="old-price-card">${prod.price} ₽</span><span class="discount-price">${currentPrice} ₽</span></div>` : `<span>${currentPrice} ₽</span>`;
    const badgeHtml = isPromo ? `<span class="badge-promo">🔥 ${currentLang === 'ru' ? 'Акция' : 'Sale'} -${Math.round((1 - currentPrice / prod.price) * 100)}%</span>` : (prod.badge ? `<span class="badge-hot">${prod.badge}</span>` : '');
    const cartItem = cart.find(item => item.id === prod.id);
    const controlHtml = (cartItem && cartItem.quantity > 0) ?
        `<div class="cart-action-container quantity-control"><button class="cart-decr" data-id="${prod.id}">-</button><span>${cartItem.quantity}</span><button class="cart-incr" data-id="${prod.id}">+</button></div>` :
        `<div class="cart-action-container"><button class="add-to-cart-btn" data-id="${prod.id}"><i class="fas fa-cart-plus"></i> ${currentLang === 'ru' ? 'В корзину' : 'Add to cart'}</button></div>`;

    card.innerHTML = `<div class="card-img" style="background-image: url('images/${prod.image}');">${badgeHtml}</div><div class="card-content"><h3 class="card-title">${nameText}</h3><p class="card-desc">${descText}</p><div class="price">${priceHtml}${controlHtml}</div></div>`;

    const addBtn = card.querySelector('.add-to-cart-btn');
    if (addBtn) addBtn.addEventListener('click', (e) => { e.stopPropagation(); addToCart(prod.id); });
    const decrBtn = card.querySelector('.cart-decr');
    if (decrBtn) decrBtn.addEventListener('click', (e) => { e.stopPropagation(); updateCartItemQuantity(prod.id, -1); });
    const incrBtn = card.querySelector('.cart-incr');
    if (incrBtn) incrBtn.addEventListener('click', (e) => { e.stopPropagation(); updateCartItemQuantity(prod.id, 1); });

    return card;
}

function renderCatalog(reset = false) {
    const grid = document.getElementById('catalogGrid');
    if (!grid) return;

    if (reset) {
        grid.innerHTML = "";
    }

    if (currentFiltered.length === 0) {
        grid.innerHTML = `<div class="no-products-message">${currentLang === 'ru' ? 'Товар не найден' : 'Product not found'}</div>`;
        const loadBtn = document.getElementById('loadMoreBtn');
        if (loadBtn) loadBtn.style.display = "none";
        return;
    }

    const toShow = currentFiltered.slice(0, displayedCount);
    const existingCards = grid.children.length;

    if (reset) {
        grid.innerHTML = '';
        toShow.forEach(prod => {
            grid.appendChild(createProductCard(prod));
        });
    } else {
        const newCards = toShow.slice(existingCards);
        newCards.forEach(prod => {
            grid.appendChild(createProductCard(prod));
        });
    }

    const loadBtn = document.getElementById('loadMoreBtn');
    if (loadBtn) loadBtn.style.display = currentFiltered.length <= displayedCount ? "none" : "inline-block";
}

function loadMoreProducts(e) {
    if (e) { e.preventDefault(); e.stopPropagation(); }
    if (isLoading) return;
    if (displayedCount < currentFiltered.length) {
        isLoading = true;
        displayedCount = Math.min(displayedCount + 6, currentFiltered.length);
        renderCatalog(false);
        setTimeout(() => { isLoading = false; }, 300);
    }
}

document.querySelectorAll('.category-btn').forEach(btn => btn.addEventListener('click', () => {
    document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCategory = btn.dataset.cat;
    filterAndSort();
}));

const pages = { home: document.getElementById('home-page'), catalog: document.getElementById('catalog-page'), about: document.getElementById('about-page'), contacts: document.getElementById('contacts-page') };
const navLinksAll = document.querySelectorAll('.nav-links a');

// ========== СИСТЕМА АНИМАЦИЙ ПРИ СКРОЛЛЕ (СВОЯ, БЕЗ AOS) ==========
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-scroll]');
    
    animatedElements.forEach(el => {
        let scrollType = el.getAttribute('data-scroll');
        const scrollDelay = el.getAttribute('data-delay');
        const scrollDuration = el.getAttribute('data-duration');
        
        const animationTypes = [
            'fade-up', 'fade-down', 'fade-left', 'fade-right',
            'zoom-in', 'zoom-out', 'rotate-left', 'rotate-right',
            'flip-x', 'flip-y', 'blur-up', 'blur-left', 'blur-right',
            'bounce-up', 'elastic-left', 'elastic-right', 'jack-in',
            'shake', 'glow'
        ];
        
        el.classList.add('scroll-animate');
        
        if (!animationTypes.includes(scrollType)) {
            scrollType = 'fade-up';
        }
        
        el.classList.add(scrollType);
        
        if (scrollDelay) {
            const delayValue = parseInt(scrollDelay);
            const delayClass = `delay-${Math.floor(delayValue / 100)}`;
            if (delayClass === 'delay-0' || delayClass === 'delay-1' || delayClass === 'delay-2' || 
                delayClass === 'delay-3' || delayClass === 'delay-4' || delayClass === 'delay-5' ||
                delayClass === 'delay-6' || delayClass === 'delay-7' || delayClass === 'delay-8' ||
                delayClass === 'delay-9' || delayClass === 'delay-10') {
                el.classList.add(delayClass);
            }
        }
        
        if (scrollDuration) {
            const durationValue = parseInt(scrollDuration);
            if (durationValue <= 500) el.classList.add('duration-fast');
            else if (durationValue <= 1000) el.classList.add('duration-normal');
            else if (durationValue <= 1500) el.classList.add('duration-slow');
        }
        
        el.removeAttribute('data-scroll');
        if (scrollDelay) el.removeAttribute('data-delay');
        if (scrollDuration) el.removeAttribute('data-duration');
    });
    
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -30px 0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.scroll-animate').forEach(el => {
        observer.observe(el);
    });
}

function refreshPageAnimations() {
    setTimeout(() => {
        const animatedElements = document.querySelectorAll('.scroll-animate:not(.animated)');
        animatedElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add('animated');
            }
        });
    }, 150);
}

function showPage(pageId, addToHistory = true) {
    Object.keys(pages).forEach(id => pages[id].classList.remove('active-page'));
    pages[pageId].classList.add('active-page');
    navLinksAll.forEach(link => { if (link.dataset.page === pageId) link.classList.add('active'); else link.classList.remove('active'); });
    if (pageId === 'catalog') { filterAndSort(); setTimeout(updateAllCartControls, 100); }
    if (pageId === 'contacts') setTimeout(initYandexMap, 300);
    if (pageId === 'home') setTimeout(() => { renderPromo(); refreshPageAnimations(); }, 100);
    if (pageId === 'about') setTimeout(refreshPageAnimations, 100);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (addToHistory) history.pushState({ page: pageId }, '', `#${pageId}`);
    refreshPageAnimations();
}

window.addEventListener('popstate', (e) => { const pageId = e.state?.page || 'home'; if (pages[pageId]) showPage(pageId, false); else showPage('home', false); });
document.querySelectorAll('[data-page]').forEach(el => el.addEventListener('click', (e) => { e.preventDefault(); showPage(el.dataset.page, true); }));
navLinksAll.forEach(link => link.addEventListener('click', (e) => { e.preventDefault(); showPage(link.dataset.page, true); }));

document.getElementById('searchInput')?.addEventListener('input', (e) => { searchTerm = e.target.value; filterAndSort(); });
document.getElementById('sortSelect')?.addEventListener('change', (e) => { currentSort = e.target.value; filterAndSort(); });
document.getElementById('resetFiltersBtn')?.addEventListener('click', () => { document.getElementById('searchInput').value = ""; searchTerm = ""; currentSort = "default"; document.getElementById('sortSelect').value = "default"; filterAndSort(); });
document.getElementById('loadMoreBtn')?.addEventListener('click', loadMoreProducts);

document.getElementById('mobileMenuBtn')?.addEventListener('click', () => document.getElementById('navLinks').classList.toggle('active'));
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => document.getElementById('navLinks')?.classList.remove('active')));

const cartModal = document.getElementById('cartModal');
document.getElementById('cartIcon').addEventListener('click', () => { renderCartModal(); cartModal.classList.add('active'); });
document.getElementById('cartModalClose').addEventListener('click', () => cartModal.classList.remove('active'));
window.addEventListener('click', (e) => { if (e.target === cartModal) cartModal.classList.remove('active'); });

document.getElementById('checkoutDelivery').addEventListener('change', function () {
    document.getElementById('deliveryAddressBlock').style.display = this.value.includes('Доставка') || this.value.includes('Delivery') ? 'block' : 'none';
    updateCheckoutTotal();
});

function validatePhone(phone) {
    let digits = phone.replace(/[^\d]/g, '');
    if (digits.length === 0) return false;
    if (digits.startsWith('8')) digits = '7' + digits.substring(1);
    else if (digits.length === 10 && !digits.startsWith('7')) digits = '7' + digits;
    else if (digits.length === 11 && digits.startsWith('7')) { }
    else if (digits.length === 10) digits = '7' + digits;
    else if (digits.length !== 11 || !digits.startsWith('7')) return false;
    if (digits.length !== 11 || !digits.startsWith('7')) return false;
    const allSame = digits.split('').every(d => d === digits[0]);
    if (allSame) return false;
    return true;
}

function validateName(name) { return name.trim().length >= 2; }
function validateAddress(address) {
    const trimmed = address.trim();
    return trimmed.length >= 5 && trimmed.match(/[а-яА-Яa-zA-Z]/) && trimmed.match(/\d/);
}
function clearErrorStyles() { document.querySelectorAll('.error-border').forEach(el => el.classList.remove('error-border')); document.querySelectorAll('.error-message').forEach(el => el.remove()); }
function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    if (!field) return;
    field.classList.add('error-border');
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) existingError.remove();
    const errorSpan = document.createElement('span');
    errorSpan.className = 'error-message';
    errorSpan.innerText = message;
    field.parentNode.appendChild(errorSpan);
}

document.getElementById('checkoutForm').addEventListener('submit', (e) => {
    e.preventDefault();

    if (cart.length === 0) {
        alert(currentLang === 'ru' ? 'Корзина пуста. Добавьте товары перед оформлением заказа.' : 'Cart is empty. Please add items before checkout.');
        return;
    }

    clearErrorStyles();
    let isValid = true;
    const name = document.getElementById('checkoutName').value.trim();
    if (!validateName(name)) { showFieldError('checkoutName', currentLang === 'ru' ? 'Имя должно содержать минимум 2 символа' : 'Name must contain at least 2 characters'); isValid = false; }
    const phone = document.getElementById('checkoutPhone').value.trim();
    if (!validatePhone(phone)) { showFieldError('checkoutPhone', currentLang === 'ru' ? 'Введите корректный номер телефона' : 'Enter a valid phone number'); isValid = false; }
    const deliverySelect = document.getElementById('checkoutDelivery');
    if (deliverySelect && (deliverySelect.value.includes('Доставка') || deliverySelect.value.includes('Delivery'))) {
        const address = document.getElementById('checkoutAddress').value.trim();
        if (!validateAddress(address)) { showFieldError('checkoutAddress', currentLang === 'ru' ? 'Пожалуйста, укажите полный адрес доставки (улица, дом)' : 'Please enter a full delivery address (street, house)'); isValid = false; }
    }
    if (!isValid) return;

    const orderItems = cart.map(item => `${item.name} x${item.quantity} = ${item.price * item.quantity}₽`).join('\n');
    const orderDetails = `Клиент: ${name}\nТелефон: ${phone}\nСпособ: ${deliverySelect.value}\n${deliverySelect.value.includes('Доставка') ? `Адрес: ${document.getElementById('checkoutAddress').value.trim()}\n` : ''}Товары:\n${orderItems}\nИтого: ${getCartTotalWithDelivery()} ₽\nКомментарий: ${document.getElementById('checkoutComment').value}`;

    console.log('Заказ:', orderDetails);

    alert(currentLang === 'ru' ? `Спасибо, ${name}! Ваш заказ на сумму ${getCartTotalWithDelivery()} ₽ принят. Наш менеджер свяжется с вами в ближайшее время.` : `Thank you, ${name}! Your order for ${getCartTotalWithDelivery()} ₽ has been received. Our manager will contact you shortly.`);

    cart = []; saveCart(); cartModal.classList.remove('active');
    document.getElementById('checkoutForm').reset();
    document.getElementById('deliveryAddressBlock').style.display = 'none';
});

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('siteLanguage', lang);
    document.querySelectorAll('[data-ru], [data-en]').forEach(el => {
        if (lang === 'ru' && el.hasAttribute('data-ru')) {
            if (el.tagName === 'INPUT' && el.hasAttribute('data-ru-placeholder')) el.placeholder = el.getAttribute('data-ru-placeholder');
            else if (el.tagName === 'SELECT') { for (let i = 0; i < el.options.length; i++) { if (el.options[i].hasAttribute('data-ru')) el.options[i].text = el.options[i].getAttribute('data-ru'); } }
            else if (el.tagName === 'BUTTON' && el.classList.contains('category-btn')) { if (el.hasAttribute('data-ru')) el.innerText = el.getAttribute('data-ru'); }
            else { if (el.innerHTML && el.querySelector('i') && el.querySelector('i').parentNode === el) { const iconHtml = el.querySelector('i').outerHTML; el.innerHTML = iconHtml + ' ' + el.getAttribute('data-ru'); } else { el.innerText = el.getAttribute('data-ru'); } }
        } else if (lang === 'en' && el.hasAttribute('data-en')) {
            if (el.tagName === 'INPUT' && el.hasAttribute('data-en-placeholder')) el.placeholder = el.getAttribute('data-en-placeholder');
            else if (el.tagName === 'SELECT') { for (let i = 0; i < el.options.length; i++) { if (el.options[i].hasAttribute('data-en')) el.options[i].text = el.options[i].getAttribute('data-en'); } }
            else if (el.tagName === 'BUTTON' && el.classList.contains('category-btn')) { if (el.hasAttribute('data-en')) el.innerText = el.getAttribute('data-en'); }
            else { if (el.innerHTML && el.querySelector('i') && el.querySelector('i').parentNode === el) { const iconHtml = el.querySelector('i').outerHTML; el.innerHTML = iconHtml + ' ' + el.getAttribute('data-en'); } else { el.innerText = el.getAttribute('data-en'); } }
        }
    });
    document.getElementById('langSwitch').innerHTML = lang === 'ru' ? 'English' : 'Русский';
    document.querySelectorAll('.category-btn').forEach(btn => { const ru = btn.dataset.ru, en = btn.dataset.en; if (currentLang === 'ru' && ru) btn.innerText = ru; else if (currentLang === 'en' && en) btn.innerText = en; });
    filterAndSort(); renderCartModal(); renderPromo();
    setTimeout(() => { reviewsSwiper.update(); updateAllCartControls(); refreshPageAnimations(); }, 50);
}

document.getElementById('langSwitch').addEventListener('click', () => setLanguage(currentLang === 'ru' ? 'en' : 'ru'));
if (localStorage.getItem('siteLanguage') === 'en') setLanguage('en'); else setLanguage('ru');

let mapInitialized = false, mapRetryCount = 0;
function initYandexMap() {
    if (mapInitialized) return;
    if (typeof ymaps === 'undefined') {
        if (mapRetryCount < 25) { mapRetryCount++; setTimeout(initYandexMap, 400); }
        else { const mapDiv = document.getElementById('map'); if (mapDiv) mapDiv.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;background:#EEDCCB;border-radius:50px;color:#B55A28;">Loading map...</div>'; }
        return;
    }
    ymaps.ready(() => {
        const mapContainer = document.getElementById('map');
        if (!mapContainer) return;
        mapContainer.innerHTML = '';
        try {
            const map = new ymaps.Map('map', { center: [46.339489, 48.051066], zoom: 17, controls: ['zoomControl', 'fullscreenControl'] });
            const placemark = new ymaps.Placemark([46.339489, 48.051066], { balloonContent: '<b>Batosh Bakery / LLC "Elvira"</b><br/>Glavno-Prodolnaya St., 41<br/>Astrakhan<br/>☎ +7 (8512) 55-88-22<br/>🕐 24/7' }, { preset: 'islands#redFoodIcon' });
            map.geoObjects.add(placemark);
            mapInitialized = true;
        } catch (e) { setTimeout(initYandexMap, 1000); }
    });
}

filterAndSort();
renderPromo();
initScrollAnimations();
const initialPage = window.location.hash.slice(1) || 'home';
if (pages[initialPage]) showPage(initialPage, false); else showPage('home', false);
setTimeout(updateAllCartControls, 150);
updateCheckoutButtonState();
