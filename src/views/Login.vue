<template>
    <div class="login-container">
      <h2>Iniciar sesión</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="username">Usuario</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="password">Contraseña</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit" class="btn-login">Iniciar sesión</button>
      </form>
      <p v-if="loginError" class="error-message">{{ loginError }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Login',
    data() {
      return {
        username: '',
        password: '',
        loginError: ''
      };
    },
    methods: {
      handleLogin() {
        if (this.username === 'usuario' && this.password === 'contraseña') {
          alert('Inicio de sesión exitoso');
          this.$router.push('/dashboard');
        } else {
          this.loginError = 'Usuario o contraseña incorrectos.';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 12px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    background-color: #f3fdf2; /* Fondo verde claro */
    color: #3d3d3d;
  }
  
  h2 {
    color: #4c9a6d; /* Verde oscuro */
    text-align: center;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: 600;
    color: #5a5a5a;
  }
  
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #d3d3d3;
    border-radius: 6px;
    box-sizing: border-box;
    font-size: 16px;
  }
  
  .btn-login {
    background-color: #6b8e23; /* Verde oliva */
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    width: 100%;
    transition: background-color 0.3s;
  }
  
  .btn-login:hover {
    background-color: #4a6d1f; /* Verde más oscuro */
  }
  
  .error-message {
    color: #d9534f; /* Rojo para los errores */
    margin-top: 10px;
    text-align: center;
    font-weight: 600;
  }
  </style>
  