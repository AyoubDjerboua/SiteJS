// ===== DONNÉES DES ARMES =====
// Tableau contenant les 14 types d'armes de Monster Hunter Wilds
// Chaque type a 3 armes avec : nom, prix (en z), et URL image
const weaponsByType = [
    {
        type: "Grande épée",
        weapons: [
            { name: "Abaddonian Krake", price: 12200, image: "https://static.wikia.nocookie.net/monsterhunter/images/a/af/MHWilds-Great_Sword_Render_010.png/revision/latest/scale-to-width-down/320?cb=20250321202324" },
            { name: "Akanesasu", price: 8900, image: "https://static.wikia.nocookie.net/monsterhunter/images/0/08/MHWilds-Great_Sword_Render_029.png/revision/latest/scale-to-width-down/320?cb=20250405031030" },
            { name: "Albirath Wing I", price: 8300, image: "https://static.wikia.nocookie.net/monsterhunter/images/a/aa/MHWilds-Great_Sword_Render_002.png/revision/latest/scale-to-width-down/320?cb=20250321193019" }
        ]
    },
    {
        type: "Épée longue",
        weapons: [
            { name: "Artian Saber I", price: 12900, image: "https://static.wikia.nocookie.net/monsterhunter/images/9/95/MHWilds-Long_Sword_Render_025.png/revision/latest/scale-to-width-down/320?cb=20250330012359" },
            { name: "Barina Flamberge I", price: 9900, image: "https://static.wikia.nocookie.net/monsterhunter/images/3/37/MHWilds-Long_Sword_Render_017.png/revision/latest/scale-to-width-down/314?cb=20250326204855" },
            { name: "Blanberge I", price: 9700, image: "https://static.wikia.nocookie.net/monsterhunter/images/4/4f/MHWilds-Long_Sword_Render_024.png/revision/latest/scale-to-width-down/314?cb=20250326212501" }
        ]
    },
    {
        type: "Épée et bouclier",
        weapons: [
            { name: "Ajara Saber I", price: 9600, image: "https://static.wikia.nocookie.net/monsterhunter/images/7/78/MHWilds-Sword_and_Shield_Render_015.png/revision/latest/scale-to-width-down/317?cb=20250331004637" },
            { name: "Albirath Edge I", price: 9000, image: "https://static.wikia.nocookie.net/monsterhunter/images/0/01/MHWilds-Sword_and_Shield_Render_002.png/revision/latest/scale-to-width-down/320?cb=20250330024255" },
            { name: "Artian Sword I", price: 12900, image: "https://static.wikia.nocookie.net/monsterhunter/images/f/f5/MHWilds-Sword_and_Shield_Render_027.png/revision/latest/scale-to-width-down/320?cb=20250331022252" }
        ]
    },
    {
        type: "Doubles lames",
        weapons: [
            { name: "Ajara Twin Edges I", price: 8800, image: "https://static.wikia.nocookie.net/monsterhunter/images/0/0f/MHWilds-Dual_Blades_Render_012.png/revision/latest/scale-to-width-down/317?cb=20250402194600" },
            { name: "Artian Edges I", price: 12500, image: "https://static.wikia.nocookie.net/monsterhunter/images/8/8a/MHWilds-Dual_Blades_Render_027.png/revision/latest/scale-to-width-down/320?cb=20250404003708" },
            { name: "Barina Faucilles I", price: 12900, image: "https://static.wikia.nocookie.net/monsterhunter/images/a/ad/MHWilds-Dual_Blades_Render_018.png/revision/latest/scale-to-width-down/320?cb=20250402203859" }
        ]
    },
    {
        type: "Marteau",
        weapons: [
            { name: "Abaddonian Pulpo", price: 11600, image: "https://static.wikia.nocookie.net/monsterhunter/images/4/4c/MHWilds-Hammer_Render_012.png/revision/latest/scale-to-width-down/320?cb=20250407014246" },
            { name: "Albirath Bludgeon I", price: 8700, image: "https://static.wikia.nocookie.net/monsterhunter/images/e/ed/MHWilds-Hammer_Render_002.png/revision/latest/scale-to-width-down/320?cb=20250407003038" },
            { name: "Argyl Hammer", price: 11900, image: "https://static.wikia.nocookie.net/monsterhunter/images/3/30/MHWilds-Hammer_Render_028.png/revision/latest/scale-to-width-down/320?cb=20250701021201" }
        ]
    },
    {
        type: "Corne de chasse",
        weapons: [
            { name: "Ajara Reverberator I", price: 10900, image: "https://static.wikia.nocookie.net/monsterhunter/images/9/98/MHWilds-Hunting_Horn_Render_005.png/revision/latest/scale-to-width-down/320?cb=20250409011607" },
            { name: "Albirath Feroce I", price: 8400, image: "https://static.wikia.nocookie.net/monsterhunter/images/9/90/MHWilds-Hunting_Horn_Render_002.png/revision/latest/scale-to-width-down/320?cb=20250409011601" },
            { name: "Allysyl Muse", price: 8300, image: "https://static.wikia.nocookie.net/monsterhunter/images/e/ea/MHWilds-Hunting_Horn_Render_029.png/revision/latest/scale-to-width-down/320?cb=20250701022009" }
        ]
    },
    {
        type: "Lance",
        weapons: [
            { name: "Abaddonian Osminog", price: 8700, image: "https://static.wikia.nocookie.net/monsterhunter/images/4/46/MHWilds-Lance_Render_008.png/revision/latest/scale-to-width-down/314?cb=20250416151352" },
            { name: "Acrus Lance I", price: 9500, image: "https://static.wikia.nocookie.net/monsterhunter/images/3/3f/MHWilds-Lance_Render_031.png/revision/latest/scale-to-width-down/320?cb=20250701023826" },
            { name: "Aether Pike", price: 9600, image: "https://static.wikia.nocookie.net/monsterhunter/images/1/10/MHWilds-Lance_Render_032.png/revision/latest/scale-to-width-down/320?cb=20251220183056" }
        ]
    },
    {
        type: "Lance-canon",
        weapons: [
            { name: "Ajara Gunpike I", price: 11400, image: "https://static.wikia.nocookie.net/monsterhunter/images/a/a8/MHWilds-Gunlance_Render_005.png/revision/latest/scale-to-width-down/314?cb=20250417004440" },
            { name: "Albirath Rook I", price: 12000, image: "https://static.wikia.nocookie.net/monsterhunter/images/1/12/MHWilds-Gunlance_Render_002.png/revision/latest/scale-to-width-down/320?cb=20250417004433" },
            { name: "Argenesis", price: 8300, image: "https://static.wikia.nocookie.net/monsterhunter/images/d/da/MHWilds-Gunlance_Render_022.png/revision/latest/scale-to-width-down/314?cb=20250417004833" }
        ]
    },
    {
        type: "Morpho-hache",
        weapons: [
            { name: "Abaddonian Zhangyu", price: 11700, image: "https://static.wikia.nocookie.net/monsterhunter/images/d/d0/MHWilds-Switch_Axe_Render_007.png/revision/latest/scale-to-width-down/320?cb=20250420001034" },
            { name: "Aksa Switch I", price: 9400, image: "https://static.wikia.nocookie.net/monsterhunter/images/5/5d/MHWilds-Switch_Axe_Render_026.png/revision/latest/scale-to-width-down/320?cb=20250702010312" },
            { name: "Albirath Blaze Splitter", price: 12700, image: "https://static.wikia.nocookie.net/monsterhunter/images/2/2e/MHWilds-Switch_Axe_Render_002.png/revision/latest/scale-to-width-down/320?cb=20250420000814" }
        ]
    },
    {
        type: "Volto-hache",
        weapons: [
            { name: "Abaddonian Pweza", price: 12300, image: "https://static.wikia.nocookie.net/monsterhunter/images/8/8f/MHWilds-Charge_Blade_Render_013.png/revision/latest/scale-to-width-down/320?cb=20250420203629" },
            { name: "Abiding Gawain", price: 12600, image: "https://static.wikia.nocookie.net/monsterhunter/images/f/f0/MHWilds-Charge_Blade_Render_010.png/revision/latest/scale-to-width-down/320?cb=20250420203542" },
            { name: "Albirath Blade I", price: 11600, image: "https://static.wikia.nocookie.net/monsterhunter/images/9/98/MHWilds-Charge_Blade_Render_002.png/revision/latest/scale-to-width-down/320?cb=20250420203436" }
        ]
    },
    {
        type: "Insectoglaive",
        weapons: [
            { name: "Aerial Glaive", price: 6800, image: "https://static.wikia.nocookie.net/monsterhunter/images/2/2f/MHWilds-Insect_Glaive_Render_013.png/revision/latest/scale-to-width-down/320?cb=20250422010244" },
            { name: "Ajara Trident I", price: 9600, image: "https://static.wikia.nocookie.net/monsterhunter/images/0/0d/MHWilds-Insect_Glaive_Render_014.png/revision/latest/scale-to-width-down/320?cb=20250422010246" },
            { name: "Alabaster Rathmaul", price: 11000, image: "https://static.wikia.nocookie.net/monsterhunter/images/7/77/MHWilds-Insect_Glaive_Render_002.png/revision/latest/scale-to-width-down/320?cb=20250422010047" }
        ]
    },
    {
        type: "Fusarbalète léger",
        weapons: [
            { name: "Abaddonian Chobotnice", price: 11900, image: "https://static.wikia.nocookie.net/monsterhunter/images/5/55/MHWilds-Light_Bowgun_Render_022.png/revision/latest/scale-to-width-down/320?cb=20250423220810" },
            { name: "Ajara Shellgun I", price: 9900, image: "https://static.wikia.nocookie.net/monsterhunter/images/a/a0/MHWilds-Light_Bowgun_Render_019.png/revision/latest/scale-to-width-down/320?cb=20250423220804" },
            { name: "Ajara-Angaja", price: 14200, image: "https://static.wikia.nocookie.net/monsterhunter/images/6/6d/MHWilds-Light_Bowgun_Render_020.png/revision/latest/scale-to-width-down/320?cb=20250423220806" }
        ]
    },
    {
        type: "Fusarbalète lourd",
        weapons: [
            { name: "Abaddonian Muneo", price: 13000, image: "https://static.wikia.nocookie.net/monsterhunter/images/3/3a/MHWilds-Heavy_Bowgun_Render_024.png/revision/latest/scale-to-width-down/320?cb=20250427022431" },
            { name: "Ableben Abzug", price: 9200, image: "https://static.wikia.nocookie.net/monsterhunter/images/5/51/MHWilds-Heavy_Bowgun_Render_036.png/revision/latest/scale-to-width-down/320?cb=20250427223832" },
            { name: "Aeternal Palamedes", price: 12600, image: "https://static.wikia.nocookie.net/monsterhunter/images/9/93/MHWilds-Heavy_Bowgun_Render_014.png/revision/latest/scale-to-width-down/320?cb=20250427021443" }
        ]
    },
    {
        type: "Arc",
        weapons: [
            { name: "Albirath Bow I", price: 10900, image: "https://static.wikia.nocookie.net/monsterhunter/images/b/b4/MHWilds-Bow_Render_002.png/revision/latest/scale-to-width-down/320?cb=20250427234747" },
            { name: "Angelbein", price: 10300, image: "https://static.wikia.nocookie.net/monsterhunter/images/1/15/MHWilds-Bow_Render_024.png/revision/latest/scale-to-width-down/320?cb=20250428005016" },
            { name: "Blan Sharanga I", price: 9900, image: "https://static.wikia.nocookie.net/monsterhunter/images/9/9b/MHWilds-Bow_Render_023.png/revision/latest/scale-to-width-down/320?cb=20250428004934" }
        ]
    }
];

// ===== VARIABLES GLOBALES =====
// Récupérer les éléments HTML importants
const catalogue = document.getElementById("catalogue"); // Zone où afficher les armes
const weaponSelect = document.getElementById("weapon-select"); // Dropdown pour choisir la catégorie
const cartItems = document.getElementById("cart-items"); // Liste des articles du panier
const cartTotal = document.getElementById("cart-total"); // Total du panier
const clearCartButton = document.getElementById("clear-cart"); // Bouton pour vider le panier
const reviewForm = document.getElementById("review-form"); // Formulaire pour ajouter un avis
const reviewInput = document.getElementById("review-input"); // Champ de texte pour l'avis
const reviewsList = document.getElementById("reviews-list"); // Zone d'affichage des avis

const cart = []; // Tableau pour stocker les articles achetés
let selectedWeaponType = null; // Type d'arme sélectionné actuellement
const reviews = {}; // Objet pour stocker les avis par type d'arme

// ===== FONCTIONS UTILITAIRES =====
// Fonction pour vérifier ou remplacer l'URL image
function imageUrl(image, label) {
    // Si image existe, l'utiliser. Sinon, utiliser une image placeholder
    return image || `https://placehold.co/300x180/1f2230/eceef8?text=${encodeURIComponent(label)}`;
}

// ===== GESTION DES AVIS =====
// Initialiser les avis vides pour chaque catégorie
function initializeReviews() {
    weaponsByType.forEach((category) => {
        if (!reviews[category.type]) {
            reviews[category.type] = []; // Créer un tableau vide pour cette catégorie
        }
    });
}

// Afficher tous les avis de la catégorie sélectionnée
function renderReviews(weaponType) {
    reviewsList.innerHTML = ""; // Effacer les anciens avis
    const categoryReviews = reviews[weaponType] || []; // Récupérer les avis de cette catégorie

    // Si aucun avis, afficher un message
    if (categoryReviews.length === 0) {
        reviewsList.innerHTML = "<p style='color: var(--muted); font-style: italic;'>Aucun avis pour le moment</p>";
        return;
    }

    // Afficher chaque avis dans une div
    categoryReviews.forEach((review) => {
        const reviewDiv = document.createElement("div");
        reviewDiv.className = "review-item";
        reviewDiv.textContent = review;
        reviewsList.appendChild(reviewDiv);
    });
}

// Ajouter un nouvel avis à la catégorie sélectionnée
function addReview(weaponType, reviewText) {
    if (!reviewText.trim()) return; // Ne pas ajouter un avis vide
    if (!reviews[weaponType]) {
        reviews[weaponType] = [];
    }
    reviews[weaponType].push(reviewText); // Ajouter l'avis au tableau
    reviewInput.value = ""; // Vider le champ de texte
    renderReviews(weaponType); // Actualiser l'affichage
}

// ===== GESTION DU DROPDOWN =====
// Remplir le dropdown avec tous les types d'armes
function populateSelect() {
    // Créer une option pour chaque type d'arme
    weaponsByType.forEach((category) => {
        const option = document.createElement("option");
        option.value = category.type;
        option.textContent = category.type;
        weaponSelect.appendChild(option);
    });
}

// ===== GESTION DE L'AFFICHAGE DES ARMES =====
// Afficher les armes de la catégorie sélectionnée
function renderCatalogue(weaponType) {
    catalogue.innerHTML = ""; // Effacer les anciennes armes

    if (!weaponType) return; // Si aucune catégorie n'est sélectionnée, ne rien afficher

    // Trouver la catégorie dans les données
    const category = weaponsByType.find((c) => c.type === weaponType);
    if (!category) return;

    // Créer le conteneur pour les armes
    const section = document.createElement("section");
    section.className = "weapon-section";

    // Ajouter le titre de la catégorie
    const title = document.createElement("h3");
    title.textContent = category.type;
    section.appendChild(title);

    // Créer la grille pour les cartes d'armes
    const grid = document.createElement("div");
    grid.className = "weapon-grid";

    // Pour chaque arme dans la catégorie, créer une carte
    category.weapons.forEach((weapon) => {
        const card = document.createElement("article");
        card.className = "weapon-card";

        // Image de l'arme
        const img = document.createElement("img");
        img.src = imageUrl(weapon.image, weapon.name);
        img.alt = weapon.name;

        // Nom de l'arme
        const weaponName = document.createElement("h4");
        weaponName.textContent = weapon.name;

        // Prix de l'arme
        const price = document.createElement("p");
        price.textContent = `${weapon.price} z`;

        // Bouton pour ajouter au panier
        const buyButton = document.createElement("button");
        buyButton.textContent = "Acheter";
        buyButton.addEventListener("click", () => {
            addToCart(weapon.name, weapon.price);
        });

        // Ajouter tous les éléments à la carte
        card.appendChild(img);
        card.appendChild(weaponName);
        card.appendChild(price);
        card.appendChild(buyButton);
        grid.appendChild(card);
    });

    section.appendChild(grid);
    catalogue.appendChild(section);
}

// ===== GESTION DU PANIER =====
// Ajouter une arme au panier
function addToCart(name, price) {
    cart.push({ name, price }); // Ajouter l'arme au tableau du panier
    renderCart(); // Actualiser l'affichage du panier
}

// Afficher le contenu du panier et calculer le total
function renderCart() {
    cartItems.innerHTML = ""; // Effacer l'ancien contenu
    let total = 0;

    // Pour chaque arme dans le panier, créer une ligne
    cart.forEach((item) => {
        total += item.price; // Additionner les prix
        const line = document.createElement("li");
        line.textContent = `${item.name} - ${item.price} z`;
        cartItems.appendChild(line);
    });

    // Afficher le total
    cartTotal.textContent = `Total : ${total} z`;
}

// ===== ÉCOUTEURS D'ÉVÉNEMENTS =====
// Bouton vider le panier
clearCartButton.addEventListener("click", () => {
    cart.length = 0; // Vider le panier
    renderCart(); // Actualiser l'affichage
});

// Changement du dropdown (changement de catégorie d'arme)
weaponSelect.addEventListener("change", (e) => {
    selectedWeaponType = e.target.value; // Récupérer la catégorie sélectionnée
    renderCatalogue(selectedWeaponType); // Afficher les armes
    renderReviews(selectedWeaponType); // Afficher les avis
});

// Soumettre un nouvel avis (quand on clique sur "Publier l'avis")
reviewForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Empêcher le rechargement de la page
    const reviewText = reviewInput.value;
    addReview(selectedWeaponType, reviewText); // Ajouter l'avis
});

// ===== GESTION DE LA GALERIE =====
// Récupérer les éléments de la galerie
const galleryPage = document.getElementById("gallery-page");
const shopPage = document.getElementById("shop-page");
const gallery = document.getElementById("gallery");
const mosaicBtn = document.getElementById("mosaic-btn");
const columnBtn = document.getElementById("column-btn");
const backButton = document.getElementById("back-to-shop");
const dropdownLinks = document.querySelectorAll(".dropdown-content a");

// Fonction pour remplir la galerie avec toutes les armes
function renderGallery() {
    gallery.innerHTML = "";

    // Parcourir toutes les catégories
    weaponsByType.forEach((category) => {
        // Parcourir toutes les armes
        category.weapons.forEach((weapon) => {
            const item = document.createElement("div");
            item.className = "gallery-item";

            // Image de l'arme
            const img = document.createElement("img");
            img.src = weapon.image;
            img.alt = weapon.name;

            // Informations de l'arme
            const info = document.createElement("div");
            info.className = "gallery-item-info";

            const name = document.createElement("h4");
            name.textContent = weapon.name;

            const details = document.createElement("p");
            details.textContent = `${category.type} - ${weapon.price} z`;

            info.appendChild(name);
            info.appendChild(details);

            item.appendChild(img);
            item.appendChild(info);
            gallery.appendChild(item);
        });
    });
}

// Changer le mode d'affichage en mosaïque
function setMosaicView() {
    gallery.classList.remove("column");
    gallery.classList.add("mosaic");
    mosaicBtn.classList.add("active");
    columnBtn.classList.remove("active");
}

// Changer le mode d'affichage en colonne
function setColumnView() {
    gallery.classList.remove("mosaic");
    gallery.classList.add("column");
    columnBtn.classList.add("active");
    mosaicBtn.classList.remove("active");
}

// Afficher la galerie et masquer la boutique
function showGallery() {
    shopPage.classList.add("hidden");
    galleryPage.classList.remove("hidden");
    renderGallery();
}

// Afficher la boutique et masquer la galerie
function showShop() {
    galleryPage.classList.add("hidden");
    shopPage.classList.remove("hidden");
}

// Écouteurs pour les boutons de mode d'affichage
mosaicBtn.addEventListener("click", setMosaicView);
columnBtn.addEventListener("click", setColumnView);

// Écouteur pour le bouton retour
backButton.addEventListener("click", showShop);

// Écouteurs pour les liens du menu déroulant
dropdownLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const page = e.target.getAttribute("data-page");

        if (page === "gallery") {
            showGallery();
        } else if (page === "shop") {
            showShop();
        }
    });
});

// ===== INITIALISATION AU DÉMARRAGE =====
initializeReviews(); // Initialiser les avis
populateSelect(); // Remplir le dropdown
weaponSelect.value = "Grande épée"; // Sélectionner la Grande épée par défaut
selectedWeaponType = "Grande épée";
renderCatalogue("Grande épée"); // Afficher les armes de la Grande épée
renderReviews("Grande épée"); // Afficher les avis de la Grande épée
renderCart(); // Afficher le panier
