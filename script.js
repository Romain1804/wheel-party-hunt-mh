// --- LISTES À PERSONNALISER ---

const data = {
    weaponWheel: [
        "Great Sword", "Long Sword", "Sword & Shield", "Dual Blades",
        "Hammer", "Hunting Horn", "Lance", "Gunlance",
        "Switch Axe", "Charge Blade", "Insect Glaive",
        "Bow", "Light Bowgun", "Heavy Bowgun"
    ],

    monsterExpertWheel: [
       // Wyvernes volantes
    "Rathalos", "Rathian", "Azure Rathalos", "Gold Rathian",
    // Wyvernes rapaces
    "Great Izuchi", "Great Baggi", "Great Wroggi",
    // Wyvernes aquatiques
    "Somnacanth", "Royal Ludroth",
    // Wyvernes de boue
    "Almudron",
    // Wyvernes de glace
    "Goss Harag",
    // Wyvernes à crocs
    "Tetranadon", "Lagombi", "Volvidon",
    // Wyvernes à crocs féroces
    "Arzuros", "Bishaten", "Blood Orange Bishaten",
    // Wyvernes brutales
    "Anjanath", "Diablos", "Black Diablos",
    // Wyvernes à carapace
    "Basarios", "Gravios",
    // Wyvernes serpent
    "Mizutsune", "Crimson Glow Valstrax",
    // Wyvernes tonnerre
    "Zinogre", "Lunagaron",
    // Wyvernes dragons anciens
    "Chameleos", "Kushala Daora", "Teostra",
    // Amphibiens
    "Khezu", "Red Khezu",
    // Leviathans
    "Jyuratodus",
    // Fanged beasts
    "Rajang", "Furious Rajang",
    // Autres
    "Aknosom", "Kulu-Ya-Ku", "Pukei-Pukei", "Barroth",
    "Tobi-Kadachi", "Nargacuga", "Somnacanth"
    ],

    monsterMasterWheel: [
        // Nouveaux Sunbreak
    "Malzeno",
    "Lunagaron",
    "Garangolm",
    "Gore Magala",
    "Shagaru Magala",
    "Chaotic Gore Magala",
    "Astalos",
    "Seregios",
    "Espinas",
    "Flaming Espinas",
    "Scorned Magnamalo",
    "Violet Mizutsune",
    "Silver Rathalos",
    "Gold Rathian",
    "Lucent Nargacuga",
    "Blood Orange Bishaten",
    "Pyre Rakna-Kadaki",
    "Risen Kushala Daora",
    "Risen Teostra",
    "Risen Chameleos",
    "Risen Shagaru Magala",
    "Risen Crimson Glow Valstrax",
    "Primordial Malzeno",

    // Tous les monstres Rise en version MR
    "Great Izuchi", "Great Baggi", "Great Wroggi",
    "Aknosom", "Kulu-Ya-Ku", "Pukei-Pukei",
    "Barroth", "Tetranadon", "Lagombi", "Volvidon",
    "Bishaten", "Somnacanth", "Royal Ludroth",
    "Almudron", "Magma Almudron",
    "Goss Harag", "Tobi-Kadachi", "Nargacuga",
    "Zinogre", "Lunagaron",
    "Anjanath", "Diablos", "Black Diablos",
    "Basarios", "Gravios",
    "Rathalos", "Rathian", "Azure Rathalos",
    "Mizutsune", "Rakna-Kadaki",
    "Rajang", "Furious Rajang",
    "Khezu", "Red Khezu",
    "Jyuratodus",
    "Chameleos", "Kushala Daora", "Teostra",
    "Crimson Glow Valstrax"
    ],

    conditionsWheel: [
       // --- Restrictions de combat ---
    "Pas de soins",
    "Aucun objet autorisé",
    "Pas d’aiguisage",
    "Pas d’esquive",
    "Pas de sprint",
    "Pas de Filoptère",
    "1 Filoptère uniquement",
    "Pas de pièges",
    "Uniquement des pièges",
    "Pas de Palico / Palamute",
    "Pas de permutation de techniques",
    "Pas d’attaques Filoptère",
    "Pas de garde (si arme bouclier)",
    "Pas de contre-attaques",
    "Pas de dégâts élémentaires",
    "Pas de dégâts d’altération",
    "Pas de bombes",
    "Pas de bombes au réveil",
    "Pas de chevauchée wyverne",

    // --- Limitations d’armes ---
    "Attaques basiques uniquement",
    "Attaques chargées uniquement",
    "Attaques aériennes uniquement",
    "Attaques Filoptère uniquement",
    "Contres uniquement",
    "Attaques élémentaires uniquement",
    "Attaques statut uniquement",
    "Toucher uniquement les points faibles",
    "Interdiction de toucher les points faibles",
    "Pas de craft de munitions",
    "Munitions Perçantes uniquement",
    "Munitions Dispersion uniquement",
    "Munitions Normales uniquement",
    "Munitions Collantes uniquement",
    "Enduits d’arc uniquement",
    "Pas d’enduits d’arc",

    // --- Conditions de survie ---
    "1 HP (si tu te fais toucher → défi perdu)",
    "3 vies partagées pour l’équipe",
    "Timer 10 minutes",
    "Timer 5 minutes",
    "Sans armure (full naked)",
    "Armure aléatoire",
    "Talisman aléatoire",
    "Pétalace aléatoire",
    "Pas de Spiribirds",
    "Spiribirds verts uniquement",
    "Spiribirds rouges uniquement",

    // --- Conditions de mouvement ---
    "Pas de roulades",
    "Pas de course",
    "Pas d’escalade",
    "Pas de déplacement Filoptère",
    "Déplacement Filoptère uniquement",
    "Toujours rester à moins de 10m du monstre",
    "Toujours rester à plus de 10m du monstre",

    // --- Conditions coop ---
    "Tous focus sur le même point faible",
    "Rôles imposés (tank / DPS / support)",
    "Objets de support uniquement",
    "Soigner uniquement les alliés",
    "Silence total (pas de parole)",
    "Callouts uniquement (ping pour chaque action)",
    "Un joueur dirige, les autres suivent",
    "Changer d’arme après chaque mort",

    // --- Conditions fun / troll ---
    "Spin deux fois (condition supplémentaire)",
    "Le monstre doit être capturé",
    "Le monstre doit être tué",
    "Départ au camp 1 uniquement",
    "Départ dans un camp aléatoire",
    "Pas de voyage rapide",
    "Pas de mini‑carte",
    "Pas de verrouillage de cible",
    "FOV caméra minimum",
    "FOV caméra maximum",
    "Commandes inversées",
    "Pas de HUD",
    "Parler uniquement avec des cris",
    "Danser après chaque mise à terre du monstre",
    "Narguer le monstre toutes les minutes",
    "Être sur le Palamute 80% du temps",

    // --- Conditions speedrun ---
    "No hit (aucun dégât reçu)",
    "Finir en moins de 5 minutes",
    "Finir en moins de 10 minutes",
    "Soins autorisés uniquement via Spiribirds",
    "Pas de craft",
    "Pas de récolte",
    "Pas de dégâts environnementaux",
    "Dégâts environnementaux uniquement",
    "Wake-up parfait obligatoire",
    "KO obligatoire (si arme contondante)",
    "Briser une partie obligatoire",
    "Couper la queue obligatoire (si possible)"
    ]
};

// --- MOTEUR DE ROUES ---

// --- WRAP TEXT (si jamais tu en as besoin) ---
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

// --- DESSIN DE LA ROUE ---
function drawWheel(canvasId, items) {
    const canvas = document.getElementById(canvasId);
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

// --- SPIN ASYNCHRONE ---
function spinWheelAsync(canvasId) {
    return new Promise(resolve => {
        spinWheel(canvasId, resolve);
    });
}

// --- SPIN DES 3 ROUES (EXPERT / MAÎTRE) ---
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

function spinRandom() {
    const modes = ["expert", "master"];
    const randomMode = modes[Math.floor(Math.random() * modes.length)];
    spinSet(randomMode);
}

// --- SPIN D’UNE ROUE ---
function spinWheel(canvasId, callback = null) {
    const canvas = document.getElementById(canvasId);
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

    resultElement.textContent = "";

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
            resultElement.textContent = "→ " + finalResult;

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


function getMultipleConditions(count = 2) {
    const conditions = [...data.conditionsWheel]; 
    const selected = [];

    for (let i = 0; i < count; i++) {
        const index = Math.floor(Math.random() * conditions.length);
        selected.push(conditions[index]);
        conditions.splice(index, 1);
    }

    return selected;
}

// --- EASING ---
function easeOut(t, b, c, d) {
    t /= d;
    return -c * t * (t - 2) + b;
}

function spinForPlayers() {
    let nbPlayers = parseInt(prompt("Combien de joueurs ? (1 à 4)"));

    if (isNaN(nbPlayers) || nbPlayers < 1 || nbPlayers > 4) {
        alert("Veuillez entrer un nombre entre 1 et 4.");
        return;
    }

    // Choix du mode (Expert ou Maître)
    const modes = ["expert", "master"];
    const mode = modes[Math.floor(Math.random() * modes.length)];
    const monsterWheel = (mode === "expert") ? "monsterExpertWheel" : "monsterMasterWheel";

    // --- TIRAGE DU MONSTRE UNIQUE ---
    const monsterList = data[monsterWheel];
    const monster = monsterList[Math.floor(Math.random() * monsterList.length)];

    // --- TIRAGES PAR JOUEUR ---
    let results = [];

    for (let i = 1; i <= nbPlayers; i++) {
        let weapon = data.weaponWheel[Math.floor(Math.random() * data.weaponWheel.length)];
        let condition = data.conditionsWheel[Math.floor(Math.random() * data.conditionsWheel.length)];

        results.push({
            player: i,
            weapon,
            monster,     // 👈 même monstre pour tous
            condition
        });
    }

    showMultiPopup(results, mode);
}

// --- DESSIN AVEC ROTATION ---
function drawWheelWithRotation(canvasId, items, rotation) {
    const canvas = document.getElementById(canvasId);
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

// --- POPUP ---

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

document.getElementById("multiSpinBtn").addEventListener("click", () => {

    // --- Tirage du mode ---
    const modes = ["expert", "master"];
    const mode = modes[Math.floor(Math.random() * modes.length)];

    // --- Tirage du monstre selon le mode ---
    const monsterWheel = (mode === "expert") ? "monsterExpertWheel" : "monsterMasterWheel";
    const monsterList = data[monsterWheel];
    const monster = monsterList[Math.floor(Math.random() * monsterList.length)];

    // --- Tirage de l'arme ---
    const weapon = data.weaponWheel[Math.floor(Math.random() * data.weaponWheel.length)];

    // --- Tirage des 2 conditions ---
    const conditions = getMultipleConditions(2);

    // --- Envoi au popup ---
    showPopup({
        mode: mode,
        weapon: weapon,
        monster: monster,
        condition: conditions.join(" + ")
    });
});


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

// --- INITIALISATION ---
window.onload = () => {
    drawWheel("weaponWheel", data.weaponWheel);
    drawWheel("monsterExpertWheel", data.monsterExpertWheel);
    drawWheel("monsterMasterWheel", data.monsterMasterWheel);
    drawWheel("conditionsWheel", data.conditionsWheel);
};