---
name: Tailwind v4 class generation
description: Tailwind v4 in this project only generates CSS for classes present in the original build scan; new classes added later via code edits are silently ignored.
---

# Tailwind v4 — new classes not generated after initial build

## The rule
In this project (fachat artifact, Vite + Tailwind v4 with `@import "tailwindcss"`), any Tailwind utility class that was NOT present in the original source files at first build time will NOT be generated in the CSS output, even after HMR hot-reload.

**Why:** Tailwind v4 uses a content scanner at build time. HMR updates the JS/JSX but the CSS regeneration for new classes is unreliable in this setup. Classes like `py-32`, `p-8` (when only `p-6` existed before), `px-4` (when only `px-3` existed) appeared in the source but had no effect.

**How to apply:** Whenever changing padding, margin, font-size, or any spacing value on an element in this project, use React inline `style={{}}` props instead of Tailwind utility classes. This guarantees the value is applied regardless of build cache state.

Examples of what works:
- `style={{ padding: "2rem" }}` ✅
- `style={{ padding: "0.5rem 1.25rem" }}` ✅
- `style={{ fontSize: "1rem", padding: "1rem 2.5rem" }}` ✅

Examples of what silently fails:
- `className="p-8"` (if p-8 wasn't in original build) ❌
- `className="py-32"` (new value) ❌
- `className="px-4 py-2"` (if only px-3 py-1.5 existed before) ❌

Exception: CSS classes defined directly in `index.css` (plain CSS, not Tailwind utilities) always work reliably. Used this for `.section-inner`, `.hero-inner`, `.nav-inner`, `.footer-inner`.
