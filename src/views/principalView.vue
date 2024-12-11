<template>
  <div>
    <!-- Header con el usuario y los puntos -->
    <nav class="navbar navbar-light" style="background-color: #343a40;">
      <div class="container">
        <span class="navbar-brand mb-0 h1 text-black">Bienvenido, user1</span>
        <span class="badge badge-success h4">Puntos: {{ puntos }}</span>
      </div>
    </nav>

    <div class="container text-center mt-5" style="background-color: #f8f9fa; padding: 20px; border-radius: 10px;">
      <!-- Título principal centrado -->
      <h1 class="display-3 mb-5" style="color: #28a745;">GreenTrade</h1>

      <!-- Listado de productos -->
      <div class="row">
        <!-- Producto 1 -->
        <div class="col-md-4 mb-4" v-for="producto in productos" :key="producto.nombre">
          <div class="card mx-auto" style="width: 18rem;">
            <img class="card-img-top" :src="producto.imagen" alt="Producto">
            <div class="card-body">
              <h5 class="card-title">{{ producto.nombre }}</h5>
              <p class="card-text">{{ producto.descripcion }}</p>
              <p :class="{'text-success h4': producto.puntos <= puntos, 'text-danger h4': producto.puntos > puntos}">
                {{ producto.puntos }} puntos
              </p>
              <button class="btn btn-primary" :disabled="producto.puntos > puntos" @click="canjear(producto)">
                {{ producto.puntos > puntos ? 'No disponible' : 'Canjear' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import patinete from '@/assets/img1.png';
import smartphone from '@/assets/img2.avif';
import auriculares from '@/assets/img3.png';
import monitor from '@/assets/img4.png';
import tablet from '@/assets/img5.png';
import smartwatch from '@/assets/img6.png';
export default {
  name: 'Tienda',
  data() {
    return {
      puntos: 2000, // Puntos iniciales del usuario
      productos: [
        {
          nombre: 'Mi Electric Scooter 3',
          descripcion: 'Un patinete eléctrico eficiente con una velocidad máxima de 25 km/h. Ideal para moverte por la ciudad de forma ecológica.',
          puntos: 1500,
          imagen: patinete
        },
        {
          nombre: 'Smartphone Samsung Galaxy A52',
          descripcion: 'Un smartphone moderno y eficiente.',
          puntos: 1800,
          imagen: smartphone
        },
        {
          nombre: 'Auriculares Sony WH-1000XM4',
          descripcion: 'Auriculares inalámbricos con cancelación de ruido.',
          puntos: 2200,
          imagen: auriculares
        },
        {
          nombre: 'Monitor LG UltraWide 29"',
          descripcion: 'Monitor de 29 pulgadas con resolución ultrapanorámica.',
          puntos: 2500,
          imagen: monitor
        },
        {
          nombre: 'Tablet Apple iPad 9',
          descripcion: 'Disfruta de la nueva generación de iPads.',
          puntos: 2700,
          imagen: tablet
        },
        {
          nombre: 'Smartwatch Garmin Forerunner',
          descripcion: 'Reloj inteligente para los amantes del deporte.',
          puntos: 1600,
          imagen: smartwatch
        }
      ]
    };
  },
  methods: {
    canjear(producto) {
      if (this.puntos >= producto.puntos) {
        this.puntos -= producto.puntos;
        alert(`Has canjeado el producto: ${producto.nombre}`);
      }
    }
  }
};
</script>

<style scoped>
h1 {
  font-family: 'Arial', sans-serif;
  color: #28a745;
}

.navbar {
  margin-bottom: 30px;
}

.container {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  max-width: 90%;
}

.card {
  transition: transform 0.3s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
}

.btn:disabled {
  cursor: not-allowed;
  opacity: 0.65;
}
</style>
