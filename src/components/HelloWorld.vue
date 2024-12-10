<template>
  <div class="home">
    <header class="hero">
      <h1>Bienvenido a Cocina Fácil</h1>
      <p>Descubre recetas deliciosas y fáciles de hacer para todos los gustos.</p>
      <router-link to="/recipes" class="btn btn-primary">Ver Recetas</router-link>
    </header>

    <!-- Carrusel de imágenes -->
    <section class="carousel-section">
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://www.aldelis.com/wp-content/uploads/2018/07/ensaldas-de-verano-faciles-y-rapidas.jpg" class="d-block w-100 carousel-image" alt="Ensalada Fresca de Verano">
          </div>
          <div class="carousel-item">
            <img src="https://www.aceitesdeolivadeespana.com/wp-content/uploads/2024/05/Tacos-de-pollo.jpg" class="d-block w-100 carousel-image" alt="Tacos de Pollo">
          </div>
          <div class="carousel-item">
            <img src="https://cdn0.uncomo.com/es/posts/3/0/9/como_hacer_sopa_de_tomate_casera_25903_600.webp" class="d-block w-100 carousel-image" alt="Sopa de Tomate Casera">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>

    <section class="featured-recipes">
      <h2>Recetas Destacadas</h2>
      <div class="recipe-list">
        <div class="recipe-card" v-for="(recipe, index) in featuredRecipes" :key="index">
          <h5>{{ recipe.title }}</h5>
          <img :src="recipe.image" :alt="recipe.title" />
          <p>{{ recipe.description }}</p>
          <router-link :to="`/recipe/${recipe.id}`" class="btn btn-success">Ver Receta</router-link>
        </div>
      </div>
    </section>

    <section class="about">
      <h2>Sobre Nosotros</h2>
      <p>En Cocina Fácil, nuestra misión es hacer que la cocina sea accesible y divertida para todos. Somos un equipo apasionado por compartir recetas fáciles y sabrosas que pueden preparar tanto principiantes como expertos. Creemos que la buena comida no debe ser complicada, y por eso nos enfocamos en ofrecerte ideas prácticas, consejos útiles y trucos de cocina para que disfrutes de cada momento en la cocina sin estrés.

Desde platos tradicionales hasta opciones modernas y saludables, en Cocina Fácil encontrarás una amplia variedad de recetas adaptadas a todos los gustos y necesidades. Nuestro objetivo es inspirarte a experimentar, a probar nuevos ingredientes y a disfrutar del proceso de cocinar y compartir tus creaciones con amigos y familia.

¡Únete a nuestra comunidad y descubre lo fácil y gratificante que puede ser cocinar en casa!</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Inicio',
  data() {
    return {
      featuredRecipes: [
        {
          id: 1,
          title: 'Ensalada Fresca de Verano',
          image: 'https://www.aldelis.com/wp-content/uploads/2018/07/ensaldas-de-verano-faciles-y-rapidas.jpg',
          description: 'Una ensalada refrescante y perfecta para los días calurosos.'
        },
        {
          id: 2,
          title: 'Tacos de Pollo',
          image: 'https://www.aceitesdeolivadeespana.com/wp-content/uploads/2024/05/Tacos-de-pollo.jpg',
          description: 'Tacos deliciosos con pollo sazonado y toppings frescos.'
        },
        {
          id: 3,
          title: 'Sopa de Tomate Casera',
          image: 'https://cdn0.uncomo.com/es/posts/3/0/9/como_hacer_sopa_de_tomate_casera_25903_600.webp',
          description: 'Una sopa de tomate rica y reconfortante para cualquier momento.'
        },
        {
          id: 4,
          title: 'Pasta Alfredo con Pollo',
          image: 'https://www.cocinamalher.com/sites/default/files/2021-10/Malher_web_1041.jpg',
          description: 'Pasta cremosa con salsa Alfredo y trozos de pollo.'
        },
        {
          id: 5,
          title: 'Smoothie de Mango y Plátano',
          image: 'https://www.elbuencampo.com/cdn/shop/articles/iStock-475118826.jpg?v=1690859323&width=1200',
          description: 'Un batido refrescante de mango y plátano, ideal para el desayuno.'
        },
        {
          id: 6,
          title: 'Pizza de Pepperoni',
          image: 'https://ketoconlaura.com/cdn/shop/articles/pizza-keto-crujiente_1500x.jpg?v=1664890717',
          description: 'Pizza con una base crujiente, salsa de tomate y pepperoni.'
        }
      ]
    };
  }
};
</script>

<style scoped>
.home {
  font-family: 'Arial', sans-serif;
  padding: 20px;
}

.hero {
  text-align: center;
  background-color: #f8f9fa;
  padding: 50px 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.hero h1 {
  color: #28a745;
}

.hero p {
  margin: 10px 0 20px;
  color: #6c757d;
}

.btn-primary {
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
}

.btn-primary:hover {
  background-color: #218838;
}

.carousel-section {
  margin: 40px 0;
  display: flex;
  justify-content: center;
}

#carouselExampleIndicators {
  max-width: 800px;
  width: 100%;
}

.carousel-inner .carousel-item {
  display: flex;
  justify-content: center;
}

.carousel-image {
  width: 100%;
  height: 500px; 
  object-fit: cover;
  border-radius: 8px;
}

.carousel-indicators button {
  background-color: #28a745;
}

.carousel-control-prev,
.carousel-control-next {
  background-color: rgba(0, 0, 0, 0.5);
}

.featured-recipes {
  margin: 40px 0;
}

.recipe-list {
  display: flex;
  gap: 20px;
  overflow-x: auto;
}

.recipe-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 250px;
  text-align: center;
  background-color: #eef8ef;
}

.recipe-card img {
  max-width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
}

.btn-success {
  background-color: #28a745;
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
}

.btn-success:hover {
  background-color: #218838;
}

.about {
  margin-top: 40px;
  text-align: center;
  padding: 20px;
  background-color: #366d03;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.about p {
  color: #1d1f20;
}
</style>
