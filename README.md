# **React Microfrontends Starter with TypeScript & Webpack**

A robust, production-ready boilerplate for **Microfrontends** using **React**, **TypeScript**, **Webpack 5 Module Federation**, and **NPM Workspaces**.

---

## 👤 **Author**

**Pravin Harchandani**
🔗 LinkedIn: [https://www.linkedin.com/in/pravinh/](https://www.linkedin.com/in/pravinh/)

---

## 📂 **Architecture**

This repository is structured as a **Monorepo** using **NPM Workspaces**.

```
react-mf-starter/
├── apps/                 # Microfrontend Applications
│   ├── container/        # HOST: The Shell application that stitches everything together
│   ├── home/             # REMOTE: Domain-specific microapp (Port 3001)
│   └── profile/          # REMOTE: Domain-specific microapp (Port 3002)
├── packages/             # Shared Internal Libraries
│   ├── ui-components/    # Shared Design System (Buttons, Inputs, etc.)
│   ├── shared-types/     # TypeScript Interfaces & Types
│   ├── hooks/            # Shared React Hooks (useAuth, etc.)
│   └── utils/            # Helper functions (formatters, dates, etc.)
```

---

## 🧰 **Key Technologies**

* **Webpack 5 Module Federation** – Load microapps dynamically at runtime
* **NPM Workspaces** – Efficient dependency management across monorepo
* **TypeScript** – Shared, safe typing between apps & packages
* **React 18** – MFE UI layer

---

## 🚀 **Getting Started**

### **Prerequisites**

* Node.js **v16+**
* NPM **v7+** (required for Workspaces)

---

## 📦 **Installation**

### 1. Clone the repository

```bash
git clone https://github.com/pravinharchandani/react-mf-starter.git
cd react-mf-starter
```

### 2. Install all dependencies (from the root)

```bash
npm install
```

NPM automatically links all `packages/*` to each app under `apps/*`.

---

## ▶️ **Running the Project**

Run all microfrontends at once:

```bash
npm start
```

This launches:

| App                   | URL                                            |
| --------------------- | ---------------------------------------------- |
| **Container (Shell)** | [http://localhost:3000](http://localhost:3000) |
| **Home Remote**       | [http://localhost:3001](http://localhost:3001) |
| **Profile Remote**    | [http://localhost:3002](http://localhost:3002) |

---

## 🛠️ **Features**

### **1. Shared Libraries**

MFEs use locally developed packages without publishing during development:

* `@packages/ui-components`
* `@packages/shared-types`
* `@packages/hooks`
* `@packages/utils`

Example:

```ts
import { Button } from "@packages/ui-components";
```

---

### **2. Module Federation Config**

Container loads **Home** and **Profile** microfrontends at runtime.

### **Container Webpack Config**

```js
remotes: {
  home: "home@http://localhost:3001/remoteEntry.js",
  profile: "profile@http://localhost:3002/remoteEntry.js",
}
```

### **Each remote exposes its App**

```js
exposes: {
  "./App": "./src/App",
}
```

---

### **3. Shared Dependencies**

To prevent multiple React versions loading:

```js
shared: {
  react: { singleton: true, requiredVersion: deps.react },
  "react-dom": { singleton: true, requiredVersion: deps["react-dom"] },
}
```

---

## 🤝 **Contributing**

Contributions are welcome!

1. Fork the project
2. Create your branch

   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes

   ```bash
   git commit -m "Add AmazingFeature"
   ```
4. Push your branch

   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

---

## ⭐ Maintained by

**Pravin Harchandani**
