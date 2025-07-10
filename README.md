# gofile.io TypeScript API

Une API TypeScript pour uploader des fichiers sur gofile.io, conçue avec les principes de clean code et clean architecture.

## 🚀 Fonctionnalités

- Upload de fichiers vers gofile.io
- Support TypeScript complet
- Architecture propre et modulaire
- Gestion d'erreurs robuste
- Zéro dépendance externe

## 📦 Installation

```bash
npm install
npm run build
```

## 🛠️ Configuration

```typescript
import { GofileAPI } from "./dist/index.js";

const api = new GofileAPI({});
```

## 💡 Utilisation

### Upload simple d'un fichier

```typescript
import { GofileAPI } from "./dist/index.js";
import { readFile } from "fs/promises";

const api = new GofileAPI({});

// Lire un fichier depuis le système de fichiers
const fileBuffer = await readFile("./path/to/your/file.jpg");

// Upload du fichier
const result = await api.uploadFile(fileBuffer, "my-file.jpg", "YOUR_TOKEN");

if (result.success) {
    console.log("Lien de téléchargement:", result.downloadPage);
} else {
    console.error("Erreur:", result.error);
}
```

### Upload vers un dossier existant

```typescript
const result = await api.uploadFileToFolder(fileBuffer, "my-file.jpg");
```

## 🏗️ Architecture

Le projet suit les principes de clean architecture :

```
src/
├── types/              # Types et interfaces TypeScript
├── interfaces/         # Ports (contrats d'interface)
├── repositories/       # Adapters (implémentations)
├── services/          # Use cases (logique métier)
├── utils/             # Utilitaires
├── index.ts           # Point d'entrée principal
└── example.ts         # Exemple d'utilisation
```

### Couches architecturales

1. **Domain Layer** (`types/`) : Entités et types métier
2. **Application Layer** (`services/`) : Cas d'usage et logique métier
3. **Infrastructure Layer** (`repositories/`) : Implémentations concrètes
4. **Interface Layer** (`index.ts`) : API publique

## 🔧 Scripts disponibles

```bash
npm run build    # Compile TypeScript vers JavaScript
npm run example        # Lance l'exemple
```

## 🧪 Exemple complet

Voir `src/example.ts` pour un exemple détaillé d'utilisation.

## 🤝 Contribution

Ce projet suit les principes du clean code :

- **Single Responsibility Principle** : Chaque classe a une responsabilité unique
- **Dependency Inversion** : Les dépendances sont injectées via les interfaces
- **Interface Segregation** : Interfaces spécifiques et cohésives
- **Don't Repeat Yourself** : Code réutilisable et modulaire

## 📝 License

ISC License
