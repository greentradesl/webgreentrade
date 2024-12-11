<template>
  <div id="app" class="container mt-5">
    <h1 class="text-center mb-4" style="color: #28a745;">Buscar Ruta a Nuestro Local</h1>

    <!-- Input de dirección y modo de transporte -->
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="input-group mb-3">
          <input
            type="text"
            v-model="startAddress"
            class="form-control"
            placeholder="Ingresa tu dirección"
            aria-label="Dirección de origen"
          />
          <button class="btn btn-success" @click="findRoute">
            Buscar Ruta
          </button>
        </div>
        <div class="d-flex justify-content-between align-items-center mb-3">
          <label for="travelMode" class="form-label mb-0">
            Modo de transporte:
          </label>
          <select v-model="travelMode" class="form-select w-50" id="travelMode">
            <option value="DRIVING">Conducción</option>
            <option value="TRANSIT">Transporte Público</option>
            <option value="WALKING">Caminando</option>
            <option value="BICYCLING">Bicicleta</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Mapa -->
    <div id="map" ref="map" class="rounded shadow" style="width: 100%; height: 500px;"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startAddress: "",
      travelMode: "DRIVING", // Modo de transporte inicial
      map: null,
      directionsService: null,
      directionsRenderer: null,
      destination: "Av. de Oporto, 80, Carabanchel, 28019, Madrid",
    };
  },
  methods: {
    // Inicialización del mapa
    initMap() {
      this.map = new google.maps.Map(this.$refs.map, {
        center: { lat: 40.39268, lng: -3.75185 }, // Coordenadas aproximadas del destino
        zoom: 14,
      });
      this.directionsService = new google.maps.DirectionsService();
      this.directionsRenderer = new google.maps.DirectionsRenderer();
      this.directionsRenderer.setMap(this.map);
    },
    // Buscar ruta
    findRoute() {
      if (!this.startAddress) {
        alert("Por favor, ingresa tu dirección.");
        return;
      }
      const request = {
        origin: this.startAddress,
        destination: this.destination,
        travelMode: this.travelMode,
      };
      this.directionsService.route(request, (result, status) => {
        if (status === "OK") {
          this.directionsRenderer.setDirections(result);
        } else {
          alert("No se pudo encontrar la ruta: " + status);
        }
      });
    },
  },
  mounted() {
    this.initMap();
  },
};
</script>

<style scoped>
/* Estilo del mapa */
#map {
  margin-top: 20px;
}

/* Mejoras en botones e inputs */
input[type="text"] {
  border-radius: 0.25rem;
}

button.btn {
  border-radius: 0.25rem;
  font-weight: bold;
}

/* Ajustes para la sección de transporte */
label {
  font-weight: 500;
}

select {
  border-radius: 0.25rem;
}
</style>
