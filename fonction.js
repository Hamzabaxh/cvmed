document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("inscription").addEventListener("submit", function (e) {
        var erreur = "";

        var nom = document.getElementById("nom");
        var prenom = document.getElementById("prenom");
        var email = document.getElementById("email");
        var message = document.getElementById("message");

        // Check if all inputs are empty
        if (!nom.value && !prenom.value && !email.value && !message.value) {
            erreur = "Veuillez remplir le formulaire.";
        } else {
            // Check individual fields
            if (!nom.value) {
                erreur = "Veuillez mettre votre nom !";
            }

            if (!prenom.value) {
                erreur = "Veuillez mettre votre prénom !";
            }

            if (!email.value) {
                erreur = "Veuillez mettre votre email !";
            } else {
                // Check email format
                var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email.value)) {
                    erreur = "Veuillez corriger votre email.";
                }
            }

            if (!message.value) {
                erreur = "Veuillez mettre votre message !";
            }
        }

        if (erreur) {
            e.preventDefault();
            document.getElementById("erreur").innerHTML = erreur;
            return false;
        } else {
            alert("Formulaire envoyé !");
        }
    });
});
