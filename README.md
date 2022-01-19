# Projet-S6 : Pseudo Fight

- GALLEGO Mathéo
- DELABY Antoine

# Liens Utiles

- [Bible JS](https://developer.mozilla.org/fr/docs/Web)
- [Dépôt GIT](https://gitlab-etu.fil.univ-lille1.fr/gallego/projet-s6_gallego-delaby)
- [Lien HTTP Clone GIT](https://gitlab-etu.fil.univ-lille1.fr/gallego/projet-s6_gallego-delaby.git)
- Lien SSH Clone GIT : git@gitlab-etu.fil.univ-lille1.fr:gallego/projet-s6_gallego-delaby.git
- [Ressources du cours](https://www.fil.univ-lille1.fr/~routier/enseignement/licence/jsfs/)
- [Ressouces des TPs](https://www.fil.univ-lille1.fr/~routier/enseignement/licence/jsfs/tdtp/index.html)
- [Lien local Projet](http://localhost:8000)
- [Old JS Project](https://gitlab.univ-lille.fr/matheo.gallego.etu/projet-java-script-s4)

# Organisation du Dépôt

Dans ce dépôt du Projet de S6, vous trouverez :

- Un **fichier** `README.md` (ce fichier) qui renseigne sur l'organisation générale du dépôt et du projet.
- Des **fichiers de configurations** comme :
    - `.gitignore` *se charge de ne pas ajouter de ressources inutiles et trop lourdes au dépôt*
    - `package.json` *se charge des dépendences du projet*
    - `package-lock.json` *se charge des dépendences du projet*
    - `webpack.config.js` *se charge de rendre nos modules compatibles avec les anciens navigateurs*
    - `.babelrc` *se charge de traduire le code ES6 dans des version antérieures pour de meilleures compatibilités*
    - `.prettierrc` *se charge de formater notre code pour le rendre à la fois plus élégant et cohérent*
    - `.vscode/settings.json` *se charge de faire fonctionner prettier*
- Un **fichier** `index.html` contenant le corps de notre site.
- Un **dossier** `src` contenant les différents modules de notre projet.
- Un **dossier** `css` contenant les **fichiers** CSS du projet.
- Un **dossier** `ressources` contenant :
    - Un **dossier** `images` avec toutes les images du projet.
    - Un ou plusieurs **fichiers.json** de données.

# Lancement du projet

1. Placez-vous à la racine du projet.
2. Lancez 2 Terminaux à la racine du projet.
3. Dans le premier Terminal, exécutez la commande `npx serve -s -l 8000`.
4. Dans le second, exécutez la commande `npm run watch`.
5. Rendez-vous sur [le site local du projet](http://localhost:8000)
5. Baladez-vous sur le site et Bonne visite !

# Inspirations et Références :

- Jeu de rôle **Arches** créé par **[Xavier Lesieu](https://www.artstation.com/raessyh)**
- Jeu PHP **[String Fighters](http://www.docteeboh.net/stringfighters/string-fighters-jeu-en-php.php)**

