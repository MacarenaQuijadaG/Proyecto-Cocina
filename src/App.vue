<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <i class="fas fa-utensils me-2"></i>Cocina Fácil
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/recipes">
              <i class="fas fa-book-open me-2"></i>Recetas
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/ingredients">
              <i class="fas fa-carrot me-2"></i>Ingredientes
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/blog">
              <i class="fas fa-blog me-2"></i>Blog
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="">
              <i class="fas fa-info-circle me-2"></i>Acerca de
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">
              <i class="fas fa-user me-2"></i>Iniciar Sesión
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn btn-success nav-link text-white" to="/about">
              <i class="fas fa-user-plus me-2"></i>Regístrate
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
/* Estilo del logo y del título */
.navbar-brand {
  font-family: "Arial", sans-serif;
  font-weight: bold;
  color: #28a745 !important;
}

.navbar-brand:hover {
  color: #218838 !important;
  text-decoration: none;
}

/* Enlaces */
.nav-link {
  color: #6c757d !important;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #28a745 !important;
}

/* Botón de registro */
.btn-success {
  font-weight: bold;
  padding: 5px 15px;
  transition: background-color 0.3s;
}

.btn-success:hover {
  background-color: #218838;
}
</style>
