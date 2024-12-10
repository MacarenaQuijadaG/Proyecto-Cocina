<template>
  <div class="about">
    <h1 class="text-center mt-4">Formulario de Inscripción</h1>
  </div>

  <section>
    <div class="container mt-5">
      <form class="row g-3 p-4 shadow-lg rounded" style="background-color: #f9f9f9;" @submit.prevent="validateForm">
        <div class="row g-3">
          <div class="col-md-6 mb-3">
            <label for="inputName4" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="inputName4" v-model="formData.nombre" placeholder="Ingrese su nombre">
          </div>
          <div class="col-md-6 mb-3">
            <label for="inputlastName4" class="form-label">Apellido</label>
            <input type="text" class="form-control" id="inputLastName4" v-model="formData.apellido" placeholder="Ingrese su apellido">
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <label for="inputEmail4" class="form-label">Email</label>
          <input type="email" class="form-control" id="inputEmail4" v-model="formData.email" placeholder="example@email.com">
        </div>
        <div class="col-md-6 mb-3">
          <label for="inputPassword4" class="form-label">Contraseña</label>
          <input type="password" class="form-control" id="inputPassword4" v-model="formData.password" placeholder="********">
        </div>
        <div class="col-12 mb-3">
          <label for="inputAddress" class="form-label">Dirección</label>
          <input type="text" class="form-control" id="inputAddress" v-model="formData.direccion" placeholder="Ingrese su dirección completa">
        </div>
        <div class="col-md-6 mb-3">
          <label for="inputCity" class="form-label">Ciudad</label>
          <input type="text" class="form-control" id="inputCity" v-model="formData.ciudad" placeholder="Ingrese su ciudad">
        </div>
        <div class="col-md-2 mb-3">
          <label for="inputZip" class="form-label">Código postal</label>
          <input type="text" class="form-control" id="inputZip" v-model="formData.codigoPostal" placeholder="000000">
        </div>
        <div class="col-md-4 mb-3">
          <label for="inputState" class="form-label">Estado</label>
          <select id="inputState" class="form-select" v-model="formData.estado">
            <option selected disabled>Elige...</option>
            <option>Soltero</option>
            <option>Casado</option>
            <option>Viudo</option>
            <option>Otro</option>
          </select>
        </div>
        <div class="col-12 d-flex align-items-center mb-3">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" v-model="formData.verificado">
            <label class="form-check-label ms-2" for="gridCheck">
              Verifícame
            </label>
          </div>
        </div>
        <div v-if="errorMessage" class="alert alert-danger" role="alert">
          {{ errorMessage }}
        </div>
        <div class="col-12 mb-3">
          <button type="submit" class="btn btn-primary w-100">Ingresar</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        direccion: '',
        ciudad: '',
        codigoPostal: '',
        estado: '',
        verificado: false
      },
      errorMessage: ''
    };
  },
  methods: {
    validateForm() {
      const { nombre, apellido, email, password, direccion, ciudad, codigoPostal, estado, verificado } = this.formData;
      if (!nombre || !apellido || !email || !password || !direccion || !ciudad || !codigoPostal || !estado || !verificado) {
        this.errorMessage = 'Todos los campos son obligatorios y debes aceptar la verificación.';
      } else {
        this.errorMessage = '';
        alert('Se ha Creado con exito');
        // lógica para enviar los datos
      }
    }
  }
};
</script>

<style>
.about {
  background-color: #218838;
  color: white;
  padding: 20px;
  border-radius: 10px;
}

form {
  border: 2px solid #ddd;
}

form label {
  font-weight: bold;
}

form input, form select {
  border-radius: 5px;
}

form input:focus, form select:focus {
  border-color: #42b942;
  box-shadow: 0 0 5px rgba(55, 158, 94, 0.5);
}

.btn-primary {
  background-color: #165c05;
  border: none;
  transition: background-color 0.3s;
}

.btn-primary:hover {
  background-color: #218838;
}

.alert {
  margin-top: 10px;
}

h1 {
  font-family: 'Arial', sans-serif;
  font-weight: 700;
}
</style>
