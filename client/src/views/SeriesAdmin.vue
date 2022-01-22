<template>
  <div class="all-series-admin">
    <div class="mini-container-series">
      <h3>Here are all the series in our system</h3>
      <b-button class="delete-series" variant="danger" v-on:click="deleteAllSeries"
        >Delete All</b-button
      >
    </div>
    <div id="series" v-for="serie in series" v-bind:key="serie._id">
      <router-link :to="'/admin/series/' + serie._id + '/edit'">
        <serie-item id="serie" v-bind:serie="serie" />
      </router-link>
    </div>
  </div>
</template>

<script>
import SerieItem from '../components/SerieItem.vue'
import { Api } from '@/Api'

export default {
  name: 'series',
  components: {
    'serie-item': SerieItem
  },
  methods: {
    deleteAllSeries() {
      Api.delete('/series')
    }
  },
  mounted() {
    Api.get('/series')
      .then((response) => {
        console.log(response)
        this.series = response.data.series
      })
      .catch((error) => {
        this.series = []
        console.log(error)
      })
      .then(() => {
        console.log('this runs after an error or success')
      })
  },

  data() {
    return {
      series: []
    }
  }
}
</script>

<style>
.all-series-admin {
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
.all-series-admin::-webkit-scrollbar {
  width: 10px;
}
.all-series-admin::-webkit-scrollbar-track {
  background-color: #b5cbec;
  border-radius: 5px;
}
.all-series-admin::-webkit-scrollbar-thumb {
  background-color: #42b983;
  border-radius: 20px;
  border: 3px solid #b5cbec;
}
.all-series-admin .series {
  min-width: 234px;
  margin-top: 65px;
  margin-left: 25px;
}
.mini-container-series {
  position: absolute;
  display: flex;
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 75px;
}
.mini-container-series .delete-series {
  position: relative;
  margin-left: 20px;
  margin-right: 20px;
  padding: 12px 12px;
  font-size: 16px;
}
</style>
