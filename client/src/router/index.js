import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Tasks from '../views/Tasks.vue'
import Newtask from '../views/Newtask.vue'
import Notfound from '../views/Notfound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path : "/tasks",
    name : "Tasks",
    component : Tasks
  },
  {
    path : "/add-task",
    name : "Newtask",
    component : Newtask
  },
 
  {
   path : "/:catchAll(.*)",
   name : "Notfound",
   component : Notfound
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
