<template>
  <div class="frontpage__menu mb-48">
    <ul class="frontpage__catlist">
      <li v-for="(category, index) in GET_PRODUCTS.categories" :key="index">
        <a :href="'#categoty_' + index"> {{ category.name }} </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Vcategory",
  data() {
    return {
    //   products: [],
    };
  },
  methods: {
    // ...mapActions(["GET_PRODUCTS_FROM_API"]),
  },
  computed: {
    ...mapGetters(["GET_PRODUCTS"]),
  },
  mounted() {
    // this.GET_PRODUCTS_FROM_API();

    // axios
    //   .get("https://hello-green.ru/api/1/getFullNomenclature/")
    //   .then((response) => {
    //     this.products = response.data;
    //   });
  },
};
</script>

<style lang="scss">
.frontpage {
  &__catlist {
    display: flex;
  }

  &__catlist > li {
    margin-right: 8.3px;
  }

  &__catlist > li > a {
    background: rgba(150, 194, 179, 0.1);
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding-left: 24px;
    padding-right: 24px;
  }

  &__catlist > li > a:hover,
  &__catlist > li.active > a {
    background: #5e467d;
    color: #fff;
  }
}
</style>