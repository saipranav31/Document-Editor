🚀 Document Editor — Real‑time Collaborative Editor

<div align="center">

![GitHub Action](https://img.shields.io/github/actions/workflow/status/saipranav31/Document-Editor/deploy-pages.yml?label=Deploy%20Pages&logo=github)
![GitHub Pages](https://img.shields.io/badge/hosted-GitHub%20Pages-222?logo=github)
![License](https://img.shields.io/badge/license-MIT-green.svg)

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Express](https://img.shields.io/badge/Express-5-000000?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb&logoColor=white)
![Yjs](https://img.shields.io/badge/Yjs-CRDT-7B61FF)
![TipTap](https://img.shields.io/badge/TipTap-ProseMirror-000000)

![Stars](https://img.shields.io/github/stars/saipranav31/Document-Editor?style=social)
![Forks](https://img.shields.io/github/forks/saipranav31/Document-Editor?style=social)
![Last Commit](https://img.shields.io/github/last-commit/saipranav31/Document-Editor)
![Code Size](https://img.shields.io/github/languages/code-size/saipranav31/Document-Editor)

</div>

— Build once. Edit together. Persist safely. —

• Live Collaboration • Autosave • Phone‑friendly UI • Production‑ready build

---

## Quick Links
- ▶️ Run locally: `client/` + `server/`
- 🌐 Deploy frontend: GitHub Pages (workflow provided)
- 🗄️ Backend: `server/` (Render/other) with `MONGODB_URI`

### Live Demo
- Frontend (GitHub Pages): https://saipranav31.github.io/Document-Editor/

---

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Architecture](#architecture)
- [API](#api)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Screenshots
> Add your own screenshots or GIFs here

<p align="center">
  <img src="https://via.placeholder.com/1000x520?text=Document+Editor+Preview" alt="App Preview" />
</p>

## Badges & Status
![Status](https://img.shields.io/badge/status-active-success)
![Build](https://img.shields.io/github/actions/workflow/status/saipranav31/Document-Editor/deploy-pages.yml?label=Pages%20Deploy&logo=github)
![Issues](https://img.shields.io/github/issues/saipranav31/Document-Editor)
![PRs](https://img.shields.io/github/issues-pr/saipranav31/Document-Editor)

## Quick Start

```bash
# Backend
npm --prefix server install
npm --prefix server run dev

# Frontend
npm --prefix client install
npm --prefix client run dev
```

Environment `server/.env` (gitignored):
```bash
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>/?retryWrites=true&w=majority&appName=<AppName>
PORT=4000
```

## Architecture
```mermaid
flowchart LR
  A[React + Vite + TipTap] -- Yjs updates --> B((y-websocket))
  B --> A
  A -- REST /api --> C[Express API]
  C --> D[(MongoDB Atlas)]
```

## Feature Checklist
- [x] Realtime collaboration (Yjs + y-websocket)
- [x] Autosave + reload
- [x] Mobile-friendly layout
- [x] Toolbar: bold/italic/underline, H2, lists, blockquote, code block, align, color, undo/redo
- [x] GitHub Pages deploy (client)
- [x] Render-ready backend (server)

## Contributing
Contributions are welcome! Please open an issue to discuss any major changes before submitting a PR.
1. Fork the repo
2. Create a feature branch
3. Commit changes following conventional messages
4. Open a pull request

## License
This project is licensed under the **MIT License**.

## Links
- **Live Demo**: https://saipranav31.github.io/Document-Editor/
- **Repository**: https://github.com/saipranav31/Document-Editor
- **Issues**: https://github.com/saipranav31/Document-Editor/issues

## Acknowledgements
- [Vite](https://vitejs.dev/) • [React](https://react.dev/) • [TypeScript](https://www.typescriptlang.org/)
- [TipTap](https://tiptap.dev/) • [ProseMirror](https://prosemirror.net/) • [Yjs](https://yjs.dev/) • [y-websocket](https://github.com/yjs/y-websocket)
- [MongoDB Atlas](https://www.mongodb.com/atlas) • [Express](https://expressjs.com/)
- [Shields.io](https://shields.io/) for badges • [GitHub Actions](https://github.com/features/actions) for CI/CD

## Contact
- Maintainer: [@saipranav31](https://github.com/saipranav31)
- Feel free to open an issue for questions or feature requests.

