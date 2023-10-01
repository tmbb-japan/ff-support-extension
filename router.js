import { createRouter, createWebHistory } from 'vue-router';
import Capture from '/src/components/Capture.vue';
import Error from '/src/components/Error.vue';

const routes = [
  { name: 'home' path: '/', component: Capture },
  { name: 'error', path: '/error', component: Error },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const errorOccurred = true;
  const errorMessage = 'Something went wrong';

  if (errorOccurred) {
    next({ name: 'error', params: { error: errorMessage } });
  } else {
    next();
  }
});


export default router;
