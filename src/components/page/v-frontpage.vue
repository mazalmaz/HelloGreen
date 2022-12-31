<template>
  <main class="main frontpage">
    <div class="container">
      <div class="frontpage__swiper mb-48">
        <swiper
          :navigation="{
            prevEl: prev,
            nextEl: next,
          }"
          :modules="modules"
          :slides-per-view="2"
          :space-between="20"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide @click="sliderPopUp">
            <div class="swiper-slide__item hits">
              <div>
                <h3>
                  Сэндвич <br />
                  в подарок!
                </h3>
                <p>при покупке 2 супов дня</p>
              </div>
              <img
                src="../../assets/img/dish.png"
                alt=""
                class="swiper-slide__pic"
              />
            </div>
          </swiper-slide>
          <swiper-slide @click="sliderPopUp">
            <div class="swiper-slide__item hits">
              <div>
                <h3>
                  Сэндвич <br />
                  в подарок!
                </h3>
                <p>при покупке 2 супов дня</p>
              </div>
              <img
                src="../../assets/img/dish.png"
                alt=""
                class="swiper-slide__pic"
              />
            </div>
          </swiper-slide>
          <swiper-slide @click="sliderPopUp">
            <div class="swiper-slide__item hits">
              <div>
                <h3>
                  Сэндвич <br />
                  в подарок!
                </h3>
                <p>при покупке 2 супов дня</p>
              </div>
              <img
                src="../../assets/img/dish.png"
                alt=""
                class="swiper-slide__pic"
              />
            </div>
          </swiper-slide>
        </swiper>
        <div ref="prev"  class="swiper-button__prev"></div>
        <div ref="next" class="swiper-button__next"></div>

        <div
          class="swiper-slide__popup swiper-popup"
          v-if="show"
          @click="sliderPopUpClick"
        >
          <div class="swiper-popup__wrap">
            <span class="swiper-popup__close" @click="sliderPopUpHide"></span>
            <div class="swiper-popup__intro">
              <span class="swiper-popup__label">Акция</span>
              <span class="swiper-popup__title">Сэндвич в подарок!</span>
              <span class="swiper-popup__intro">при покупке 2 супов дня</span>
              <p>
                Описание программы «Пригласить друга». Много слов про про этапы
                реферальной системы и широкого спектра возможностей для
                пользователя, решившего.
              </p>
              <p>
                Описание программы «Пригласить друга». Много слов про про этапы
                реферальной системы и широкого спектра
              </p>
            </div>
            <img
              src="../../assets/img/dish-full.png"
              alt=""
              class="swiper-popup__pic"
            />
          </div>
        </div>
      </div>

      <div class="frontpage__menu mb-48">
        <ul class="frontpage__catlist">
          <li v-for="(category, index) in products.categories" :key="index">
            <a href="#"> {{ category.name }} </a>
          </li>
        </ul>
      </div>

      <div v-for="(category, index) in products.categories" :key="index">
        <h2 class="frontpage__title">{{ category.name }}</h2>

        <div class="frontpage__items">
          <div
            class="frontpage__item"
            v-for="(product, i) in category.dishes"
            :key="i"
            @click="changeProductPopUp(product, category.name)"
          >
            <div class="frontpage__item__wrap">
              <div class="frontpage__item__title">{{ product.name }}</div>
              <span class="frontpage__item__price"> {{ product.price }} ₽</span>
              <span class="frontpage__item__tags">
                <span class="frontpage__item__tag no-milk">
                  <svg
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.5 9.57178C0.5 14.8581 4.75329 19.1436 10 19.1436C15.2467 19.1436 19.5 14.8581 19.5 9.57178C19.5 4.28543 15.2467 0 10 0C4.759 0.0138418 0.513738 4.29118 0.5 9.57178Z"
                      fill="white"
                    ></path>
                    <path
                      d="M18.7249 9.57188C18.735 13.1219 16.6191 16.3275 13.3658 17.6907C10.1126 19.0539 6.36453 18.3056 3.87313 15.7953C1.38174 13.2851 0.638992 9.50873 1.99199 6.23092C3.345 2.95311 6.52658 0.821149 10.0499 0.831335C12.3507 0.831335 14.5572 1.75221 16.1841 3.39138C17.811 5.03055 18.7249 7.25375 18.7249 9.57188Z"
                      fill="#575384"
                    ></path>
                    <path
                      d="M6.4999 8.61454L7.2749 5.66744C7.35947 5.26153 7.28799 4.83842 7.0749 4.48356C7.03484 4.36085 7.03484 4.22844 7.0749 4.10573C7.11316 3.77382 7.39328 3.52415 7.7249 3.52638H12.2249C12.5565 3.52415 12.8366 3.77382 12.8749 4.10573C12.9037 4.23 12.9037 4.35929 12.8749 4.48356C12.6488 4.83342 12.5764 5.26192 12.6749 5.66744L13.4249 8.61454C13.7235 9.76588 13.8747 10.951 13.8749 12.141V18.1359C13.8612 19.1694 13.0258 20 11.9999 19.9999H7.9999C7.50925 19.9999 7.0387 19.8035 6.69175 19.454C6.34481 19.1044 6.1499 18.6303 6.1499 18.1359V12.141C6.15349 10.9528 6.29614 9.7691 6.5749 8.61454"
                      fill="white"
                    ></path>
                    <path
                      d="M2.60034 14.2316L17.1753 4.73535"
                      stroke="#F25440"
                      stroke-width="1.3"
                    ></path>
                  </svg>
                </span>
                <span class="frontpage__item__tag vegetarian">
                  <svg
                    width="18"
                    height="14"
                    viewBox="0 0 18 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.98102 3.14999C-0.273972 5.55958 -0.327634 8.41795 0.836033 10.8729C1.9997 13.3279 4.24628 15.096 6.90602 15.65H7.20602C7.76573 14.3761 8.02245 12.9898 7.95602 11.6C7.92906 7.48566 5.01569 3.95619 0.98102 3.14999"
                      fill="#86D13F"
                    ></path>
                    <path
                      d="M7.50593 15.75C7.42657 15.7864 7.3353 15.7864 7.25593 15.75C5.10063 12.763 3.30491 9.53239 1.90593 6.125C1.8722 6.05214 1.86908 5.9688 1.89728 5.89363C1.92547 5.81845 1.98261 5.75771 2.05593 5.725C2.2286 5.65397 2.42662 5.73098 2.50593 5.9C3.89902 9.22194 5.6779 12.3685 7.80593 15.275C7.86098 15.327 7.89219 15.3993 7.89219 15.475C7.89219 15.5507 7.86098 15.623 7.80593 15.675L7.50593 15.75Z"
                      fill="#37A037"
                    ></path>
                    <path
                      d="M17.356 7.15C17.3632 4.2937 15.9599 1.61801 13.606 0C8.9924 1.42179 5.8543 5.69733 5.88103 10.525C5.88448 12.3194 6.32192 14.0863 7.15603 15.675C7.65811 15.7756 8.16897 15.8258 8.68103 15.825C13.4721 15.825 17.356 11.9411 17.356 7.15Z"
                      fill="#37A037"
                    ></path>
                    <path
                      d="M12.781 4.375C12.6385 4.39565 12.5266 4.50755 12.506 4.65C11.7004 8.66007 9.73594 12.3456 6.85596 15.25C6.85596 15.425 7.08096 15.525 7.15596 15.675H7.33096C10.3012 12.6969 12.2976 8.88725 13.056 4.75C13.0703 4.66365 13.0492 4.57517 12.9974 4.50459C12.9457 4.43401 12.8676 4.38728 12.781 4.375"
                      fill="#86D13F"
                    ></path>
                  </svg>
                </span>
              </span>
              <span class="frontpage__item__width">240 гр. 300 ккал</span>
            </div>
            <div>
              <span class="frontpage__item__pic">
                <img :src="product.imagePreview" alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <VProductModal
    :product="productProps"
    :show="showProductPopUp"
    :category="category"
  />
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/vue";
import VProductModal from "../module/v-product-modal.vue";
import "swiper/css";
import { Navigation } from 'swiper';

export default {
  name: "VFrontpage",

  components: {
    Swiper,
    SwiperSlide,
    VProductModal,
  },
  data: function () {
    return {
      show: false,
      products: [],
      productProps: [],
      category: "",
      showProductPopUp: false,
    };
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
  methods: {
    sliderPopUp() {
      this.show = true;
    },
    sliderPopUpHide() {
      console.log();
      this.show = false;
    },
    sliderPopUpClick(e) {
      let el = this.$refs.dropdown;
      let target = e.target;
      if (el !== target) {
        this.show = false;
      }
    },
    changeProductPopUp(product, category) {
      this.productProps = product;
      this.category = category;
      this.showProductPopUp = true;
    },
  },
  mounted() {
    axios
      .get("https://hello-green.ru/api/1/getFullNomenclature/")
      .then((response) => {
        this.products = response.data;
      });
    console.log(this.products);
  },
};
</script>