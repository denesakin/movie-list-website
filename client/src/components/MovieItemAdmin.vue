<template>
  <body class="item">
    <h3>Name: {{ movie.name }} | Id: {{ movie._id }}</h3>
  </body>
</template>

<script>
export default {
  name: 'movie-item-admin',
  props: ['movie']
}
</script>

<style>
.item {
  padding: 25px;
  background-color: rgb(158, 158, 158);
  border-radius: 5px;
}
.button {
  margin-left: 10px;
}
</style>
