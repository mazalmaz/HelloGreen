<template>
  <div class="product-modal" v-if="show">
    <div class="product-modal__wrap">
      <div class="product-modal__pic">
        <img :src="product.image" alt="" />
      </div>
      <div class="product-modal__intro">
        <div class="product-modal__content">
          <div class="product-modal__cat">{{ category }}</div>
          <div class="product-modal__title">{{ product.name }}</div>

          <span class="product-modal__pr">
            <span class="product-modal__item__tags">
              <span class="product-modal__item__tag no-milk">
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
              <span class="product-modal__item__tag vegetarian">
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

            <span class="product-modal__price"> {{ product.price }} ₽</span>
          </span>

          <span class="product-modal__width"> 240 гр. 300 ккал</span>

          <div class="product-modal__label">Убрать ингредиенты</div>

          <ul class="product-modal__ingredient-remove">
            <li>
              <label>
                <input type="checkbox" name="ingredient-1" value="" />
                <span>Сыр моцарелла</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="ingredient-2" value="" />
                <span> Бекон</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="ingredient-3" value="" />
                <span> Сухарики</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="ingredient-4" value="" />
                <span>Яйцо</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="ingredient-5" value="" />
                <span> Салат</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="ingredient-6" value="" />
                <span>Тыква</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="ingredient-7" value="" />
                <span> Нут</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="ingredient-8" value="" />
                <span> Лук</span>
              </label>
            </li>
          </ul>

          <div class="product-modal__label">Добавки</div>

          <ul class="product-modal__supplement">
            <li>
              <label>
                <input type="checkbox" name="ingredient-2" value="" />
                <div>
                  <img src="../../assets/img/olives.png" alt="" />
                  <span>маслины</span>
                  <span>+ 49 ₽</span>
                </div>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="ingredient-2" value="" />
                <div>
                  <img src="../../assets/img/champignon.png" alt="" />
                  <span>шампиньон</span>
                  <span>+ 29 ₽</span>
                </div>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="ingredient-2" value="" />
                <div>
                  <img src="../../assets/img/jalapeno.png" alt="" />
                  <span>халапеньо</span>
                  <span>+ 39 ₽</span>
                </div>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="ingredient-2" value="" />
                <div>
                  <img src="../../assets/img/olives.png" alt="" />
                  <span>маслины</span>
                  <span>+ 49 ₽</span>
                </div>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="ingredient-2" value="" />
                <div>
                  <img src="../../assets/img/champignon.png" alt="" />
                  <span>шампиньон</span>
                  <span>+ 29 ₽</span>
                </div>
              </label>
            </li>
          </ul>
        </div>
        <span class="product-modal__soon">Скоро будет доставка</span>

        <span class="product-modal__close" @click="show = false"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VProductModal",

  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
    show: false,
    category: "",
  },

  methods: {
    // productPopUpClick(e) {
    //   let el = this.$refs.dropdown;
    //   let target = e.target;
    //   if (el !== target) {
    //     this.show = false;
    //   }
    // },
  },
};
</script>


<style lang="scss">

/* popup product */
.product-modal {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(23, 23, 23, 0.6);
  left: 0;
  top: 0;
  z-index: 300;
  overflow: auto;
}
.product-modal__wrap {
  position: absolute;
  right: 10px;
  top: 10px;
  height: calc(100% - 20px);
  width: 100%;
  max-width: 80%;
  background: #f6faf9;
  border-radius: 2rem;
  display: flex;
  justify-content: space-between;
}



.product-modal__item__tag {
  margin-right: 10px;
}
.product-modal__pic {
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    max-height: 100%;
    max-width: 100%;
  }
}
.product-modal__intro {
  width: 100%;
  max-width: 500px;
  background: #fff;
  border-radius: 2rem;
  padding: 1.75rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.product-modal__content {
  width: 100%;
}
.product-modal__cat {
  margin-bottom: 0.5rem;
}
.product-modal__title {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
.product-modal__width {
  display: block;
  font-size: 0.625rem;
  margin-bottom: 1rem;
}
.product-modal__pr {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}
.product-modal__price {
  font-size: 1.2rem;
  font-weight: bold;
}
.product-modal__label {
  margin-bottom: 0.5rem;
  font-weight: bold;
  display: block;
}
.product-modal__ingredient-remove {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
  > li {
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    > label {
      > span {
        background: #f6faf9;
        border-radius: 30px;
        display: flex;
        height: 40px;
        align-items: center;
        padding-left: 16px;
        font-size: 14px;
        padding-right: 16px;
        cursor: pointer;
      }
      > input {
        display: none;
        &:checked {
          + {
            span {
              padding-right: 8px;
              font-weight: 600;
              &::after {
                content: url(../../assets/img/delet.svg);
                margin-left: 4px;
              }
            }
          }
        }
      }
    }
  }
}
.product-modal__supplement {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
  > li {
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    > label {
      > input {
        display: none;
        &:checked {
          + {
            div {
              border: 2px solid rgba(94, 70, 125, 0.4);
              box-shadow: 0px 33px 80px rgba(104, 156, 165, 0.1),
                0px 9.94853px 24.1177px rgba(104, 156, 165, 0.0651589),
                0px 4.13211px 10.0172px rgba(104, 156, 165, 0.05),
                0px 1.4945px 3.62304px rgba(104, 156, 165, 0.0348411);
            }
          }
        }
      }
      > div {
        background: #f6faf9;
        border: 2px solid rgba(0, 0, 0, 0.08);
        box-shadow: 0px 33px 80px rgba(104, 156, 165, 0.1),
          0px 9.94853px 24.1177px rgba(104, 156, 165, 0.0651589),
          0px 4.13211px 10.0172px rgba(104, 156, 165, 0.05),
          0px 1.4945px 3.62304px rgba(104, 156, 165, 0.0348411);
        border-radius: 20px;
        width: 116px;
        height: 111px;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        flex-direction: column;
        padding: 12px;
        text-align: right;
        font-size: 14px;
        cursor: pointer;
        overflow: hidden;
        position: relative;
        > span {
          position: relative;
          z-index: 10;
          &:last-child {
            font-weight: bold;
          }
        }
        > img {
          position: absolute;
          left: -20px;
          top: -15px;
        }
      }
    }
  }
}
.product-modal__soon {
  background: #f6faf9;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  min-height: 68px;
  height: 68px;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-weight: 500;
  font-size: 1.25em;
  color: #000;
  cursor: pointer;
  display: flex;
}
.product-modal__close {
  position: absolute;
  right: 1.25rem;
  top: 1.25rem;
  width: 42px;
  height: 42px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  background: #f6faf9 url(../../assets/img/close-black.svg) no-repeat center;
  cursor: pointer;
}

@media (max-width: 1024px) {
  .product-modal__wrap {
    flex-direction: column;
    max-width: 100%;
    height: auto;
    width: calc(100% - 20px);
  }  
  .product-modal__intro {
    padding: 1.5rem;
    width: 100%;
    max-width: 100%;
  }
  .product-modal__title {
    font-size: 1.2rem;
    line-height: 1.2rem;

  }
}

</style>