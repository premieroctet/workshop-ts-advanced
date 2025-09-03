# Workshop Formation TS Advanced

## Résumé du workshop

Le but de ce workshop est de manipuler des notions avancées de TypeScript dans le cadre d'une application React. Ce projet Next.js vous permettra d'explorer progressivement les fonctionnalités avancées de TypeScript à travers 7 exercices pratiques.

## 🎯 Objectifs du workshop

Ce workshop vous permettra de maîtriser :

- **Génériques avancés** : Création de composants et fonctions réutilisables
- **Contraintes sur les génériques** : Restriction des types acceptés
- **Validation de données** : Intégration de Zod avec TypeScript
- **Types opaques** : Création de types "marqués" pour la sécurité

## 🚀 Technologies utilisées

- **Next.js 15** avec App Router
- **React 19**
- **TypeScript 5**
- **Tailwind CSS 4**
- **Zod** (pour la validation)

## 📁 Structure du projet

```
src/
├── app/                 # Pages et API routes Next.js
│   ├── api/            # Endpoints API (cars, posts)
│   ├── layout.tsx      # Layout principal
│   └── page.tsx        # Page d'accueil
├── components/         # Composants React
│   └── Table.tsx       # Composant Table générique
└── lib/               # Utilitaires et configuration
    ├── client.ts      # Client API avec gestion d'erreurs
    └── schemas.ts     # Schémas Zod (à créer)
```

## 📚 Progression des exercices

### Exercice 1 : Typage du client d'API avec génériques

- **Objectif** : Créer des types génériques pour l'API
- **Concepts** : `ApiResponse<T>`, gestion d'erreurs sans throw, types utilitaires

### Exercice 2 : Composant Table générique

- **Objectif** : Créer un composant Table réutilisable
- **Concepts** : Composants génériques, types utilitaires, props typées

### Exercice 3 : Contraintes sur les génériques

- **Objectif** : Restreindre les types acceptés par le composant
- **Concepts** : `extends`, type `WithId`, validation de structure

### Exercice 4 : Validation avec Zod et inférence de types

- **Objectif** : Validation runtime et inférence automatique des types
- **Concepts** : Schémas Zod, `z.infer<>`, validation des données

### Exercice 5 : Types opaques avancés

- **Objectif** : Création de types "marqués" pour la sécurité
- **Concepts** : Types opaques, `unique symbol`, validation stricte

## 🛠️ Installation et démarrage

1. **Cloner le projet**

```bash
git clone <repository-url>
cd workshop-ts-advanced
```

2. **Installer les dépendances**

```bash
npm install
```

3. **Lancer le serveur de développement**

```bash
npm run dev
```

4. **Ouvrir votre navigateur**

```
http://localhost:3000
```

## 🎓 Prérequis

- Connaissance de base de TypeScript
- Familiarité avec React et Next.js
- Compréhension des concepts de génériques

---

**Bon workshop ! 🚀**
