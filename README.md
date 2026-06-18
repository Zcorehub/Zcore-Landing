# ZCore DApp

Frontend de la aplicación ZCore — consulta tu credit score on-chain, historial de eventos y perfil de wallet en Stellar DeFi.

La landing page vive en un repositorio separado. Este repo contiene solo la dapp autenticada.

## Quick start

```bash
git clone https://github.com/Zcorehub/Zcore-Landing.git
cd Zcore-Landing
npm install
cp .env.example .env.local
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) — redirige a `/login` o `/dashboard` según tu sesión.

Para el backend, ver [ZCore-dev](https://github.com/Zcorehub/ZCore-dev).

## Rutas

| Ruta | Descripción |
|---|---|
| `/login` | Iniciar sesión con wallet Stellar |
| `/register` | Registrar wallet y generar score |
| `/dashboard` | Score, breakdown y eventos recientes |
| `/dashboard/history` | Historial completo de eventos |

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS + shadcn/ui
- lucide-react
- Auth por wallet en localStorage (sin JWT)

## Contribuir

Ver [CONTRIBUTING.md](./CONTRIBUTING.md).
