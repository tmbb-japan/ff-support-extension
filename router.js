import { createRouter, createWebHistory } from 'vue-router';
import Capture from '/src/components/Capture.vue';
import Error from '/src/components/Error.vue';

const routes = [
  { path: '/index.html', component: Capture },
  { name: 'error', path: '/error', component: Error },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to) => {
//   if(to.path === "/index.html") return '/';
// });

export default router;
