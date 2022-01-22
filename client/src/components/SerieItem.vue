<template>
  <div class="series-list">
    <div class="series">
      <div class="product-image">
        <img style="background-color: #fdff83;" :src="serie.poster" alt="Serie Poster" />
        <div class="genre">{{ serie.genre }}</div>
      </div>
      <div class="detail">
        <p class="rating">{{ serie.imdbRating }}</p>
        <h3>{{ serie.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'serie-item',
  props: ['serie']
}
</script>

<style lang="scss">
.series-list {
    display: flex;
    flex-wrap: wrap;
    margin: 16px 8px;
    .series {
      width: 150px;
      flex: 1 1 50%;
      padding: 16px 8px;
      display: flex;
      flex-direction: column;
      height: 100%;
        .product-image {
          position: relative;
          display: block;
          img {
            display: block;
            width: 218px;
            height: 250px;
            object-fit: cover;
          }
          .genre {
            position: absolute;
            padding: 8px 16px;
            background-color: #42B883;
            color: #FFF;
            bottom: 16px;
            left: 0px;
            text-transform: capitalize;
          }
        }
        .detail {
          background-color: #496583;
          padding: 16px 8px;
          flex: 1 1 100%;
          border-radius: 0px 0px 8px 8px;
          .rating {
            color: #AAA;
            font-size: 14px;
          }
          h3 {
            color: #FFF;
            font-weight: 600;
            font-size: 18px;
          }
        }
      }
    }
</style>
