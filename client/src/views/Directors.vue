<template>
  <div class="all-directors-container">
    <div id="all-directors" v-for="director in directors" v-bind:key="director._id">
      <router-link :to="'/directors/' + director._id">
        <director-item id="director" v-bind:director="director" />
      </router-link>
    </div>
  </div>
</template>

<script>
import DirectorItem from '../components/DirectorItem.vue'
import { Api } from '@/Api'

export default {
  name: 'directors',
  components: {
    'director-item': DirectorItem
  },
  mounted() {
    Api.get('/directors')
      .then(response => {
        console.log(response)
        this.directors = response.data.directors
      })
      .catch(error => {
        this.directors = []
        console.log(error)
      })
      .then(() => {
        console.log('this runs after an error or success')
      })
  },

  data() {
    return {
      directors: []
    }
  }
}
</script>

<style>
.all-directors-container {
  border-radius: 5px;
  background-color: #b5cbec;
  margin-left: 10%;
  margin-right: 10%;
  position: flex;
  display: flex;
  overflow-x: auto;
}
#all-directors {
  margin-left: 25px;
  margin-right: 25px;
  margin-top: 25px;
  width: 282px;
}
.all-directors-container::-webkit-scrollbar {
  width: 10px;
}
.all-directors-container::-webkit-scrollbar-track {
  background-color: #b5cbec;
  border-radius: 5px;
}
.all-directors-container::-webkit-scrollbar-thumb {
  background-color: #42b983;
  border-radius: 20px;
  border: 3px solid #b5cbec;
}

@media screen and (max-width: 600px) {
  .all-directors-container {
    display: absolute;
    overflow-x: hidden;
  }
}
</style>
