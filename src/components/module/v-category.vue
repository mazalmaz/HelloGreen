<template>
  <div class="frontpage__menu mb-48 categorylist">
    <div ref="prev" class="categorylist__prev"></div>
    <div class="categorylist__slides">
      <swiper
        :navigation="{
          prevEl: prev,
          nextEl: next,
        }"
        :modules="modules"
        :slides-per-view="auto"
        :space-between="12"
        @swiper="onSwiper"

        :breakpoints="swiperOptions.breakpoints"
      >
        <swiper-slide
          v-for="(slide, index) in GET_PRODUCTS.categories"
          :key="index"
          class="slide-category"
        >
          <a :href="'#categoty_' + index" class="categorylist__item" :class="{active : index == 0}">
            {{ slide.name }}
          </a>
        </swiper-slide>
      </swiper>
    </div>

    <div ref="next" class="categorylist__next"></div>

    <!-- <ul class="frontpage__catlist">
      <li v-for="(category, index) in categories" :key="index" :class="{active: index == '0'}">
        <a :href="'#categoty_' + index" > {{ category }} </a>
      </li>
    </ul> -->

  </div>
</template>

<script>
import { ref } from "vue";
import { mapGetters, mapActions } from "vuex";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import "swiper/css";

export default {
  name: "Vcategory",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const prev = ref(null);
    const next = ref(null);
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      modules: [Navigation],
      onSwiper,
      onSlideChange,
      prev,
      next,
    };
  },
  data() {
    return {
      categories: [
        "Супы",
        "Салаты",
        "Десерты",
        "Сэндвичи",
        "Бургеры",
        "Суши",
        "Завтраки",
        "Пицца",
        "Супы",
        "Салаты",
        "Сэндвичи",
        "Десерты",
        "Бургеры",
        "Суши",
        "Завтраки",
        "Пицца",
      ],
      swiperOptions: {
        breakpoints: {
          320: {
            slidesPerView: "auto",
          },
          720: {
            slidesPerView: "auto",
          },
          980: {
            slidesPerView: "auto",
          },
          1024: {
            slidesPerView: "auto",
          },
          1280: {
            slidesPerView: "auto",
            slidesPerGroup: 1
          },
        },
      },
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

.slide-category {
  width: auto !important;
}

.swiper-button-lock {
  display: none !important;
}


// .swiper-slide {
//   width: 400px;
// }

// .swiper-slide:nth-child(2) {
//   width: 200px;
// }

.categorylist {
  // padding-left: 20px;
  // padding-right: 20px;
  display: flex;

  &__slides {
    width: calc(100% - 120px);

  }

  &__item {
    background: rgba(150, 194, 179, 0.1);
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding-left: 24px;
    padding-right: 24px;
  }
  &__item.active {
    background: #5e467d;
    color: #fff;
  }
  &__prev,
  &__next {
    background: #f1f5f5 url(../../assets/img/arrow.svg) no-repeat 14px center;
    border-radius: 50px;
    width: 42px;
    min-width: 42px;
    height: 46px;
    position: relative;
    z-index: 10;
    display: block;
    cursor: pointer;
  }
  &__next {
    transform: rotate(-180deg);
    margin-left: 16px;
  }
  &__prev {
    margin-right: 16px;
  }
  // &__prev.swiper-button-disabled, &__next.swiper-button-disabled {
  //   display: none;
  // }
}

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

  &__catlist > li > a:hover {
    // font-weight: bold;
    opacity: 0.7;
  }
  &__catlist > li.active > a {
    background: #5e467d;
    color: #fff;
  }
}
</style>