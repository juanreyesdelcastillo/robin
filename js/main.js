// ================================================
// ROBIN HERRAJES - JAVASCRIPT
// ================================================

// Datos de productos
const productos = [
    // BISAGRAS
    {
        id: '2177',
        nombre: 'Bisagra Eurovent 2177',
        categoria: 'bisagras',
        material: 'aluminio',
        especificaciones: 'Puertas y ventanas abatibles',
        acabados: 'Blanco, gris, café, negro'
    },
    {
        id: '2296002',
        nombre: 'Bisagra de 2 Patas 2296002',
        categoria: 'bisagras',
        material: 'acero',
        especificaciones: 'Línea España 1400 - 75kg por par',
        acabados: 'Blanco, gris, café'
    },
    {
        id: '2296003',
        nombre: 'Bisagra de 3 Patas 2296003',
        categoria: 'bisagras',
        material: 'acero',
        especificaciones: 'Línea España 1400 - 95kg por par',
        acabados: 'Blanco, gris, café'
    },
    {
        id: '1032135',
        nombre: 'Bisagra Tlaqueparque Vidrio 135°',
        categoria: 'bisagras',
        material: 'acero',
        especificaciones: 'Para vidrio a 135°',
        acabados: 'Cromado'
    },
    {
        id: '1032180',
        nombre: 'Bisagra Tlaqueparque Vidrio 180°',
        categoria: 'bisagras',
        material: 'acero',
        especificaciones: 'Para vidrio a 180°',
        acabados: 'Cromado'
    },
    {
        id: '1033',
        nombre: 'Bisagra Tlaqueparque Muro 180°',
        categoria: 'bisagras',
        material: 'acero',
        especificaciones: 'Para vidrio a muro 180°',
        acabados: 'Cromado'
    },
    // BARRAS
    {
        id: '2056000',
        nombre: 'Placa de Aluminio 2056000',
        categoria: 'barras',
        material: 'aluminio',
        especificaciones: 'Largo 50cm - Barra de empuje 2056100/120',
        acabados: 'Blanco, E200, E400, natural'
    },
    {
        id: '2056100',
        nombre: 'Barra de Empuje 2056100/120',
        categoria: 'barras',
        material: 'aluminio',
        especificaciones: 'Largo 100 y 120 cm',
        acabados: 'Blanco, E200, E400, natural'
    },
    {
        id: '2058120',
        nombre: 'Barra de Bastón Estirada 2058120',
        categoria: 'barras',
        material: 'aluminio',
        especificaciones: 'Largo 120 cm',
        acabados: 'Blanco, E200, E400, natural'
    },
    // CERRADURAS
    {
        id: '1015022',
        nombre: 'Grapa p/ Sujeción de Cristal',
        categoria: 'cerraduras',
        material: 'acero',
        especificaciones: 'Sujeción de cristal en sistema',
        acabados: 'Cromado'
    },
    {
        id: '1015012',
        nombre: 'Perfil Tapa para Sistema Automático',
        categoria: 'cerraduras',
        material: 'aluminio',
        especificaciones: 'Tapa de sistema automático',
        acabados: 'Blanco, anodizado'
    },
    {
        id: '1015014',
        nombre: 'Control de Acceso',
        categoria: 'cerraduras',
        material: 'acero',
        especificaciones: 'Control de acceso automático',
        acabados: 'Cromado'
    },
    // SISTEMAS
    {
        id: '1014101',
        nombre: 'Carretilla p/ Sistema Automático Ryobi',
        categoria: 'sistemas',
        material: 'combinado',
        especificaciones: 'Abridor automático para puertas',
        acabados: 'Estándar'
    },
    {
        id: '1014102',
        nombre: 'Computadora p/ Sistema Automático',
        categoria: 'sistemas',
        material: 'combinado',
        especificaciones: 'Control de sistema automático',
        acabados: 'Estándar'
    },
    {
        id: '1014103',
        nombre: 'Guía de Piso p/ Sistema Automático',
        categoria: 'sistemas',
        material: 'aluminio',
        especificaciones: 'Guía para sistemas automáticos',
        acabados: 'Estándar'
    },
    {
        id: '1014104',
        nombre: 'Motor para Sistema Automático',
        categoria: 'sistemas',
        material: 'combinado',
        especificaciones: 'Motor para puertas automáticas',
        acabados: 'Estándar'
    },
    // ACCESORIOS
    {
        id: '1015002',
        nombre: 'Riel Principal p/ Sistema Automático',
        categoria: 'accesorios',
        material: 'aluminio',
        especificaciones: 'Riel principal para sistemas automáticos',
        acabados: 'Estándar'
    },
    {
        id: '1015003',
        nombre: 'Transformador p/ Sistema Automático',
        categoria: 'accesorios',
        material: 'combinado',
        especificaciones: 'Transformador de voltaje',
        acabados: 'Estándar'
    },
    {
        id: '1015004',
        nombre: 'Celda Fotoeléctrica',
        categoria: 'accesorios',
        material: 'aluminio',
        especificaciones: 'Sensor de movimiento',
        acabados: 'Blanco/Gris'
    },
    // HERRAJES ESPECIALIZADOS
    {
        id: '1015007',
        nombre: 'Sensor Magic Switch Universal',
        categoria: 'herrajes',
        material: 'combinado',
        especificaciones: 'Sensor magnético universal',
        acabados: 'Estándar'
    },
    {
        id: '1015016',
        nombre: 'Carretilla para Sistema Automático',
        categoria: 'herrajes',
        material: 'acero',
        especificaciones: 'Carretilla de soporte automático',
        acabados: 'Cromado'
    },
    {
        id: '1015030',
        nombre: 'Herraj Hispague San Angel',
        categoria: 'herrajes',
        material: 'acero',
        especificaciones: 'Herraje especializado',
        acabados: 'Cromado'
    }
];

// ================================================
// FUNCIONES GENERALES
// ================================================

document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    initializeMobileMenu();
});

function initializeEventListeners() {
    // Filtros del catálogo
    const filtros = document.querySelectorAll('.filtro-check, .filtro-material');
    filtros.forEach(filtro => {
        filtro.addEventListener('change', aplicarFiltros);
    });

    // Búsqueda
    const buscador = document.getElementById('buscador');
    if (buscador) {
        buscador.addEventListener('keyup', realizarBusqueda);
    }

    // FAQ
    const faqTitles = document.querySelectorAll('.faq-title');
    faqTitles.forEach(title => {
        title.addEventListener('click', toggleFaq);
    });

    // Formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleSubmit);
    }

    // Cerrar modal al hacer click afuera
    const modal = document.getElementById('modal');
    if (modal) {
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModal();
            }
        });
    }
}

// ================================================
// FILTROS Y BÚSQUEDA
// ================================================

function aplicarFiltros() {
    const categoriasSeleccionadas = Array.from(document.querySelectorAll('.filtro-check:checked'))
        .map(cb => cb.value);
    
    const materialesSeleccionados = Array.from(document.querySelectorAll('.filtro-material:checked'))
        .map(cb => cb.value);

    const tarjetas = document.querySelectorAll('.producto-card');
    
    tarjetas.forEach(tarjeta => {
        const categoria = tarjeta.dataset.categoria;
        const material = tarjeta.dataset.material;

        let mostrar = true;

        if (categoriasSeleccionadas.length > 0 && !categoriasSeleccionadas.includes(categoria)) {
            mostrar = false;
        }

        if (materialesSeleccionados.length > 0 && !materialesSeleccionados.includes(material)) {
            mostrar = false;
        }

        tarjeta.style.display = mostrar ? 'block' : 'none';
    });
}

function realizarBusqueda() {
    const termino = document.getElementById('buscador').value.toLowerCase();
    const tarjetas = document.querySelectorAll('.producto-card');

    tarjetas.forEach(tarjeta => {
        const codigo = tarjeta.querySelector('.codigo').textContent.toLowerCase();
        const nombre = tarjeta.querySelector('h4').textContent.toLowerCase();
        const especificaciones = tarjeta.textContent.toLowerCase();

        if (codigo.includes(termino) || nombre.includes(termino) || especificaciones.includes(termino)) {
            tarjeta.style.display = 'block';
        } else {
            tarjeta.style.display = 'none';
        }
    });
}

function limpiarFiltros() {
    // Limpiar checkboxes
    document.querySelectorAll('.filtro-check, .filtro-material').forEach(cb => {
        cb.checked = false;
    });

    // Limpiar búsqueda
    const buscador = document.getElementById('buscador');
    if (buscador) {
        buscador.value = '';
    }

    // Mostrar todos los productos
    document.querySelectorAll('.producto-card').forEach(tarjeta => {
        tarjeta.style.display = 'block';
    });
}

// ================================================
// MODAL
// ================================================

function showModal(codigo, nombre, material, especificaciones, acabados) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');

    const html = `
        <h2>${nombre}</h2>
        <p><strong>Código de Producto:</strong> ${codigo}</p>
        <p><strong>Material:</strong> ${material}</p>
        <p><strong>Especificaciones:</strong> ${especificaciones}</p>
        <p><strong>Acabados Disponibles:</strong> ${acabados}</p>
        
        <div style="margin-top: 1.5rem; display: flex; gap: 1rem; flex-wrap: wrap;">
            <a href="#" class="btn btn-primary" download>
                <i class="fas fa-file-pdf"></i> Descargar Ficha Técnica
            </a>
            <button class="btn btn-secondary" onclick="cotizarWhatsApp('${codigo}')">
                <i class="fab fa-whatsapp"></i> Cotizar por WhatsApp
            </button>
        </div>
    `;

    modalBody.innerHTML = html;
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// ================================================
// WHATSAPP
// ================================================

function cotizarWhatsApp(codigo) {
    const numeroWhatsApp = '5299999999'; // Cambiar por número real
    const producto = productos.find(p => p.id === codigo);
    const nombre = producto ? producto.nombre : codigo;
    
    const mensaje = `Hola Robin Herrajes, me interesa solicitar cotización para:\n\nProducto: ${nombre}\nCódigo: ${codigo}\n\n¿Cuál es el precio y disponibilidad?`;
    
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}

// ================================================
// FORMULARIO DE CONTACTO
// ================================================

function handleSubmit(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const empresa = document.getElementById('empresa').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;

    // Validación básica
    if (!nombre || !email || !asunto || !mensaje) {
        mostrarMensaje('Por favor completa todos los campos requeridos', 'error');
        return;
    }

    // Aquí normalmente enviarías los datos a un servidor
    // Por ahora, simulamos un envío exitoso
    
    // Crear mensaje de contacto para WhatsApp como alternativa
    const numeroWhatsApp = '5299999999';
    const mensajeWhatsApp = `
Nuevo mensaje de contacto:

Nombre: ${nombre}
Email: ${email}
Teléfono: ${telefono}
Empresa: ${empresa}
Asunto: ${asunto}
Mensaje: ${mensaje}
    `;

    // Mostrar mensaje de éxito
    mostrarMensaje('¡Tu mensaje ha sido enviado! Te contactaremos pronto.', 'success');

    // Limpiar formulario
    document.getElementById('contactForm').reset();

    // Log para fines de desarrollo
    console.log('Formulario enviado:', {
        nombre, email, telefono, empresa, asunto, mensaje
    });
}

function mostrarMensaje(texto, tipo) {
    const messageDiv = document.getElementById('formMessage');
    messageDiv.textContent = texto;
    messageDiv.className = `form-message ${tipo}`;
    
    // Ocultar mensaje después de 5 segundos
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 5000);
}

// ================================================
// FAQ
// ================================================

function toggleFaq(event) {
    const title = event.currentTarget;
    const content = title.nextElementSibling;
    
    // Cerrar otros FAQs
    document.querySelectorAll('.faq-item').forEach(item => {
        const itemTitle = item.querySelector('.faq-title');
        const itemContent = item.querySelector('.faq-content');
        
        if (itemTitle !== title) {
            itemTitle.classList.remove('active');
            itemContent.classList.remove('active');
        }
    });
    
    // Toggle actual
    title.classList.toggle('active');
    content.classList.toggle('active');
}

// ================================================
// MENÚ MÓVIL
// ================================================

function initializeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (!hamburger) return;

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Cerrar menú al hacer click en un enlace
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// ================================================
// SCROLL SUAVE
// ================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const element = document.querySelector(href);
        
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ================================================
// UTILIDADES
// ================================================

// Animar números al scroll
function animarNumeros() {
    const stats = document.querySelectorAll('.stat-card h3');
    
    stats.forEach(stat => {
        const target = parseInt(stat.textContent);
        if (isNaN(target)) return;
        
        let current = 0;
        const increment = target / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = target;
                clearInterval(timer);
            } else {
                stat.textContent = Math.ceil(current);
            }
        }, 30);
    });
}

// Detectar cuando elementos entran en viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

// Observar productos
document.querySelectorAll('.producto-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease';
    observer.observe(card);
});

// ================================================
// CARRUSEL DE BENEFICIOS
// ================================================

// Agregar clase activa al primer elemento de FAQs
document.addEventListener('DOMContentLoaded', () => {
    const primerFAQ = document.querySelector('.faq-item');
    if (primerFAQ) {
        const title = primerFAQ.querySelector('.faq-title');
        const content = primerFAQ.querySelector('.faq-content');
        title.classList.add('active');
        content.classList.add('active');
    }
});

// ================================================
// FUNCIONES AUXILIARES
// ================================================

// Obtener producto por código
function obtenerProducto(codigo) {
    return productos.find(p => p.id === codigo);
}

// Filtrar productos por categoría
function obtenerProductosPorCategoria(categoria) {
    return productos.filter(p => p.categoria === categoria);
}

// Buscar productos por término
function buscarProductos(termino) {
    const terminoLower = termino.toLowerCase();
    return productos.filter(p => 
        p.nombre.toLowerCase().includes(terminoLower) ||
        p.id.toLowerCase().includes(terminoLower) ||
        p.especificaciones.toLowerCase().includes(terminoLower)
    );
}

// ================================================
// LOG DE INICIALIZACIÓN
// ================================================

console.log('%c¡Bienvenido a Robin Herrajes!', 'color: #003A7F; font-size: 16px; font-weight: bold;');
console.log('%cSitio web profesional de distribuidores de herrajes', 'color: #E31E24; font-size: 12px;');
