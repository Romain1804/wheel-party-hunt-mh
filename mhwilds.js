// --- LISTES À PERSONNALISER ---

const data = {

    // --- ARMES ---
    weaponWheel: [
        "Great Sword", "Long Sword", "Sword & Shield", "Dual Blades",
        "Hammer", "Hunting Horn", "Lance", "Gunlance",
        "Switch Axe", "Charge Blade", "Insect Glaive",
        "Light Bowgun", "Heavy Bowgun", "Bow"
    ],

    // --- MONSTRES EXPERT (Wilds) ---
    monsterExpertWheel: [
        "Ajarakan",
        "Arkveld",
        "Balahara",
        "Blangonga",
        "Chatacabra",
        "Congalala",
        "Doshaguma",
        "Gypceros",
        "Hirabami",
        "Lala Barina",
        "Nerscylla",
        "Quematrice",
        "Rompopolo",
        "Uth Duna",
        "Yian Kut-Ku"
    ],

    // --- MONSTRES MAÎTRE (Wilds) ---
    monsterMasterWheel: [
        "Guardian Arkveld",
        "Guardian Doshaguma",
        "Gogmazios",
        "Gore Magala",
        "Gravios",
        "Guardian Ebony Odogaron",
        "Guardian Fulgur Anjanath",
        "Jin Dahaad",
        "Lagiacrus",
        "Mizutsune",
        "Nu Udra",
        "Omega Planetes",
        "Rathalos",
        "Guardian Rathalos",
        "Rathian",
        "Rey Dau",
        "Seregios",
        "Xu Wu",
        "Arkveld_alpha_supreme",
        "Jin_Dahaad_alpha_supreme",
        "Uth_Duna_alpha_supreme",
        "Rey_Dau_alpha_supreme",
        "Nu_Udra_alpha_supreme",
        "Zoh_Shia_10*",
        "Zoh Shia"
    ],

    conditionsWheel: [
    
   "Pas de soins",
        "Pas d'esquive",
        "Pas de sprint",
        "Pas de roulades",
        "Pas de pièges",
        "Pas de cape",
        "Pas de Palico",
        "Pas d'aiguisage",
        "Pas de craft",
        "Objets interdits",
        "Arme imposée",
        "Armure aléatoire",
        "1 seule vie",
        "Mode Rage permanent",
        "Pas de bouffe",
        "Pas de retour au camp",
        "Pas de monture",
        "Pas de dégâts élémentaires",
        "Pas de dégâts explosifs",
        "Pas de dégâts de statut",
        "Uniquement attaques chargées",
        "Uniquement attaques non chargées",
        "Uniquement attaques aériennes",
        "Uniquement attaques de dos",
        "Uniquement attaques frontales",
        "Uniquement attaques de côté",
        "Uniquement coups faibles",
        "Uniquement coups forts",
        "Uniquement courir",
        "Pas le droit de sauter",
        "Pas de roulade d'invincibilité",
        "Pas de changement d'arme",
        "Pas de changement d'objet",
        "Pas de soin naturel (pas de steak)",
        "Pas de dégâts de pièges",
        "Pas de dégâts environnementaux",
        "Pas de dégâts de chute",
        "Pas de dégâts de bombes",
        "Pas de dégâts de tonneaux",
        "Pas de dégâts de palico",
        "Pas de dégâts de contre",
        "Pas de dégâts de garde",
        "Pas de dégâts de saignement",
        "Pas de dégâts de poison",
        "Pas de dégâts de feu",
        "Pas de dégâts de glace",
        "Pas de dégâts de tonnerre",
        "Pas de dégâts de dragon",
       "Attaquer sous 50% endurance",
    "Aiguiser à chaque changement de zone",
    "Boire une potion à chaque rugissement",
    "Changer de zone après chaque coup",
    "Attaques qui te font reculer uniquement",
    "Rengainer après chaque attaque",
    "Ramasser le 1er objet avant d'attaquer",
    "Taper uniquement la queue",
    "Attaques qui consomment de l'endurance",
    "Roulade après chaque aiguisage"
    ]
};

// --- MOTEUR DE ROUES ---

// --- WRAP TEXT (optionnel) ---
function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = text.split(" ");
    let line = "";

    for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i] + " ";
        const metrics = ctx.measureText(testLine);

        if (metrics.width > maxWidth && i > 0) {
            ctx.fillText(line, x, y);
            line = words[i] + " ";
            y += lineHeight;
        } else {
            line = testLine;
        }
    }
    ctx.fillText(line, x, y);
}

// --- DESSIN D’UNE ROUE STATIQUE ---
function drawWheel(canvasId, items) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const size = canvas.width;
    const radius = size / 2;
    const arc = (2 * Math.PI) / items.length;

    ctx.clearRect(0, 0, size, size);

    items.forEach((item, i) => {
        const angle = i * arc;

        ctx.beginPath();
        ctx.fillStyle = i % 2 === 0 ? "#b08d57" : "#8c6f3d";
        ctx.moveTo(radius, radius);
        ctx.arc(radius, radius, radius, angle, angle + arc);
        ctx.fill();

        ctx.save();
        ctx.translate(radius, radius);
        ctx.rotate(angle + arc / 2);
        ctx.textAlign = "center";
        ctx.fillStyle = "#1a1a1a";
        ctx.font = "16px Cinzel";

        let textRadius = radius * 0.75;
        if (radius > 350) textRadius = radius * 0.80;

        ctx.fillText(item, textRadius, 5);
        ctx.restore();
    });
}

// --- MAPPING DES DONNÉES ---
const wheelDataMap = {
    weaponWheel: data.weaponWheel,
    monsterExpertWheel: data.monsterExpertWheel,
    monsterMasterWheel: data.monsterMasterWheel,
    conditionsWheel: data.conditionsWheel
};

// --- EASING ---
function easeOut(t, b, c, d) {
    t /= d;
    return -c * t * (t - 2) + b;
}

// --- DESSIN AVEC ROTATION ---
function drawWheelWithRotation(canvasId, items, rotation) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const size = canvas.width;
    const radius = size / 2;
    const arc = (2 * Math.PI) / items.length;

    ctx.clearRect(0, 0, size, size);

    items.forEach((item, i) => {
        const angle = i * arc + rotation;

        ctx.beginPath();
        ctx.fillStyle = i % 2 === 0 ? "#b08d57" : "#8c6f3d";
        ctx.moveTo(radius, radius);
        ctx.arc(radius, radius, radius, angle, angle + arc);
        ctx.fill();

        ctx.save();
        ctx.translate(radius, radius);
        ctx.rotate(angle + arc / 2);

        ctx.textAlign = "center";
        ctx.fillStyle = "#1a1a1a";

        let fontSize = 16;
        if (item.length > 18) fontSize = 14;
        if (item.length > 25) fontSize = 12;
        if (item.length > 32) fontSize = 10;

        ctx.font = `bold ${fontSize}px Cinzel`;

        let textRadius = radius * 0.75;
        if (radius > 300) textRadius = radius * 0.80;

        ctx.fillText(item, textRadius, 5);

        ctx.restore();
    });
}

// --- SPIN D’UNE ROUE ---
function spinWheel(canvasId, callback = null) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const items = wheelDataMap[canvasId];
    const resultElement = document.getElementById(canvasId + "Result");

    const ctx = canvas.getContext("2d");
    const size = canvas.width;
    const radius = size / 2;
    const arc = (2 * Math.PI) / items.length;

    let rotation = 0;
    let speedMultiplier = 1;

    if (canvasId === "monsterMasterWheel") speedMultiplier = 1.8;
    if (canvasId === "conditionsWheel") speedMultiplier = 2.2;

    let spinTime = 0;
    let spinTimeTotal = 2000 + Math.random() * 2000;

    if (canvasId === "monsterMasterWheel") spinTimeTotal = 1800 + Math.random() * 1200;
    if (canvasId === "conditionsWheel") spinTimeTotal = 900 + Math.random() * 700;

    if (resultElement) resultElement.textContent = "";

    function animate() {
        spinTime += 20;

        if (spinTime >= spinTimeTotal) {
            const normalized = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
            const pointerAngle = -Math.PI / 2;

            let diff = pointerAngle - normalized;
            if (diff < 0) diff += 2 * Math.PI;

            let index = Math.floor(diff / arc);
            if (index >= items.length) index = items.length - 1;
            if (index < 0) index = 0;

            let finalResult = items[index];
            if (resultElement) resultElement.textContent = "→ " + finalResult;

            if (callback) callback(finalResult);
            return;
        }

        const spinAngle = easeOut(spinTime, 0, 10, spinTimeTotal);
        rotation += spinAngle * 0.01 * speedMultiplier;

        drawWheelWithRotation(canvasId, items, rotation);
        requestAnimationFrame(animate);
    }

    animate();
}

// --- SPIN ASYNCHRONE ---
function spinWheelAsync(canvasId) {
    return new Promise(resolve => {
        spinWheel(canvasId, resolve);
    });
}

// --- SPIN SET (3 ROUES) ---
function spinSet(mode) {
    let monsterWheel = (mode === "expert") ? "monsterExpertWheel" : "monsterMasterWheel";

    let results = {
        mode: mode,
        weapon: null,
        monster: null,
        condition: null
    };

    spinWheelAsync("weaponWheel").then(res => {
        results.weapon = res;
        checkAllDone();
    });

    spinWheelAsync(monsterWheel).then(res => {
        results.monster = res;
        checkAllDone();
    });

    spinWheelAsync("conditionsWheel").then(res => {
        results.condition = res;
        checkAllDone();
    });

    function checkAllDone() {
        if (results.weapon && results.monster && results.condition) {
            showPopup(results);
        }
    }
}

// --- RANDOM MODE ---
function spinRandom() {
    const modes = ["expert", "master"];
    const randomMode = modes[Math.floor(Math.random() * modes.length)];
    spinSet(randomMode);
}

// --- MULTI-JOUEURS ---
function spinForPlayers() {
    let nbPlayers = parseInt(prompt("Combien de joueurs ? (1 à 4)"));

    if (isNaN(nbPlayers) || nbPlayers < 1 || nbPlayers > 4) {
        alert("Veuillez entrer un nombre entre 1 et 4.");
        return;
    }

    const modes = ["expert", "master"];
    const mode = modes[Math.floor(Math.random() * modes.length)];
    const monsterWheel = (mode === "expert") ? "monsterExpertWheel" : "monsterMasterWheel";

    const monsterList = data[monsterWheel];
    const monster = monsterList[Math.floor(Math.random() * monsterList.length)];

    let results = [];

    for (let i = 1; i <= nbPlayers; i++) {
        let weapon = data.weaponWheel[Math.floor(Math.random() * data.weaponWheel.length)];
        let condition = data.conditionsWheel[Math.floor(Math.random() * data.conditionsWheel.length)];

        results.push({
            player: i,
            weapon,
            monster,
            condition
        });
    }

    showMultiPopup(results, mode);
}

// --- MULTI POPUP ---
function showMultiPopup(results, mode) {
    const modeLabel = (mode === "expert") ? "EXPERT" : "MAÎTRE";

    let html = `<p><strong>Mode : ${modeLabel}</strong></p><br>`;

    results.forEach(r => {
        html += `
            <p><strong>Joueur ${r.player}</strong></p>
            <p>Arme : ${r.weapon}</p>
            <p>Monstre : ${r.monster}</p>
            <p>Condition : ${r.condition}</p>
            <hr>
        `;
    });

    document.getElementById("multiResults").innerHTML = html;
    document.getElementById("multiPopup").style.display = "flex";
}

function closeMultiPopup() {
    document.getElementById("multiPopup").style.display = "none";
}

// --- POPUP SIMPLE ---
function showPopup(results) {
    const modeLabel = (results.mode === "expert") ? "EXPERT" : "MAÎTRE";

    document.getElementById("popupMode").textContent = "Mode : " + modeLabel;
    document.getElementById("popupWeapon").textContent = "Arme : " + results.weapon;
    document.getElementById("popupMonster").textContent = "Monstre : " + results.monster;
    document.getElementById("popupCondition").textContent = "Condition : " + results.condition;

    document.getElementById("resultPopup").style.display = "flex";
}

function closePopup() {
    document.getElementById("resultPopup").style.display = "none";
}

// --- MULTI CONDITIONS (x2) ---
function getMultipleConditions(count = 2) {
    const conditions = [...data.conditionsWheel];
    const selected = [];

    for (let i = 0; i < count; i++) {
        if (conditions.length === 0) break;
        const index = Math.floor(Math.random() * conditions.length);
        selected.push(conditions[index]);
        conditions.splice(index, 1);
    }

    return selected;
}

// --- INITIALISATION ---
window.onload = () => {
    // Dessin des roues
    drawWheel("weaponWheel", data.weaponWheel);
    drawWheel("monsterExpertWheel", data.monsterExpertWheel);
    drawWheel("monsterMasterWheel", data.monsterMasterWheel);
    drawWheel("conditionsWheel", data.conditionsWheel);

    // Bouton SPIN MULTI (x2)
    const multiBtn = document.getElementById("multiSpinBtn");
    if (multiBtn) {
        multiBtn.addEventListener("click", () => {
            const modes = ["expert", "master"];
            const mode = modes[Math.floor(Math.random() * modes.length)];

            const monsterWheel = (mode === "expert") ? "monsterExpertWheel" : "monsterMasterWheel";
            const monsterList = data[monsterWheel];
            const monster = monsterList[Math.floor(Math.random() * monsterList.length)];

            const weapon = data.weaponWheel[Math.floor(Math.random() * data.weaponWheel.length)];

            const conditions = getMultipleConditions(2);

            showPopup({
                mode: mode,
                weapon: weapon,
                monster: monster,
                condition: conditions.join(" + ")
            });
        });
    }
};
