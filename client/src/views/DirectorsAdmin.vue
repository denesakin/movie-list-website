<template>
  <div class="all-directors-admin">
    <div class="mini-container-directors">
    <h1>Here are the directors</h1>
    <b-button class="delete-directors" variant="danger" v-on:click="deleteAllDirectors"
      >Delete All</b-button
    >
    </div>
    <div id="directors" v-for="director in directors" v-bind:key="director">
      <router-link :to="'/admin/directors/' + director._id + '/edit'">
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
  methods: {
    deleteAllDirectors() {
      Api.delete('/directors')
    }
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
.all-directors-admin {
  border-radius: 5px;
  background-color: #b5cbec;
  margin-left: 10%;
  margin-right: 10%;
  height: 600px;
  position: flex;
  display: flex;
  overflow-x: auto;
}
#directors {
  margin-left: 25px;
  margin-right: 25px;
  margin-top: 70px;
  width: 282px;
}
.all-directors-admin::-webkit-scrollbar {
  width: 10px;
}
.all-directors-admin::-webkit-scrollbar-track {
  background-color: #b5cbec;
  border-radius: 5px;
}
.all-directors-admin::-webkit-scrollbar-thumb {
  background-color: #42b983;
  border-radius: 20px;
  border: 3px solid #b5cbec;
}
.mini-container-directors {
  position: absolute;
  display: flex;
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 75px;
}
.mini-container-directors .delete-directors {
  position: relative;
  margin-left: 20px;
  margin-right: 20px;
  padding: 12px 12px;
  font-size: 16px;
}
</style>
