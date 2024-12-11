<template>
    <div>
        <!-- Contenido principal -->
        <div class="container text-center mt-5">
            <!-- Logo -->
            <img src="@/assets/logo.jpg" alt="Logo de GreenTrade" class="navbar-logo mb-4" />

            <!-- Título y descripción -->
            <h1 class="display-3 mb-3">
                Bienvenido a <span class="brand-highlight">GreenTrade</span>
            </h1>
            <p class="lead mb-5">Haz la diferencia con un comercio más sostenible y consciente.</p>

            <!-- Sección de características -->
            <div class="row mt-5">
                <!-- Característica 1 -->
                <div class="col-md-4 mb-4">
                    <div class="card feature-card h-100">
                        <div class="card-body">
                            <i class="bi bi-search display-4 mb-3"></i>
                            <h5 class="card-title">Buscar Local</h5>
                            <p class="card-text">Encuentra tiendas y servicios sostenibles cerca de ti.</p>
                        </div>
                    </div>
                </div>
                <!-- Característica 2 -->
                <div class="col-md-4 mb-4">
                    <div class="card feature-card h-100">
                        <div class="card-body">
                            <i class="bi bi-tools display-4 mb-3"></i>
                            <h5 class="card-title">Solicitar Reparación</h5>
                            <p class="card-text">Confía en nuestros expertos para reparar tus dispositivos.</p>
                        </div>
                    </div>
                </div>
                <!-- Característica 3 -->
                <div class="col-md-4 mb-4">
                    <div class="card feature-card h-100">
                        <div class="card-body">
                            <i class="bi bi-truck display-4 mb-3"></i>
                            <h5 class="card-title">Encargar Recogida</h5>
                            <p class="card-text">Programe una recogida para reciclar o intercambiar productos.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Llamado a la acción -->
            <button @click="showNewsletterModal" class="btn btn-success btn-lg px-4 py-2">
    Únete a la Comunidad
</button>

<!-- Modal -->
<div v-if="showModal" class="modal d-block">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Suscríbete al Boletín</h5>
                <button type="button" class="btn-close" @click="closeModal"></button>
            </div>
            <div class="modal-body">
                <form @submit.prevent="subscribe">
                    <div class="mb-3">
                        <label for="email" class="form-label">Correo Electrónico</label>
                        <input type="email" id="email" v-model="email" class="form-control" required>
                    </div>
                    <button type="submit" class="btn btn-success">Suscribirse</button>
                </form>
            </div>
        </div>
    </div>
</div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showModal: false,
            email: ''
        };
    },
    methods: {
        showNewsletterModal() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },
        subscribe() {
            alert(`Gracias por suscribirte, ${this.email}`);
            this.closeModal();
        }
    }
};
</script>

<style scoped>
/* Estilización general */
.container {
    max-width: 90%;
    background-color: #f8f9fa;
    padding: 30px;
    border-radius: 15px;
}

/* Logo */
.navbar-logo {
    height: 150px;
}

/* Título */
h1 {
    font-family: 'Arial', sans-serif;
    font-weight: bold;
    color: #000000;
    text-transform: capitalize;
}
.modal.d-block {
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}
/* Resalta la marca */
.brand-highlight {
    color: #28a745;
    font-style: italic;
}

/* Tarjetas de características */
.feature-card {
    border: none;
    border-radius: 15px;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    background-color: #ffffff;
}

.feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
}

/* Iconos */
.feature-card i {
    color: #28a745;
    transition: color 0.3s ease;
}

.feature-card:hover i {
    color: #1e7a33;
}

/* Botón de llamada a la acción */
.btn-success {
    font-size: 1.2rem;
    border-radius: 25px;
    background-color: #28a745;
    border: none;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

.btn-success:hover {
    background-color: #1e7a33;
    transform: scale(1.1);
}
</style>
