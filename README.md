# Projet chef d'oeuvre

## Informatiions sur le projet

### Auteurs

1. Aaron bukasa : aaronbukasa.mba@gmail.com
2. Makeda banza

## Objectif du projet

Développement d’une plateforme de demande d’adhésion à la FEC :
*notre objectif est de créer une plateforme conviviale qui permettra de gérer les demandes d’adhésion des membres à la FEC.*

### Fonctionnalités et contenus

Les fonctionnalités principales de la plateforme de demande d’adhésion  sont les suivantes :
- Formulaire de demande d’adhésion
- Gestion des demandes d’adhésions
- Gestion des comptes utilisateurs
- Rapports

### Choix technologiques

La plateforme de demande d’adhésion sera développée en utilisant les technologies ci-après :
- ReactJS
- Node.js/Express
- PostgreSQL.
- pug

## Comment cloner et utiliser le dépôt GitHub

### Étape 1 : Cloner le dépôt

1. Ouvrez le terminal ou l'invite de commande.
2. Accédez à la page du dépôt GitHub que vous souhaitez cloner.
3. Cliquez sur le bouton "Code" puis sur "HTTPS".
4. Copiez l'URL du dépôt.
5. Revenez au terminal ou à l'invite de commande et tapez la commande suivante : 

    git clone <URL du dépôt>

### Étape 2 : Installer les dépendances

1. Accédez au dossier parent du projet cloné.
2. Tapez la commande suivante pour installer les dépendances :

    npm install ou yarn install

### Étape 3 : Configuration du backend

1. Créer un fichier .env dans le dossier backend.
2. Ajoutez les informations de votre base de données locale au fichier .env. Par exemple : 
    
    DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"

3. Créer un fichier .envSecret dans le dossier backend.
4. Ajoutez le mot secret de votre application au fichier .envSecret. Par exemple : 
    
    RANDOM_TOKEN_SECRET="votre-mot-secret"

### Étape 4 : Lancer le projet

1. Revenez au dossier parent du projet.
2. Tapez la commande suivante pour lancer le frontend et le backend en même temps : 

    npm run start-all

3. Le lien du frontend sera affiché dans le terminal. Vous pouvez y accéder en copiant le lien et en le collant dans votre navigateur.
4. Vous pouvez également lancer le backend en tapant localhost:3000 dans votre navigateur.

**Informations supplémentaires**

- Assurez-vous d'avoir installé Git sur votre ordinateur avant de cloner le dépôt.
- Vous pouvez remplacer les commandes npm install et npm run start-all par les commandes Yarn équivalentes si vous utilisez Yarn.
- Pour plus d'informations sur l'utilisation de Git, veuillez consulter la documentation officielle : https://git-scm.com/.
- Pour plus d'informations sur la configuration de votre environnement de développement, veuillez consulter la documentation du projet.
