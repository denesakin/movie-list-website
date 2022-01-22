<template>
  <div class="container">
    <h1>Delete a movie!</h1>

    <form>
      <div class="row">
        <div class="label-col">
          <label for="id">ID of the movie</label>
        </div>
        <div class="input-col">
          <input
            type="text"
            id="id"
            name="id"
            placeholder="e.g. s3Hkr7JBJH6Bj6B7k"
            v-model="deletes.id"
          />
        </div>
      </div>
      <div class="submit">
        <b-button class="btn btn-danger mr-1" v-on:click="deleteMovie"
          >Delete</b-button
        >
        <!-- input type="submit" value="Delete" /-->
      </div>
    </form>

    <div class="del-all">
      <h3>Want to delete all movies?</h3>
      <b-button variant="danger" v-on:click="deleteAllMovies"
        >Delete All</b-button
      >
    </div>
  </div>
</template>

<script>
import { Api } from '@/Api'

export default {
  name: 'deleteMovie',
  methods: {
    deleteMovie() {
      console.log('deleted movie with id: ', this.deletes.id)
      Api.delete('/movies/' + this.deletes.id + '/admin/delete')
    },
    deleteAllMovies() {
      console.log('deleted all movies')
      Api.delete('/movies/admin/delete')
    }
  },
  data() {
    return {
      deletes: {
        id: null
      }
    }
  }
}
</script>

<style>
input[type='text'] {
  width: 75%;
  padding: 12px;
  border: 1px solid rgb(151, 151, 151);
  border-radius: 5px;
  resize: vertical;
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

.del-all {
  margin-top: 45px;
}

input[type='submit'] {
  background-color: #3c60a3;
  color: white;
  width: 30%;
  padding: 10px 25px;
  margin-top: 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button[type='button'] {
  color: white;
  width: 30%;
  padding: 10px 25px;
  margin-top: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

@media screen and (max-width: 500px) {
  .label-col,
  .input-col,
  input[type='submit'],
  button[type='button'] {
    width: 100%;
    margin-top: 20;
    float: none;
    text-align: center;
  }
}
</style>
