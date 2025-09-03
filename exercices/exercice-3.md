## 🔒 Exercice 3 : Contraintes sur les génériques avec TypeScript

### 🔎 Contexte

Après avoir créé un composant `Table` générique dans l'exercice 2, nous allons maintenant explorer les **contraintes sur les génériques** en TypeScript. Cette fonctionnalité permet de restreindre les types génériques à des types spécifiques, garantissant que seuls certains types peuvent être utilisés avec nos composants et fonctions.

### 🎯 Objectifs

1. **Comprendre les contraintes** : Utiliser `extends` pour contraindre les types génériques
2. **Type WithId** : Créer un type de base pour les entités avec un identifiant
3. **Composant Table sécurisé** : Améliorer le composant Table pour garantir la présence d'un `id`

### 📋 Consignes

#### 1. Type de base WithId

Créez un type de base qui garantit qu'un objet a un identifiant :

```typescript
type WithId = ...
```

#### 2. Application de la contrainte à TableProps

Modifiez le composant `Table` de l'exercice 2 pour qu'il accepte uniquement des types qui étendent `WithId`. Vous devez :

1. Modifier le type `TableProps` pour ajouter la contrainte
2. Adapter le composant `Table` pour utiliser cette contrainte (afficher l'id en début de chaque ligne)
3. Vérifier que le composant `Table` ne compile pas si on lui passe un type sans `id`
