import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/Landing.vue'
import About from '../views/About.vue'
import Experience from '../views/Experience.vue'
import Projects from '../views/Projects.vue'
import Hobbies from '../views/Hobbies.vue'
import Blog from '../views/Blog.vue'
import BlogPost from '../views/BlogPost.vue'
import Education from '../views/Education.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'landing', component: Landing },
    { path: '/about', name: 'about', component: About },
    { path: '/experience', name: 'experience', component: Experience },
    { path: '/projects', name: 'projects', component: Projects },
    { path: '/hobbies', name: 'hobbies', component: Hobbies },
    { path: '/blog', name: 'blog', component: Blog },
    { path: '/blog/:slug', name: 'blog-post', component: BlogPost },
    { path: '/education', name: 'education', component: Education },
  ],
})

export default router