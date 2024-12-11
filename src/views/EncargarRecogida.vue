<template>
  <div class="container mt-5">
    <h2 class="mb-4">Encargar Recogida</h2>
    <form @submit.prevent="submitForm">
      <!-- Datos del cliente -->
      <div class="form-group">
        <label for="name">Nombre</label>
        <input type="text" id="name" v-model="form.name" class="form-control" placeholder="Tu nombre" required />
      </div>
      <div class="form-group">
        <label for="email">Correo Electrónico</label>
        <input type="email" id="email" v-model="form.email" class="form-control" placeholder="Tu correo electrónico" required />
      </div>
      <div class="form-group">
        <label for="phone">Número de Teléfono</label>
        <input type="tel" id="phone" v-model="form.phone" class="form-control" placeholder="Tu número de teléfono" />
      </div>

      <!-- Dirección -->
      <div class="form-group">
        <label for="address">Dirección de Recogida</label>
        <input type="text" id="address" v-model="form.address" class="form-control" placeholder="Tu dirección completa" required />
      </div>

      <!-- Fecha y hora preferidas -->
      <div class="form-group">
        <label for="pickupDate">Fecha de Recogida</label>
        <input type="date" id="pickupDate" v-model="form.pickupDate" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="pickupTime">Hora de Recogida</label>
        <input type="time" id="pickupTime" v-model="form.pickupTime" class="form-control" required />
      </div>

      <!-- Detalles adicionales -->
      <div class="form-group">
        <label for="additionalDetails">Detalles Adicionales</label>
        <textarea
          id="additionalDetails"
          v-model="form.additionalDetails"
          class="form-control"
          rows="4"
          placeholder="Indica si hay algo más que debamos saber (opcional)"
        ></textarea>
      </div>

      <!-- Enviar formulario -->
      <button type="submit" class="btn btn-success btn-lg px-4 py-2">Encargar Recogida</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        address: "",
        pickupDate: "",
        pickupTime: "",
        additionalDetails: "",
      },
    };
  },
  methods: {
    submitForm() {
      // Procesa los datos del formulario
      console.log("Solicitud de recogida:", this.form);
      alert("Tu solicitud de recogida ha sido enviada. Te contactaremos pronto.");
    },
  },
};
</script>

<style>
.container {
  max-width: 600px;
}
</style>
