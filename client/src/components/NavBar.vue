<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/movies">Movies</router-link> |
    <router-link to="/series">Series</router-link> |
    <router-link to="/directors">Directors</router-link> |
    <span v-if="isLoggedIn">
        <router-link to="/admin/movies/create">Create Movie</router-link> |
        <router-link to="/admin/movies">Edit Movies</router-link> |
        <router-link to="/admin/series/create">Create Series</router-link> |
        <router-link to="/admin/series">Edit Series</router-link> |
        <router-link to="/admin/directors/create">Create Director</router-link> |
        <router-link to="/admin/directors">Edit Directors</router-link> |
      <a @click="logout">Logout</a>
    </span>
    <span v-else>
      <router-link id="login-link" to="/login">Login</router-link>
    </span>
  </div>
</template>
<script>
export default {
  name: 'NavBar',
  computed: {
    isLoggedIn: function () { return this.$store.getters.isAuthenticated }
  },
  methods: {
    async logout() {
      await this.$store.dispatch('LogOut')
      this.$router.push('/login')
    }
  }
}
</script>
<style>
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
a:hover {
  cursor: pointer;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
@media screen and (max-width: 600px) {
  #login-link {
    display: none;
  }
}
</style>
