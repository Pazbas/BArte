<template>
  <nav class="navbar navbar-expand-lg px-4" style="background:#ffcfe6;">
    <a class="navbar-brand fw-bold" href="#">🌸 BordArte</a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="nav">
      <ul class="navbar-nav ms-auto">

        
        <li class="nav-item"><router-link class="nav-link" to="/">Inicio</router-link></li>
       <li class="nav-item"><router-link class="nav-link" to="/cursos">Cursos</router-link></li>

        
        <li v-if="!user" class="nav-item">
          <router-link class="nav-link fw-bold text-success" to="/registro">
            Hazte socio
          </router-link>
        </li>

       
        <li v-if="user" class="nav-item">
          <router-link 
            class="nav-link fw-bold text-success" 
            
            to="/socio">
            Panel Socio
          </router-link>
        </li>

        <!-- Saludo -->
        <li v-if="user" class="nav-item d-flex align-items-center me-3">
          <span class="fw-bold">Hola, {{ nombre }} 🌸</span>
        </li>

        <!-- Login / Logout -->
        <li v-if="!user" class="nav-item">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>

        <li v-if="user" class="nav-item">
          <button @click="logout" class="btn btn-sm btn-danger">Salir</button>
        </li>

      </ul>
    </div>
  </nav>
</template>

<script>
import { auth, db } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export default {
  data() {
    return {
      user: null,
      nombre: ""
    };
  },

  mounted() {
    onAuthStateChanged(auth, async (u) => {
      this.user = u;

      if (u) {
        const docRef = doc(db, "socios", u.uid);
        const snap = await getDoc(docRef);
        
        if (snap.exists()) {
          this.nombre = snap.data().nombre;
        }
      } else {
        this.nombre = "";
      }
    });
  },

  methods: {
    logout() {
      signOut(auth);
    }
  }
};
</script>

<style scoped>
.nav-link {
  font-weight: 500;
}

.navbar {
  border-bottom: 3px solid #f3b6d8;
}
</style>
