## 📊 Exercice 2 : Composant Table générique avec TypeScript

### 🔎 Contexte

Après avoir implémenté la gestion d'erreurs et les types génériques dans l'exercice 1, nous allons maintenant créer un composant `Table` générique qui peut afficher n'importe quel type de données. Le composant existant dans `src/components/Table.tsx` est actuellement codé en dur et ne peut afficher que des données statiques.

### 🎯 Objectifs

2. **Composant générique** : Rendre le composant complètement générique avec des types TypeScript avancés
3. **Intégration des données** : Connecter le composant aux données récupérées via l'API de l'exercice 1

### 📋 Consignes

#### 1. Composant générique avancé

Transformez le composant en composant générique qui :

- Accepte un type générique `T` pour le type des données
- Utilise des types utilitaires pour extraire automatiquement les clés des objets
- Permet de personnaliser l'affichage de chaque colonne via des fonctions de rendu

Props attendus :

- `data`: un tableau d'objets de type `T`
- `columns`: un tableau d'objets de type avec une `key` (qui doit être une clé de l'objet `T`), `label` et une `render` optionnelle
- `title`: une chaîne optionnelle pour le titre du tableau

##### 2. Intégration avec l'exercice 1

Utilisez le composant `Table` pour afficher :

- Les voitures récupérées via `getCars()`
- Les posts récupérées via `getPosts()`
- Gérer les états de chargement et d'erreur

### 🧪 Tests attendus

Votre solution doit permettre d'utiliser le code comme ceci :

```typescript
<Table<Car>
  title="Liste des voitures"
  columns={[
    { key: "priceEur", label: "Prix" },
    { key: "make", label: "Marque" },
    { key: "model", label: "Modèle" },
    {
      key: "year",
      label: "Année",
      render: (item, key) => `Année: ${item[key]}`,
    },
    { key: "transmission", label: "Transmission" },
  ]}
  data={carsResult.data}
/>
```
