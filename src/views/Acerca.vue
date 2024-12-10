<template>
    <section class="about-section">
      <h2>Acerca de Nuestra Página de Recetas</h2>
      <p>
        Bienvenido a nuestra aplicación de recetas, donde puedes explorar y descubrir recetas deliciosas basadas en ingredientes específicos.
      </p>
      <p>
        Utilizando la API de TheMealDB, nuestra plataforma permite buscar recetas que contengan un ingrediente en particular. Solo tienes que escribir el nombre del ingrediente y la aplicación te mostrará una lista de recetas relacionadas, incluyendo detalles como la imagen del plato, su origen y más.
      </p>
      <p>
        Ya sea que busques recetas para una comida rápida, una cena especial o para experimentar con nuevos sabores, nuestra aplicación está aquí para ayudarte a encontrar la receta perfecta.
      </p>
      <h3>¿Cómo funciona?</h3>
      <ul>
        <li>Escribe el ingrediente en la barra de búsqueda.</li>
        <li>Presiona Enter o espera a que se carguen los resultados automáticamente.</li>
        <li>Explora las recetas y haz clic en ellas para obtener más detalles.</li>
      </ul>
      <p>
        Esperamos que disfrutes usando nuestra página y que encuentres recetas que te inspiren a cocinar y compartir con tus seres queridos.
      </p>
    </section>
  </template>
  
  <script>
  export default {
    name: 'AboutPage'
  };
  </script>
  
  <style scoped>
  .about-section {
    padding: 2rem;
    background-color: #f8f8f8;
    font-family: 'Arial', sans-serif;
  }
  
  .about-section h2 {
    margin-bottom: 1rem;
    font-size: 2rem;
  }
  
  .about-section p {
    margin-bottom: 1rem;
    font-size: 1rem;
    color: #333;
  }
  
  .about-section ul {
    margin: 1rem 0;
    padding-left: 1.5rem;
  }
  
  .about-section li {
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }
  </style>
  