<template>
  <main class="main frontpage">
    
    <div class="container">
      
      <VSwiper />
      <VCategory />
      <VProductList />

    </div>
  </main>


</template>

<script>

import VSwiper from "../module/v-swiper.vue"
import VCategory from "../module/v-category.vue"
import VProductList from "../module/v-product-list.vue"


export default {
  name: "VFrontpage",

  components: {
    VSwiper,
    VCategory,
    VProductList
  }
 
};
</script>