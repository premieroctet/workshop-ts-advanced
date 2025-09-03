## 🏷️ Exercice 4 : Types opaques avancés avec Zod et validation stricte

### 🔎 Contexte

Après avoir implémenté la validation Zod de base dans l'exercice 6, nous allons maintenant explorer les **types opaques** (types branded/tagged) en TypeScript. Cette technique avancée permet de créer des types qui garantissent au niveau du système de types que les données ont été validées, empêchant l'utilisation accidentelle de données non validées.

### 🎯 Objectifs

1. **Types opaques** : Créer des types "marqués" avec `unique symbol` pour garantir la validité
2. **Type utilitaire** : Utiliser un type utilitaire `Opaque<T, Tag>` pour créer des types opaques
3. **Validation stricte** : Utiliser Zod avec des types opaques pour une sécurité de type maximale
4. **Intégration avancée** : Adapter le composant Table pour accepter uniquement des données validées
5. **Pattern de validation** : Créer un système de validation qui force l'utilisation de types validés

### 📋 Consignes

#### 1. Type utilitaire Opaque

Créez un type utilitaire générique qui permet de créer des types opaques :

```typescript
type Opaque<T, Tag> = T & { __tag: Tag };
```

#### 2. Types opaques avec le type utilitaire

Utilisez le type utilitaire pour créer des types "marqués" qui garantissent que les données ont été validées :

```typescript
type ValidatedCar = Opaque<Car, "ValidatedCar">;
type ValidatedPost = Opaque<Post, "ValidatedPost">;
```

#### 3. Fonctions de validation avec types opaques

Implémentez des fonctions qui valident les données et retournent des types marqués :

```typescript
function validateCar(data: unknown): ValidatedCar | null;
function validatePost(data: unknown): ValidatedPost | null;
```

#### 4. Client API avec types opaque

Modifiez les fonctions `getCars` et `getPosts` pour retourner des types opaques.

#### 5. Composant Table strict

Adaptez le composant `Table` pour accepter uniquement des données validées (types opaques).

### 🧪 Tests attendus

Votre solution doit permettre d'utiliser le code comme ceci :

```typescript
// Validation automatique des données
const carsResult = await getCars();
if (carsResult.error) {
  console.log("Erreur:", carsResult.error);
} else {
  // carsResult.data est maintenant ValidatedCar[]
  console.log("Voitures validées:", carsResult.data);
}

// Utilisation dans le composant Table
<Table<ValidatedCar>
  data={carsResult.data} // ✅ TypeScript accepte car c'est ValidatedCar[]
  columns={columns}
  title="Voitures validées"
/>

// ❌ Ceci ne devrait PAS compiler :
<Table<Car> data={rawCars} /> // Erreur de type !
```
