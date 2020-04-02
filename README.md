# Les recettes de Martine

Un site de partage de recettes.  

Pour lancer front sur localhost:3000
```
npm i
npm run dev
```


### Fonctionnalités

- Creer une page recette.
  - Inclure un vidéo yt
  - Ajout mot clefs (desert
- Noter une recette.
- Ajouter un commentaire à une recette.
- Chercher une recette.
  - Mot clefs
  - Ingrédients
- Afficher une liste de recette
  - Les plus récentes
  - Les mieux noté
- Avoir une liste de recettes favorites
- Modifier/ Supprimer une page recette
  - Notifier ceux qui l'ont ajouter a leur liste favorite
- Modifier/ Supprimer commentaire/ rating
- Suivre des gens pour etre notifier des nouvelle recettes qu'ils publient

### Pages

- Page d'acceuil
  - Liste de recettes
  - Barre de recette
  - Bouton ajout de recette
- Page ajout de recette
- Page recette



### Données

- Users
  - pseudo
  - mail
  - mdp
- Recette
  - nom
  - ingredients
  - recette
  - lienyt
  - userid
- Commentaire
  - rating
  - critique
  - recetteid
  - userid
- Favoris
  - userid
  - recetteid
