const mapContainer = document.getElementById("mapContainer");
const govName = document.getElementById("govName");
const govTagline = document.getElementById("govTagline");
const govDesc = document.getElementById("govDesc");
const photoGrid = document.getElementById("photoGrid");
const govStats = document.getElementById("govStats");
const statsSection = document.getElementById("statsSection");
const tooltip = document.getElementById("tooltip");
const searchInput = document.getElementById("searchInput");
const resetBtn = document.getElementById("resetBtn");
const backBtn = document.getElementById("backBtn");
let activeId = null;
let mode = "TN"; 
const TN_MAP_PATH = "assets/tunisia-governorates.svg";

function niceNameFromId(id) {
  return id.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

async function loadMap(path) {
  const res = await fetch(path);
  if (!res.ok) throw new Error("Fichier introuvable: " + path);

  const svgText = await res.text();
  mapContainer.innerHTML = svgText;

  const svg = mapContainer.querySelector("svg");
  if (!svg) throw new Error("Le fichier chargé n'est pas un SVG valide.");

  return svg;
}

function renderPanel(id) {
  const data = GOVERNORATES[id] || {
    name: niceNameFromId(id),
    tagline: "Infos à ajouter",
    desc: "Ajoute une description, des photos et des chiffres clés.",
    photos: [],
    stats: [],
    map: "",
  };

  govName.textContent = data.name;
  govTagline.textContent = data.tagline || "";
  govDesc.textContent = data.desc || "";

  // ===== Photos =====
  photoGrid.innerHTML = "";
  const photos =
    data.photos && data.photos.length
      ? data.photos
      : ["assets/photos/default_1.jpg", "assets/photos/default_2.jpg"];

  photos.slice(0, 4).forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = data.name;
    photoGrid.appendChild(img);
  });

  // ===== Chiffres clés =====
  govStats.innerHTML = "";

  if (data.stats && data.stats.length > 0) {
    statsSection.style.display = "block";

    data.stats.slice(0, 6).forEach((s) => {
      const card = document.createElement("div");
      card.className = "stat";
      card.innerHTML = `
        <div class="k">${s.label}</div>
        <div class="v">${s.value}</div>
      `;
      govStats.appendChild(card);
    });
  } else {
    statsSection.style.display = "none";
  }
}

async function showTunisia() {
  mode = "TN";
  backBtn.hidden = true;
  tooltip.hidden = true;
  activeId = null;

  statsSection.style.display = "none";
  govStats.innerHTML = "";

  const svg = await loadMap(TN_MAP_PATH);

  const paths = svg.querySelectorAll("path[id]");
  paths.forEach((p) => {
    const id = p.id.trim().toLowerCase();
    if (id === "map-outline" || id === "outline") return;

    p.classList.add("gov");

    // Tooltip
    p.addEventListener("mousemove", (e) => {
      tooltip.hidden = false;
      tooltip.textContent = GOVERNORATES[id]?.name || niceNameFromId(id);
      tooltip.style.left = e.clientX + 14 + "px";
      tooltip.style.top = e.clientY + 14 + "px";
    });

    p.addEventListener("mouseleave", () => (tooltip.hidden = true));

    // Click
    p.addEventListener("click", () => selectGov(id));
  });
}


async function showGovMap(id) {
  mode = "GOV";
  tooltip.hidden = true;
  backBtn.hidden = false;

  const data = GOVERNORATES[id];

  
  if (!data || !data.map) {
    mapContainer.innerHTML = `
      <div style="padding:16px; color: rgba(15,23,42,0.85);">
        Carte détaillée pas encore disponible pour <b>${niceNameFromId(id)}</b>.
        <br/>Clique “Retour à la Tunisie”.
      </div>
    `;
    return;
  }

  try {
    await loadMap(data.map);
  } catch (err) {
    mapContainer.innerHTML = `
      <div style="padding:16px; color: rgba(15,23,42,0.85);">
        Erreur: impossible de charger <b>${data.map}</b>
        <br/>Vérifie le nom du fichier et le dossier.
      </div>
    `;
  }
}


function selectGov(id) {
  activeId = id;

 
  renderPanel(id);

  showGovMap(id).catch(console.error);
}


backBtn.addEventListener("click", () => {
  showTunisia().catch(console.error);
});

resetBtn.addEventListener("click", () => {
  searchInput.value = "";
  tooltip.hidden = true;

  govName.textContent = "Sélectionne un gouvernorat";
  govTagline.textContent = "—";
  govDesc.textContent =
    "Clique sur un gouvernorat pour afficher sa description, ses photos et ses chiffres clés.";
  photoGrid.innerHTML = "";


  statsSection.style.display = "none";
  govStats.innerHTML = "";

  showTunisia().catch(console.error);
});

function searchGov(q) {
  q = q.trim().toLowerCase();
  if (!q) return;

  const entry = Object.entries(GOVERNORATES).find(([key, val]) => {
    return key === q || (val.name || "").toLowerCase().includes(q);
  });

  if (!entry) return;

  const [id] = entry;
  selectGov(id);
}

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") searchGov(searchInput.value);
});


showTunisia().catch((err) => {
  console.error(err);
  mapContainer.innerHTML = `<div style="padding:16px;color:white">Erreur: ${err.message}</div>`;
});
