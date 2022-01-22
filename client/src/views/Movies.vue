<template>
  <div>
    <div class="movies-content">
      <div class="all-movies">
        <div class="search-field">
          <b-form-input id="searchInput" v-model="searchWord" placeholder="Enter movie"></b-form-input>
          <button v-on:click="filterMoviesByName" type="button" id="myBtn">Search</button>
        </div>
        <div class="mini-container">
          <h2 class="all-movie-status">All Movies</h2>
          <button class="sort-movies-button" @click="sortMoviesByRatingDesc">Sort by rating desc.</button>
          <button class="sort-movies-button" @click="sortMoviesByRatingAsc">Sort by rating asc.</button>
        </div>
        <div class="item" v-for="movie in movies" v-bind:key="movie._id">
          <router-link :to="'/movies/' + movie._id">
            <movie-item id="movie" v-bind:movie="movie" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MovieItem from '@/components/MovieItem.vue'
import { Api } from '@/Api'

export default {
  name: 'movies',
  components: {
    'movie-item': MovieItem
  },
  methods: {
    sortMoviesByRatingDesc() {
      this.movies.sort(function (a, b) {
        return b.imdbRating - a.imdbRating
      })
    },
    sortMoviesByRatingAsc() {
      this.movies.sort(function (a, b) {
        return a.imdbRating - b.imdbRating
      })
    },
    filterMoviesByName() {
      if (this.searchWord !== '') {
        Api.get('/movies/' + this.searchWord + '/ids')
          .then((response) => {
            console.log(response)
            this.movies = response.data.movies
          })
          .catch((error) => {
            this.movies = []
            console.log(error)
          })
      }
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
      movies: [],
      searchWord: ''
    }
  }
}
</script>

<style lang="scss">
.search-field {
  position: flex;
  display: flex;
  margin-top: 10px;
  margin-left: 30%;
  #myBtn {
    padding:0.3em 0.75em;
    border-radius:2em;
    box-sizing: border-box;
    text-decoration:none;
    font-family:'Roboto',sans-serif;
    font-weight:300;
    color: #FFFFFF;
    background-color:#42b983;
    text-align:center;
  }
}
.mini-container {
  display: flex;
  flex-direction: column;
  .sort-movies-button {
    margin-top: 75px;
    margin-left: 15px;
    padding:0.3em 1.2em;
    border-radius:2em;
    box-sizing: border-box;
    text-decoration:none;
    font-family:'Roboto',sans-serif;
    font-weight:300;
    font-size: 15px;
    color: #FFFFFF;
    background-color:#42b983;
    text-align:center;
  }
}
.all-movies {
  border-radius: 5px;
  background-color: #b5cbec;
  margin-right: 10%;
  margin-left: 10%;
  margin-bottom: 20px;
  position: flex;
  display: flex;
  height: 450px;
  overflow-x: auto;
}
.all-movies::-webkit-scrollbar {
  width: 10px;
}
.all-movies::-webkit-scrollbar-track {
  background-color: #b5cbec;
  border-radius: 5px;
}
.all-movies::-webkit-scrollbar-thumb {
  background-color: #42b983;
  border-radius: 20px;
  border: 3px solid #b5cbec;
}
.all-movies .item {
  min-width: 250px;
  margin-top: 25px;
  margin: 25px;
}
.all-movie-status {
  position: absolute;
  margin-left: 3%;
  margin-top: 12px;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: #496583;
  font-weight: bold;
  color: #42b983;
}

@media screen and (max-width: 600px) {
  .search-field {
    position: flex;
    display: flex;
    margin-top: 25px;
    margin-left: 5%;
    margin-right: 5%;
    #myBtn {
      margin-left: 10px;
      padding:0.3em 1.2em;
      border-radius:2em;
      box-sizing: border-box;
      text-decoration:none;
      font-family:'Roboto',sans-serif;
      font-weight:300;
      color: #FFFFFF;
      background-color:#42b983;
      text-align:center;
  }
}
  .mini-container {
    display: flex;
    flex-direction: row;
    .sort-movies-button {
      margin-top: 25px;
      margin-left: 60px;
    }
  }
  .all-movie-status {
    font-weight: bold;
    color: #42b983;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: #496583;
    writing-mode: vertical-rl;
    text-orientation: upright;
    margin-left: 15px;
  }
  .all-movies {
    border-radius: 5px;
    background-color: #b5cbec;
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 25px;
    position: flex;
    display: flex;
    flex-direction: column;
    height: 850px;
    overflow-y: auto;
  }
  .all-movies::-webkit-scrollbar {
    width: 10px;
  }
  .all-movies::-webkit-scrollbar-track {
    background-color: #b5cbec;
    border-radius: 5px;
  }
  .all-movies::-webkit-scrollbar-thumb {
    background-color: #42b983;
    border-radius: 20px;
    border: 3px solid #b5cbec;
  }
  .all-movies .item {
    margin: 0 auto;
    width: 250px;
  }
}

@media screen and (min-width: 601px) {
  .search-field {
    position: absolute;
  }
}
</style>
