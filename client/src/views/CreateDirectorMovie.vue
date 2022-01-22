<template>
  <div class="container" :key="(directorId = $route.params.id)">
    <h1>Create a movie</h1>
    <form>
      <div class="row">
        <div class="label-col">
          <label for="name">Name</label>
        </div>
        <div class="input-col">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="e.g. Batman Begins"
            v-model="posts.name"
          />
        </div>
      </div>

      <div class="row">
        <div class="label-col">
          <label for="genre">Genre</label>
        </div>
        <div class="input-col">
          <input
            type="text"
            id="genre"
            name="genre"
            placeholder="e.g. Action, Drama"
            v-model="posts.genre"
          />
        </div>
      </div>

      <div class="row">
        <div class="label-col">
          <label for="poster">Poster</label>
        </div>
        <div class="input-col">
          <input
            type="url"
            id="poster"
            name="poster"
            placeholder="e.g. https://static.wikia.nocookie.net/marvel_dc/images/4/4b/Batman_Vol_3_86_Textless.jpg"
            v-model="posts.poster"
          />
        </div>
      </div>

      <div class="row">
        <div class="label-col">
          <label for="imdbRating">IMDB Rating</label>
        </div>
        <div class="input-col">
          <input
            type="number"
            id="imdbRating"
            name="imdbRating"
            placeholder="e.g. 9.1"
            v-model="posts.imdbRating"
          />
        </div>
      </div>

      <div class="row">
        <div class="label-col">
          <label for="duration">Duration</label>
        </div>
        <div class="input-col">
          <input
            type="number"
            id="duration"
            name="duration"
            placeholder="e.g. 120"
            v-model="posts.duration"
          />
        </div>
      </div>

      <div class="row">
        <div class="label-col">
          <label for="releaseDate">Release Date</label>
        </div>
        <div class="input-col">
          <input
            type="date"
            id="releaseDate"
            name="releaseDate"
            placeholder="e.g. 12-08-2010"
            v-model="posts.releaseDate"
          />
        </div>
      </div>

      <div class="row">
        <div class="label-col">
          <label for="description">Description</label>
        </div>
        <div class="input-col">
          <input
            type="text"
            id="description"
            name="description"
            placeholder="e.g. A nice movie where batman..."
            v-model="posts.description"
            style="height:175px"
          />
        </div>
      </div>

      <div class="submit">
        <button
          id="button"
          class="btn btn-primary mr-1"
          v-on:click="postDirectorMovie"
        >
          Create
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { Api } from '@/Api'

export default {
  name: 'postDirectorMovie',
  methods: {
    postDirectorMovie() {
      Api.post('/directors/' + this.directorId + '/movies', this.posts)
    }
  },
  data() {
    return {
      posts: {
        name: null,
        poster: null,
        genre: null,
        imdbRating: null,
        description: null,
        duration: null,
        releaseDate: null
      }
    }
  }
}
</script>

<style>
.drow {
  display: none;
}
input[type='text'],
input[type='date'],
input[type='url'],
input[type='number'] {
  width: 75%;
  padding: 12px;
  border: 1px solid rgb(151, 151, 151);
  border-radius: 5px;
  resize: vertical;
}

input[type='submit'] {
  background-color: #3c60a3;
  color: white;
  width: 20%;
  padding: 10px 25px;
  margin-top: 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

label {
  padding: 10px 10px 10px;
  display: inline-block;
}

.submit {
  text-align: center;
}

.container {
  border-radius: 5px;
  background-color: #b5cbec;
  padding: 15px;
  margin: 25px;
}

.label-col {
  float: left;
  width: 15%;
  margin-top: 6px;
}

.input-col {
  float: left;
  width: 85%;
  margin-top: 6px;
}

#id {
  margin-bottom: 35px;
}

@media screen and (max-width: 500px) {
  .label-col,
  .input-col,
  input[type='submit'] {
    width: 100%;
    margin-top: 20;
    float: none;
    text-align: center;
  }
}
</style>
