<template>
  <div class="all-movies-admin">
    <div class="mini-container-movies">
      <h3>Here are all the movies in our system</h3>
      <b-button
        class="delete-movies"
        variant="danger"
        v-on:click="deleteAllMovies"
        >Delete All</b-button>
    </div>
    <div class="movies" v-for="movie in movies" v-bind:key="movie._id">
      <router-link :to="'/admin/movies/' + movie._id + '/edit'">
        <movie-item id="movie" v-bind:movie="movie" />
      </router-link>
    </div>
  </div>
</template>

<script>
import MovieItem from '../components/MovieItem.vue'
import { Api } from '@/Api'

export default {
  name: 'movies',
  components: {
    'movie-item': MovieItem
  },
  methods: {
    deleteAllMovies() {
      Api.delete('/movies')
    }
  },
  mounted() {
    Api.get('/movies')
      .then((response) => {
        console.log(response)
        this.movies = response.data.movies
      })
      .catch((error) => {
        this.movies = []
        console.log(error)
      })
      .then(() => {
        console.log('this runs after an error or success')
      })
  },

  data() {
    return {
      movies: []
    }
  }
}
</script>

<style>
.all-movies-admin {
  border-radius: 5px;
  background-color: #b5cbec;
  margin-right: 10%;
  margin-left: 10%;
  margin-bottom: 20px;
  position: flex;
  display: flex;
  height: 500px;
  overflow-x: auto;
}
.all-movies-admin::-webkit-scrollbar {
  width: 10px;
}
.all-movies-admin::-webkit-scrollbar-track {
  background-color: #b5cbec;
  border-radius: 5px;
}
.all-movies-admin::-webkit-scrollbar-thumb {
  background-color: #42b983;
  border-radius: 20px;
  border: 3px solid #b5cbec;
}
.all-movies-admin .movies {
  min-width: 250px;
  margin-top: 65px;
  margin-left: 25px;
}
.mini-container-movies {
  position: absolute;
  display: flex;
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 75px;
}
.mini-container-movies .delete-movies {
  position: relative;
  margin-left: 20px;
  margin-right: 20px;
  padding: 12px 12px;
  font-size: 16px;
}
</style>
