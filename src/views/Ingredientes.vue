<template>
    <section class="recipes-section">
      <h2>Recetas por Ingrediente</h2>
      <input v-model="ingredient" @input="fetchRecipes" placeholder="Buscar por ingrediente..." />
      <div v-if="recipes.length > 0" class="recipes-grid">
        <div v-for="(recipe, index) in recipes" :key="index" class="recipe-card">
          <img :src="recipe.strMealThumb" :alt="recipe.strMeal" />
          <h3>{{ recipe.strMeal }}</h3>
          <p>{{ recipe.strArea }}</p>
        </div>
      </div>
      <p v-else-if="ingredient">No se encontraron recetas para "{{ ingredient }}".</p>
      <p v-else>Por favor, ingrese un ingrediente para buscar recetas.</p>
    </section>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        ingredient: '',
        recipes: []
      };
    },
    methods: {
      async fetchRecipes() {
        if (this.ingredient.trim() === '') {
          this.recipes = [];
          return;
        }
  
        try {
          // Usar la API de filtro por ingrediente
          const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${this.ingredient}`);
          if (response.data.meals) {
            this.recipes = response.data.meals;
          } else {
            this.recipes = [];
          }
        } catch (error) {
          console.error('Error al cargar las recetas:', error);
          this.recipes = [];
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .recipes-section {
    padding: 2rem;
    background-color: #f8f8f8;
  }
  
  .recipes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }
  
  .recipe-card {
    background: #fff;
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .recipe-card img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
  
  .recipe-card h3 {
    margin: 0.5rem 0;
    font-size: 1.2rem;
    font-style: italic;
  }
  
  .recipe-card p {
    font-size: 0.9rem;
    color: #666;
  }
  </style>
  