<template>
    <section class="blog-section">
      <h2 class="blog-title">Blog de Cocina</h2>
      <div class="blog-grid">
        <article v-for="(post, index) in blogPosts" :key="index" class="blog-card">
          <h3 class="blog-card-title">{{ post.title }}</h3>
          <p class="blog-card-description">{{ post.description }}</p>
          <ul class="blog-card-list">
            <li v-for="(item, idx) in post.items" :key="idx">{{ item }}</li>
          </ul>
        </article>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        blogPosts: [
          {
            title: "Recetas",
            description: "Explora recetas detalladas con imágenes y variaciones.",
            items: [
              "Recetas paso a paso",
              "Fotos de los platos",
              "Alternativas para dietas específicas"
            ]
          },
          {
            title: "Consejos y Trucos",
            description: "Aprende técnicas esenciales y secretos de cocina.",
            items: [
              "Técnicas básicas",
              "Sustitutos de ingredientes",
              "Errores comunes en la cocina"
            ]
          },
          {
            title: "Cocina Especializada",
            description: "Descubre recetas de diferentes culturas y dietas.",
            items: [
              "Platos típicos de diferentes regiones",
              "Recetas veganas y sin gluten",
              "Comidas para festividades"
            ]
          },
          {
            title: "Historias Personales",
            description: "Conecta con las historias detrás de las recetas.",
            items: [
              "Origen de la receta",
              "Momentos memorables relacionados con la comida"
            ]
          },
          {
            title: "Reseñas y Recomendaciones",
            description: "Opiniones sobre utensilios, ingredientes y más.",
            items: [
              "Utensilios de cocina recomendados",
              "Ingredientes destacados",
              "Reseñas de restaurantes"
            ]
          },
          {
            title: "Salud y Nutrición",
            description: "Mantén un estilo de vida saludable mientras cocinas.",
            items: [
              "Información nutricional de recetas",
              "Consejos para una alimentación balanceada"
            ]
          },
          {
            title: "Extras Creativos",
            description: "Ideas adicionales para inspirarte en la cocina.",
            items: [
              "Menús completos para eventos",
              "Planificación de comidas semanales",
              "Colaboraciones con otros chefs"
            ]
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .blog-section {
    padding: 2rem;
    background-color: #f8f8f8;
  }
  
  .blog-title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: #333;
  }
  
  .blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }
  
  .blog-card {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    transition: transform 0.3s ease;
  }
  
  .blog-card:hover {
    transform: translateY(-5px);
  }
  
  .blog-card-title {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: #444;
  }
  
  .blog-card-description {
    font-size: 1rem;
    margin-bottom: 1rem;
    color: #666;
  }
  
  .blog-card-list {
    list-style: none;
    padding: 0;
  }
  
  .blog-card-list li {
    font-size: 0.9rem;
    color: #555;
    margin-bottom: 0.5rem;
  }
  </style>
  