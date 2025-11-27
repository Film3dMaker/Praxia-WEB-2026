# Guía de Despliegue (Deployment) - Praxia WEB 2026

Esta guía te explicará paso a paso cómo preparar tu sitio web y subirlo a tu servicio de hosting.

## 1. Preparar los Archivos (Build)

Dado que tu proyecto utiliza **Vite**, no puedes simplemente subir los archivos tal como están en tu carpeta de trabajo. Necesitas "construir" (build) la versión optimizada para producción.

1. Abre tu terminal (o consola de comandos) en la carpeta del proyecto.
2. Detén el servidor de desarrollo si está corriendo (presiona `Ctrl + C`).
3. Ejecuta el siguiente comando:

    ```bash
    npm run build
    ```

4. Espera a que termine el proceso. Verás un mensaje indicando que se han generado los archivos.

## 2. Localizar la Carpeta de Salida

Una vez finalizado el comando anterior, se habrá creado una nueva carpeta llamada **`dist`** en la raíz de tu proyecto.

* **Carpeta a subir:** `c:\Users\Balitroks\Documents\Praxia WEB 2026\dist`

**IMPORTANTE:** El contenido de esta carpeta `dist` es lo **ÚNICO** que necesitas subir a tu hosting. No subas la carpeta `node_modules`, ni `src`, ni el `package.json`.

## 3. Subir los Archivos al Hosting

Tienes dos formas principales de hacer esto: usando el Administrador de Archivos de tu cPanel o usando un cliente FTP (como FileZilla).

### Opción A: Usando cPanel (Más fácil)

1. Entra a tu cuenta de cPanel de tu hosting.
2. Busca la opción **"Administrador de Archivos"** (File Manager).
3. Navega a la carpeta pública de tu dominio. Usualmente se llama **`public_html`**.
    * *Nota: Si vas a subirlo a un subdominio, busca la carpeta correspondiente a ese subdominio.*
4. Si hay archivos viejos (como un `index.html` por defecto), elimínalos o muévelos a una carpeta de respaldo.
5. Haz clic en el botón **"Cargar"** (Upload).
6. Selecciona todos los archivos **DENTRO** de tu carpeta `dist` (no subas la carpeta `dist` en sí, sino su contenido: el `index.html`, la carpeta `assets`, etc.).
7. Una vez cargados, asegúrate de que el archivo `index.html` esté en la raíz de `public_html`.

### Opción B: Usando FileZilla (FTP)

1. Abre FileZilla y conéctate con tus credenciales de FTP (Host, Usuario, Contraseña).
2. En el panel **derecho** (Servidor), navega a la carpeta **`public_html`**.
3. En el panel **izquierdo** (Tu PC), navega a la carpeta `dist` de tu proyecto:
    `c:\Users\Balitroks\Documents\Praxia WEB 2026\dist`
4. Selecciona todos los archivos dentro de `dist` en el panel izquierdo.
5. Arrástralos al panel derecho.
6. Espera a que se complete la transferencia.

## 4. Configuración del Formulario de Contacto (PHP)

He notado que tienes un archivo `contact.php` en tu proyecto. Vite **no** procesa archivos PHP por defecto, por lo que este archivo no estará automáticamente en la carpeta `dist` a menos que esté en la carpeta `public`.

**Pasos adicionales para el formulario:**

1. Asegúrate de que tu archivo `contact.php` esté funcionando correctamente.
2. Si `contact.php` **NO** aparece dentro de la carpeta `dist` después del build, tendrás que subirlo manualmente al hosting junto con los demás archivos, en la misma ubicación que el `index.html`.
3. Verifica que la ruta en tu formulario HTML (`action="contact.php"`) coincida con la ubicación del archivo en el servidor.

## 5. Verificación Final

1. Abre tu navegador y entra a tu dominio (ej: `www.tudominio.com`).
2. Verifica que:
    * Las imágenes carguen correctamente.
    * Los estilos (colores, fuentes) se vean bien.
    * La consola del navegador (F12) no muestre errores rojos.
    * El formulario de contacto envíe los correos correctamente.

---

### Solución de Problemas Comunes

* **Pantalla en blanco:** Asegúrate de haber subido todo el contenido de `dist` y no la carpeta `dist` completa dentro de `public_html`.
* **Imágenes rotas:** Verifica que las imágenes estén en la carpeta `public` de tu proyecto original. Vite copia todo lo que está en `public` directamente a la raíz de `dist`.
* **El formulario no funciona:** Asegúrate de que tu hosting soporte PHP y que el archivo `contact.php` esté en el servidor.
