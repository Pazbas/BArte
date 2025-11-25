<template>
  <div class="pastel-card p-5 rounded shadow">

    <h2 class="mb-4">Bienvenid@, {{ nombre }} 🌸</h2>
    <p class="lead">Este es tu panel de socia/o. Aquí verás tus beneficios, cursos y novedades.</p>

    
    <div class="card pastel-discount-card mt-4 shadow-sm">
      <div class="card-body">
        <h4 class="card-title text-center mb-3">💖 Descuento Exclusivo para Socios 💖</h4>

        <p class="card-text text-center">
          Como agradecimiento por formar parte de <strong>BordArte</strong>,
          te damos un <strong>20% de descuento</strong> en todos nuestros cursos.
        </p>

        <div class="text-center mt-4">
          <div class="discount-code p-3 rounded">
            CÓDIGO: <strong>BORDASOCIO20</strong>
          </div>
        </div>

        <p class="text-center mt-3 text-muted">
          *Válido durante todo el mes, ¡aprovéchalo!*
        </p>
      </div>
    </div>

  </div>

   <div class="row g-4">
      
      <div class="col-md-6">
        <div class="card pastel-card-img shadow-sm h-100">
          <img src="/cadena.jpg" class="card-img-top img-fluid" alt="Curso de Bordado">
          <div class="card-body">
            <h5 class="card-title">Hilos para bordar y coser</h5>
            <p class="card-text">
              Hilos Cadena, la mejor calidad para tus bordados, con un 20% de descuento.
            </p>
          </div>
        </div>
      </div>

      
      <div class="col-md-6">
        <div class="card pastel-card-img shadow-sm h-100">
          <img src="/revesderecho.jpg" class="card-img-top img-fluid" alt="Materiales">
          <div class="card-body">
            <h5 class="card-title">Kits y Materiales Exclusivos</h5>
            <p class="card-text">
              Kits exclusivos en RevesDerecho con un 20% de descuento.
            </p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

export default {
  data() {
    return {
      nombre: ""
    };
  },

  async mounted() {
    const user = auth.currentUser;
    if (user) {
      const ref = doc(db, "socios", user.uid);
      const snap = await getDoc(ref);

      if (snap.exists()) {
        this.nombre = snap.data().nombre;
      }
    }
  }
};
</script>

<style scoped>
.pastel-card {
  background: #ffffffbb;
  backdrop-filter: blur(3px);
}

.pastel-discount-card {
  background: #ffe6f2;
  border: 2px solid #f3b6d8;
}

.discount-code {
  background: #fff0f7;
  border: 2px dashed #d678a3;
  font-size: 1.2rem;
  color: #b44d80;
}
</style>
