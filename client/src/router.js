import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import Home from './views/Home.vue'
import Movies from './views/Movies.vue'
import Series from './views/Series.vue'
import Directors from './views/Directors.vue'
import MoviePage from './views/MoviePage.vue'
import SeriePage from './views/SeriePage.vue'
import DirectorPage from './views/DirectorPage.vue'
import MoviesAdmin from './views/MoviesAdmin.vue'
import CreateMovie from './views/CreateMovie.vue'
import EditMovie from './views/EditMovie.vue'
import SeriesAdmin from './views/SeriesAdmin.vue'
import CreateSerie from './views/CreateSerie.vue'
import EditSerie from './views/EditSerie.vue'
import DirectorsAdmin from './views/DirectorsAdmin.vue'
import CreateDirector from './views/CreateDirector.vue'
import EditDirector from './views/EditDirector.vue'
import CreateDirectorMovie from './views/CreateDirectorMovie.vue'
import Register from './views/Register.vue'
import Login from './views/Login.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/movies',
      name: 'movies',
      component: Movies
    },
    {
      path: '/movies/:id',
      name: 'movie',
      component: MoviePage
    },
    {
      path: '/series',
      name: 'series',
      component: Series
    },
    {
      path: '/series/:id',
      name: 'serie',
      component: SeriePage
    },
    {
      path: '/directors',
      name: 'directors',
      component: Directors
    },
    {
      path: '/directors/:id',
      name: 'director',
      component: DirectorPage
    },
    {
      path: '/admin/movies',
      name: 'moviesadmin',
      component: MoviesAdmin,
      meta: { requiresAuth: true }
    },
    {
      path: '/admin/movies/create',
      name: 'createmovie',
      component: CreateMovie,
      meta: { requiresAuth: true }
    },
    {
      path: '/admin/directors/:id/movies/create',
      name: 'createdirectormovie',
      component: CreateDirectorMovie,
      meta: { requiresAuth: true }
    },
    {
      path: '/admin/movies/:id/edit',
      name: 'editmovie',
      component: EditMovie,
      meta: { requiresAuth: true }
    },
    {
      path: '/admin/series',
      name: 'seriesadmin',
      component: SeriesAdmin,
      meta: { requiresAuth: true }
    },
    {
      path: '/admin/series/create',
      name: 'createserie',
      component: CreateSerie,
      meta: { requiresAuth: true }
    },
    {
      path: '/admin/series/:id/edit',
      name: 'editserie',
      component: EditSerie,
      meta: { requiresAuth: true }
    },
    {
      path: '/admin/directors',
      name: 'directorsadmin',
      component: DirectorsAdmin,
      meta: { requiresAuth: true }
    },
    {
      path: '/admin/directors/create',
      name: 'createdirector',
      component: CreateDirector,
      meta: { requiresAuth: true }
    },
    {
      path: '/admin/directors/:id/edit',
      name: 'editdirector',
      component: EditDirector,
      meta: { requiresAuth: true }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: { guest: true }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { guest: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.guest)) {
    if (store.getters.isAuthenticated) {
      next('/')
      return
    }
    next()
  } else {
    next()
  }
})

export default router
