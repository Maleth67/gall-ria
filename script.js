// Műtárgyak adatbázisa (mind a 12 saját képpel)
const artworks = [
    {
        id: 1,
        title: "A sikoly (Skrik)",
        artist: "Edvard Munch",
        category: "tajkep",
        categoryName: "Tájkép / Expresszionizmus",
        price: 240000,
        year: 1893,
        dimensions: "91 x 73.5 cm, olaj, tempera és pasztell",
        description: "Az expresszionizmus egyik legikonikusabb alkotása, amely az emberi szorongást és a természet drámai erejét ábrázolja az Oslói-fjord felett.",
        image: "paintings/7ee0b2a7d856577b4ff5dfa1e48d6fbc.jpg"
    },
    {
        id: 2,
        title: "Csillagos éj",
        artist: "Vincent van Gogh",
        category: "tajkep",
        categoryName: "Tájkép / Posztimpresszionizmus",
        price: 280000,
        year: 1889,
        dimensions: "73.7 x 92.1 cm, olaj, vászon",
        description: "Van Gogh világhírű éjszakai látképe Saint-Rémy-de-Provence felett, örvénylő csillagokkal és ciprusfával.",
        image: "paintings/202902.775x400.jpg"
    },
    {
        id: 3,
        title: "Arnolfini házaspár esküvője",
        artist: "Jan van Eyck",
        category: "portre",
        categoryName: "Portré / Koraialföldi festészet",
        price: 310000,
        year: 1434,
        dimensions: "82.2 x 60 cm, olaj, fa",
        description: "Az északi reneszánsz egyik legjelentősebb és szimbolizmusban leggazdagabb kettős portréja.",
        image: "paintings/van_eyck_-_arnolfini_portrait.jpg"
    },
    {
        id: 4,
        title: "Mona Lisa (La Gioconda)",
        artist: "Leonardo da Vinci",
        category: "portre",
        categoryName: "Portré / Reneszánsz",
        price: 320000,
        year: 1503,
        dimensions: "77 x 53 cm, olaj, nyárfa",
        description: "A világ legismertebb portréja, amely rejtélyes mosolyáról és a mesteri sfumato technikáról híres.",
        image: "paintings/hires-kategoria-szamfesto.jpg"
    },
    {
        id: 5,
        title: "Ádám teremtése",
        artist: "Michelangelo Buonarroti",
        category: "tortenelmi",
        categoryName: "Történelmi & Vallási",
        price: 350000,
        year: 1512,
        dimensions: "280 x 570 cm (freskó reprodukció)",
        description: "A vatikáni Sixtus-kápolna mennyezetfreskójának legismertebb jelenete, amely az élet szikrájának átadását ábrázolja.",
        image: "paintings/hith-sistine-chape-2.avif"
    },
    {
        id: 6,
        title: "Leány gyöngyfülbevalóval",
        artist: "Jan Vermeer",
        category: "portre",
        categoryName: "Portré / Barokk",
        price: 290000,
        year: 1665,
        dimensions: "44.5 x 39 cm, olaj, vászon",
        description: "Vermeer remekműve, amelyet gyakran az „észak Monalizájaként” is emlegetnek a modell magával ragadó tekintete miatt.",
        image: "paintings/vermneer.jpg.webp"
    },
    {
        id: 7,
        title: "A marengói csata",
        artist: "Louis-François Lejeune",
        category: "tortenelmi",
        categoryName: "Történelmi & Vallási",
        price: 260000,
        year: 1802,
        dimensions: "180 x 250 cm, olaj, vászon",
        description: "Monumentális történelmi csatajelenet Napóleon itáliai hadjáratáról, drámai fény-árnyék hatásokkal.",
        image: "paintings/images (2).jpeg"
    },
    {
        id: 8,
        title: "Önarckép szürke nemezkalapban",
        artist: "Vincent van Gogh",
        category: "portre",
        categoryName: "Portré / Posztimpresszionizmus",
        price: 230000,
        year: 1887,
        dimensions: "44 x 37.5 cm, olaj, karton",
        description: "Van Gogh párizsi korszakának egyik legdinamikusabb önarcképe, jellegzetes, örvénylő ecsetvonásokkal.",
        image: "paintings/images (3).jpeg"
    },
    {
        id: 9,
        title: "A völgy királya (The Monarch of the Glen)",
        artist: "Sir Edwin Landseer",
        category: "termeszet",
        categoryName: "Természet",
        price: 190000,
        year: 1851,
        dimensions: "163.8 x 168.9 cm, olaj, vászon",
        description: "A skót felföld fenséges gímszarvasát ábrázoló romantikus festmény, a vadon méltóságának szimbóluma.",
        image: "paintings/images (1).jpeg"
    },
    {
        id: 10,
        title: "Rettegett Iván és fia",
        artist: "Ilja Repin",
        category: "tortenelmi",
        categoryName: "Történelmi & Vallási",
        price: 295000,
        year: 1885,
        dimensions: "199.5 x 254 cm, olaj, vászon",
        description: "Az orosz realizmus egyik legmegrázóbb történelmi drámája, amely a megbánás és a gyász pillanatát örökíti meg.",
        image: "paintings/REPIN_Ivan_Terrible&Ivan.jpg"
    },
    {
        id: 11,
        title: "Vörös róka portré",
        artist: "Kortárs Műhely",
        category: "termeszet",
        categoryName: "Természet",
        price: 85000,
        year: 2024,
        dimensions: "60 x 60 cm, akril és olaj, vászon",
        description: "Részletgazdag, hiperrealista állatportré, amely a vadon élő róka éber tekintetét ábrázolja.",
        image: "paintings/Fluffy-Fox-High-Res-scaled-e1729934298426-640x666.jpg"
    },
    {
        id: 12,
        title: "Őszi csendélet tökkel és almákkal",
        artist: "Modern Impresszionista Kör",
        category: "termeszet",
        categoryName: "Természet",
        price: 95000,
        year: 2023,
        dimensions: "70 x 70 cm, olaj, vászon",
        description: "Meleg őszi színekben pompázó csendélet sárga falevelekkel, dísztökkel és friss almákkal.",
        image: "paintings/images.jpeg"
    }
];

// Kosár állapotának betöltése localStorage-ból
let cart = JSON.parse(localStorage.getItem('expression_cart')) || [];

// DOM elemek kiválasztása
const artGrid = document.getElementById('art-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('search-input');
const cartBtn = document.getElementById('cart-btn');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCartBtn = document.getElementById('close-cart');
const overlay = document.getElementById('overlay');
const cartItemsContainer = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');

// Modal elemek
const modal = document.getElementById('art-modal');
const modalBody = document.getElementById('modal-body');
const closeModalBtn = document.querySelector('.close-modal');

// Oldal betöltésekor megjelenítjük a műtárgyakat és frissítjük a kosarat
document.addEventListener('DOMContentLoaded', () => {
    renderArtworks(artworks);
    updateCartUI();
});

// Műtárgyak kirajzolása a rácsba
function renderArtworks(items) {
    artGrid.innerHTML = '';

    if (items.length === 0) {
        artGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #a0a5b1;">Nincs a keresésnek megfelelő festmény.</p>';
        return;
    }

    items.forEach(art => {
        const card = document.createElement('div');
        card.className = 'art-card';
        card.innerHTML = `
            <div class="art-img-container" onclick="openModal(${art.id})">
                <img src="${art.image}" alt="${art.title}">
            </div>
            <div class="art-info">
                <span class="art-category">${art.categoryName}</span>
                <h3 class="art-title">${art.title}</h3>
                <p class="art-artist">${art.artist} (${art.year})</p>
                <div class="art-bottom">
                    <span class="art-price">${art.price.toLocaleString('hu-HU')} Ft</span>
                    <button class="add-to-cart" onclick="addToCart(${art.id})">Kosárba</button>
                </div>
            </div>
        `;
        artGrid.appendChild(card);
    });
}

// Kategória szűrés
let currentCategory = 'all';

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        currentCategory = btn.getAttribute('data-category');
        filterAndSearch();
    });
});

// Keresés eseményfigyelő
searchInput.addEventListener('input', filterAndSearch);

// Kombinált szűrés és keresés függvény
function filterAndSearch() {
    const searchTerm = searchInput.value.toLowerCase();

    const filtered = artworks.filter(art => {
        const matchesCategory = currentCategory === 'all' || art.category === currentCategory;
        const matchesSearch = art.title.toLowerCase().includes(searchTerm) || 
                              art.artist.toLowerCase().includes(searchTerm);
        return matchesCategory && matchesSearch;
    });

    renderArtworks(filtered);
}

// Modal (Részletező ablak) megnyitása
function openModal(id) {
    const art = artworks.find(item => item.id === id);
    if (!art) return;

    modalBody.innerHTML = `
        <img src="${art.image}" alt="${art.title}">
        <div>
            <span class="art-category">${art.categoryName}</span>
            <h2 style="margin-bottom: 0.5rem;">${art.title}</h2>
            <p style="color: #a0a5b1; margin-bottom: 1rem;"><strong>Alkotó:</strong> ${art.artist} (${art.year})</p>
            <p style="margin-bottom: 1rem; font-size: 0.9rem;"><strong>Méret / Technika:</strong> ${art.dimensions}</p>
            <p style="margin-bottom: 1.5rem; font-size: 0.95rem;">${art.description}</p>
            <h3 style="color: #d4af37; margin-bottom: 1.5rem;">${art.price.toLocaleString('hu-HU')} Ft</h3>
            <button class="btn-primary" onclick="addToCart(${art.id}); closeModal();">Kosárba teszem</button>
        </div>
    `;
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}

closeModalBtn.addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// Kosár kezelése
function addToCart(id) {
    const exists = cart.find(item => item.id === id);
    if (exists) {
        alert("Ez az alkotás már szerepel a kosaradban!");
        return;
    }

    const art = artworks.find(item => item.id === id);
    cart.push(art);
    saveCart();
    updateCartUI();
    openCart();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    updateCartUI();
}

function saveCart() {
    localStorage.setItem('expression_cart', JSON.stringify(cart));
}

function updateCartUI() {
    cartCount.textContent = cart.length;
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="color: #a0a5b1; text-align: center; margin-top: 2rem;">A kosarad jelenleg üres.</p>';
        cartTotal.textContent = '0';
        return;
    }

    let total = 0;

    cart.forEach(item => {
        total += item.price;
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.title}</h4>
                <p>${item.price.toLocaleString('hu-HU')} Ft</p>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">Törlés</button>
        `;
        cartItemsContainer.appendChild(div);
    });

    cartTotal.textContent = total.toLocaleString('hu-HU');
}

function openCart() {
    cartSidebar.classList.add('open');
    overlay.classList.add('active');
}

function closeCart() {
    cartSidebar.classList.remove('open');
    overlay.classList.remove('active');
}

cartBtn.addEventListener('click', openCart);
closeCartBtn.addEventListener('click', closeCart);
overlay.addEventListener('click', closeCart);

checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        alert("Üres kosárral nem tudsz megrendelést leadni!");
        return;
    }
    alert(`Köszönjük a vásárlást az Expression Gallery-ben! A megrendelésedet (${cart.length} db festmény) rögzítettük.`);
    cart = [];
    saveCart();
    updateCartUI();
    closeCart();
});