# 📁 ESTRUCTURA DEL PROYECTO ROBIN HERRAJES

## 🗂️ CARPETA COMPLETA

```
robin-herrajes-web/
│
├── 📄 ARCHIVOS HTML (Páginas principales)
│   ├── index.html                    ← PÁGINA PRINCIPAL (inicio)
│   ├── catalogo.html                 ← CATÁLOGO DE PRODUCTOS
│   ├── sobre-nosotros.html           ← INFORMACIÓN DE LA EMPRESA
│   └── contacto.html                 ← FORMULARIO DE CONTACTO
│
├── 📁 css/ (Estilos y diseño)
│   └── estilos.css                   ← TODOS LOS ESTILOS CSS
│
├── 📁 js/ (Funcionalidades)
│   └── main.js                       ← JavaScript (búsqueda, filtros, WhatsApp)
│
├── 📁 img/ (Imágenes)
│   └── (vacío - aquí va tu logo)     ← COLOCA TU LOGO AQUÍ: logo.png
│
├── 🛠️ HERRAMIENTAS
│   └── extraer_catalogo.py           ← EXTRAE PRODUCTOS DEL PDF
│
├── ⚙️ CONFIGURACIÓN
│   ├── .htaccess                     ← CONFIGURACIÓN APACHE (Hostinger)
│   └── config.json                   ← DATOS DE CONFIGURACIÓN
│
└── 📖 DOCUMENTACIÓN
    ├── INICIO-RAPIDO.md              ← COMIENZA AQUÍ
    ├── README.md                     ← GUÍA COMPLETA
    ├── INSTRUCCIONES-HOSTINGER.txt   ← CÓMO SUBIR A HOSTINGER
    └── GUIA-EXTRAER-PDF.md           ← CÓMO EXTRAER PRODUCTOS DEL PDF
```

---

## 📝 ARCHIVOS MÁS IMPORTANTES

### 1. **index.html** (Página principal)
- Logo
- Hero section (banner grande)
- Categorías
- Productos destacados
- Testimonios
- Sección "Por Qué Elegir"
- Carrusel de marcas

### 2. **catalogo.html** (Catálogo de productos)
- Búsqueda en vivo
- Filtros por categoría
- Grid de productos
- 50+ productos ejemplo

### 3. **contacto.html** (Formulario)
- Formulario de contacto
- Información de contacto
- WhatsApp directo
- FAQ

### 4. **sobre-nosotros.html** (Nosotros)
- Historia de la empresa
- Misión, Visión, Valores
- Estadísticas
- Marcas representadas

### 5. **css/estilos.css** (Diseño completo)
- Colores de Robin: Azul #003A7F, Rojo #E31E24
- Responsive (móvil, tablet, desktop)
- Animaciones y transiciones
- +2000 líneas de CSS profesional

### 6. **js/main.js** (Funcionalidades)
- Búsqueda de productos
- Filtros dinámicos
- Modal de productos
- Integración WhatsApp
- Validación de formularios
- FAQ interactivo

---

## 🚀 PASOS PARA USAR

### PASO 1: Descargar
📥 Descarga: `robin-herrajes-web.zip`
📤 Descomprime en tu computadora

### PASO 2: Personalizar
✏️ Abre los archivos y actualiza:
- **Teléfono:** Busca "(33) 3666-0312"
- **Email:** Busca "herraform@herralum.com"
- **WhatsApp:** Busca "5299999999"
- **Logo:** Coloca en `img/logo.png`

### PASO 3: Probar localmente
🧪 Abre `index.html` en tu navegador
✓ Verifica que todo se vea correcto

### PASO 4: Subir a Hostinger
📤 Ver: `INSTRUCCIONES-HOSTINGER.txt`

### PASO 5: (Opcional) Extraer productos del PDF
🐍 Ver: `GUIA-EXTRAER-PDF.md`

---

## 📊 ARCHIVOS POR TAREA

| Tarea | Archivo |
|-------|---------|
| **Cambiar logo** | `img/logo.png` + `index.html` línea ~29 |
| **Cambiar teléfono** | Buscar en `contacto.html`, `index.html`, `js/main.js` |
| **Cambiar email** | Buscar en `contacto.html`, `sobre-nosotros.html` |
| **Cambiar WhatsApp** | `js/main.js` línea ~290 |
| **Cambiar colores** | `css/estilos.css` línea ~20 (variables CSS) |
| **Agregar productos** | `catalogo.html` (buscar "producto-card") |
| **Cambiar textos** | Editar directamente en los .html |
| **Cambiar estilos** | `css/estilos.css` |
| **Cambiar funcionalidades** | `js/main.js` |

---

## 🎯 CHECKLIST ANTES DE PUBLICAR

- [ ] Logo agregado en `img/logo.png`
- [ ] Teléfono actualizado (3 lugares)
- [ ] Email correcto (2-3 lugares)
- [ ] WhatsApp configurado en `js/main.js`
- [ ] Probado en navegador (Chrome, Firefox, Safari)
- [ ] Responsive en móvil (abre en celular)
- [ ] Todos los links funcionan
- [ ] Imágenes se cargan correctamente
- [ ] Formulario de contacto funciona
- [ ] Búsqueda en catálogo funciona

---

## 💡 CONSEJOS ÚTILES

### Si quieres agregar un producto:
Busca `<div class="producto-card">` en `catalogo.html` y copia la estructura

### Si quieres cambiar el color azul:
En `css/estilos.css`, línea ~10:
```css
--azul-principal: #003A7F; /* Cambia este valor */
```

### Si quieres cambiar el color rojo:
En `css/estilos.css`, línea ~11:
```css
--rojo: #E31E24; /* Cambia este valor */
```

### Si los estilos no aplican después de subir:
Limpia el cache del navegador: `Ctrl + Shift + Supr`

---

## 📱 TAMAÑOS RESPONSIVE

El sitio se adapta a:
- ✅ Desktop (1400px+)
- ✅ Laptop (1024px)
- ✅ Tablet (768px)
- ✅ Móvil (480px)

---

## 🆘 PROBLEMAS COMUNES

**P: No se ve mi logo**
R: Verifica que esté en `img/logo.png` y que la ruta sea correcta en HTML

**P: WhatsApp no funciona**
R: Asegúrate de cambiar el número en `js/main.js`

**P: Los estilos se ven raros en Hostinger**
R: Sube el archivo `.htaccess` junto con los demás

**P: Quiero agregar redes sociales**
R: Busca `<!-- REDES SOCIALES -->` en los archivos y agrega los links

---

## ✨ CARACTERÍSTICAS DEL SITIO

✅ Diseño moderno y profesional
✅ Responsive (funciona en móvil, tablet, desktop)
✅ SEO optimizado
✅ Búsqueda de productos
✅ Filtros dinámicos
✅ Integración WhatsApp
✅ Formulario de contacto
✅ Testimonios
✅ Carrusel de marcas infinito
✅ Animaciones suaves
✅ Carga rápida
✅ Colores personalizados

---

**¡Tu proyecto está listo para conquistar el mercado!** 🚀

Última actualización: Junio 2024
