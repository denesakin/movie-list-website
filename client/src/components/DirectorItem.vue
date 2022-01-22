<template>
  <div class="directors-list">
    <div class="director">
      <div class="product-image">
        <img class="img-director" style="background-color: #fdff83;" :src="director.image" alt="Director Image" />
      </div>
      <div class="detail">
        <h3>{{ director.fullName }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'director-item',
  props: ['director']
}
</script>

<style lang="scss">
.directors-list {
    display: flex;
    flex-wrap: wrap;
    margin: 16px 8px;
    .director {
      width: 150px;
      flex: 1 1 50%;
      padding: 16px 8px;
      display: flex;
      flex-direction: row;
      height: 100%;
        .product-image {
          position: relative;
          display: block;
          .img-director {
            display: block;
            width: 250px;
            height: 450px;
            object-fit: cover;
          }
        }
        .detail {
          background-color: #496583;
          padding: 16px 8px;
          flex: 1 1 100%;
          border-radius: 0px 0px 8px 8px;
          h3 {
            color: #FFF;
            font-weight: 600;
            font-size: 18px;
            writing-mode: vertical-rl;
            text-orientation: upright;
            text-transform: capitalize;
          }
        }
      }
    }
</style>
