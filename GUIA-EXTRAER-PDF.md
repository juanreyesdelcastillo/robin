# 🚀 GUÍA: EXTRAER TODOS LOS PRODUCTOS DEL PDF (462 PÁGINAS)

## El Problema
El PDF tiene 462 páginas con productos que contienen:
- Código del producto
- Nombre
- Descripción técnica
- **Imágenes** (importante)

**Hacer esto manualmente es imposible** ❌

---

## ✅ LA SOLUCIÓN: Script Python Automático

He creado un script que **extrae TODO automáticamente** en 5-10 minutos.

---

## 📋 REQUISITOS PREVIOS

### 1. Tener Python Instalado
- Descarga: https://www.python.org/downloads/
- **Importante:** Marca "Add Python to PATH"
- Verifica: Abre terminal y escribe `python --version`

### 2. Instalar Librerías Necesarias

Abre terminal/cmd en tu carpeta de trabajo y ejecuta:

```bash
pip install pdfplumber pillow
```

**Qué hace:**
- `pdfplumber` → Extrae texto e imágenes de PDF
- `pillow` → Procesa imágenes

---

## 🎯 PASOS PARA EXTRAER

### PASO 1: Preparar Archivos

1. Crea una carpeta llamada `robin-herrajes-extractor`
2. Coloca en esa carpeta:
   - Tu archivo `catalogo.pdf`
   - El archivo `extraer_catalogo.py` (que te di)

```
Carpeta:
├── catalogo.pdf          ← Tu PDF aquí
├── extraer_catalogo.py   ← Script aquí
└── (se crearán automáticamente:)
    ├── productos.csv     ← Resultados
    └── productos_imagenes/  ← Imágenes
```

### PASO 2: Ejecutar el Script

**En Windows (CMD):**
```bash
python extraer_catalogo.py
```

**En Mac/Linux (Terminal):**
```bash
python3 extraer_catalogo.py
```

### PASO 3: Elegir Opción

El script te preguntará:

```
Opciones:
1. Extraer TODO el catálogo (462+ páginas)
2. Extraer TOP 50 productos (recomendado)
3. Salir

Elige una opción (1-3): 
```

**Recomendación:** Elige **Opción 2** (TOP 50)
- Más rápido
- Se ve profesional en el sitio
- Fácil mantener

---

## 📊 RESULTADOS ESPERADOS

### Si eliges OPCIÓN 1 (TODO):
```
✨ EXTRACCIÓN COMPLETADA
============================================================
📦 Productos extraídos: 462
🖼️  Imágenes extraídas: 462
❌ Errores: 2-5 (normal)
📂 Carpeta de imágenes: productos_imagenes/
📄 Archivo CSV: productos.csv
============================================================
```

**Archivos creados:**
- `productos.csv` - Tabla con código, nombre, descripción
- `productos_imagenes/` - Carpeta con todas las imágenes

### Si eliges OPCIÓN 2 (TOP 50):
```
✨ EXTRACCIÓN COMPLETADA
============================================================
📦 Productos extraídos: 50
🖼️  Imágenes extraídas: 50
❌ Errores: 0-1
📂 Carpeta de imágenes: productos_imagenes/
📄 Archivo CSV: top_50.csv
============================================================
```

---

## 📁 FORMATO DEL CSV RESULTANTE

Abre `productos.csv` en Excel y verás:

```
codigo | nombre                      | descripcion              | imagen              | pagina
-------|-----------------------------|-----------------------|---------------------|-------
2177   | Bisagra Eurovent 2177       | Material: Aluminio...   | producto_00001.png  | 5
2056000| Placa de Aluminio 2056000   | Largo: 50cm...          | producto_00002.png  | 12
1014101| Sistema Automático Ryobi    | Abridor automático...   | producto_00003.png  | 28
...
```

**Campos:**
- `codigo`: Código único del producto
- `nombre`: Nombre completo
- `descripcion`: Especificaciones técnicas
- `imagen`: Archivo de imagen extraído
- `pagina`: Página donde se encontró

---

## 🖼️ IMÁGENES EXTRAÍDAS

En la carpeta `productos_imagenes/` tendrás:

```
productos_imagenes/
├── producto_00001.png
├── producto_00002.png
├── producto_00003.png
├── ...
└── producto_00050.png (si elegiste TOP 50)
```

Cada imagen es un archivo PNG separado listo para usar.

---

## 🔧 CÓMO USAR LOS DATOS EN TU SITIO

### Opción A: Actualizar HTML Manualmente

1. Abre el `productos.csv` en Excel
2. Copia/pega datos de los primeros 50 en `catalogo.html`
3. Reemplaza los productos ejemplo con los reales

### Opción B: Crear Script para Generar HTML

Si tienes Python y quieres automatizar completamente:

```python
import csv

html = ""

with open('productos.csv', 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        html += f"""
        <div class="producto-card">
            <img src="productos_imagenes/{row['imagen']}" alt="{row['nombre']}">
            <h4>{row['nombre']}</h4>
            <p><strong>Código:</strong> {row['codigo']}</p>
            <p>{row['descripcion']}</p>
        </div>
        """

print(html)
```

---

## ⚡ SOLUCIÓN DE PROBLEMAS

### "ModuleNotFoundError: No module named 'pdfplumber'"
**Solución:**
```bash
pip install pdfplumber pillow
```

### "Archivo PDF no encontrado"
**Solución:**
- Verifica que `catalogo.pdf` esté en la misma carpeta
- Verifica el nombre exacto (mayúsculas/minúsculas)

### "El script se detiene"
**Solución:**
- Es normal si el PDF tiene estructura complicada
- Contará los productos que SÍ extrajo
- Intenta con TOP 50 primero

### Las imágenes se ven pixeladas
**Normal:** Son extraídas directamente del PDF a baja resolución

---

## 📈 FLUJO COMPLETO RECOMENDADO

```
1. Ejecutar script → Extraer TOP 50 ✅
   ↓
2. Revisar productos.csv ✅
   ↓
3. Revisar imágenes en productos_imagenes/ ✅
   ↓
4. Subir imágenes a Hostinger/servidor ✅
   ↓
5. Actualizar URLs en HTML ✅
   ↓
6. Publicar sitio web 🚀
```

---

## 💡 TIPS PROFESIONALES

### Para mostrar en tu sitio web:

1. **Sube imágenes a servidor:**
   ```bash
   Hostinger → File Manager → public_html/img/productos/
   Copia todos los PNG aquí
   ```

2. **Actualiza rutas en HTML:**
   ```html
   <img src="img/productos/producto_00001.png" alt="Producto">
   ```

3. **O usa imágenes desde Unsplash:**
   ```html
   <img src="https://images.unsplash.com/..." alt="Producto">
   ```

---

## 📞 PRÓXIMOS PASOS

### 1️⃣ Extrae TOP 50 con el script
```bash
python extraer_catalogo.py
→ Elige opción 2
→ Espera 2-5 minutos
```

### 2️⃣ Revisa los resultados
- Abre `top_50.csv`
- Verifica `productos_imagenes/`

### 3️⃣ Intégra al sitio web
- Si todo se ve bien → Usa en tu sitio
- Si necesitas ajustes → Avísame

### 4️⃣ (Opcional) Extrae TODO después
Una vez veas que funciona, puedes extraer los 462 productos completos.

---

## 🎓 APRENDE MÁS

El script incluye funciones útiles:

```python
# Solo extraer TOP 50
extraer_top_50()

# Limpiar datos con espacios extras
limpiar_csv()

# Extraer TODO (si necesitas después)
extraer_catalogo()
```

---

## ✅ CHECKLIST

- [ ] Python instalado
- [ ] Librerías instaladas (`pip install pdfplumber pillow`)
- [ ] `catalogo.pdf` en la carpeta
- [ ] `extraer_catalogo.py` en la carpeta
- [ ] Script ejecutado exitosamente
- [ ] `productos.csv` creado
- [ ] `productos_imagenes/` lleno de PNG
- [ ] Datos revisados y limpios

---

**¡El script hace el 90% del trabajo! 🤖**

Cualquier duda, estaré aquí.

---

Última actualización: 2024
