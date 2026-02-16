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
        type: "Cor de chasse",
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

const catalogue = document.getElementById("catalogue");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const clearCartButton = document.getElementById("clear-cart");

const cart = [];

function imageUrl(image, label) {
    return image || `https://placehold.co/300x180/1f2230/eceef8?text=${encodeURIComponent(label)}`;
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
            img.src = imageUrl(weapon.image, weapon.name);
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
