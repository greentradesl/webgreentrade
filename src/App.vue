<template>
  <!-- Header con enlaces -->
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <!-- Título de la marca -->
        <router-link class="navbar-brand" to="/">GreenTrade</router-link>

        <!-- Enlaces de navegación -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/buscar-local">Buscar Local</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/solicitar-reparacion">Solicitar Reparación</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/encargar-recogida">Encargar Recogida</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/canjear">Canjear</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/quienes-somos">Quienes Somos</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <!-- Contenido de la página principal -->
  <RouterView />
</template>

<style scoped>
/* Estilos personalizados para el header */
.navbar {
  font-family: Arial, sans-serif;
}

.nav-link {
  font-size: 18px;
  margin-right: 10px;
}

.navbar-brand {
  font-size: 24px;
  font-weight: bold;
}
</style>
