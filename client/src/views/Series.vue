<template>
  <div>
    <div class="series-content">
      <div class="all-series">
        <div class="search-field-series">
          <b-form-input id="searchInputSeries" v-model="searchWordSeries" placeholder="Enter series"></b-form-input>
          <button v-on:click="filterSeriesByName" type="button" id="myBtnSeries">Search</button>
        </div>
        <div class="mini-container-series">
          <h2 class="all-series-status">All Series</h2>
        </div>
        <div class="button-container">
          <button class="sort-series-button" @click="sortSeriesByRatingDesc">Sort by rating desc.</button>
          <button class="sort-series-button" @click="sortSeriesByRatingAsc">Sort by rating asc.</button>
        </div>
        <div class="item-series" v-for="serie in series" v-bind:key="serie._id">
          <router-link :to="'/series/' + serie._id">
            <serie-item id="serie" v-bind:serie="serie" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SerieItem from '@/components/SerieItem.vue'
import { Api } from '@/Api'

export default {
  name: 'series',
  components: {
    'serie-item': SerieItem
  },
  methods: {
    sortSeriesByRatingDesc() {
      this.series.sort(function (a, b) {
        return b.imdbRating - a.imdbRating
      })
    },
    sortSeriesByRatingAsc() {
      this.series.sort(function (a, b) {
        return a.imdbRating - b.imdbRating
      })
    },
    filterSeriesByName() {
      if (this.searchWordSeries !== '') {
        Api.get('/series/' + this.searchWordSeries + '/ids')
          .then((response) => {
            console.log(response)
            this.series = response.data.series
          })
          .catch((error) => {
            this.series = []
            console.log(error)
          })
      }
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
      series: [],
      searchWordSeries: ''
    }
  }
}
</script>

<style lang="scss">
.search-field-series {
  position: flex;
  display: flex;
  margin-top: 10px;
  margin-left: 30%;
  #myBtnSeries {
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
.mini-container-series {
  display: flex;
  flex-direction: row;
  .all-series-status {
    position: absolute;
    white-space: nowrap;
    margin-left: 3%;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: #496583;
    font-weight: bold;
    color: #42b983;
  }
}
.button-container {
  display:flex;
  flex-direction: column;
  margin-top: 40px;
}
.sort-series-button {
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
.all-series {
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
.all-series::-webkit-scrollbar {
  width: 10px;
}
.all-series::-webkit-scrollbar-track {
  background-color: #b5cbec;
  border-radius: 5px;
}
.all-series::-webkit-scrollbar-thumb {
  background-color: #42b983;
  border-radius: 20px;
  border: 3px solid #b5cbec;
}
.all-series .item-series {
  min-width: 250px;
  margin-top: 25px;
  margin: 25px;
}

@media screen and (max-width: 600px) {
  .search-field-series {
    position: flex;
    display: flex;
    margin-top: 25px;
    margin-left: 5%;
    margin-right: 5%;
    #myBtnSeries {
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
  .mini-container-series {
    display: flex;
    flex-direction: row;
    .all-series-status {
      font-weight: bold;
      color: #42b983;
      -webkit-text-stroke-width: 0.5px;
      -webkit-text-stroke-color: #496583;
      writing-mode: vertical-rl;
      text-orientation: upright;
      margin-left: 0px;
      margin-top: 60px;
    }
  }
  .button-container {
    display:flex;
    flex-direction: row;
    margin-top: 40px;
    .sort-series-button {
      margin-top: 5px;
      margin-left: 15%;
      padding:0.3em 0.75em;
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
  .all-series {
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
  .all-series::-webkit-scrollbar {
    width: 10px;
  }
  .all-series::-webkit-scrollbar-track {
    background-color: #b5cbec;
    border-radius: 5px;
  }
  .all-series::-webkit-scrollbar-thumb {
    background-color: #42b983;
    border-radius: 20px;
    border: 3px solid #b5cbec;
  }
  .all-series .item-series {
    margin: 0 auto;
    width: 250px;
  }
}

@media screen and (min-width: 601px) {
  .search-field-series {
    position: absolute;
  }
}
</style>
