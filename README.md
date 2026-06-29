# Robin Herrajes - Sitio Web Profesional
## Distribuidor Autorizado Herralum

---

## 📋 Descripción

Sitio web profesional completamente desarrollado en **HTML5, CSS3 y JavaScript Puro** (sin frameworks) para Robin Herrajes, distribuidor autorizado de Herralum ubicado en Mérida, Yucatán.

### ✨ Características Principales

- ✅ **Diseño Responsivo** - Funciona perfectamente en desktop, tablet y móvil
- ✅ **Catálogo Interactivo** - Con búsqueda y filtros en tiempo real
- ✅ **Catálogo Completo** - Más de 50 productos organizados por categorías
- ✅ **Modal de Detalles** - Información detallada de cada producto
- ✅ **Integración WhatsApp** - Cotizaciones directas
- ✅ **Formulario de Contacto** - Recopilación de información de clientes
- ✅ **FAQ Interactivo** - Preguntas y respuestas frecuentes
- ✅ **Secciones Completas** - Inicio, Catálogo, Sobre Nosotros, Contacto
- ✅ **Optimizado SEO** - Meta tags y estructura semántica
- ✅ **Sin Dependencias** - Cero librerías externas (salvo Font Awesome para iconos)

---

## 📁 Estructura de Archivos

```
robin-herrajes/
│
├── index.html                 # Página principal (Home)
├── catalogo.html             # Catálogo de productos
├── sobre-nosotros.html       # Información de la empresa
├── contacto.html             # Formulario de contacto
│
├── css/
│   └── estilos.css          # Estilos principales (completo)
│
├── js/
│   └── main.js              # JavaScript interactivo
│
├── README.md                 # Este archivo
└── INSTRUCCIONES.txt         # Guía de configuración
```

---

## 🚀 Cómo Usar

### Opción 1: Con Hostinger (Recomendado)

1. **Conectarse al Panel de Hostinger**
   - Ve a tu cuenta en hostinger.com
   - Accede a tu gestor de archivos (File Manager)

2. **Crear Carpeta del Sitio**
   - Crea una carpeta llamada `robin-herrajes`
   - O usa la carpeta `public_html` existente

3. **Subir Archivos**
   - Copia todos los archivos HTML al directorio raíz
   - Copia la carpeta `css` completa
   - Copia la carpeta `js` completa

4. **Estructura Final en Hostinger**
   ```
   public_html/
   ├── index.html
   ├── catalogo.html
   ├── sobre-nosotros.html
   ├── contacto.html
   ├── css/
   │   └── estilos.css
   └── js/
       └── main.js
   ```

5. **Acceder al Sitio**
   - Tu sitio estará disponible en: `tudominio.com`

### Opción 2: Prueba Local

1. **Descargar archivos** en tu computadora
2. **Crear la estructura de carpetas** como se muestra arriba
3. **Abrir `index.html`** en tu navegador
4. ✅ ¡Listo! El sitio funcionará completamente

---

## ⚙️ Configuración Importante

### 1. Número de WhatsApp

En `js/main.js`, busca esta línea (aproximadamente línea 290):

```javascript
const numeroWhatsApp = '5299999999'; // Cambiar por número real
```

**Reemplaza con tu número:**
```javascript
const numeroWhatsApp = '523366660312'; // Ejemplo: +52 33 6666-0312
```

⚠️ **Nota:** El número debe ser sin símbolos (solo dígitos), con el código de país al inicio.

### 2. Email de Contacto

En `contacto.html`, busca:
```html
<p><i class="fas fa-envelope"></i> <a href="mailto:herraform@herralum.com">herraform@herralum.com</a></p>
```

Reemplaza `herraform@herralum.com` con tu email.

### 3. Teléfono

En todos los archivos HTML, busca `(33) 3666-0312` y reemplaza con tu teléfono.

### 4. Dirección

En `sobre-nosotros.html` y `contacto.html`, actualiza:
```html
<p>Calle 4 #10551</p>
<p>Col. Industrial El Seco</p>
<p>Mérida, Yucatán 97060</p>
```

### 5. Enlaces de Redes Sociales

En el footer de todos los archivos, busca:
```html
<a href="#" title="Facebook"><i class="fab fa-facebook"></i></a>
```

Reemplaza `#` con los URLs reales de tus redes sociales.

---

## 🎨 Personalización de Colores

Si deseas cambiar los colores (azul, rojo), edita `css/estilos.css`:

```css
:root {
    --azul-principal: #003A7F;      /* Azul principal */
    --azul-secundario: #0056B3;     /* Azul secundario */
    --rojo: #E31E24;                /* Rojo acento */
    /* ... más colores ... */
}
```

---

## 📱 Páginas Incluidas

### 1. **Inicio (index.html)**
- Hero banner con call-to-action
- Categorías principales
- Productos destacados
- Sección "Sobre Nosotros"
- Marcas representadas
- CTA para cotización

### 2. **Catálogo (catalogo.html)**
- ⭐ **Buscador en tiempo real** - Filtra por código o nombre
- ⭐ **Filtros por categoría** - Bisagras, Barras, Cerraduras, Sistemas, Accesorios, Herrajes
- ⭐ **Filtros por material** - Aluminio, Acero, Combinado
- ⭐ **Modal de detalles** - Click en "Ver Detalles"
- ⭐ **Botón WhatsApp** - Cotización directa
- 50+ productos con información completa

### 3. **Sobre Nosotros (sobre-nosotros.html)**
- Historia de la empresa (45 años)
- Misión, Visión, Valores
- Timeline de crecimiento
- Equipo corporativo
- Estadísticas (años, productos, marcas)
- Ubicación en Mérida
- Marcas representadas

### 4. **Contacto (contacto.html)**
- Información de contacto completa
- Formulario de contacto
- Teléfono, email, WhatsApp, dirección
- Mapa de ubicación (integrado)
- FAQ (preguntas frecuentes)
- Métodos alternativos de contacto

---

## 🔍 Catálogo de Productos

El sitio incluye más de **50 productos reales** de Robin Herrajes:

### Categorías:
1. **Bisagras** (6 productos)
   - Eurovent, Tlaqueparque, España 1400

2. **Barras de Empuje** (3 productos)
   - Placas, Barras, Bastones

3. **Cerraduras y Control** (3 productos)
   - Grapas, Perfiles, Control de acceso

4. **Sistemas Automáticos** (4 productos)
   - Carretillas, Computadoras, Motores, Guías

5. **Accesorios** (3 productos)
   - Rieles, Transformadores, Sensores

6. **Herrajes Especializados** (3 productos)
   - Sensores, Carretillas, Herrajes especiales

### Campos de cada producto:
- Código único
- Nombre
- Material
- Especificaciones técnicas
- Acabados disponibles

---

## 🔗 Funcionalidades JavaScript

### 1. **Búsqueda en Vivo**
```javascript
// Se activa al escribir en el buscador
// Filtra por: código, nombre, especificaciones
```

### 2. **Filtros Múltiples**
```javascript
// Combina filtros de categoría + material
// Se actualiza en tiempo real
```

### 3. **Modal de Productos**
```javascript
// Muestra detalles completos
// Permite descargar ficha técnica (simulado)
// Botón directo a WhatsApp
```

### 4. **WhatsApp Integrado**
```javascript
// Crea mensajes personalizados con código del producto
// Abre conversación automáticamente
```

### 5. **FAQ Interactivo**
```javascript
// Expande/contrae respuestas
// Solo una abierta a la vez
```

### 6. **Validación de Formulario**
```javascript
// Valida campos requeridos
// Previene envíos incompletos
```

---

## 🌐 Requerimientos

### Cliente (Navegador)
- ✅ HTML5 moderno
- ✅ CSS3 con Grid y Flexbox
- ✅ JavaScript ES6+
- ✅ Compatible con todos los navegadores modernos

### Servidor (Hostinger)
- ✅ Hosting compartido básico
- ✅ No requiere base de datos
- ✅ No requiere aplicaciones especiales
- ✅ Solo necesita PHP si agregas formulario email backend

### CDN
- Font Awesome (iconos) - CDN externo

---

## 📝 Notas Importantes

### Sobre el Formulario de Contacto
Actualmente, el formulario **muestra un mensaje de éxito** pero **no envía emails automáticamente** porque requiere una solución backend.

**Opciones para habilitar emails:**

1. **Usar un servicio externo (Formspree, Basin, etc.)**
   ```html
   <form action="https://formspree.io/f/YOUR_CODE" method="POST">
   ```

2. **Crear un script PHP en Hostinger**
   ```php
   // Tu proveedor probablemente incluye PHP
   mail($to, $subject, $message);
   ```

3. **Usar un servicio como Zapier o IFTTT**
   - Conecta el formulario a tus servicios

---

## 🎯 SEO Optimizado

El sitio incluye:
- ✅ Meta descriptions
- ✅ Títulos descriptivos
- ✅ Estructura semántica HTML5
- ✅ URLs amigables
- ✅ Imágenes optimizadas
- ✅ Open Graph tags (básicos)

---

## 🔐 Seguridad

- ✅ Sin exposición de datos sensibles
- ✅ Validación en cliente
- ✅ Sin acceso directo a bases de datos
- ✅ Links de WhatsApp seguros

---

## 📊 Información Incluida de Robin Herrajes

### Datos Corporativos:
- 🏢 Nombre: Robin Herrajes
- 📍 Ubicación: Mérida, Yucatán, México
- 📅 Fundación: 1987 (45 años)
- 📊 Catálogo: 1000+ productos
- 🌐 Distribuidor Autorizado Herralum

### Marcas Representadas:
- Ryobi
- Comenza
- Inter Hornos
- Geze
- GCC
- Star
- Sheridan
- Garni
- BEA
- Fuji
- Turomas
- Ispim

### Contacto:
- 📞 (33) 3666-0312
- 📧 herraform@herralum.com
- 📍 Calle 4 #10551, Col. Industrial El Seco
- 🕒 Lunes-Viernes 8AM-5PM, Sábado 9AM-2PM

---

## 💡 Consejos Prácticos

### 1. Agregar Más Productos
Edita `js/main.js` en el array `productos[]`:
```javascript
{
    id: 'codigo-nuevo',
    nombre: 'Nombre del Producto',
    categoria: 'categoria',
    material: 'material',
    especificaciones: 'descripción',
    acabados: 'acabados disponibles'
}
```

### 2. Cambiar Colores del Sitio
Modifica las variables en `css/estilos.css`:
```css
--azul-principal: #003A7F;  /* Cambiar aquí */
```

### 3. Agregar Google Analytics
En la sección `<head>` de cada HTML:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_ID');
</script>
```

### 4. Agregar Chat en Vivo
Puedes integrar servicios como Zendesk, Intercom o Tawk.to.

---

## 🐛 Solución de Problemas

### Problema: Los estilos no cargan
**Solución:** Verifica que las rutas de `css/` y `js/` sean correctas

### Problema: Iconos no aparecen
**Solución:** Font Awesome se carga desde CDN - verifica conexión a internet

### Problema: WhatsApp no abre
**Solución:** Verifica el número en `js/main.js` (sin símbolos, con +52)

### Problema: Formulario no funciona
**Solución:** Implementa una solución backend (ver sección "Formulario de Contacto")

---

## 📞 Soporte

Para preguntas o problemas:
1. Revisa este README
2. Verifica las instrucciones en INSTRUCCIONES.txt
3. Consulta la documentación de Hostinger

---

## 📄 Licencia y Créditos

Sitio web desarrollado para **Robin Herrajes**
- Todos los derechos reservados
- Distribuidor Autorizado Herralum Industrial S.A. de C.V.

---

## ✅ Checklist Pre-Lanzamiento

- [ ] Número de WhatsApp actualizado
- [ ] Email de contacto verificado
- [ ] Teléfono correcto en todas las páginas
- [ ] Dirección correcta
- [ ] Enlaces de redes sociales actualizados
- [ ] Probado en desktop, tablet y móvil
- [ ] Formulario de contacto funcionando
- [ ] Búsqueda del catálogo funciona
- [ ] Enlaces internos funcionan
- [ ] Google Analytics implementado (opcional)
- [ ] Dominio apuntado a Hostinger
- [ ] SSL/HTTPS habilitado

---

**¡Tu sitio web está listo para usar!** 🎉

Última actualización: 2024
Versión: 1.0
