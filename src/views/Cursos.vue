<template>
  <h2 class="mb-3">Cursos de Bordado</h2>

  <div class="row g-4">
    <div class="col-md-4" v-for="c in cursos" :key="c.titulo">
      <div class="card pastel-card shadow">
        <img :src="c.img" class="card-img-top">
        <div class="card-body">
          <h5>{{ c.titulo }}</h5>
          <p>{{ c.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cursos: [
        { titulo: "Bordado Inicial", desc: "Puntadas básicas.", img: "/puntadas.jpg" },
        { titulo: "Flores Bordadas", desc: "Técnicas florales.", img: "/flores2.jpg" },
        { titulo: "Bordado Avanzado", desc: "Relieves y texturas.", img: "/bordado3.jpg" },
      ]
    }
  }
};
</script>
