document.addEventListener("DOMContentLoaded", function() {
    // Sélection des éléments clés
    const step1 = document.getElementById("step-1");
    const step2 = document.getElementById("step-2");
    const step3 = document.getElementById("step-3");

    const btnStart1 = document.getElementById("start-btn-1");
    const formIdentity = document.getElementById("identity-form");
    const backBtn = document.getElementById("backBtn"); // Variable pour suivre l'historique des onglets visités
    let currentStep = 1;

    // Fonction pour changer d'étape proprement
    function goToStep(stepNumber) {
        // Enlever la classe active de partout
        step1.classList.remove("active");
        step2.classList.remove("active");
        step3.classList.remove("active");

        // Activer l'étape demandée
        if (stepNumber === 1) {
            step1.classList.add("active");
            backBtn.style.display = "none"; // Pas de retour sur l'accueil
        } else if (stepNumber === 2) {
            step2.classList.add("active");
            backBtn.style.display = "block"; // Afficher le bouton retour
        } else if (stepNumber === 3) {
            step3.classList.add("active");
            backBtn.style.display = "block";
        }

        currentStep = stepNumber;
    }

    // Clic sur le premier bouton "Commencer" (Accueil -> Identité)
    btnStart1.addEventListener("click", function() {
        goToStep(2);
    });

    // Soumission du formulaire (Identité -> Galerie d'images)
    formIdentity.addEventListener("submit", function(event) {
        event.preventDefault(); // Empêche le rechargement de la page

        // Optionnel : Vous pouvez récupérer les données ici si nécessaire
        const nom = document.getElementById("nom").value;
        console.log("Utilisateur connecté : " + nom);

        goToStep(3);
    });

    // Gestion du bouton "Retour"
    backBtn.addEventListener("click", function() {
        if (currentStep === 3) {
            goToStep(2); // Reculer de la galerie vers le formulaire
        } else if (currentStep === 2) {
            goToStep(1); // Reculer du formulaire vers l'accueil
        }
    });
});