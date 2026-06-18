<p align="center">
  <img src="public/logo.jpeg" alt="ZCore" width="80" />
</p>

<h1 align="center">ZCore Landing</h1>

<p align="center">
  Landing oficial de <strong>ZCore</strong> — credit scoring portable para Stellar DeFi.<br/>
  Zero-knowledge, on-chain only. Sin bancos. Sin formularios. Solo tu wallet.
</p>

<p align="center">
  <a href="./CONTRIBUTING.md">Contribuir</a> ·
  <a href="https://github.com/Zcorehub/Zcore-Landing/issues">Issues</a>
</p>

---

## Qué es este repo

Este repositorio contiene **únicamente la landing page** de ZCore: marketing, animaciones, secciones informativas y CTAs hacia la dapp.

| Incluye | No incluye |
|---|---|
| Hero, partners, scoring, tiers, builders | Login / register |
| Animaciones y efectos visuales | Dashboard |
| Links a la dapp vía env var | API backend |
| Página 404 custom | Historial de eventos |

La dapp autenticada y el backend viven en repositorios separados. Ver [ZCore-dev](https://github.com/Zcorehub/ZCore-dev).

---

## Quick start

```bash
git clone https://github.com/Zcorehub/Zcore-Landing.git
cd Zcore-Landing
npm install
cp .env.example .env.local
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

### Variables de entorno

| Variable | Requerida | Descripción |
|---|---|---|
| `NEXT_PUBLIC_DAPP_URL` | No | URL de la dapp desplegada. Sin ella, los CTAs apuntan a `#launch`. |

```env
NEXT_PUBLIC_DAPP_URL=https://app.zcore.xyz
```

### Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run start` | Servidor post-build |
| `npm run lint` | ESLint |

---

## Secciones de la landing

| Sección | Componente | Descripción |
|---|---|---|
| Hero | `hero.tsx` | Headline, badge ZK, score preview animado |
| Marquee | `marquee.tsx` | Ticker de claims (no custody, open source, etc.) |
| How It Works | `how-it-works.tsx` | 3 pasos: wallet → chain → score |
| Partners | `partners.tsx` | Trustless Work, Blend, Vaquita |
| Score System | `score-system.tsx` | Motor 0–850, breakdown transparente |
| Tiers | `tiers.tsx` | Bandas de riesgo en % (LTV, default, APR) |
| Builders | `builders.tsx` | API preview para integradores |
| CTA | `cta.tsx` | Llamada final a la dapp |

---

## Stack

| Capa | Tecnología |
|---|---|
| Framework | Next.js 14 (App Router) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS + utilidades custom ZK |
| UI base | shadcn/ui (`components/ui/`) |
| Iconos | lucide-react |
| Fuentes | Inter (headline), JetBrains Mono (badge), Space Mono (UI ZK) |

---

## Diseño

Estética **monocromática zero-knowledge**: negro puro, blanco, grises opacos. Sin acentos de color.

- Fondo: `#000000`
- Tipografía ZK: `font-zk` (Space Mono) en UI, labels y secciones
- Headline hero: Inter bold — `YOUR WALLET IS YOUR CREDIT.`
- Badge: JetBrains Mono — `Zero-Knowledge · On-chain only`
- Esquinas angulares: utilidades `zk-slash` y `zk-badge` en `globals.css`
- Logo: solo en navbar (`components/landing/logo.tsx`)

---

## Estructura del proyecto

```
app/
  page.tsx          # Landing principal
  layout.tsx        # Fuentes y metadata
  not-found.tsx     # 404 custom
  globals.css       # Tokens y utilidades ZK

components/
  landing/          # Secciones de la landing (un componente por sección)
  ui/               # Primitivos shadcn (Button, Badge, Card…)

lib/
  site.ts           # Config del sitio + getDappUrl()
  utils.ts          # cn() y helpers

public/
  logo.jpeg         # Logo ZCore
```

---

## Deploy en Vercel

1. Importa el repo en [vercel.com/new](https://vercel.com/new).
2. Framework preset: **Next.js** (auto-detectado).
3. Añade `NEXT_PUBLIC_DAPP_URL` en Environment Variables.
4. Deploy.

```bash
npx vercel          # preview
npx vercel --prod   # producción
```

---

## Contribuir

¿Quieres mejorar la landing? Lee la guía completa en [CONTRIBUTING.md](./CONTRIBUTING.md).

Flujo resumido:

1. Abre o elige un [issue](https://github.com/Zcorehub/Zcore-Landing/issues).
2. Fork → branch (`feat/nombre`, `fix/nombre`, `style/nombre`).
3. `npm run dev` + verifica responsive.
4. Abre un PR usando la [plantilla](./.github/pull_request_template.md).

Issues del programa **GrantFox OSS** pueden ser elegibles para recompensas al mergearse.
