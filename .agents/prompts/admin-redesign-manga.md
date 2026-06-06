# PROMPT PARA REDISEÑO PANEL DE ADMIN — SISTEMA MANGA EDITORIAL
**Producto:** FaChat Admin — Panel de administración interna para gestionar clientes del servicio FaChat (WhatsApp AI para negocios argentinos).

---

## 🔒 REGLAS OBLIGATORIAS — LEER ANTES DE TOCAR CUALQUIER COSA

**NO modificar bajo ningún concepto:**
- Lógica de negocio, funciones, handlers o callbacks existentes
- Llamadas a APIs, endpoints, fetch/axios/queries/mutations
- Variables de entorno o configuración de build
- Rutas del router y estructura de navegación
- Dependencias del proyecto (no instalar ni desinstalar nada)
- Estructura de archivos y carpetas existente
- Nombres de componentes, props o exports
- Tablas, formularios, inputs y sus campos — solo su apariencia

**Solo está permitido modificar:**
- Clases CSS / estilos / Tailwind classes
- Colores, tipografía, espaciados, bordes, sombras
- Textos de UI (labels, headings, placeholders), si se pide explícitamente
- Orden visual de elementos dentro de un mismo componente

Si un elemento existente tiene un evento `onClick`, `onChange`, `onSubmit`, etc., conservarlo exactamente igual, solo cambiarle la apariencia.

---

## 🎨 SISTEMA DE DISEÑO — MANGA EDITORIAL MINIMALISTA

Este diseño se inspira en el editorial japonés manga: blanco y negro con un fondo crema/hueso, bordes duros de 2px negro, tipografía ultra-bold, sin gradientes, sin colores azules, sin pills redondeados. Es gráfico, limpio y de alto contraste. Aplicado a un panel de admin: eficiencia visual, jerarquía clara, cero distracciones.

### Paleta de colores

| Token        | Valor      | Uso                                              |
|--------------|------------|--------------------------------------------------|
| bg-primary   | `#F3EEE5`  | Fondo principal de toda la app                   |
| bg-secondary | `#ECE4D7`  | Sidebar, headers de tabla, fondos de sección     |
| text-primary | `#111111`  | Texto principal, bordes, íconos                  |
| text-muted   | `#666666`  | Texto secundario, subtítulos, placeholders       |
| bg-card      | `#FFFFFF`  | Fondo de cards, modales, inputs, filas de tabla  |
| state-ok     | `#111111`  | Estado activo/ok — usar borde o badge negro      |
| state-warn   | `#ECE4D7`  | Estado pendiente — fondo crema con borde negro   |
| state-off    | `#666666`  | Estado inactivo — texto gris, borde gris         |

> ❌ Sin verde, sin rojo, sin azul para estados. Los estados se diferencian por peso tipográfico, borde y fondo — no por color.

### Tipografía

Fuente: **Inter** (Google Fonts) — pesos 400, 600, 900

| Elemento              | Estilo                                                        |
|-----------------------|---------------------------------------------------------------|
| Títulos de página     | `font-black` (900), `tracking-tighter`, `uppercase`, 36–48px |
| Títulos de sección    | `font-black`, `uppercase`, `tracking-tight`, 24–32px         |
| Labels / badges       | `font-black`, `uppercase`, `tracking-widest`, 10–12px        |
| Encabezados de tabla  | `font-black`, `uppercase`, `tracking-widest`, 11px           |
| Cuerpo / descripción  | `font-medium`, `leading-relaxed`                             |
| Botones               | `font-black`, `uppercase`, `tracking-tight`                  |
| Inputs / valores      | `font-semibold`                                              |

### Bordes y sombras

```css
/* Borde estándar */
border: 2px solid #111111;

/* Borde grueso (cards principales, modales) */
border: 4px solid #111111;

/* Sombra manga — desplazada, sin blur */
box-shadow: 4px 4px 0px 0px #111111;   /* hover de filas */
box-shadow: 8px 8px 0px 0px #111111;   /* cards de métricas */
box-shadow: 12px 12px 0px 0px #111111; /* modales */

/* Modal oscuro (confirmaciones destructivas) */
box-shadow: 12px 12px 0px 0px #F3EEE5, 12px 12px 0px 4px #111111;
```

### Botones

**Primario (acción principal — "Guardar", "Dar de alta", "Confirmar"):**
```
bg: #111111 | text: #F3EEE5 | border: 2px solid #111111
hover: bg transparent | text: #111111
padding: px-6 py-3 | font-black uppercase tracking-tight
```

**Secundario (acción secundaria — "Cancelar", "Editar", "Ver detalle"):**
```
bg: transparent | text: #111111 | border: 2px solid #111111
hover: bg #111111 | text: #F3EEE5
```

**Destructivo ("Eliminar", "Desactivar"):**
```
bg: transparent | text: #111111 | border: 2px dashed #111111
hover: bg #111111 | text: #F3EEE5
```

### Reglas absolutas de estilo

- ❌ Cero gradientes (`gradient` está prohibido)
- ❌ Cero azules (`blue-*`, `indigo-*`, `sky-*` prohibidos)
- ❌ Cero pills/rounded pill (`rounded-full` prohibido)
- ❌ Cero sombras con blur (`shadow-lg`, `shadow-md` con blur → reemplazar siempre por sombra desplazada sin blur)
- ✅ Bordes duros, sombras rígidas offset
- ✅ `rounded-none` como default; máximo `rounded-sm` en inputs si ya existían

---

## 📐 ESTRUCTURA DEL PANEL — SECCIÓN POR SECCIÓN

Aplicar exactamente este layout y diseño sobre la estructura existente. No inventar secciones nuevas — adaptar las existentes.

---

### LAYOUT GLOBAL

```
┌─────────────────────────────────────────────┐
│  SIDEBAR (izquierda, fija)                  │
│  TOPBAR (arriba, sticky)                    │
│  CONTENT AREA (centro, scrolleable)         │
└─────────────────────────────────────────────┘
```

---

### SIDEBAR
- `w-64`, `min-h-screen`, `bg #ECE4D7`, `border-right: 4px solid #111111`
- **Logo/marca:**
  - Texto "FaChat" — `font-black text-2xl tracking-tighter text-[#111111]`
  - Subtítulo "Admin" — `font-black text-xs uppercase tracking-widest text-[#666666]`
  - Separador: `border-bottom: 2px solid #111111`, `mb-6`
- **Ítems de navegación:**
  - Cada ítem: `flex items-center gap-3`, `px-4 py-3`, `font-bold uppercase tracking-tight text-sm`
  - Normal: `text-[#666666]`, `bg transparent`
  - Activo: `bg #111111`, `text #F3EEE5`, `border-left: 4px solid #111111`
  - Hover: `bg #F3EEE5`, `text #111111`
  - Ícono: `w-5 h-5` de lucide-react

---

### TOPBAR
- `sticky top-0 z-50`, `bg #F3EEE5`, `border-bottom: 2px solid #111111`, `h-16`
- Izquierda: título de la página actual — `font-black uppercase tracking-tighter text-2xl`
- Derecha: nombre del usuario logueado + badge de rol
  - Badge de rol: `border-2 border-[#111111]`, `px-2 py-0.5`, `font-black text-xs uppercase tracking-widest`

---

### SECCIÓN: DASHBOARD / MÉTRICAS PRINCIPALES

Layout: `grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8`

**Cada card de métrica:**
- `bg-white`, `border-4 border-[#111111]`, `p-6`
- `box-shadow: 8px 8px 0px 0px #111111`
- Label: `font-black text-xs uppercase tracking-widest text-[#666666] mb-2`
- Valor: `font-black text-4xl tracking-tighter text-[#111111]`
- Delta/subtexto: `font-bold text-xs uppercase tracking-wide text-[#666666] mt-1`

Métricas a mostrar (adaptar a los datos reales disponibles):
1. **Total Clientes** — número total de clientes dados de alta
2. **Activos** — clientes con plan activo
3. **Pendientes** — clientes en período de prueba o sin confirmar
4. **Inactivos** — clientes dados de baja o sin plan

---

### SECCIÓN: TABLA DE CLIENTES

Header de sección:
- Título: `font-black text-3xl uppercase tracking-tighter mb-6`
- Fila de controles (flex justify-between):
  - Input de búsqueda: `border-2 border-[#111111]`, `bg-white`, `px-4 py-2`, `font-semibold`, `rounded-none`, placeholder en `#666666`
  - Botón "Nuevo cliente": botón primario

**Tabla:**
- `w-full`, `border-4 border-[#111111]`, `bg-white`
- Header row: `bg #ECE4D7`, `border-bottom: 4px solid #111111`
  - Celdas de header: `font-black text-xs uppercase tracking-widest text-[#111111] px-6 py-4 text-left`
- Filas de datos: `border-bottom: 2px solid #111111`
  - `hover: bg #F3EEE5` + `box-shadow: inset 4px 0 0 #111111` (línea lateral al hover)
  - Celdas: `px-6 py-4 font-semibold text-sm`
- Última fila: sin border-bottom

**Columnas sugeridas** (conservar las existentes):
| # | Nombre del negocio | Dueño | Plan | Estado | WhatsApp | Acciones |
|---|-------------------|-------|------|--------|----------|----------|

**Badge de estado** (inline en la columna Estado):
```
Activo:    border-2 border-[#111111] bg-white px-2 py-0.5 font-black text-xs uppercase
Pendiente: border-2 border-[#111111] bg-[#ECE4D7] px-2 py-0.5 font-black text-xs uppercase
Inactivo:  border-2 border-[#666666] text-[#666666] px-2 py-0.5 font-black text-xs uppercase
```

**Acciones por fila** (conservar handlers existentes, solo estilo):
- Botón "Ver" / "Editar": secundario pequeño (`px-3 py-1.5`)
- Botón "Eliminar" / "Desactivar": destructivo pequeño (`px-3 py-1.5`)

---

### SECCIÓN: FORMULARIO ALTA / EDICIÓN DE CLIENTE

Layout: `max-w-2xl`, `border-4 border-[#111111]`, `bg-white`, `p-8`
`box-shadow: 8px 8px 0px 0px #111111`

**Título del form:**
- `font-black text-2xl uppercase tracking-tight mb-8`
- `border-bottom: 2px solid #111111 pb-4`

**Grupos de campos** (`space-y-6`):
- Label: `font-black text-xs uppercase tracking-widest text-[#111111] mb-2 block`
- Input / Select / Textarea:
  ```
  border: 2px solid #111111
  bg: white
  px-4 py-3
  font-semibold
  rounded-none
  w-full
  focus: outline none, border-color #111111, box-shadow: 4px 4px 0px 0px #111111
  placeholder: text-[#666666] font-medium
  ```
- Mensaje de error: `font-bold text-xs uppercase tracking-wide text-[#111111] mt-1`
  Prefijado con `"× "` en lugar de ícono de color

**Secciones del form** (adaptar a los campos reales existentes):
1. **Datos del negocio** — Nombre, Tipo (restaurante, peluquería, etc.), Dirección
2. **Datos de contacto** — Nombre del dueño, WhatsApp, Email
3. **Plan y configuración** — Plan (básico/pro), Estado, Fecha de inicio
4. **Observaciones** — Textarea libre (notas internas)

**Footer del form** (sticky bottom o al final, `flex justify-between items-center`):
- Botón "Cancelar": secundario
- Botón "Guardar": primario
- Espaciado: `pt-8 border-top: 2px solid #111111`

---

### MODAL / CONFIRMACIÓN

- `bg-white`, `border-4 border-[#111111]`, `p-8`, `max-w-md`
- `box-shadow: 12px 12px 0px 0px #111111`
- Overlay: `bg-[#111111]/40` (no negro puro, semi-transparente)
- Título: `font-black text-xl uppercase tracking-tight mb-4`
- Cuerpo: `font-medium text-[#666666] leading-relaxed mb-8`
- Acciones: `flex gap-4 justify-end`
  - "Cancelar": secundario
  - "Confirmar" / "Eliminar": primario (o destructivo si es acción destructiva)

---

## ✅ CHECKLIST FINAL DE VALIDACIÓN

Antes de considerar el trabajo terminado, verificar:

- [ ] Fondo de toda la app es `#F3EEE5` (no blanco puro, no gris)
- [ ] Sidebar es `#ECE4D7` con `border-right: 4px solid #111111`
- [ ] No existe ni un solo uso de azul, índigo, violeta o verde en botones/iconos/estados
- [ ] Todos los bordes visibles son `solid #111111` (no grises, no transparentes)
- [ ] Ningún botón tiene `rounded-full` o apariencia de pill
- [ ] Las sombras no tienen blur — todas son offset rígido `Xpx Ypx 0px #111111`
- [ ] Los encabezados de tabla son `#ECE4D7` con `font-black uppercase tracking-widest`
- [ ] Los badges de estado no usan color — solo variantes de borde y fondo crema/blanco/gris
- [ ] Los inputs tienen `rounded-none` y foco con sombra offset (no outline azul)
- [ ] El modal tiene `box-shadow: 12px 12px 0px 0px #111111`
- [ ] Toda la funcionalidad existente sigue intacta (links, forms, handlers, queries)
- [ ] La fuente Inter está cargada con peso 900 disponible
