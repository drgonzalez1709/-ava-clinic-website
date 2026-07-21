# AVA Clinic — sitio web institucional

Sitio estático, responsive y listo para GitHub Pages de **AVA Clinic — by Dr. Rodney González**.

## Incluye

- Página principal premium y orientada a conversión.
- Nueve páginas de unidades clínicas.
- Perfil del Dr. Rodney González.
- Formulario que genera un mensaje en WhatsApp sin almacenar datos.
- Política de privacidad inicial y aviso médico.
- SEO básico, datos estructurados, sitemap, manifest y página 404.
- Accesibilidad, navegación móvil y animaciones con reducción de movimiento.
- Validación automática de títulos, descripciones, imágenes y enlaces internos.
- Despliegue automático en GitHub Pages mediante GitHub Actions.

## Publicación inicial

1. Use el repositorio público `drgonzalez1709/-ava-clinic-website`.
2. Suba el contenido completo de esta carpeta a la rama `main`.
3. En GitHub: **Settings → Pages → Source → GitHub Actions**.
4. Ejecute el workflow **Deploy static site to GitHub Pages** o haga un commit en `main`.
5. La URL prevista será: `https://drgonzalez1709.github.io/-ava-clinic-website/`

## Validación local

```bash
python3 scripts/validate_site.py
python3 -m http.server 8000
```

Abra `http://localhost:8000`.

## Personalización obligatoria antes del lanzamiento

- Sustituir el marcador del retrato por una fotografía profesional aprobada.
- Confirmar el dominio definitivo y actualizar `SITE_URL` en `robots.txt` y `sitemap.xml`.
- Añadir una portada social PNG/JPG de 1200×630 y las etiquetas `og:image`.
- Confirmar sedes, horarios, política de prepago y medios oficiales de contacto.
- Obtener revisión legal de la política de privacidad para Costa Rica.
- Validar todo contenido clínico y comercial antes de publicar.
- No activar analítica, píxeles o formularios externos sin consentimiento y actualización de privacidad.

## Principio de seguridad

Este repositorio **no debe contener expedientes, fotografías clínicas, resultados de laboratorio ni datos identificables de pacientes**.

## Derechos

Contenido y marca reservados a AVA Clinic y Dr. Rodney González. Consulte `LICENSE`.
