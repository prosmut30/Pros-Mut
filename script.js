// On attend que la page soit bien chargée
document.addEventListener("DOMContentLoaded", function() {

    // Récupération de la barre de recherche
    const searchBar = document.getElementById('searchBar');

    // On écoute ce que l'utilisateur tape dans la barre
    searchBar.addEventListener('keyup', function() {

        // 1. Récupérer le texte tapé (converti en minuscules)
        let input = searchBar.value.toLowerCase();

        // 2. Récupérer toutes les cartes de magasins
        let cartes = document.getElementsByClassName('magasin-card');
        let compteurResultats = 0;

        // 3. Boucler sur chaque carte pour voir si le texte correspond
        for (let i = 0; i < cartes.length; i++) {
            let texteCarte = cartes[i].textContent.toLowerCase();

            if (texteCarte.includes(input)) {
                cartes[i].style.display = ""; // Afficher la carte
                compteurResultats++;
            } else {
                cartes[i].style.display = "none"; // Cacher la carte
            }
        }

        // 4. Afficher un message si aucun magasin n'est trouvé
        let messageAucunResultat = document.getElementById('no-result');
        if (compteurResultats === 0) {
            messageAucunResultat.style.display = "block";
        } else {
            messageAucunResultat.style.display = "none";
        }
    });
});