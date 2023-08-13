<!--  -->
<template>
  <div
    v-for="(category, index) in products.categories"
    :key="index"
    :index="index"
    :id="'box_' + index"
    ref="items"
    class="cat-box"
  >
    <h2 class="frontpage__title">{{ category.name }}</h2>

    <div class="frontpage__items" :id="'categoty_' + index">
      <div
        class="frontpage__item"
        v-for="(product, i) in category.dishes"
        :key="i"
        @click="changeProductPopUp(product, category.name)"
      >
        <div class="frontpage__item__wrap">
          <div>
            <div class="frontpage__item__title">{{ product.name }}</div>
            <span class="frontpage__item__price">
              {{ product.price }}
              <svg
                fill="#000000"
                width="16px"
                height="16px"
                viewBox="0 0 20 20"
                id="ruble"
                data-name="Flat Line"
                xmlns="http://www.w3.org/2000/svg"
                class="icon flat-line"
              >
                <path
                  id="primary"
                  d="M14,11H9V3h5a4,4,0,0,1,4,4h0A4,4,0,0,1,14,11ZM9,3V21"
                  style="
                    fill: none;
                    stroke: rgb(0, 0, 0);
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-width: 2;
                  "
                ></path>
                <line
                  id="primary-2"
                  data-name="primary"
                  x1="6"
                  y1="15"
                  x2="15"
                  y2="15"
                  style="
                    fill: none;
                    stroke: rgb(0, 0, 0);
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-width: 2;
                  "
                ></line>
              </svg>
            </span>
          </div>

          <div>
            <span class="frontpage__item__tags">
              <span class="frontpage__item__tag no-milk">
                <svg
                  width="20"
                  height="20"
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
                  height="18"
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
            <span class="frontpage__item__width"
              >{{ product.weight }} г.,
              {{ product.nutritionalValue.calories }} ккал</span
            >
          </div>
        </div>
        <div class="frontpage__item__rt" v-if="product.imagePreview">
          <span class="frontpage__item__pic">
            <img :src="product.imagePreview" alt="" />
          </span>
        </div>
      </div>
    </div>
  </div>

  <VProductModal
    v-if="modal"
    :product="productProps"
    :show="showPopUp"
    :category="category"
    v-on:closeProductPopUp="closeProductPopUp"
  />

  <div class="menu-fixed" v-if="isMenufix">
    <div class="container">
      <div class="menu-fixed__lt">
        <!-- <a href="#" class="menu-fixed__logo">
          <img src="../../assets/img/logo.svg" alt="" />
        </a> -->
        <ul class="menu-fixed__list">
          <li
            v-for="(category, i) in products.categories"
            :key="i"
            ref="list"
            :class="{ active: i == 0 }"
          >
            <a :href="'#box_' + i">{{ category.name }}</a>
          </li>
        </ul>
      </div>
      <!-- <span class="menu-fixed__burger"></span> -->
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import VProductModal from "../module/v-product-modal.vue";

export default {
  name: "VProductList",
  components: {
    VProductModal,
  },
  data() {
    return {
      productProps: [],
      category: "",
      // showProductPopUp: false,
      isMenufix: false,
      showPopUp: false,
      modal: false,
    };
  },
  computed: {
    ...mapState(["products"]),
  },

  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
    console.log("сработало");
  },

  created() {
    window.addEventListener("scroll", this.handleScroll);
  },

  updated() {
    let items = this.$refs.items;
    let list = this.$refs.list;

    if (list) {
      const changeNav = (entries, observer) => {
        entries.forEach((entry) => {
          // чекаем, то элемент пересекает наблюдаемую область более, чем на 55%
          if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
            // удаляем активный класс у элемента меню
            // document.querySelector('.active').classList.remove('active');
            // получаем ID секции, которая текущая
            let id = entry.target.getAttribute("index");

            list.forEach((element) => {
              if (element.classList.contains("active"))
                element.classList.remove("active");
            });

            list.forEach((element, index) => {
              if (index == id) element.classList.add("active");
            });
          }
        });
      };
      // обратите внимание на значение опции threshold
      const options = {
        threshold: 0.35,
      };
      const observer = new IntersectionObserver(changeNav, options);
      // передаём все секции в обсервер
      items.forEach((section) => {
        observer.observe(section);
      });
    }
  },

  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API"]),

    changeProductPopUp(product, category) {
      this.productProps = product;
      this.category = category;
      this.modal = true;
    },

    closeProductPopUp() {
      this.modal = false;
    },

    handleScroll: function (evt, el) {
      if (!this.$refs.items[0]) return false;
      let h = this.$refs.items[0].getBoundingClientRect().top;

      if (h < 0) {
        this.isMenufix = true;
      } else {
        this.isMenufix = false;
      }
    },
  },
};
</script>
<style lang="scss">
.frontpage {
  &__items {
    display: flex;
    flex-wrap: wrap;
  }

  &__item {
    width: calc(33.333% - 1.25rem);
    min-width: 322px;
    min-height: 210px;
    background: #F1F5F5;
    border-radius: 1.25rem;
    margin-bottom: 40px;
    margin-right: 1.25rem;
    border: 1px solid rgba(0, 0, 0, 0.08);
    cursor: pointer;
    display: flex;
    padding: 1.25rem;
    justify-content: space-between;
  }

  &__item:hover {
    background: #ffffff;
    box-shadow: 0px 40px 56px rgba(124, 124, 124, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 1200px) {
    &__item {
      width: calc(33.333% - 1.25rem);
      min-width: auto;
    }
  }

  @media (max-width: 1024px) {
    &__item {
      width: calc(50% - 1.25rem);
      min-width: auto;
    }
  }

  @media (max-width: 720px) {
    &__items {
      justify-content: space-between;
    }
    &__item {
      width: calc(50% - 7.5px);
      padding: 1rem;
      margin-right: 0;
      min-width: auto;
      display: flex;
      flex-direction: column-reverse;
      justify-content: flex-end;
    }
  }

  @media (max-width: 400px) {
    &__item {
      width: 100%;
    }
  }

  &__item__title {
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 1rem;
  }

  &__item__price {
    display: block;
    margin-bottom: 1rem;
    font-weight: 500;
    font-size: 20px;
  }

  &__item__tags {
    margin-bottom: 1rem;
    display: block;
  }

  &__item__tag {
    margin-right: 4px;
  }

  &__item__width {
    color: rgba(181, 202, 194, 0.5);
    font-size: 14px;
    font-weight: 500;
    display: block;
  }

  &__item__wrap {
    width: 50%;
    // background: #7a9f8f;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__item__rt {
    position: relative;
    width: 50%;
  }

  &__item__pic {
    // margin-top: -3rem;
    // display: inline-flex;
    // width: 50%;
    /* background: #000; */
    // height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
  }

  // &__item__pic > img {
  //   width: calc(100% + 20px);
  //   position: absolute;
  // }

  @media (max-width: 720px) {
    &__item__pic {
      width: 100%;
      height: auto;
      // margin-top: -50px;
      justify-content: center;
    }

    &__item__pic > img {
      width: 100%;
      max-width: 200px;
      position: static;
    }

    &__item__width {
      font-size: 10px;
    }

    &__item__wrap {
      width: 100%;
    }

    &__item__rt {
      width: 100%;
      margin-bottom: 10px;
    }
  }
}

.menu-fixed {
  position: fixed;
  width: calc(100% - 8px);
  left: 8px;
  top: 0;
  z-index: 250;
  background: #ffffff;
  box-shadow: 0px 8px 72px rgba(169, 169, 169, 0.24);
  border-radius: 24px;
  top: 8px;

  > .container {
    height: 78px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__burger {
    width: 42px;
    height: 42px;
    cursor: pointer;
    background: url(../../assets/img/burder.svg) no-repeat;
  }
  &__logo {
    margin-right: 40px;
  }
  &__lt {
    display: flex;
    align-items: center;
  }

  &__list {
    display: flex;
    > li {
      margin-right: 8px;
      > a {
        display: flex;
        background: rgba(150, 194, 179, 0.1);
        border-radius: 30px;
        height: 48px;
        align-items: center;
        padding-left: 16px;
        padding-right: 16px;
      }
      // a:hover {
      //   background: #5e467d;
      //   color: #fff;
      // }
    }
    > li.active > a {
      background: #5e467d;
      color: #fff;
    }
  }
  @media (max-width: 720px) {
    // &__list {
    //   display: none;
    // }
  }
}
</style>