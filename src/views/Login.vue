<template>
  <div class="pastel-card p-4 rounded shadow mx-auto" style="max-width:450px;">
    <h2 class="mb-3">Login</h2>

    <input v-model="email" type="email" class="form-control mb-3" placeholder="Email">
    <input v-model="password" type="password" class="form-control mb-3" placeholder="Contraseña">

    <button class="btn btn-success w-100" @click="login">Ingresar</button>
  </div>
</template>

<script>
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return { email:"", password:"" };
  },
  methods: {
    async login() {
      try {
        await signInWithEmailAndPassword(auth, this.email, this.password);
        this.$router.push("/socio");
      } catch (e) {
        alert("Error: " + e.message);
      }
    }
  }
}
</script>
