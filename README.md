# API de Défis d'Éco-Conception Aléatoires

Cette API permet aux utilisateurs de référencer des défis d'éco-conception et de les gérer via une interface HTTP.

## Fonctionnalités

- **Récupération d'un défi aléatoire :** L'API peut renvoyer un défi aléatoire.
- **Récupération de plusieurs défis aléatoires :** L'API peut renvoyer plusieurs défis aléatoires.
- **Ajout de défi :** Les utilisateurs authentifiés peuvent ajouter de nouveaux défis.
- **Modification de défi :** Les utilisateurs authentifiés peuvent modifier un défi existant.
- **Suppression de défi :** Les utilisateurs authentifiés peuvent supprimer un défi existant.

## Technologies Utilisées

- Node.js
- Express.js
- MongoDB
- JSON Web Tokens (JWT) pour l'authentification

## Installation

1. Clonez ce dépôt :
git clone <URL_DU_DEPOT>


2. Installez les dépendances :
npm install


3. Configurez les variables d'environnement :
- Créez un fichier `.env` à la racine du projet
- Définissez les variables suivantes dans ce fichier :
  ```
  PORT=3000
  MONGODB_URI=Votre_URI_MongoDB
  JWT_SECRET=Votre_Clé_Secrète_JWT
  ```

4. Lancez l'application :
npm start


5. L'API sera accessible à l'adresse suivante :
http://localhost:3000/api/defis


## Documentation des API

Pour obtenir des informations détaillées sur les routes et les fonctionnalités de l'API, consultez le fichier [routes/defis.js](./routes/defis.js).

## Contribuer

Les contributions sont les bienvenues ! Si vous souhaitez contribuer à ce projet, veuillez consulter [CONTRIBUTING.md](CONTRIBUTING.md) pour obtenir des instructions sur la façon de démarrer.

## Licence

Ce projet est sous licence MIT. Consultez le fichier [LICENSE](LICENSE) pour plus d'informations.
