function getData() {
   fetch('data.json')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {
       // Traitez les données comme vous le souhaitez
       console.log('Données récupérées du fichier JSON :', data);
       /// ON ECRIT LE CODE ICI ! 
       let titre = document.getElementById("nom-journal")
       titre.textContent = data.nomJournal ;

       let accroche= document.getElementById("phrase-accroche")
       accroche.textContent = data.phraseAccroche ;

       let appel = document.getElementById("appel-action")
       appel.textContent = data.appelAction ;

       let themes = data.journal.themes;
       let blocThemes = document.getElementById("themes");

        themes.forEach(function (theme) {
        let divTheme = document.createElement("div");

         let nom = document.createElement("h4");
         nom.textContent = theme.nom;

         let description = document.createElement("p");
         description.textContent = theme.description;

         divTheme.appendChild(nom);
         divTheme.appendChild(description);
         blocThemes.appendChild(divTheme);
        });

        let principal = data.journal.articlePrincipal;
        let blocPrincipal = document.getElementById("article-principal");
        let divPrincipal = document.createElement("div");

        let titrePrincipal = document.createElement("h2")
        titrePrincipal.textContent = principal.titre;

        let date = document.createElement("p")
        date.textContent = "Date : " + principal.date;

        let theme = document.createElement("p")
        theme.textContent = "Thème : " + principal.theme;

        let image = document.createElement("img")
        image.src = principal.image;
        image.alt = principal.titre;

        let description = document.createElement("h3")
        description.textContent = principal.description;

        divPrincipal.appendChild (titrePrincipal);
        divPrincipal.appendChild(date);
        divPrincipal.appendChild(theme)
        divPrincipal.appendChild(image);
        divPrincipal.appendChild(description);
        blocPrincipal.appendChild(divPrincipal);

        let articles = data.journal.articles
        let blocArticles = document.getElementById("articles")

         articles.forEach(function (article) {
         let divArticle = document.createElement("div");
         
         let titre = document.createElement("h3");
         titre.textContent = article.titre;

         let data = document.createElement("p");
         data.textContent = "Date : " + article.date;

         let theme = document.createElement("p");
         theme.textContent = "Thème : " + article.theme;

         let image = document.createElement("img")
         image.src = article.image;
         image.alt = article.titre;


         divArticle.appendChild(titre)
         divArticle.appendChild(date);
         divArticle.appendChild(theme)
         divArticle.appendChild(image);;
         blocArticles.appendChild(divArticle);

        });

        let auteurs = data.journal.auteurs
        let blocAuteurs = document.getElementById("auteurs")

         auteurs.forEach(function (auteur) {
         let divAuteur = document.createElement("div");
         
         let prenom = document.createElement("h4");
         prenom.textContent = auteur.prenom;

         let metier = document.createElement("p");
         metier.textContent = auteur.typeExperience

         let presentation = document.createElement("p");
         presentation.textContent = auteur.presentation


         divAuteur.appendChild(prenom)
         divAuteur.appendChild(metier);
         divAuteur.appendChild(presentation)
         blocAuteurs.appendChild(divAuteur);

        });






       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici