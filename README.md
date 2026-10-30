# 🚀 FilerNow – Tax Filing & Business Registration Platform

<p align="center">

  <img src="https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs" />

  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black" />

  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" />

  <img src="https://img.shields.io/badge/TailwindCSS-4-38B2AC?logo=tailwind-css" />

  <img src="https://img.shields.io/badge/Zod-Validation-3E67B1?logo=zod" />

  <img src="https://img.shields.io/badge/Status-In%20Progress-orange" />

  <img src="https://img.shields.io/github/stars/aliiashraf777/YOUR-REPO-NAME?style=social" />

</p>

## 📌 Overview

FilerNow is a Pakistani tax filing and business registration platform, migrated from WordPress to a modern Next.js (App Router) stack.

The public site covers services, a blog, tax rates, a filer status checker, and lead capture, all backed by a FastAPI service.

<p align="center">

  <img src="./public/assets/preview.png" />

</p>

## 🎯 Problem

- ❌ WordPress site with duplicated logic and content spread across plugins and pages

- ❌ Near-duplicate blog articles competing with each other for the same searches

- ❌ Compliance-sensitive content (tax rates) with no guarantee it was accurate or current

- ❌ No typed contract between frontend and backend

## 💡 Solution

- ✅ Rebuilt on Next.js App Router with React 19 and TypeScript

- ✅ Single source of truth: content driven from typed data files, not duplicated in components

- ✅ Server-side proxy routes between the frontend and FastAPI

- ✅ Explicit `null` for unconfirmed tax data instead of guessed figures

## ⚡ Key Features

- 🧭 Services section with a categorized mega-menu and typed per-service content

- 📰 Blog system with markdown rendering, FAQ blocks, and related articles

- 💰 Tax rates with nested `/tax-rates/[year]/[category]` routing and static generation

- 🔍 Filer status checker (ATL search) with suggestions and exact-match flow

- 📝 Contact and "Become a Filer" forms (multi-step wizard) with Zod + React Hook Form

- 🔐 Cookie-based auth via Route Handlers and edge middleware

- 🌗 Dark mode and a custom design-token system

- 🎞️ Scroll-driven sections: timeline, steps, stacking cards

## 🛠 Tech Stack

- ⚛️ Next.js 16 (App Router) + React 19

- 🟦 TypeScript

- 🎨 Tailwind CSS v4

- 🧩 Radix UI / shadcn primitives

- 📋 React Hook Form + Zod

- 🔑 `jose` (edge JWT verification)

- 📝 `react-markdown`

- 🔗 FastAPI backend (REST)

## 🧠 Engineering Decisions

- **Typed, centralized content:** `IFaqItem`, `IBlogPost`, and per-service types are shared across pages, so there's one definition per concept.

- **Auth lives in Next.js, not the browser:** Route Handlers proxy auth calls server-to-server and set httpOnly cookies. `middleware.ts` handles token refresh, because Server Components can't set cookies during render.

- **Null over fabrication:** unconfirmed tax years render "data pending" instead of invented numbers.

- **Honest search semantics:** the ATL endpoint is a ranked search, not an exact lookup, so the UI separates suggestions from exact checks and handles ambiguous matches explicitly.

- **Validation at the boundary:** `register("field", { valueAsNumber: true })` at the DOM layer instead of scattering `z.coerce`.

## 📈 Results / Impact

- 🚀 WordPress to Next.js migration with a typed, scalable architecture

- 📰 ~50 blog URLs migrated into a typed content format, with 301 redirect strategy for legacy URLs

- 🧭 Service pages rebuilt from live, sourced content (no fabricated copy)

- 🔐 Production-style auth and lead flows with documented backend contracts

## 📸 Project Preview

### 🖥️ Desktop

![Desktop](./public/assets/desktop-ss.png)

### 📱 Mobile

![Mobile](./public/assets/mobile-ss.png)

## 📂 Folder Structure

```text
app/
├── (public routes)
├── blog/
├── tax-rates/
├── api/
└── dashboard/
components/
data/
hooks/
lib/
├── auth/
middleware.ts
```

## ⚙️ Installation

```bash
git clone https://github.com/aliiashraf777/YOUR-REPO-NAME.git

cd YOUR-REPO-NAME

npm install

npm run dev
```

## 🔗 Live Demo

https://filernow.com

## 💻 Repository

https://github.com/aliiashraf777/https://github.com/aliiashraf777/filernowfull.git

## 🚀 Future Improvements

- Blog content consolidation into pillar pages

- Historical tax-rate data (TY2022–2025) once confirmed

- Rate limiting on public search endpoints

- Full dark-mode coverage for brand tokens

## 🧠 What I Learned

- Designing auth around Route Handlers, httpOnly cookies, and edge middleware

- Treating the backend contract as something to document, not silently absorb

- Building compliance-sensitive UI without inventing data

- Structuring a large Next.js app around one source of truth

## ⭐ Support

Give it a star if you like it ⭐
