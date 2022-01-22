<template>
  <div>
    <div id="serie-gen" :key="(serieId = $route.params.id)">
      <b-container class="bv-example-row" style="background-color: white">
  <b-row style="background-color: white">
    <b-col cols="12" md="4"><img id="serie-image" :src="serie.poster" /></b-col>
    <b-col><div class="serie-details">
        <h2 id="serie-name">{{ serie.name }}</h2>
        <div class="serie-info">
        <p>{{ serie.genre }} | {{ serie.seasons }} seasons</p>
        <p>Imdb Rating: {{ serie.imdbRating }}</p>
        <p>Release Date: {{ serie.releaseDate }}</p>
        <p>Description: {{ serie.description }}</p>
        <router-link :to="'/directors/' + serie.director">
          <div v-for="director in directors" v-bind:key="director">
            <p v-if="director._id === serie.director">
              Director: {{ director.fullName }}
            </p>
          </div>
        </router-link>
        </div>
        </div></b-col>
  </b-row>
    </b-container>
    </div>
  </div>
</template>

<script>
import { Api } from '@/Api'

export default {
  name: 'serie',
  components: {},
  mounted() {
    Api.get('/series/' + this.serieId)
      .then(response => {
        console.log(response)
        this.serie = response.data
      })
      .catch(error => {
        console.log(error)
      })
      .then(() => {
        console.log('this runs after an error or success')
      })
    Api.get('/directors')
      .then(response => {
        console.log(response)
        this.directors = response.data.directors
      })
      .catch(error => {
        console.log(error)
      })
      .then(() => {
        console.log('this runs after an error or success')
      })
  },
  data() {
    return {
      serie: {
        name: '',
        poster: '',
        seasons: '',
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
#serie-image {
  width: 100%;
}
#serie-name {
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 45px;
  font-weight: bold;
}
.serie-details {
  display: fixed;
}
</style>
