<template>
  <div>
    <div class="logo">
      <h1 id="welcome-message">WELCOME TO LISTR</h1>
    </div>
    <div class="row">
      <div class="column1">
        <router-link id="movies-link" to="/movies"><h2 id="movie-message">CLICK HERE TO WATCH MOVIES!</h2></router-link>
      </div>
      <div class="column2">
        <router-link id="series-link" to="/series"><h2 id="series-message">CLICK HERE TO WATCH SERIES!</h2></router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.logo {
  background-color: lightblue;
  height: 400px;
  #welcome-message {
    position: relative;
    top: 45%;
  }
}
.row {
  display: flex;
  height: 400px;
}
.column1 {
  flex: 50%;
  background-color: blueviolet;
  #movies-link :hover {
    color: #42b983;
  }
  #movie-message {
    position: relative;
    top: 40%;
  }
}
.column2 {
  flex: 50%;
  background-color: red;
  #series-link :hover {
    color: #42b983;
  }
  #series-message {
    position: relative;
    top: 40%;
  }
}
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
  }
}
</style>
