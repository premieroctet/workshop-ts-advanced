## 🚗 Exercice 1 : Typage du client d'API avec génériques et gestion d'erreurs

### Préambule

Avant de commencer cet exercice, assurez-vous d'avoir installé et lancé le projet :

```bash
# Installer les dépendances
yarn install

# Lancer le projet
yarn start
```

Le projet sera accessible sur `http://localhost:3000`.

**Routes API disponibles pour cet exercice :**

- [http://localhost:3000/api/cars](http://localhost:3000/api/cars) - Retourne une liste de voitures
- [http://localhost:3000/api/posts](http://localhost:3000/api/posts) - Retourne une liste d'articles

Ces endpoints seront utilisés dans la suite de l'exercice pour tester votre implémentation.

### 🔎 Contexte

Dans le fichier `src/app/lib/client.ts`, les fonctions `getCars` et `getPosts` utilisent actuellement `throw new Error()` pour gérer les erreurs. L'objectif est de refactoriser ce code pour utiliser les génériques TypeScript et retourner un objet structuré contenant soit les données, soit une erreur.

### 🎯 Objectifs

1. **Utiliser les génériques** : Créer des types génériques pour typer les données retournées
2. **Gestion d'erreurs sans throw** : Retourner un objet avec un champ `error` au lieu de lancer une exception
3. **Types utilitaires** : Utiliser des types utilitaires TypeScript pour construire les types de retour

### 📋 Consignes

#### 1. Créer les types de base

Implémentez les types suivants :

- Deux types `Car` et `Post` pour les données des API
- Un type `ApiSuccess<T>` pour une réponse d'API réussie
- Un type `ApiError` pour une réponse d'API avec erreur
- Un type union `ApiResponse<T>` qui combine les deux types précédents

#### 2. Créer une fonction générique

Créez une fonction générique `fetchApi<T>` qui :

- Prend une URL en paramètre
- Retourne une Promise de type `ApiResponse<T>`
- Gère les erreurs sans throw

#### 3. Utiliser la fonction générique

Refactorisez les fonctions `getCars` et `getPosts` pour utiliser `fetchApi` avec les bons types génériques.

### 🧪 Tests attendus

Votre solution doit permettre d'utiliser le code comme ceci :

```typescript
// Utilisation
const carsResult = await getCars();

if (carsResult.error) {
  console.log("Erreur:", carsResult.error);
} else {
  console.log("Voitures:", carsResult.data);
  // carsResult.data est typé comme Car[]
}
```
