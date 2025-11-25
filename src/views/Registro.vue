<template>
 

  <div class="pastel-card p-4 rounded shadow mx-auto" style="max-width:500px;">
    <h2 class="mb-3"> Crear Cuenta</h2>

    <input v-model="form.nombre" class="form-control mb-2" placeholder="Nombre">
    <input v-model="form.edad" type="number" class="form-control mb-2" placeholder="Edad">
    <input v-model="form.pais" class="form-control mb-2" placeholder="País">
    <input v-model="form.preferida" class="form-control mb-2" placeholder="Manualidad preferida">
    <input v-model="form.email" type="email" class="form-control mb-2" placeholder="Email">
    <input v-model="form.password" type="password" class="form-control mb-3" placeholder="Contraseña">

    <button class="btn btn-success w-100" @click="registrar">Registrar</button>
  </div>


</template>

<script>
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default {
  data() {
    return {
      form: {
        nombre: "",
        edad: "",
        pais: "",
        preferida: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async registrar() {
      try {
        const userCred = await createUserWithEmailAndPassword(auth, this.form.email, this.form.password);
        await setDoc(doc(db, "socios", userCred.user.uid), this.form);

        alert("Cuenta creada 💖");
        this.$router.push("/socio");
      } catch (e) {
        alert("Error: " + e.message);
      }
    }
  }
};
</script>
