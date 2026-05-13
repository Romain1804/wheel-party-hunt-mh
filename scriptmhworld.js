// --- LISTES À PERSONNALISER ---

const data = {
    weaponWheel: [
        "Great Sword", "Long Sword", "Sword & Shield", "Dual Blades",
        "Hammer", "Hunting Horn", "Lance", "Gunlance",
        "Switch Axe", "Charge Blade", "Insect Glaive",
        "Bow", "Light Bowgun", "Heavy Bowgun"
    ],

    monsterExpertWheel: [
     
  // Monster Hunter: World (rang expert / high rank)
  "Great Jagras",
  "Kulu-Ya-Ku",
  "Pukei-Pukei",
  "Barroth",
  "Jyuratodus",
  "Tobi-Kadachi",
  "Anjanath",
  "Rathian",
  "Tzitzi-Ya-Ku",
  "Paolumu",
  "Great Girros",
  "Radobaan",
  "Legiana",
  "Odogaron",
  "Rathalos",
  "Diablos",
  "Kirin",
  "Zorah Magdaros",
  "Dodogama",
  "Pink Rathian",
  "Bazelgeuse",
  "Lavasioth",
  "Uragaan",
  "Azure Rathalos",
  "Black Diablos",
  "Nergigante",
  "Teostra",
  "Kushala Daora",
  "Vaal Hazak",
  "Xeno'jiiva",
  "Deviljho",
  "Kulve Taroth",
  "Lunastra",
    ],

    monsterMasterWheel: [
    // Monstres de base réutilisés en MR
  "Great Jagras",
  "Kulu-Ya-Ku",
  "Pukei-Pukei",
  "Barroth",
  "Jyuratodus",
  "Tobi-Kadachi",
  "Anjanath",
  "Rathian",
  "Tzitzi-Ya-Ku",
  "Paolumu",
  "Great Girros",
  "Radobaan",
  "Legiana",
  "Odogaron",
  "Rathalos",
  "Diablos",
  "Kirin",
  "Dodogama",
  "Pink Rathian",
  "Bazelgeuse",
  "Lavasioth",
  "Uragaan",
  "Azure Rathalos",
  "Black Diablos",
  "Nergigante",
  "Teostra",
  "Kushala Daora",
  "Vaal Hazak",
  "Deviljho",
  "Lunastra",
  "Kulve Taroth", // en MR via siège spécial
  "Zinogre",      // ajouté en MR via GL
  "Yian Garuga",  // MR via GL

  // Variantes HR qui existent aussi en MR
  "Viper Tobi-Kadachi",
  "Nightshade Paolumu",
  "Coral Pukei-Pukei",
  "Shrieking Legiana",
  "Fulgur Anjanath",
  "Ebony Odogaron",
  "Acidic Glavenus",
  "Seething Bazelgeuse",
  "Savage Deviljho",
  "Gold Rathian",
  "Silver Rathalos",
  "Scarred Yian Garuga",
  "Stygian Zinogre",
  "Ruiner Nergigante",

  // Nouveaux monstres Iceborne (MR exclusifs)
  "Beotodus",
  "Banbaro",
  "Barioth",
  "Nargacuga",
  "Glavenus",
  "Tigrex",
  "Brachydios",
  "Velkhana",
  "Namielle",
  "Shara Ishvalda",

  // Endgame MR
  "Rajang",
  "Furious Rajang",
  "Raging Brachydios",
  "Safi'jiiva",
  "Alatreon",
  "Fatalis"
],

    conditionsWheel: [
      // --- Gameplay normal ---
    "Interdiction d'utiliser les objets de soin",
    "Interdiction d'utiliser les capes",
    "Interdiction d'utiliser la Cape temporelle",
    "Interdiction d'utiliser les pièges",
    "Interdiction d'utiliser les bombes barils",
    "Interdiction d'utiliser les capsules",
    "Interdiction d'utiliser la fronde",
    "Interdiction d'utiliser les outils de survie",
    "Interdiction d'utiliser les armes élémentaires",
    "Interdiction d'utiliser les armes à statut",
    "Interdiction d'affûter plus de 2 fois",
    "Interdiction de manger à la cantine",
    "Interdiction de monter le monstre",
    "Interdiction de parer",
    "Interdiction d'utiliser les attaques aériennes",
    "Interdiction d'utiliser la Clutch Claw",
    "Interdiction de viser la tête",
    "Interdiction de viser la queue",
    "Interdiction de viser les pattes avant",
    "Interdiction de viser les ailes",

    // --- Iceborne mechanics ---
    "Obligation d'utiliser la Clutch Claw au moins une fois par minute",
    "Obligation de faire un murbang",
    "Obligation de blesser au moins 2 parties du monstre",
    "Obligation d'utiliser la fronde pour stagger",
    "Obligation de finir le combat avec une attaque de clutch claw",

    // --- Biomes / Terres Guidées ---
    "Chasse dans les Terres Guidées : zone Forêt",
    "Chasse dans les Terres Guidées : zone Désert",
    "Chasse dans les Terres Guidées : zone Corail",
    "Chasse dans les Terres Guidées : zone Putride",
    "Chasse dans les Terres Guidées : zone Volcan",
    "Chasse dans les Terres Guidées : zone Givre",
    "Obligation d'utiliser les pièges environnementaux",
    "Obligation de déclencher un glissement pour attaquer",

    // --- Style de combat ---
    "Combat uniquement agressif",
    "Combat uniquement défensif",
    "Combat uniquement avec attaques chargées",
    "Combat uniquement avec attaques rapides",
    "Combat uniquement en visant les points faibles",
    "Combat uniquement en visant les parties non faibles",

    // --- Objets ---
    "Interdiction d'utiliser les potions méga",
    "Interdiction d'utiliser les potions normales",
    "Interdiction d'utiliser les buffs",
    "Interdiction d'utiliser les boissons chaudes/froides",
    "Interdiction d'utiliser les pièges choc",
    "Interdiction d'utiliser les pièges à fosse",
    "Interdiction d'utiliser les capsules flash",
    "Obligation d'utiliser 3 objets ramassés sur la map",

    // --- HARDCORE ---
    "Vous n'avez droit qu'à une seule potion",
    "Vous n'avez droit à aucun affûtage",
    "Vous ne devez pas vous faire toucher plus de 3 fois",
    "Vous ne devez pas vous faire toucher du tout",
    "Combat sans cape ni outil de survie",
    "Combat sans roulade",
    "Combat sans sprint",
    "Combat sans Clutch Claw",
    "Combat sans élémentaire",
    "Combat sans statut",
    "Casser au moins 4 parties du monstre",
    "Couper la queue obligatoirement",
    "Blesser toutes les parties possibles",
    "Faire 2 projections murales obligatoires",
    "Finir le combat avec une attaque environnementale",

    // --- TROLL ---
    "Hurler IRL quand le monstre rugit",
    "Tourner autour du monstre 10 secondes avant d'attaquer",
    "Combattre en marchant uniquement",
    "Combattre accroupi",
    "Utiliser uniquement les attaques faibles",
    "Utiliser uniquement les attaques chargées",
    "Utiliser uniquement la fronde",
    "Utiliser uniquement les attaques aériennes",
    "Rester le plus loin possible du monstre",
    "Rester collé au monstre",
    "Faire un emote à chaque changement de zone",
    "Faire un emote après chaque coup",
    "Ramasser tout ce que vous voyez",
    "Combattre sans lock-on",
    "Combattre en caméra libre",
    "Combattre en zoom max",

    // --- ARMES ---
    "Great Sword : uniquement des True Charged Slash",
    "Great Sword : interdiction d'utiliser les charges",
    "Long Sword : uniquement des Iai Slash",
    "Long Sword : interdiction d'utiliser la jauge d'esprit",
    "SnS : uniquement des attaques sautées",
    "SnS : obligation d'utiliser des objets en combat",
    "Dual Blades : mode démon obligatoire",
    "Dual Blades : interdiction du mode démon",
    "Lance : garde obligatoire",
    "Lance : interdiction de la garde",
    "Gunlance : uniquement des tirs",
    "Gunlance : full Wyvernfire",
    "Hammer : uniquement charges niveau 3",
    "Hammer : interdiction des charges",
    "Hunting Horn : jouer tous les buffs",
    "Hunting Horn : uniquement attaques musicales",
    "Switch Axe : uniquement mode épée",
    "Switch Axe : uniquement mode hache",
    "Charge Blade : uniquement SAED",
    "Charge Blade : interdiction d'utiliser les fioles",
    "Insect Glaive : rester en l'air le plus possible",
    "Insect Glaive : interdiction de sauter",
    "Bow : uniquement tirs chargés",
    "Bow : interdiction des coatings",
    "LBG : uniquement munitions élémentaires",
    "LBG : uniquement munitions normales",
    "HBG : uniquement Wyvernsnipe/Wyvernheart",
    "HBG : interdiction du bouclier"
],
    
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

// --- DESSIN D’UNE ROUE ---
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
    drawWheel("weaponWheel", data.weaponWheel);
    drawWheel("monsterExpertWheel", data.monsterExpertWheel);
    drawWheel("monsterMasterWheel", data.monsterMasterWheel);
    drawWheel("conditionsWheel", data.conditionsWheel);

    // SPIN MULTI (x2)
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