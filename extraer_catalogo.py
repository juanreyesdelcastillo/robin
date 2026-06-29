#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
EXTRACTOR DE PRODUCTOS DEL CATÁLOGO PDF - Robin Herrajes
Extrae código, nombre, descripción e imágenes de un PDF de catálogo

Uso:
    python extraer_catalogo.py
    
Requisitos:
    pip install pdfplumber pillow
"""

import pdfplumber
import csv
import os
from pathlib import Path

# ================================================
# CONFIGURACIÓN
# ================================================

PDF_PATH = "catalogo.pdf"  # Tu archivo PDF
OUTPUT_CSV = "productos.csv"
OUTPUT_IMG_DIR = "productos_imagenes"
LIMITE_PRODUCTOS = None  # None = todos, o número para limitar (ej: 50)

# ================================================
# CREAR DIRECTORIOS
# ================================================

Path(OUTPUT_IMG_DIR).mkdir(exist_ok=True)

# ================================================
# FUNCIÓN PRINCIPAL
# ================================================

def extraer_catalogo():
    """Extrae productos e imágenes del PDF"""
    
    productos = []
    imagen_contador = 0
    producto_contador = 0
    errores = 0
    
    print("🚀 Iniciando extracción de catálogo...")
    print(f"📄 Archivo: {PDF_PATH}")
    print(f"📂 Imágenes se guardarán en: {OUTPUT_IMG_DIR}/\n")
    
    try:
        with pdfplumber.open(PDF_PATH) as pdf:
            total_paginas = len(pdf.pages)
            print(f"📊 Total de páginas: {total_paginas}\n")
            
            for page_num, page in enumerate(pdf.pages, 1):
                print(f"⏳ Procesando página {page_num}/{total_paginas}...", end="")
                
                try:
                    # Extrae tablas
                    tablas = page.extract_tables()
                    
                    if tablas:
                        for tabla in tablas:
                            for fila in tabla:
                                # Verifica que haya datos
                                if len(fila) >= 3 and fila[0] and str(fila[0]).strip():
                                    if LIMITE_PRODUCTOS and producto_contador >= LIMITE_PRODUCTOS:
                                        break
                                    
                                    try:
                                        producto = {
                                            'codigo': str(fila[0]).strip(),
                                            'nombre': str(fila[1]).strip() if len(fila) > 1 else '',
                                            'descripcion': str(fila[2]).strip() if len(fila) > 2 else '',
                                            'pagina': page_num,
                                            'imagen': ''
                                        }
                                        productos.append(producto)
                                        producto_contador += 1
                                    except Exception as e:
                                        errores += 1
                    
                    # Extrae imágenes
                    if page.images:
                        for img_idx, img in enumerate(page.images):
                            if LIMITE_PRODUCTOS and imagen_contador >= LIMITE_PRODUCTOS:
                                break
                            
                            try:
                                imagen_contador += 1
                                img_filename = f"producto_{imagen_contador:05d}.png"
                                img_path = os.path.join(OUTPUT_IMG_DIR, img_filename)
                                
                                # Extrae y guarda imagen
                                img_data = page.within_bbox(img['bbox']).to_image()
                                img_data.save(img_path)
                                
                                # Asocia imagen al producto más reciente
                                if productos:
                                    productos[-1]['imagen'] = img_filename
                                    
                            except Exception as e:
                                pass  # Silencia errores de imagen
                    
                    print(f" ✅ ({producto_contador} productos, {imagen_contador} imágenes)")
                    
                except Exception as e:
                    print(f" ⚠️  Error en página: {str(e)[:50]}")
                    errores += 1
            
            # Guarda CSV
            if productos:
                print(f"\n📝 Guardando {len(productos)} productos en CSV...")
                
                with open(OUTPUT_CSV, 'w', newline='', encoding='utf-8') as csvfile:
                    fieldnames = ['codigo', 'nombre', 'descripcion', 'imagen', 'pagina']
                    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
                    
                    writer.writeheader()
                    writer.writerows(productos)
                
                print(f"✅ Guardado en: {OUTPUT_CSV}")
            
            # Resumen
            print(f"\n{'='*60}")
            print(f"✨ EXTRACCIÓN COMPLETADA")
            print(f"{'='*60}")
            print(f"📦 Productos extraídos: {len(productos)}")
            print(f"🖼️  Imágenes extraídas: {imagen_contador}")
            print(f"❌ Errores: {errores}")
            print(f"📂 Carpeta de imágenes: {OUTPUT_IMG_DIR}/")
            print(f"📄 Archivo CSV: {OUTPUT_CSV}")
            print(f"{'='*60}\n")
            
            return len(productos), imagen_contador
            
    except FileNotFoundError:
        print(f"❌ Error: No se encontró el archivo '{PDF_PATH}'")
        print("   Asegúrate que el PDF está en la misma carpeta que este script")
        return 0, 0
    except Exception as e:
        print(f"❌ Error general: {str(e)}")
        return 0, 0

# ================================================
# FUNCIÓN ALTERNATIVA: SOLO TOP 50
# ================================================

def extraer_top_50():
    """Extrae solo los primeros 50 productos (recomendado)"""
    
    print("\n🎯 Extrayendo TOP 50 productos...\n")
    
    global LIMITE_PRODUCTOS
    LIMITE_PRODUCTOS = 50
    
    return extraer_catalogo()

# ================================================
# FUNCIÓN PARA LIMPIAR DATOS
# ================================================

def limpiar_csv(input_csv='productos.csv', output_csv='productos_limpios.csv'):
    """Limpia y formatea el CSV extraído"""
    
    print(f"🧹 Limpiando datos del CSV...")
    
    productos_limpios = []
    
    with open(input_csv, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            # Limpia espacios extras
            row = {k: v.strip() if v else '' for k, v in row.items()}
            
            # Elimina filas vacías
            if row['codigo'] and row['nombre']:
                productos_limpios.append(row)
    
    # Guarda versión limpia
    with open(output_csv, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=['codigo', 'nombre', 'descripcion', 'imagen', 'pagina'])
        writer.writeheader()
        writer.writerows(productos_limpios)
    
    print(f"✅ CSV limpiado: {output_csv} ({len(productos_limpios)} productos)")

# ================================================
# MENÚ PRINCIPAL
# ================================================

if __name__ == "__main__":
    print("\n" + "="*60)
    print("🛠️  EXTRACTOR DE CATÁLOGO - Robin Herrajes")
    print("="*60 + "\n")
    
    print("Opciones:")
    print("1. Extraer TODO el catálogo (462+ páginas)")
    print("2. Extraer TOP 50 productos (recomendado)")
    print("3. Salir")
    
    opcion = input("\nElige una opción (1-3): ").strip()
    
    if opcion == "1":
        total, imagenes = extraer_catalogo()
        if total > 0:
            print("\n💡 Puedes limpiar el CSV ejecutando: limpiar_csv()")
    
    elif opcion == "2":
        total, imagenes = extraer_top_50()
        if total > 0:
            # Renombra archivos para TOP 50
            os.rename(OUTPUT_CSV, "top_50.csv")
            print("\n💾 Archivos guardados como: top_50.csv, productos_imagenes/")
    
    elif opcion == "3":
        print("¡Hasta luego!")
    
    else:
        print("❌ Opción no válida")
