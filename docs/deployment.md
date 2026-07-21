# Despliegue

## GitHub Pages
El workflow `.github/workflows/pages.yml` valida el sitio, carga un artefacto y lo publica en el entorno `github-pages`.

## Dominio personalizado
1. Configure el dominio en **Settings → Pages**.
2. Cree el registro DNS indicado por GitHub.
3. Active HTTPS.
4. Copie `CNAME.example` como `CNAME` y sustituya el contenido por el dominio real.
5. Actualice `robots.txt`, `sitemap.xml` y metadatos sociales.

## Hostinger, Vercel o Netlify
El sitio no requiere compilación. Publique la raíz del repositorio como directorio del sitio. Mantenga GitHub como fuente única de cambios.
