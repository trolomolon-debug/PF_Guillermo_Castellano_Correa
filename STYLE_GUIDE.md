# Guía de Estilos y Convenciones - PPF Gastronomía

## 🎨 Sistema de Diseño

### Paleta de Colores

**Colores Primarios:**
- Primary: `#2563eb` (Azul elegante)
- Primary Dark: `#1e40af` (Azul oscuro para hover)
- Secondary: `#f97316` (Naranja energético)
- Accent: `#06b6d4` (Cian moderno)

**Colores Neutrales:**
- Dark: `#1f2937` (Texto principal)
- Gray Light: `#f3f4f6` (Fondos claros)
- White: `#ffffff` (Blanco puro)

### Tipografía

**Familia tipográfica:**
- Display: `Inter` (headings y textos destacados)
- Body: `Inter` (párrafos y texto común)

**Escala tipográfica:**
```
h1: 3rem   (48px)
h2: 2rem   (32px)
h3: 1.5rem (24px)
h4: 1.25rem (20px)
p:  1rem   (16px)
```

### Espaciado

```
--spacing-xs:  0.5rem  (8px)
--spacing-sm:  1rem    (16px)
--spacing-md:  1.5rem  (24px)
--spacing-lg:  2rem    (32px)
--spacing-xl:  3rem    (48px)
--spacing-2xl: 4rem    (64px)
```

### Bordes y Radios

```
--radius-sm:  0.375rem (6px)    - Botones pequeños
--radius-md:  0.5rem   (8px)    - Cards y inputs
--radius-lg:  0.75rem  (12px)   - Elementos grandes
--radius-xl:  1rem     (16px)   - Hero images
```

### Sombras

```
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1)
```

### Transiciones

```
--transition-fast:   150ms ease-in-out
--transition-normal: 300ms ease-in-out
```

## 📝 Convenciones de Código

### Astro Components

**Estructura básica:**
```astro
---
// 1. Imports
// 2. Interfaces/Props
// 3. Variables y lógica
---

<template>
  <!-- HTML -->
</template>

<style>
  /* CSS scoped */
</style>
```

**Nombrado de componentes:**
- PascalCase: `Header.astro`, `HeroSection.astro`
- Descriptivos: `ServiceCard.astro`, no `Card.astro`

### CSS

**Convenciones:**
- Usar variables CSS para colores y espaciado
- Evitar píxeles, usar `rem` basado en 16px base
- Mobile-first approach
- Usar clases con BEM cuando sea necesario

**Ejemplo:**
```css
.card {
  background-color: var(--color-white);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

@media (max-width: 768px) {
  .card {
    padding: var(--spacing-md);
  }
}
```

## 🎯 Principios de Diseño

### 1. Minimalismo Intencional
- Cada elemento tiene propósito
- Espacios vacíos son parte del diseño
- No saturar con decoraciones

### 2. Jerarquía Visual Clara
```
Hero (impacto visual)
  ↓
Servicios (lo que ofrecemos)
  ↓
Testimonios (validación social)
  ↓
Footer (información práctica)
```

### 3. Consistencia
- Mismo espaciado entre secciones
- Misma tipografía en roles similares
- Paleta de colores coherente

### 4. Accesibilidad
- Contraste suficiente (WCAG AA)
- Textos alternativos en imágenes
- Navegación con teclado
- Respetar `prefers-reduced-motion`

### 5. Performance
- Imágenes optimizadas
- Lazy loading
- CSS minificado
- Evitar JavaScript innecesario

## 🖼️ Imágenes

### Formatos recomendados
- **JPG**: Fotografías (menú, platos)
- **PNG**: Logos, iconos
- **WebP**: Mejor compresión

### Optimización
- Máximo ancho: 1200px
- Comprimir antes de subir
- Usar srcset para responsive

### Placeholders temporales
```html
<img 
  src="https://images.unsplash.com/photo-{ID}?w=600&h=400&fit=crop"
  alt="Descripción clara"
  loading="lazy"
/>
```

## 🔧 Componentes

### Card Component
```astro
<Card 
  title="Título"
  description="Descripción"
  image="/images/card.jpg"
  icon="🍽️"
/>
```

**Props:**
- `title`: string (requerido)
- `description`: string (requerido)
- `image`: string (opcional)
- `icon`: string (opcional - emoji o SVG)

### Button Variants
```html
<!-- Primary -->
<button class="btn btn-primary">Acción principal</button>

<!-- Secondary -->
<button class="btn btn-secondary">Acción secundaria</button>

<!-- Outline -->
<button class="btn btn-outline">Acción simple</button>
```

## 📱 Responsive Design

### Breakpoints
```css
/* Mobile First */
@media (max-width: 768px) {
  /* Tablets y arriba */
}

@media (max-width: 480px) {
  /* Móviles pequeños */
}
```

### Reglas de Adaptación
1. Tipografía: Reduce proporcionalmente
2. Espaciado: Usa `spacing-md` en móvil
3. Grid: 1 columna en móvil
4. Imágenes: 100% ancho máximo
5. Botones: Full width en móvil

## 🚀 Optimizaciones de Performance

### Imágenes
```astro
<!-- ✅ Correcto -->
<img 
  src="image.jpg"
  alt="descripción"
  loading="lazy"
  width="600"
  height="400"
/>

<!-- ❌ Evitar -->
<img src="image.jpg" />
```

### CSS
- Scope CSS en componentes
- Evitar !important
- Usar CSS variables
- Minimizar especificidad

### HTML
- Estructura semántica
- Meta tags relevantes
- Alt text descriptivos
- Heading hierarchy correcto

## 📊 Accesibilidad (A11y)

### Colores
- Contraste mínimo AA: 4.5:1 para texto
- Contraste AAA: 7:1 (preferible)
- No depender solo de color

### Textos
- Textos claros y concisos
- Párrafos cortos
- Listas cuando sea posible

### Navegación
- Links descriptivos
- Orden lógico de tabs
- Focus visible

## 🔒 SEO Best Practices

### Meta Tags
```astro
<title>PPF Gastronomía | Servicios</title>
<meta name="description" content="..." />
<meta name="keywords" content="..." />
```

### Estructura
- H1 por página (solo uno)
- Headings en orden (H1 → H2 → H3)
- Imágenes con alt text
- URLs descriptivas

### Performance
- Tiempo de carga < 3 segundos
- Móvil-first indexing
- Core Web Vitals optimizadas

## 🤝 Contribuciones

Al agregar nuevos componentes:
1. ✅ Seguir esta guía de estilos
2. ✅ Usar variables CSS
3. ✅ Responsive design
4. ✅ Documentación en componente
5. ✅ Accesibilidad checklist

## 📖 Referencias

- [Astro Docs](https://docs.astro.build)
- [MDN Web Docs](https://developer.mozilla.org)
- [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/)
- [Web.dev](https://web.dev)

---

**Versión**: 1.0  
**Última actualización**: Diciembre 2024
