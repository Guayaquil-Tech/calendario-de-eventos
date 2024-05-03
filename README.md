

<div align="center">



<a href="https://guayaquiltech.ec/">
  <img width="300px" src="https://raw.githubusercontent.com/Guayaquil-Tech/calendario-de-eventos/main/public/gyetech-logo.webp" alt="Logo" width="800" />
</a>

## Comunidad GYE TECH

La Comunidad Guayaquil Tech es un grupo de personas apasionadas por la tecnología que se unen para compartir conocimientos, experiencias y colaborar en proyectos relacionados con el ámbito tecnológico en la ciudad de Guayaquil, Ecuador. Esta comunidad suele organizar eventos, charlas, talleres y actividades para fomentar el aprendizaje y el networking entre sus miembros, abarcando diversos temas como desarrollo de software, diseño web, inteligencia artificial, ciberseguridad, entre otros. Su objetivo principal es impulsar el crecimiento y la innovación en el campo tecnológico dentro de la región.\
[Sitio Web](https://eventos.guayaquiltech.ec/) · [Reportar error](https://github.com/Guayaquil-Tech/calendario-de-eventos/issues) 

</div>

## Colaboradores 

[![Contribuidores](https://contrib.rocks/image?repo=Guayaquil-Tech/calendario-de-eventos)](https://github.com/Guayaquil-Tech/calendario-de-eventos/graphs/contributors)

## Características principales

- **Comunidades**: Descubre a las comunidades más geniales del mundo Tech.
- **Eventos**: Encuentra los eventos de las Comunidades.


### Instalación

1. Clona el repositorio

   ```sh
   https://github.com/Guayaquil-Tech/calendario-de-eventos.git
   ```

2. Instala los paquetes de NPM

   ```sh
   npm install
   ```

3. Ejecuta el proyecto
   
   ```sh
   npm run dev
   ```
   

## ¿Cómo contribuir?

Si tienes dudas de cómo hacer tu `pull request` te sugerimos revisar el siguiente recurso: [CÓMO hacer tu primera PULL REQUEST a un proyecto en GITHUB 🐙](https://youtu.be/BPns9r76vSI?si=1m2bowi390r2JEFC)

## ¿Cómo agregar tu comunidad al listado de comunidades?

1. En tu IDE de preferencia ingresa al archivo communities en `src/data/communities.js`.
2. Agrega un objeto con los datos de tu comunidad.
   
 ```js
   {
    id: 'openlab', // Identificador único para la URL
    name: 'Openlab Ecuador', // Nombre de tu comunidad
    description: // Información relevante que ayude a los lectores a comprender la naturaleza, propósito y dinámica de tu comunidad
      'Laboratorio social de activistas que promueven la cultura libre. Participamos de actividades con comunidades tecnológicas.',
    tags: ['Software libre', 'Ciencia abierta', 'Scratch', 'Game Jams', 'OpenStreetMap'], // Categorías de tu comunidad
    social: [ // Redes sociales o enlaces de tu comunidad
      {
        icon: InstagramIcon,
        title: 'Instagram',
        link: 'https://www.instagram.com/openlabec'
      },
      ...
    ],
    imagePath: 'openlabec.svg' // Logo de tu comunidad
 }
   ```
3. Agrega el logo de tu comunidad en el archivo `public/images/communities/image-path` debe coincidir con el nombre en la propiedad `imagePath`.
4. Haz una pull request para que aparezca tu comunidad.

## Tecnologías

- [Astro](https://astro.build/)
- [Tailwindcss](https://tailwindcss.com/)
- [astrojs/react](https://docs.astro.build/en/guides/integrations-guide/react/)
- [React](https://react.dev/)


