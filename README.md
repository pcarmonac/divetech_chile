# DiveTech Chile - Sitio Web

## Descripción

Este es el sitio web oficial de DiveTech Chile, una aplicación web que proporciona servicios de gestión para centros de buceo en Chile. El sitio web está diseñado para mostrar las características y beneficios de la plataforma, así como para permitir a los usuarios solicitar demostraciones y contactar con el equipo de DiveTech Chile.

## Estructura del Proyecto

```
divetech_chile/
├── index.html          # Página principal del sitio
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidades JavaScript
├── images/             # Directorio de imágenes
│   ├── logo.svg        # Logo principal
│   ├── logo-white.svg  # Logo para el footer (versión blanca)
│   ├── hero-image.svg  # Imagen principal de la sección hero
│   ├── testimonial-1.svg # Imagen de testimonio 1
│   └── testimonial-2.svg # Imagen de testimonio 2
└── README.md           # Documentación del proyecto
```

## Características

- Diseño moderno y responsivo
- Navegación suave con desplazamiento
- Animaciones al hacer scroll
- Formulario de contacto con validación
- Secciones para mostrar servicios, funcionalidades, testimonios y precios
- Optimizado para dispositivos móviles y de escritorio

## Tecnologías Utilizadas

- HTML5
- CSS3 (con variables CSS para una fácil personalización)
- JavaScript (vanilla, sin dependencias)
- SVG para gráficos e iconos

## Cómo Usar

1. Clona este repositorio o descarga los archivos
2. Abre el archivo `index.html` en tu navegador para ver el sitio web
3. Para realizar modificaciones:
   - Edita `index.html` para cambiar la estructura y contenido
   - Modifica `styles.css` para ajustar los estilos
   - Actualiza `script.js` para cambiar las funcionalidades

## Personalización

### Colores

Los colores principales se definen como variables CSS en el archivo `styles.css`. Puedes modificarlos fácilmente cambiando los valores en la sección `:root`:

```css
:root {
    --primary-color: #0077b6;
    --primary-dark: #005f8d;
    --primary-light: #90e0ef;
    --secondary-color: #023e8a;
    --accent-color: #00b4d8;
    /* ... más variables ... */
}
```

### Fuentes

El sitio utiliza las fuentes Montserrat y Raleway de Google Fonts. Puedes cambiarlas modificando los enlaces en el `<head>` del archivo `index.html` y actualizando las referencias en `styles.css`.

### Imágenes

Todas las imágenes son archivos SVG ubicados en el directorio `images/`. Puedes reemplazarlas con tus propias imágenes manteniendo los mismos nombres de archivo o actualizando las referencias en el HTML.

## Contacto

Para más información sobre DiveTech Chile, visita [divetech.cl](https://divetech.cl) o contacta a través de [contacto@divetech.cl](mailto:contacto@divetech.cl).

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.