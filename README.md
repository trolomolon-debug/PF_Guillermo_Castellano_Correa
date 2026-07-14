# PPF Gastronomía - Template Astro Profesional

Template moderno y profesional de Astro para negocios hosteleros. Incluye secciones completas y componentes reutilizables.

## 📋 Características

✅ **Diseño Responsive** - Funciona perfectamente en móviles, tablets y desktops  
✅ **Performance Optimizado** - Astro proporciona carga rápida y eficiente  
✅ **Componentes Reutilizables** - Cards, Header, Footer, Reviews  
✅ **Estilos Modernos** - CSS limpio con variables de diseño  
✅ **SEO Friendly** - Meta tags y estructura semántica  
✅ **Animaciones Suaves** - Transiciones profesionales  
✅ **Accesibilidad** - Cumple con estándares WCAG  

## 🎨 Secciones Incluidas

1. **Header con Navegación** - Menú pegajoso con enlaces suave
2. **Hero Section** - Banner llamativo con imagen y CTA
3. **Servicios (4 Cards)** - Grid responsivo de servicios
4. **Testimonios/Reviews** - Sección de valoraciones de clientes
5. **Footer Completo** - Información de contacto y enlaces

## 📁 Estructura del Proyecto

```
PPF_Nombre_Apellido/
├── src/
│   ├── components/
│   │   ├── Header.astro          # Navegación principal
│   │   ├── Hero.astro            # Sección hero
│   │   ├── Card.astro            # Componente card reutilizable
│   │   ├── Services.astro        # Sección servicios con 4 cards
│   │   ├── Reviews.astro         # Sección testimonios
│   │   └── Footer.astro          # Pie de página
│   ├── layouts/
│   │   └── MainLayout.astro      # Layout base
│   ├── pages/
│   │   └── index.astro           # Página principal
│   └── styles/
│       └── global.css            # Estilos globales y variables
├── public/                        # Assets estáticos
├── astro.config.mjs              # Configuración de Astro
├── package.json                  # Dependencias
└── README.md                      # Este archivo
```

## 🚀 Primeros Pasos

### 1. Instalar dependencias
```bash
cd PPF_Nombre_Apellido
npm install
```

### 2. Ejecutar servidor de desarrollo
```bash
npm run dev
```
La web estará disponible en `http://localhost:3000`

### 3. Compilar para producción
```bash
npm run build
```

### 4. Preview de la versión compilada
```bash
npm run preview
```

## 🎯 Personalización

### Cambiar Colores
Edita las variables en `src/styles/global.css`:

```css
:root {
  --color-primary: #2563eb;      /* Azul principal */
  --color-secondary: #f97316;    /* Naranja acento */
  --color-accent: #06b6d4;       /* Cian */
  /* ... más variables */
}
```

### Actualizar Contenido
- **Header**: Edita `src/components/Header.astro`
- **Hero**: Edita `src/components/Hero.astro`
- **Servicios**: Edita el array en `src/components/Services.astro`
- **Testimonios**: Edita el array en `src/components/Reviews.astro`
- **Footer**: Edita `src/components/Footer.astro`

### Cambiar Imágenes
Reemplaza las URLs de `unsplash.com` por tus propias imágenes. Todas están en atributos `src` en los componentes.

## 🖼️ Placeholders de Imágenes

El template usa placeholders de **Unsplash** y **Picsum Photos**:
- Máximo 100x100px: `https://images.unsplash.com/photo-ID?w=100&h=100&fit=crop`
- Máximo 300x300px: `https://images.unsplash.com/photo-ID?w=300&h=300&fit=crop`
- Máximo 600x600px: `https://images.unsplash.com/photo-ID?w=600&h=600&fit=crop`

Para usar tus propias imágenes:
1. Crea carpeta `public/images/`
2. Sube tus imágenes
3. Referencia como: `/images/tu-imagen.jpg`

## 🎨 Paleta de Colores

| Variable | Color | Uso |
|----------|-------|-----|
| `--color-primary` | #2563eb | Principal |
| `--color-primary-dark` | #1e40af | Hover primario |
| `--color-secondary` | #f97316 | Secundario/Acento |
| `--color-accent` | #06b6d4 | Detalles |
| `--color-dark` | #1f2937 | Texto oscuro |
| `--color-gray-light` | #f3f4f6 | Fondos claros |
| `--color-white` | #ffffff | Blanco |

## 📱 Responsividad

El template es 100% responsivo con breakpoints en:
- **768px**: Tablets
- **480px**: Móviles pequeños

Todos los componentes se adaptan automáticamente.

## ⚡ Optimizaciones Incluidas

✅ Lazy loading de imágenes  
✅ Google Fonts optimizado  
✅ CSS minificado  
✅ HTML semántico  
✅ Mobile-first approach  
✅ Respecta preferencias de reducción de movimiento  

## 🔗 URLs Importantes

- **Documentación de Astro**: https://docs.astro.build
- **Unsplash para imágenes**: https://unsplash.com
- **Google Fonts**: https://fonts.google.com

## 💡 Tips de Personalización

### Agregar nueva sección
1. Crear componente en `src/components/NuevaSeccion.astro`
2. Importar en `src/pages/index.astro`
3. Usar el mismo estilo de variables CSS

### Agregar nueva página
1. Crear `src/pages/nueva-pagina.astro`
2. Usar `MainLayout` como base
3. Astro lo convertirá automáticamente en ruta

### Agregar fuentes personalizadas
1. Importar de Google Fonts en `MainLayout.astro`
2. Usar en variables CSS `--font-display` o `--font-body`

## 📊 SEO Optimizado

- ✅ Meta descriptions
- ✅ Estructura semántica
- ✅ URLs amigables
- ✅ Imágenes optimizadas
- ✅ Alt text en imágenes

## 🤝 Soporte

Para dudas sobre Astro:
- Documentación: https://docs.astro.build
- Comunidad: https://astro.build/chat

## 📄 Licencia

Este template es libre para uso personal y comercial. Para fines educativos.

---

**Versión**: 1.0  
**Creado**: Julio 2026  
**Última actualización**: Julio 2026
