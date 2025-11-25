<template>
  <div class="pastel-card p-4 rounded shadow">

    
    <h2 class="mb-4 text-center">Galería de Bordados</h2>

    <div id="galeriaCarousel" class="carousel slide mb-5" data-bs-ride="carousel">
      <div class="carousel-inner rounded shadow">

        <div 
          class="carousel-item" 
          v-for="(img, index) in imagenes" 
          :key="index"
          :class="{ active: index === 0 }"
        >
          <img :src="img" class="d-block w-100" style="max-height:450px; object-fit:cover;">
        </div>

      </div>

      
      <button class="carousel-control-prev" type="button" data-bs-target="#galeriaCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </button>

      <button class="carousel-control-next" type="button" data-bs-target="#galeriaCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
      </button>

    </div>

    <!-- 🌸 Sección: Quiénes Somos -->
    <div class="p-4 rounded pastel-subcard shadow">
      <h2 class="mb-3 text-center">¿Quiénes Somos?</h2>
      <p class="lead">
        Somos <strong>BordArte</strong>, una comunidad apasionada por el bordado, las manualidades y la creatividad.
        Nuestro objetivo es compartir técnicas, enseñar nuevas habilidades y crear un espacio seguro, amable y pastel
        donde todas las personas puedan expresarse a través del arte textil.
      </p>

      <p>
        Realizamos cursos, talleres y encuentros tanto virtuales como presenciales. Además, ofrecemos una membresía
        para quienes desean acceder a contenido exclusivo, patrones especiales y una comunidad privada llena de
        inspiración.
      </p>

      <p>
        ¡Si te apasiona el bordado, los hilos, las agujas y el mundo crafty, este es tu lugar! 🌸🧵✨
      </p>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
     
      imagenes: [
        "/flores.jpg",
 
      ]
    }
  }
}
</script>

<style scoped>
.pastel-card {
  background: #ffffffbb;
  backdrop-filter: blur(4px);
}

.pastel-subcard {
  background: #ffeef8;
}

h2 {
  color: #d678a3;
}
</style>
