## ✅ Exercice 4 : Validation des données avec Zod et inférence de types

### 🔎 Contexte

Nous allons maintenant nous assurer que les données affichées sont valides et typées correctement avant de les afficher. L'objectif est d'utiliser **Zod** pour définir des schémas de validation et d'inférer automatiquement les types TypeScript à partir de ces schémas.

### 🎯 Objectifs

1. **Schémas Zod** : Créer des schémas de validation pour les types `Car` et `Post`
2. **Inférence de types** : Utiliser `z.infer<>` pour dériver automatiquement les types TypeScript
3. **Validation runtime** : Valider les données reçues de l'API avant de les afficher
4. **Intégration avec Table** : Adapter le composant Table pour utiliser les données validées

### 📋 Consignes

#### 1. Installation et configuration de Zod

Installez Zod et créez un fichier de schémas :

```bash
yarn add zod
```

#### 2. Définition des schémas Zod

Créez des schémas de validation pour les types `Car` et `Post` dans `src/lib/schemas.ts`.

#### 3. Inférence de types avec Zod

Utilisez `z.infer<>` pour créer des types TypeScript à partir des schémas Zod :

```typescript
type Car = z.infer<typeof carSchema>;
type Post = z.infer<typeof postSchema>;
```

#### 4. Fonctions de validation

Implémentez des fonctions qui valident les données avant de les passer au composant `Table`:

```typescript
function validateCar
function validatePost
```
