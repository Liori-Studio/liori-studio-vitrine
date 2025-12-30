---
allowed-tools: Read, Glob, Grep, Edit, Write, Bash, Task, TodoWrite, AskUserQuestion
argument-hint: <description de la tâche à implémenter>
description: Execute the EPCT workflow (Explore → Plan → Code → Test) for implementing features
---

## Context

- Git status: !`git status --short`
- Branch: !`git branch --show-current`

## Task

Implémente la tâche suivante en utilisant le workflow EPCT: **$ARGUMENTS**

---

## EPCT Workflow

### 1. EXPLORE

Comprendre le contexte et les exigences:

- Analyser les fichiers existants liés à la tâche
- Identifier les patterns déjà utilisés dans le code similaire
- Repérer les dépendances et impacts potentiels
- Poser des questions si nécessaire avec `AskUserQuestion`

### 2. PLAN

Créer un plan d'implémentation avec `TodoWrite`:

- Décomposer la tâche en sous-tâches atomiques
- Identifier les fichiers à créer/modifier
- Définir l'ordre d'exécution des tâches
- Anticiper les tests nécessaires

### 3. CODE

Implémenter en respectant la Clean Architecture et les conventions du projet.

#### Clean Architecture

Le projet suit les principes de Clean Architecture avec séparation des couches:

```
src/modules/
├── [feature]/
│   ├── core/                    # DOMAIN LAYER (Pure Business Logic)
│   │   ├── gateways/            # Interfaces ports sortants (I/O externe)
│   │   │   └── my.gateway.ts    # interface IMyGateway
│   │   ├── providers/           # Interfaces providers (services)
│   │   │   └── my.provider.ts   # interface IMyProvider
│   │   └── [usecases/]          # Use cases / interactors (optionnel)
│   │
│   ├── gateways-impl/           # INFRASTRUCTURE LAYER
│   │   └── my.gateway.ts        # class MyGateway implements IMyGateway
│   │
│   ├── providers-impl/          # INFRASTRUCTURE LAYER
│   │   └── my.provider.ts       # class MyProvider implements IMyProvider
│   │
│   └── react/                   # PRESENTATION LAYER
│       └── components/
```

**Règle d'or**: Le core ne dépend de RIEN. Les implémentations dépendent du core.

#### Injection de Dépendances

Les dépendances sont instanciées dans `App.main.ts` et injectées:

```typescript
// src/modules/app/main.ts
export class App {
  public dependencies: Dependencies;
  public store: AppStore;

  constructor() {
    this.dependencies = this.setupDependencies();
    this.store = createStore({ dependencies: this.dependencies });
  }

  setupDependencies(): Dependencies {
    return {
      // Instanciation des implémentations concrètes
      analyticsGateway: new InMemoryAnalyticsGateway(),
      storageProvider: new LocalStorageProvider(),
      // Ajouter ici les nouvelles dépendances
    };
  }
}
```

**Pour ajouter une nouvelle dépendance**:

1. Créer l'interface dans `core/gateways/` ou `core/providers/`
2. Créer l'implémentation dans `gateways-impl/` ou `providers-impl/`
3. Ajouter au type `Dependencies` dans `store/dependencies.ts`
4. Instancier dans `App.setupDependencies()`

#### Accès aux Dépendances dans Redux

Les dépendances sont accessibles via `extra` dans les thunks:

```typescript
// Création d'un async thunk typé
export const myThunk = createAppAsyncThunk(
  "feature/action",
  async (payload, { extra, getState, dispatch }) => {
    // extra = Dependencies (injecté via middleware)
    const { storageProvider, analyticsGateway } = extra;

    await storageProvider.setItem("key", "value");
    analyticsGateway.track("event", { data: payload });
  }
);
```

#### Conventions de Nommage

| Type       | Format           | Exemple                      |
| ---------- | ---------------- | ---------------------------- |
| Interface  | `I` prefix       | `IAnalyticsGateway`          |
| Composant  | `PascalCase.tsx` | `Button.tsx`                 |
| Hook       | `use-*.hook.ts`  | `use-date-locale.hook.ts`    |
| Utilitaire | `*.utils.ts`     | `capitalize.utils.ts`        |
| Helper     | `*.helper.ts`    | `currency-symbols.helper.ts` |
| Gateway    | `*.gateway.ts`   | `analytics.gateway.ts`       |
| Provider   | `*.provider.ts`  | `storage.provider.ts`        |
| Test       | `*.test.ts(x)`   | `Button.test.tsx`            |
| Dossier    | `kebab-case`     | `text-highlight-parser/`     |

#### Patterns UI (Composants)

**CVA pour les variants**:

```typescript
const buttonVariants = cva("base-classes", {
  variants: { size: { sm: "...", lg: "..." } },
  defaultVariants: { size: "sm" },
});
```

**Fonction cn() pour les classes**:

```typescript
import { cn } from "@root/modules/shared/react/libs/cn";
<div className={cn("base", condition && "conditional")} />
```

#### Imports Absolus

```typescript
import { X } from "@root/modules/shared/...";
import { Y } from "@/modules/...";
```

### 4. TEST

Écrire et exécuter les tests:

#### Structure des Tests

```typescript
import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";

describe("FeatureName", () => {
  beforeEach(() => {
    /* setup */
  });

  describe("Happy Path", () => {
    it("should...", () => {});
  });

  describe("Sad Path", () => {
    it("should handle error...", () => {});
  });
});
```

#### Tests avec Redux (utiliser les stubs)

```typescript
import { createTestStore } from "@root/modules/testing/tests-environment";
import { StubStorageProvider } from "@root/modules/global/core/testing/stub-storage.provider";

const store = createTestStore({
  dependencies: {
    storageProvider: new StubStorageProvider(),
  },
});
```

#### Commandes

```bash
pnpm test           # Mode watch
pnpm test:coverage  # Avec couverture
pnpm typeCheck      # Vérification types
pnpm lint           # Lint ESLint
```

---

## Checklist Finale

- [ ] Clean Architecture respectée (core indépendant)
- [ ] Dépendances injectées via `App.main.ts`
- [ ] Tests écrits et passent (`pnpm test`)
- [ ] Types vérifiés (`pnpm typeCheck`)
- [ ] Lint OK (`pnpm lint`)
- [ ] Pas de `console.log` oubliés
- [ ] Imports absolus utilisés (@root ou @)
