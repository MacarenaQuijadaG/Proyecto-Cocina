<template>
    <section class="categories-section">
      <h2>Recetas segun las categorias</h2>
      <div class="categories-grid" v-if="categories.length > 0">
        <div v-for="(category, index) in categories" :key="index" class="category-card">
          <img :src="category.strCategoryThumb" :alt="category.strCategory" />
          <h3>{{ category.strCategory }}</h3>
          <p>{{ category.strCategoryDescription }}</p>
        </div>
      </div>
      <p v-else>Cargando categorías...</p>
    </section>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        categories: []
      };
    },
    created() {
      this.fetchCategories();
    },
    methods: {
      async fetchCategories() {
        try {
          const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
          this.categories = response.data.categories;
        } catch (error) {
          console.error('Error al cargar las categorías:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .categories-section {
    padding: 2rem;
    background-color: #f8f8f8;
  }
  
  .categories-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Muestra 3 tarjetas por fila */
    gap: 1rem;
  }
  
  .category-card {
    background: #fff;
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .category-card img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
  
  .category-card h3 {
    margin: 0.5rem 0;
    font-size: 1.2rem;
    font-style: italic; 
  }
  
  .category-card p {
    font-size: 0.9rem;
    color: #666;
  }
  </style>
  