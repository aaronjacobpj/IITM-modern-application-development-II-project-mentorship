import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import WeeksView from '../views/WeeksView.vue';
import Week1 from "../components/weeks/indexes/Week1.vue";
import Notes1 from "../components/weeks/notes/Notes1.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/week',
      name: 'week',
      component: WeeksView,
      children: [{path: "1", name: "Week1", component: Week1},
        {path: "1/notes", name: "Week1Notes", component: Notes1},
      ]
    },
    
  ]
})

export default router
