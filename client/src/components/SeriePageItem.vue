<template>
  <body>
    <img :src="serie.poster" />
    <h2>{{ serie.name }}</h2>
    <h5>Imdb Rating: {{ serie.imdbRating }}</h5>
    <router-link to="/directors">
      <h6>Director: {{ serie.director }}</h6>
    </router-link>
    <p class="info">{{ serie.genre }} | {{ serie.seasons }} seasons</p>
    <p class="releaseDate">{{ serie.releaseDate }}</p>
    <p>{{ serie.description }}</p>
  </body>
</template>

<script>
export default {
  name: 'serie-page-item',
  props: ['serie']
}
</script>

<style>
.releaseDate {
  width: 10ch;
  overflow: hidden;
}
</style>
