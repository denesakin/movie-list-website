<template>
  <div class="create-container">
    <h1>Create a director!</h1>

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
            v-model="posts.fullName"
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
            v-model="posts.biography"
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
            v-model="posts.image"
          />
        </div>
      </div>

      <div class="submit">
        <button
          id="button"
          class="btn btn-primary mr-1"
          v-on:click="postDirector"
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
  name: 'postDirector',
  methods: {
    postDirector() {
      Api.post('/directors', this.posts)
    }
  },
  data() {
    return {
      posts: {
        fullName: null,
        biography: null,
        image: null
      }
    }
  }
}
</script>

<style>
.create-container {
  border-radius: 5px;
  background-color: #b5cbec;
  padding: 15px;
  margin: 25px;
}

input[type='text'],
input[type='url'] {
  width: 75%;
  padding: 12px;
  border: 1px solid rgb(151, 151, 151);
  border-radius: 5px;
  resize: vertical;
}

#button {
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
