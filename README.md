# ZCore Landing

Landing page oficial de ZCore — credit scoring portable para Stellar DeFi.

Dark, agresiva, animada. CTAs apuntan a la dapp vía `NEXT_PUBLIC_DAPP_URL`.

## Quick start

```bash
git clone https://github.com/Zcorehub/Zcore-Landing.git
cd Zcore-Landing
npm install
cp .env.example .env.local
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Variables de entorno

```env
NEXT_PUBLIC_DAPP_URL=https://tu-dapp.vercel.app
```

Sin esta variable, los CTAs apuntan a `#launch` en la misma página.

## Issues relevantes (este repo)

| Issue | Estado |
|---|---|
| #6 Mobile hamburger menu | ✅ |
| #7 Custom 404 page | ✅ |
| #1–#5, #8 | Dapp — otro repo |

## Stack

- Next.js 14 · TypeScript · Tailwind CSS · shadcn/ui · lucide-react

## Contribuir

Ver [CONTRIBUTING.md](./CONTRIBUTING.md).
