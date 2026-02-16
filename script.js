const weaponsByType = [
    {
        type: "Grande épée",
        weapons: [
            { name: "Wyvern Ignition", price: 12800 },
            { name: "Nergal Judicator", price: 11600 },
            { name: "Rathalos Gladius", price: 9800 }
        ]
    },
    {
        type: "Épée longue",
        weapons: [
            { name: "Divine Slasher", price: 12100 },
            { name: "Reaver Calamity", price: 11300 },
            { name: "Tigrine Need", price: 9700 }
        ]
    },
    {
        type: "Épée et bouclier",
        weapons: [
            { name: "Corona", price: 9100 },
            { name: "Rogue Wave", price: 8600 },
            { name: "Odium", price: 8900 }
        ]
    },
    {
        type: "Doubles lames",
        weapons: [
            { name: "Fire and Ice", price: 10200 },
            { name: "Decimation Claws", price: 10500 },
            { name: "Jyura Hatchets", price: 8400 }
        ]
    },
    {
        type: "Marteau",
        weapons: [
            { name: "Diablos Shatterer", price: 11900 },
            { name: "Empress Mace Blaze", price: 11200 },
            { name: "Bone Bludgeon", price: 7800 }
        ]
    },
    {
        type: "Cor de chasse",
        weapons: [
            { name: "Deep Vero", price: 10600 },
            { name: "Teostra's Orphee", price: 11500 },
            { name: "Queen's Flute", price: 9300 }
        ]
    },
    {
        type: "Lance",
        weapons: [
            { name: "Fiendish Tower", price: 11100 },
            { name: "Babel Spear", price: 9900 },
            { name: "Nergal Impaler", price: 10800 }
        ]
    },
    {
        type: "Lance-canon",
        weapons: [
            { name: "Royal Burst", price: 11400 },
            { name: "Earthshaker Magda", price: 11800 },
            { name: "Steel Assault", price: 9400 }
        ]
    },
    {
        type: "Morpho-hache",
        weapons: [
            { name: "Power Smasher", price: 10900 },
            { name: "Axe of Demons", price: 9800 },
            { name: "Jagras Raider", price: 8200 }
        ]
    },
    {
        type: "Volto-hache",
        weapons: [
            { name: "Dear Lutemia", price: 12500 },
            { name: "Tyrannis II", price: 11700 },
            { name: "Kadachi Kaina", price: 9600 }
        ]
    },
    {
        type: "Insectoglaive",
        weapons: [
            { name: "Catastrophe's Light", price: 11200 },
            { name: "True Gae Bolg", price: 12600 },
            { name: "Blooming Glaive", price: 9200 }
        ]
    },
    {
        type: "Fusarbalète léger",
        weapons: [
            { name: "Karma", price: 9900 },
            { name: "Blitz Support", price: 9400 },
            { name: "Luna Styx", price: 10800 }
        ]
    },
    {
        type: "Fusarbalète lourd",
        weapons: [
            { name: "Dark Devourer", price: 12200 },
            { name: "Magda Gemitus", price: 11000 },
            { name: "Legia Shattercryst", price: 10100 }
        ]
    },
    {
        type: "Arc",
        weapons: [
            { name: "Anja Arch III", price: 10300 },
            { name: "Doom's Shaft", price: 11900 },
            { name: "Flying Kadachi Strikebow", price: 9700 }
        ]
    }
];

const catalogue = document.getElementById("catalogue");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const clearCartButton = document.getElementById("clear-cart");

const cart = [];

const weaponTypeImages = {
    "Grande épée": "https://static.wikia.nocookie.net/monsterhunter/images/1/15/MH4-Great_Sword_Equipment_Render_001.png/revision/latest/scale-to-width-down/200?cb=20140122011522",
    "Épée longue": "https://static.wikia.nocookie.net/monsterhunter/images/f/fc/MH4-Long_Sword_Equipment_Render_001.png/revision/latest/scale-to-width-down/200?cb=20140122011520",
    "Épée et bouclier": "https://static.wikia.nocookie.net/monsterhunter/images/b/bf/MH4-Sword_and_Shield_Equipment_Render_001.png/revision/latest/scale-to-width-down/200?cb=20140122011519",
    "Doubles lames": "https://static.wikia.nocookie.net/monsterhunter/images/6/6f/MH4-Dual_Blades_Equipment_Render_001.png/revision/latest/scale-to-width-down/200?cb=20140615225729",
    "Marteau": "https://static.wikia.nocookie.net/monsterhunter/images/3/32/MH4-Hammer_Equipment_Render_001.png/revision/latest/scale-to-width-down/200?cb=20140122011521",
    "Cor de chasse": "https://static.wikia.nocookie.net/monsterhunter/images/b/b1/MH4-Hunting_Horn_Equipment_Render_001.png/revision/latest/scale-to-width-down/200?cb=20140122011521",
    "Lance": "https://static.wikia.nocookie.net/monsterhunter/images/5/54/MH4-Lance_Equipment_Render_001.png/revision/latest/scale-to-width-down/200?cb=20140122011520",
    "Lance-canon": "https://static.wikia.nocookie.net/monsterhunter/images/d/d7/MH4-Gunlance_Equipment_Render_001.png/revision/latest/scale-to-width-down/125?cb=20140122011522",
    "Morpho-hache": "https://static.wikia.nocookie.net/monsterhunter/images/c/c8/MH4-Switch_Axe_Equipment_Render_001.png/revision/latest/scale-to-width-down/182?cb=20140626032107",
    "Volto-hache": "https://static.wikia.nocookie.net/monsterhunter/images/5/56/MH4-Charge_Blade_Equipment_Render_001.png/revision/latest/scale-to-width-down/175?cb=20140610185223",
    "Insectoglaive": "https://static.wikia.nocookie.net/monsterhunter/images/9/9b/MH4-Insect_Glaive_Equipment_Render_001.png/revision/latest/scale-to-width-down/182?cb=20140610185945",
    "Fusarbalète léger": "https://static.wikia.nocookie.net/monsterhunter/images/3/36/MH4-Light_Bowgun_Equipment_Render_001.png/revision/latest/scale-to-width-down/200?cb=20140122011520",
    "Fusarbalète lourd": "https://static.wikia.nocookie.net/monsterhunter/images/b/bc/MH4-Heavy_Bowgun_Equipment_Render_001.png/revision/latest/scale-to-width-down/200?cb=20140122011521",
    "Arc": "https://static.wikia.nocookie.net/monsterhunter/images/5/5a/MH4-Bow_Equipment_Render_001.png/revision/latest/scale-to-width-down/200?cb=20140610184349"
};

function imageUrl(type, label) {
    return weaponTypeImages[type] || `https://placehold.co/300x180/1f2230/eceef8?text=${encodeURIComponent(label)}`;
}

function renderCatalogue() {
    weaponsByType.forEach((category) => {
        const section = document.createElement("section");
        section.className = "weapon-section";

        const title = document.createElement("h3");
        title.textContent = category.type;
        section.appendChild(title);

        const grid = document.createElement("div");
        grid.className = "weapon-grid";

        category.weapons.forEach((weapon) => {
            const card = document.createElement("article");
            card.className = "weapon-card";

            const img = document.createElement("img");
            img.src = imageUrl(category.type, weapon.name);
            img.alt = weapon.name;

            const weaponName = document.createElement("h4");
            weaponName.textContent = weapon.name;

            const price = document.createElement("p");
            price.textContent = `${weapon.price} z`;

            const buyButton = document.createElement("button");
            buyButton.textContent = "Acheter";
            buyButton.addEventListener("click", () => {
                addToCart(weapon.name, weapon.price);
            });

            card.appendChild(img);
            card.appendChild(weaponName);
            card.appendChild(price);
            card.appendChild(buyButton);
            grid.appendChild(card);
        });

        section.appendChild(grid);
        catalogue.appendChild(section);
    });
}

function addToCart(name, price) {
    cart.push({ name, price });
    renderCart();
}

function renderCart() {
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item) => {
        total += item.price;
        const line = document.createElement("li");
        line.textContent = `${item.name} - ${item.price} z`;
        cartItems.appendChild(line);
    });

    cartTotal.textContent = `Total : ${total} z`;
}

clearCartButton.addEventListener("click", () => {
    cart.length = 0;
    renderCart();
});

renderCatalogue();
renderCart();
