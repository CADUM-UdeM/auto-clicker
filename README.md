# Défi 2 : Auto-clicker simple

**Temps estimé :** 40-50 minutes  
**Difficulté :** Débutant  
**Thème :** Jeu Idle Clicker

---

## Scénario du Défi

🎮 **DÉVELOPPEMENT DE JEU** 🎮

Vous avez été embauché pour corriger un bug critique dans notre jeu, un idle clicker qui est sur le point de sortir. La mécanique principale du jeu est complètement cassée - les joueurs ne peuvent pas gagner de points, et le système de multiplicateur ne fonctionne pas.

Le studio de jeu panique car :
- Les joueurs ne peuvent pas interagir avec le jeu
- Le compteur de score ne se met pas à jour
- La fonctionnalité de multiplicateur ne fonctionne pas
- Le jeu est injouable

Votre tâche est de corriger le système de gestion d'état pour que les joueurs puissent :
- Appuyer sur le bouton pour gagner des points
- Voir leur score se mettre à jour en temps réel
- Activer et utiliser le multiplicateur
- Suivre leur total de points gagnés

L'interface utilisateur est déjà construite et a l'air géniale, mais rien ne fonctionne. Vous devez connecter la gestion d'état en utilisant les hooks React pour rendre le jeu fonctionnel.

**Le temps presse !** Le jeu sort dans 50 minutes, et vous êtes le seul développeur disponible pour corriger cela !

---

## Description de la Codebase

Le codebase contient une application de jeu clicker React Native/Expo. Le design visuel est complet, mais la fonctionnalité interactive est cassée.

```
clicker-game/
├── App.tsx                # Composant principal de l'app (gestion d'état cassée)
├── components/
│   ├── ScoreDisplay.tsx  # Affiche le score actuel (ne se met pas à jour)
│   ├── TapButton.tsx     # Bouton principal de tap (aucune fonctionnalité)
│   ├── MultiplierButton.tsx # Toggle du multiplicateur (ne fonctionne pas)
│   └── StatsPanel.tsx    # Affiche le total de taps et le statut du multiplicateur
├── types/
│   └── index.ts          # Définitions de types TypeScript
├── assets/
│   └── images/          # Assets et icônes du jeu
├── package.json
├── tsconfig.json         # Configuration TypeScript
└── README.md
```

### Problèmes Actuels dans le Codebase

1. **État Non Initialisé** (`App.tsx`)
   - La variable d'état `score` est déclarée mais pas initialisée correctement
   - L'état `multiplier` existe mais la valeur par défaut est incorrecte
   - Le compteur `totalTaps` ne suit pas
   - Les types TypeScript pour useState ne sont pas définis

2. **Gestionnaires d'Événements Manquants/Cassés** (`TapButton.tsx`, `App.tsx`)
   - Le gestionnaire `onPress` ne met pas à jour l'état
   - Le calcul du score n'est pas implémenté
   - L'appui sur le bouton ne déclenche aucun changement d'état

3. **Mises à Jour d'État Ne Fonctionnent Pas**
   - La fonction `setScore` n'est pas appelée
   - Les mises à jour d'état ne déclenchent pas de re-rendus
   - L'affichage du score montre une valeur statique

4. **Logique du Multiplicateur Cassée** (`MultiplierButton.tsx`, `App.tsx`)
   - Le toggle du multiplicateur ne change pas l'état
   - La valeur du multiplicateur n'est pas appliquée au calcul du score
   - Le statut du multiplicateur n'est pas affiché correctement

5. **Problèmes de Rendu Conditionnel**
   - Le panneau de stats ne montre pas le bon statut du multiplicateur
   - Le retour visuel pour le multiplicateur actif/inactif ne fonctionne pas

### Ce Qui Fonctionne

- Les composants UI sont stylisés et ont l'air bien
- La structure des composants est correcte
- Les props sont passées (mais pas utilisées correctement)
- La mise en page et le design sont complets

---

## Focus du Défi

Ce défi se concentre sur la gestion d'état React et l'interactivité :

### 1. **Hook useState avec TypeScript**
- Comprendre ce qu'est l'état et pourquoi nous en avons besoin
- Déclarer l'état avec `useState`
- Initialiser l'état avec des valeurs par défaut
- Lire les valeurs d'état
- Génériques TypeScript avec useState : `useState<number>(0)`
- Inférence de type vs types explicites

**Documentation :**
- [React useState Hook](https://react.dev/reference/react/useState)
- [React State: A Component's Memory](https://react.dev/learn/state-a-components-memory)
- [React Native State Management](https://reactnative.dev/docs/state)
- [TypeScript useState](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example#usestate)

### 2. **Mises à Jour d'État**
- Utiliser les fonctions setter pour mettre à jour l'état
- Comprendre l'immutabilité de l'état
- Mettre à jour l'état basé sur l'état précédent
- Déclencher des re-rendus avec les changements d'état

**Documentation :**
- [Updating Objects in State](https://react.dev/learn/updating-objects-in-state)
- [Updating Arrays in State](https://react.dev/learn/updating-arrays-in-state)
- [State Updates are Asynchronous](https://react.dev/learn/queueing-a-series-of-state-updates)

### 3. **Gestionnaires d'Événements avec TypeScript**
- Gérer les interactions utilisateur (onPress, onPressIn, onPressOut)
- Connecter les événements aux mises à jour d'état
- Comprendre les fonctions gestionnaires d'événements
- Passer des fonctions comme props
- Types TypeScript pour les gestionnaires d'événements
- Typer les gestionnaires onPress

**Documentation :**
- [Responding to Events](https://react.dev/learn/responding-to-events)
- [TouchableOpacity](https://reactnative.dev/docs/touchableopacity)
- [Pressable](https://reactnative.dev/docs/pressable)
- [TypeScript Event Handlers](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events)

### 4. **Variables d'État Multiples**
- Gérer plusieurs éléments d'état
- Coordonner les mises à jour d'état
- Dépendances d'état entre variables

**Documentation :**
- [Managing State](https://react.dev/learn/managing-state)
- [Choosing the State Structure](https://react.dev/learn/choosing-the-state-structure)

### 5. **Rendu Conditionnel**
- Rendre différentes UI basées sur l'état
- Utiliser les opérateurs ternaires dans JSX
- Afficher/masquer des éléments basés sur l'état
- Style dynamique basé sur l'état

**Documentation :**
- [Conditional Rendering](https://react.dev/learn/conditional-rendering)
- [Rendering Lists](https://react.dev/learn/rendering-lists)

### 6. **Calculs d'État**
- Calculer des valeurs dérivées de l'état
- Calculer des totaux, moyennes, etc.
- Calculs en temps réel basés sur l'entrée utilisateur

**Documentation :**
- [Deriving State](https://react.dev/learn/you-might-not-need-an-effect#deriving-state)

---

## Concepts Git Couverts

Ce défi s'appuie sur les bases de Git et introduit :

1. **Branches de Fonctionnalité**
   - Créer une branche pour une fonctionnalité spécifique (`feature/clicker-state-fix`)
   - Travailler sur des fonctionnalités isolées
   - Conventions de nommage de branches

2. **Commits Logiques**
   - Faire des commits qui représentent des changements logiques
   - Un commit par fonctionnalité/correction
   - Écrire des messages de commit clairs

3. **Messages de Commit**
   - Écrire des messages de commit descriptifs
   - Suivre les conventions de messages de commit
   - Exemples : "Fix: Implémenter la gestion d'état du score", "Add: Fonctionnalité de multiplicateur"

**Documentation Git :**
- [Git Branching](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)
- [Writing Good Commit Messages](https://cbea.ms/git-commit/)

---

## Liste de Tâches

Corrigez le jeu clicker en complétant ces tâches :

### Fonctionnalité Principale

- [ ] **Initialiser l'État Correctement**
  - Configurer l'état `score` avec une valeur initiale de 0
  - Configurer l'état `multiplier` (booléen : actif/inactif)
  - Configurer l'état compteur `totalTaps`
  - Configurer l'état `multiplierValue` (par ex., 2 pour doubler les points)

- [ ] **Implémenter la Fonctionnalité du Bouton de Tap**
  - Créer la fonction `handleTap` qui met à jour le score
  - Appliquer le multiplicateur au calcul du score quand il est actif
  - Incrémenter le compteur `totalTaps` à chaque tap
  - Connecter `handleTap` à la prop `onPress` du bouton

- [ ] **Corriger l'Affichage du Score**
  - S'assurer que le composant `ScoreDisplay` reçoit et affiche le score actuel
  - Le score doit se mettre à jour en temps réel quand le bouton est tapé
  - Formater l'affichage du score (par ex., ajouter des virgules pour les grands nombres)

- [ ] **Implémenter le Toggle du Multiplicateur**
  - Créer la fonction `toggleMultiplier`
  - Basculer l'état du multiplicateur entre actif/inactif
  - Connecter la fonction toggle au `MultiplierButton`
  - Appliquer le multiplicateur au calcul du score quand il est actif

- [ ] **Mettre à Jour le Panneau de Stats**
  - Afficher le nombre total de taps
  - Afficher le statut du multiplicateur (actif/inactif)
  - Afficher la valeur actuelle du multiplicateur
  - Mettre à jour les stats en temps réel

- [ ] **Ajouter un Retour Visuel**
  - Afficher un style différent quand le multiplicateur est actif
  - Ajouter une indication visuelle des appuis sur le bouton
  - Afficher clairement le statut du multiplicateur

### Workflow Git

- [ ] Créer une branche de fonctionnalité : `feature/clicker-state-fix`
- [ ] Faire des commits logiques :
  - "Fix: Initialiser les variables d'état"
  - "Add: Fonctionnalité du bouton de tap"
  - "Add: Système de toggle du multiplicateur"
  - "Fix: Calcul du score avec multiplicateur"
- [ ] Pousser la branche et créer une Pull Request
- [ ] Écrire une description de PR expliquant les corrections

---

## Vérification

Pour vérifier que votre solution fonctionne :

1. **Lancer l'app :**
   ```bash
   npm start
   # ou
   expo start
   ```

2. **Tests Fonctionnels :**
   - [ ] Appuyer sur le bouton augmente le score
   - [ ] Le score se met à jour immédiatement (pas de délai)
   - [ ] Le bouton multiplicateur bascule on/off
   - [ ] Quand le multiplicateur est actif, chaque tap rapporte le double de points
   - [ ] Le compteur de taps totaux s'incrémente correctement
   - [ ] Le panneau de stats affiche les bonnes informations
   - [ ] Le retour visuel fonctionne (état actif du multiplicateur visible)

3. **Cas Limites :**
   - [ ] Le score commence à 0
   - [ ] Le multiplicateur peut être basculé plusieurs fois
   - [ ] Le calcul du score est correct (1 point normalement, 2 avec multiplicateur)
   - [ ] Aucune erreur ou avertissement dans la console

4. **Qualité du Code :**
   - [ ] L'état est correctement initialisé avec les types TypeScript
   - [ ] Les gestionnaires d'événements sont correctement définis avec les bons types
   - [ ] Les mises à jour d'état utilisent correctement les fonctions setter
   - [ ] Les interfaces TypeScript sont définies pour les props des composants
   - [ ] Aucune erreur ou avertissement TypeScript
   - [ ] Le code est propre et lisible
   - [ ] Aucune variable ou fonction inutilisée

---

## Ressources & Documentation

### Gestion d'État React
- [useState Hook](https://react.dev/reference/react/useState)
- [State: A Component's Memory](https://react.dev/learn/state-a-components-memory)
- [Managing State](https://react.dev/learn/managing-state)

### Gestion d'Événements
- [Responding to Events](https://react.dev/learn/responding-to-events)
- [TouchableOpacity](https://reactnative.dev/docs/touchableopacity)
- [Pressable Component](https://reactnative.dev/docs/pressable)

### Composants React Native
- [React Native Components](https://reactnative.dev/docs/components-and-apis)
- [Text Component](https://reactnative.dev/docs/text)
- [View Component](https://reactnative.dev/docs/view)

### Rendu Conditionnel
- [Conditional Rendering](https://react.dev/learn/conditional-rendering)
- [JavaScript Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

### Git
- [Git Branching](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)
- [Git Commit Best Practices](https://cbea.ms/git-commit/)

### TypeScript
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript with React](https://react-typescript-cheatsheet.netlify.app/)
- [TypeScript in React Native](https://reactnative.dev/docs/typescript)
- [useState with TypeScript](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example#usestate)

---

## Instructions de Soumission

1. **Compléter toutes les tâches de fonctionnalité** de la liste ci-dessus

2. **Suivre les meilleures pratiques Git :**
   - Créer une branche de fonctionnalité
   - Faire des commits logiques et atomiques
   - Écrire des messages de commit clairs
   - Pousser votre branche

3. **Créer une Pull Request :**
   - Titre : "Fix: Implémenter la Gestion d'État du Jeu Clicker"
   - La description doit inclure :
     - Quelle fonctionnalité a été corrigée
     - Comment la gestion d'état a été implémentée
     - Les tests effectués
     - Des captures d'écran ou un enregistrement d'écran (optionnel)

4. **Attendre la revue et l'approbation**

---

## Défis Bonus (Optionnel)

Si vous terminez tôt :

1. **Ajouter des animations :** Animer les changements de score, les appuis sur les boutons
2. **Ajouter des effets sonores :** Jouer des sons sur le tap et l'activation du multiplicateur
3. **Ajouter des succès :** Débloquer des succès à certains paliers de score
4. **Ajouter un auto-clicker :** Implémenter une amélioration qui auto-clique chaque seconde
5. **Ajouter un système de sauvegarde :** Sauvegarder le meilleur score en utilisant AsyncStorage
6. **Ajouter un classement :** Suivre et afficher les meilleurs scores

---

## Conseils & Indices

- **Commencer par l'initialisation de l'état :** Configurez d'abord les variables d'état de base
- **Tester progressivement :** Corrigez une fonctionnalité à la fois et testez-la
- **Vérifier les mises à jour d'état :** Assurez-vous d'utiliser les fonctions setter, pas de modifier directement l'état
- **Utiliser console.log :** Enregistrer les valeurs d'état pour déboguer ce qui se passe
- **Lire les messages d'erreur :** Les erreurs React Native sont généralement utiles
- **Se rappeler que l'état est immuable :** Toujours utiliser les fonctions setter pour mettre à jour l'état

---

**Vous pouvez le faire ! Corrigez le jeu et sauvez le lancement !** 🎮✨

