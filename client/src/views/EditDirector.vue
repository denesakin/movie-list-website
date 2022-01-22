<template>
  <div class="edit-container">
    <div class="headers" :key="(directorId = $route.params.id)">
      <h1>Edit or delete a director!</h1>
    </div>
    <form>
      <div class="row">
        <div class="label-col">
          <label for="fullname">Full Name</label>
        </div>
        <div class="input-col">
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="e.g. Albert Einstein"
            v-model="edits.fullName"
          />
        </div>
      </div>

      <div class="row">
        <div class="label-col">
          <label for="biography">Biography</label>
        </div>
        <div class="input-col">
          <input
            type="text"
            id="biography"
            name="biography"
            placeholder="Albert was borned in year....."
            v-model="edits.biography"
          />
        </div>
      </div>

      <div class="row">
        <div class="label-col">
          <label for="poster">Image</label>
        </div>
        <div class="input-col">
          <input
            type="url"
            id="poster"
            name="poster"
            placeholder="e.g. https://static.wikia.nocookie.net/marvel_dc/images/4/4b/Batman_Vol_3_86_Textless.jpg"
            v-model="edits.image"
          />
        </div>
      </div>

      <div class="submit">
        <button
          id="button"
          class="btn btn-primary mr-1"
          v-on:click="putDirector"
        >
          Edit
        </button>
      </div>
    </form>
    <div class="delete-but">
      <b-button
        id="delete-button"
        class="btn btn-danger mr-1"
        v-on:click="deleteDirector"
        >Delete</b-button
      >
    </div>
  </div>
</template>

<script>
import { Api } from '@/Api'

export default {
  name: 'editDirector',
  methods: {
    putDirector() {
      Api.put('/directors/' + this.directorId, this.edits)
    },
    deleteDirector() {
      Api.delete('/directors/' + this.directorId)
    }
  },
  data() {
    return {
      edits: {
        fullName: null,
        biography: null,
        image: null
      }
    }
  }
}
</script>

<style>
input[type='text'],
input[type='url'] {
  width: 75%;
  padding: 12px;
  border: 1px solid rgb(151, 151, 151);
  border-radius: 5px;
  resize: vertical;
}

label {
  padding: 10px 10px 10px;
  display: inline-block;
}

.submit {
  text-align: center;
}

.edit-container {
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

.headers {
  margin-bottom: 20px;
}

.delete-but {
  text-align: center;
  margin-top: 20px;
}

#delete-button {
  width: 20%;
}

@media screen and (max-width: 500px) {
  .label-col,
  .input-col,
  #button,
  .delete-but {
    width: 100%;
    margin-top: 20;
    float: none;
    text-align: center;
  }
}
</style>
