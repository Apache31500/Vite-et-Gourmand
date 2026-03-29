// ================================
//   FILTRES MENUS
// ================================

document.addEventListener("DOMContentLoaded", function () {
  const btnFiltrer = document.getElementById("btn-filtrer");
  if (btnFiltrer) {
    btnFiltrer.addEventListener("click", filtrerMenus);
  }
});

function filtrerMenus() {
  const prixMax = document.getElementById("filtre-prix-max").value;
  const prixMin = document.getElementById("filtre-prix-min").value;
  const theme = document.getElementById("filtre-theme").value;
  const regime = document.getElementById("filtre-regime").value;
  const personnes = document.getElementById("filtre-personnes").value;

  const cartes = document.querySelectorAll(".carte-menu-wrapper");
  let nbVisible = 0;

  cartes.forEach(function (carte) {
    const cartePrix = parseFloat(carte.dataset.prix);
    const carteTheme = carte.dataset.theme;
    const carteRegime = carte.dataset.regime;
    const cartePersonnes = parseInt(carte.dataset.personnes);

    let visible = true;

    if (prixMax && cartePrix > parseFloat(prixMax)) {
      visible = false;
    }
    if (prixMin && cartePrix < parseFloat(prixMin)) {
      visible = false;
    }
    if (theme && carteTheme !== theme) {
      visible = false;
    }
    if (regime && carteRegime !== regime) {
      visible = false;
    }
    if (personnes && cartePersonnes < parseInt(personnes)) {
      visible = false;
    }

    if (visible) {
      carte.style.display = "block";
      nbVisible++;
    } else {
      carte.style.display = "none";
    }
  });

  const aucunResultat = document.getElementById("aucun-resultat");
  if (aucunResultat) {
    aucunResultat.style.display = nbVisible === 0 ? "block" : "none";
  }
}
