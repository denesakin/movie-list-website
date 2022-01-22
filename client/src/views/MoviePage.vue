<template>
  <div id="movie-gen" :key="(movieId = $route.params.id)">
    <b-container class="bv-example-row" style="background-color: white">
  <b-row style="background-color: white">
    <b-col cols="12" md="4"><img id="movie-image" :src="movie.poster" /></b-col>
    <b-col><div class="movie-details">
        <h2 id="movie-name">{{ movie.name }}</h2>
        <div class="movie-info">
        <p>Genre: {{ movie.genre }}</p>
        <p>Imdb Rating: {{ movie.imdbRating }}</p>
        <p>Duration: {{ movie.duration }} minutes</p>
        <p>Release Date: {{ movie.releaseDate }}</p>
        <p>Description: {{ movie.description }}</p>
        <router-link :to="'/directors/' + movie.director">
          <div v-for="director in directors" v-bind:key="director">
            <p v-if="director._id === movie.director">
              Director: {{ director.fullName }}
            </p>
          </div>
        </router-link>
        </div>
        </div></b-col>
  </b-row>
    </b-container>
  </div>
</template>

<script>
import { Api } from '@/Api'

export default {
  name: 'movie',
  components: {},
  mounted() {
    Api.get('/movies/' + this.movieId)
      .then((response) => {
        console.log(response)
        this.movie = response.data
      })
      .catch((error) => {
        console.log(error)
      })
      .then(() => {
        console.log('this runs after an error or success')
      })
    Api.get('/directors')
      .then((response) => {
        console.log(response)
        this.directors = response.data.directors
      })
      .catch((error) => {
        console.log(error)
      })
      .then(() => {
        console.log('this runs after an error or success')
      })
  },
  data() {
    return {
      movie: {
        name: '',
        poster: '',
        genre: '',
        imdbRating: 0,
        description: '',
        duration: 0,
        director: ''
      },
      director: {
        fullName: '',
        biography: '',
        image: ''
      }
    }
  }
}
</script>

<style>
#movie-image {
  width: 100%;
}
.movie-details {
  display: fixed;
}
#movie-name {
  font-size: 45px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
