<template>
  <div class="container mt-5">
    <h2 class="mb-4">Solicitar Reparación</h2>
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

      <!-- Detalles del producto -->
      <div class="form-group">
        <label for="productType">Tipo de Producto</label>
        <select id="productType" v-model="form.productType" class="form-control">
          <option value="telefono">Teléfono</option>
          <option value="ordenador">Ordenador</option>
          <option value="tablet">Tablet</option>
          <option value="otro">Otro</option>
        </select>
      </div>
      <div class="form-group">
        <label for="description">Descripción del Problema</label>
        <textarea id="description" v-model="form.description" class="form-control" rows="4" placeholder="Describe el problema" required></textarea>
      </div>

      <!-- Subir imágenes -->
      <div class="form-group">
        <label for="images">Cargar Fotos del Producto</label>
        <input type="file" id="images" @change="handleFileUpload" multiple class="form-control-file" />
      </div>

      <!-- Fecha preferida -->
      <div class="form-group">
        <label for="preferredDate">Fecha Preferida</label>
        <input type="date" id="preferredDate" v-model="form.preferredDate" class="form-control" />
      </div>

      <!-- Enviar formulario -->
      <button type="submit" class="btn btn-success btn-lg px-4 py-2">Enviar Solicitud</button>
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
        productType: "telefono",
        description: "",
        preferredDate: "",
        images: [],
      },
    };
  },
  methods: {
    handleFileUpload(event) {
      this.form.images = Array.from(event.target.files);
    },
    submitForm() {
      // Aquí procesas los datos del formulario
      console.log("Formulario enviado:", this.form);
      alert("Solicitud enviada. Nos pondremos en contacto contigo pronto.");
    },
  },
};
</script>

<style>
.container {
  max-width: 600px;
}
</style>
