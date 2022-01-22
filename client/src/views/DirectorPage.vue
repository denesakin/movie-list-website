<template>
  <div id="director-gen" :key="(directorId = $route.params.id)">
    <div class="row">
      <div class="column">
        <img id="director-img" :src="director.image" />
        <h2 id="director-name">{{ director.fullName }}</h2>
        <p id="director-bio">{{ director.biography }}</p>
      </div>
      <div class="column">
        <div class="directed-movies">
          <h5 id="directed-movies-text">Directed Movies</h5>
          <div id="director-movies" v-for="movie in movies" v-bind:key="movie">
            <router-link :to="'/movies/' + movie._id">
              <movie-item id="director-movie" v-bind:movie="movie" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MovieItem from '../components/MovieItem.vue'
import { Api } from '@/Api'

export default {
  name: 'director',
  components: {
    'movie-item': MovieItem
  },
  mounted() {
    Promise.all([
      Api.get('/directors/' + this.directorId)
        .then((firstResponse) => {
          console.log(firstResponse)
          this.director = firstResponse.data
        })
        .catch((error) => {
          console.log(error)
        }),
      Api.get('/directors/' + this.directorId + '/movies')
        .then((secondResponse) => {
          console.log(secondResponse)
          this.movies = secondResponse.data.movies
        })
        .catch((error) => {
          this.movies = []
          console.log(error)
        })
    ])
  },
  data() {
    return {
      director: {
        fullName: '',
        biography: '',
        image: ''
      },
      movies: [],
      test: ['1', '2', '3']
    }
  }
}
</script>

<style>
.row {
  display: flex;
}
.column {
  flex: 50%;
  position: center;
}
#director-img {
  width: 75%;
  margin: auto;
  display: block;
}
#director-name {
  font-size: 45px;
  font-weight: bold;
  margin-bottom: 20px;
}
#director-bio {
  font-size: 20px;
}

.directed-movies {
  margin-right: 10%;
  margin-left: 10%;
  margin-bottom: 20px;
  position: flex;
  display: flex;
  height: 450px;
  overflow-x: auto;
}
.directed-movies::-webkit-scrollbar {
  width: 10px;
}
.directed-movies::-webkit-scrollbar-track {
  background-color: white;
  border-radius: 5px;
}
.directed-movies::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  border-radius: 20px;
  border: 3px solid white;
}
#directed-movies-text {
  position: absolute;
  margin-left: 40px;
  margin-top: 12px;
  font-size: 24px;
  font-weight: bold;
}
#director-movies {
  min-width: 250px;
  margin-top: 30px;
  margin-left: 25px;
}

@media screen and (max-width: 600px) {
  .column {
    width: 100%;
  }
}
</style>
