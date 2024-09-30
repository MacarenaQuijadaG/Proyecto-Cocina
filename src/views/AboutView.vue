<template>
  <div class="about">
    <h1>Formulario de Inscripción</h1>
  </div>

    <section>
  <div class="container mt-5">
    <form class="row g-3">
        <div class="row g-3">
          <div class="col-md-6 mb-3">
            <label for="inputName4" class="form-label">Nombre</label>
             <input type="text" class="form-control" aria-label="Nombre">
          </div>
           <div class="col-md-6 mb-3">
            <label for="inputlastName4" class="form-label">Apellido</label>
             <input type="text" class="form-control" aria-label="Apellido">
          </div>
      </div>
      <div class="col-md-6 mb-3">
        <label for="inputEmail4" class="form-label">Email</label>
        <input type="email" class="form-control" id="inputEmail4">
      </div>
      <div class="col-md-6 mb-3">
        <label for="inputPassword4" class="form-label">Contraseña</label>
        <input type="password" class="form-control" id="inputPassword4">
      </div>
      <div class="col-12 mb-3">
        <label for="inputAddress" class="form-label">Dirección</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
      </div>
      <div class="col-md-6 mb-3">
        <label for="inputCity" class="form-label">Ciudad</label>
        <input type="text" class="form-control" id="inputCity">
      </div>
      <div class="col-md-4 mb-3">
        <label for="inputState" class="form-label">Estado</label>
        <select id="inputState" class="form-select">
          <option selected>Elige...</option>
          <option>...</option>
        </select>
      </div>
      <div class="col-md-2 mb-3">
        <label for="inputZip" class="form-label">Código postal</label>
        <input type="text" class="form-control" id="inputZip">
      </div>
      <div class="col-12 mb-3">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck">
          <label class="form-check-label" for="gridCheck">
            Verifícame
          </label>
        </div>
      </div>
      <div class="col-12 mb-3">
        <button type="submit" class="btn btn-primary">Ingresar</button>
      </div>
    </form>
  </div>
</section>


</template>

<script>

</script>

<style>
form label {
  text-align: left !important;
  display: inline-block; 
  width: 100%; 
}

</style>