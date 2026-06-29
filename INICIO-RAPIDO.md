# 🚀 ROBIN HERRAJES - INICIO RÁPIDO

## 📦 ESTRUCTURA DEL PROYECTO

```
robin-herrajes-web/
│
├── 📄 Archivos HTML (Páginas del sitio)
│   ├── index.html                 ← Página principal
│   ├── catalogo.html              ← Catálogo de productos
│   ├── sobre-nosotros.html        ← Información empresa
│   └── contacto.html              ← Formulario contacto
│
├── 📁 css/ (Estilos)
│   └── estilos.css                ← Todos los estilos
│
├── 📁 js/ (JavaScript)
│   └── main.js                    ← Funcionalidades
│
├── 🐍 Herramientas Python
│   └── extraer_catalogo.py        ← Extrae productos del PDF
│
└── 📖 Documentación
    ├── INICIO-RAPIDO.md           ← Este archivo
    ├── README.md                  ← Guía completa
    ├── INSTRUCCIONES-HOSTINGER.txt ← Cómo subir a hosting
    └── GUIA-EXTRAER-PDF.md        ← Cómo extraer productos
```

---

## ⚡ PASOS RÁPIDOS

### 1️⃣ CONFIGURAR LOGO
Abre `index.html` y busca línea ~29:
```html
<img src="data:image/svg+xml,..." alt="Robin">
```

Reemplaza con:
```html
<img src="img/logo.png" alt="Robin Herrajes" style="height: 50px;">
```

### 2️⃣ PERSONALIZAR DATOS
Busca y reemplaza en TODOS los archivos:
- **Número WhatsApp:** En `js/main.js` línea ~290
- **Email:** busca `herraform@herralum.com`
- **Teléfono:** busca `(33) 3666-0312`

### 3️⃣ PRUEBAR LOCALMENTE
1. Abre `index.html` en tu navegador
2. Verifica que todo se vea bien
3. Prueba links: Catálogo, Contacto, etc.

### 4️⃣ SUBIR A HOSTINGER
Ver: `INSTRUCCIONES-HOSTINGER.txt`

---

## 📊 CAMBIOS RECIENTES

✅ Hero mejorado (más grande y atractivo)
✅ Carrusel infinito de marcas
✅ Sección "Por Qué Elegir" reformulada
✅ Timeline y equipo quitados
✅ Direcciones genéricas
✅ Imágenes profesionales de Unsplash

---

## 🎯 PRÓXIMOS PASOS

### Para Extraer Productos del PDF (Opcional):
```bash
pip install pdfplumber pillow
python extraer_catalogo.py
```
Ver: `GUIA-EXTRAER-PDF.md`

### Para Subir a Hostinger:
1. Descarga esta carpeta completa
2. Conecta a Hostinger → File Manager
3. Sube archivos a `public_html/`
4. ¡Listo! Tu sitio está live

---

## 📞 CONTACTO Y SOPORTE

**Si necesitas:**
- Cambiar colores → edita `css/estilos.css`
- Cambiar textos → edita archivos `.html`
- Agregar productos → edita `catalogo.html`
- Automatizar → usa `extraer_catalogo.py`

---

## ✨ CHECKLIST ANTES DE PUBLICAR

- [ ] Logo agregado
- [ ] WhatsApp configurado
- [ ] Email correcto
- [ ] Teléfono actualizado
- [ ] Probado en navegador
- [ ] Responsive en móvil
- [ ] Links funcionando
- [ ] Imágenes cargando

---

**¡Tu sitio web está listo para revolucionar tu negocio!** 🎉

Última actualización: Junio 2024
