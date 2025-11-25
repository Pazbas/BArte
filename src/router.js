// src/router.js
import { createRouter, createWebHistory } from "vue-router";
import { auth } from "./firebase";

import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Registro from "./views/Registro.vue";
import Cursos from "./views/Cursos.vue";
import DashboardSocio from "./views/DashboardSocio.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/registro", component: Registro },
 { path: "/cursos", component: Cursos },
  { path: "/socio", component: DashboardSocio, meta: { requiresAuth: true } }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// PROTECCIÓN
router.beforeEach((to, from, next) => {
  const user = auth.currentUser;
  if (to.meta.requiresAuth && !user) next("/login");
  else next();
});

export default router;
