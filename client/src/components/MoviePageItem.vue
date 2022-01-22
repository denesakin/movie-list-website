<template>
  <body>
    <img :src="movie.poster" />
    <h2>{{ movie.name }}</h2>
    <h5>Imdb Rating: {{ movie.imdbRating }}</h5>
    <router-link to="/directors">
      <h6>Director: {{ movie.director }}</h6>
    </router-link>
    <p class="info">
      {{ movie.genre }} | {{ movie.duration }} minutes |
      {{ movie.releaseDate }}
    </p>
    <p>{{ movie.description }}</p>
  </body>
</template>

<script>
export default {
  name: 'movie-page-item',
  props: ['movie']
}
</script>
