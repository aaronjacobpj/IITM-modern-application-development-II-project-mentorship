import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import WeeksView from '../views/WeeksView.vue';
import NotesView from "../views/NotesView.vue";
import MiscellaneousView from "../views/MiscellaneousView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/week/:nweek',
      name: 'week',
      component: WeeksView,
    },
    {
      path: "/week/:nweek/notes", 
      name:"notes", 
      component:NotesView
    },
    {
      path: "/week/miscellaneous",
      name: "miscellaneous",
      component: MiscellaneousView
    }
    
  ]
})

export default router
