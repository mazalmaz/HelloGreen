<template>
  <div class="restaurant-modal" ref="modal">
    <div class="restaurant-modal__wrap">
      <span class="restaurant-modal__close" @click="closeModal"> </span>

      <div>
        <div class="restaurant-modal__title">
          {{ data_restaurant.restaurantName }}
        </div>

        <ul class="restaurant-modal__metro">
          <li>
            <svg
              width="12"
              height="6"
              viewBox="0 0 12 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0C12 1.5913 11.3679 3.11742 10.2426 4.24264C9.11742 5.36786 7.5913 6 6 6C4.4087 6 2.88258 5.36786 1.75736 4.24264C0.632141 3.11742 2.4028e-07 1.5913 0 9.53674e-07L6 0H12Z"
                fill="#009806"
              />
            </svg>
            <span>Тверская</span>
          </li>
          <li>
            <svg
              width="12"
              height="6"
              viewBox="0 0 12 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0C12 1.5913 11.3679 3.11742 10.2426 4.24264C9.11742 5.36786 7.5913 6 6 6C4.4087 6 2.88258 5.36786 1.75736 4.24264C0.632141 3.11742 2.4028e-07 1.5913 0 9.53674e-07L6 0H12Z"
                fill="#9504C8"
              />
            </svg>

            <span>Чеховская</span>
          </li>
          <li>
            <svg
              width="12"
              height="6"
              viewBox="0 0 12 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0C12 1.5913 11.3679 3.11742 10.2426 4.24264C9.11742 5.36786 7.5913 6 6 6C4.4087 6 2.88258 5.36786 1.75736 4.24264C0.632141 3.11742 2.4028e-07 1.5913 0 9.53674e-07L6 0H12Z"
                fill="#8F8F8F"
              />
            </svg>

            <span>Пушкинская</span>
          </li>
        </ul>

        <ul class="restaurant-modal__availability">
          <li
            v-for="(el, index) in data_restaurant.orderAvailability"
            :key="index"
          >
            <div
              :class="{
                open: data_restaurant.workingHoursNow[index].status == 'Open',
              }"
            >
              <span v-if="index == 'delivery'" class="restaurant-modal__av"
                >Доставка</span
              >
              <span v-if="index == 'pickup'" class="restaurant-modal__av"
                >Самовывоз</span
              >
              <span v-if="index == 'inside'" class="restaurant-modal__av"
                >Зал</span
              >
              <span>
                {{ data_restaurant.workingHoursNow[index].openingTime }} -
                {{ data_restaurant.workingHoursNow[index].closingTime }}</span
              >
            </div>
          </li>
        </ul>
        <ul class="restaurant-modal__optional">
          <li class="tochka">
            <span> Точки самовывоза </span>
          </li>
          <li class="tc">
            <span> Схема ТРЦ «Гагаринский» </span>
          </li>
        </ul>
      </div>
      <div>
        <img src="../../assets/img/action.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VRestaurantModal",
  data() {
    return {};
  },
  props: {
    data_restaurant: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  // Жизненный цикл-создание завершено (доступ к текущему экземпляру этого)
  created() {},
  // Lifecycle-Mount завершена (доступ к элементам DOM)
  mounted() {
    let vm = this;

    addEventListener("click", function (item) {
      if (vm.$refs.modal === item.target) {
        vm.closeModal();
      }
    });
  },

  methods: {
    closeModal() {
      this.$emit("closeRestaurantCard");
    },
  },
};
</script>
<style lang='scss'>
.restaurant-modal {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgba(23, 23, 23, 0.6);
  z-index: 2000;

  &__close {
    width: 42px;
    height: 42px;
    background: url(../../assets/img/close_2.svg);
    cursor: pointer;
    position: absolute;
    right: 16px;
    top: 16px;
  }

  &__title {
    font-size: 26px;
    line-height: 110%;
    margin-bottom: 24px;
    max-width: 329px;
    letter-spacing: -1px;
    color: #000000;
    font-weight: 500;
  }

  &__wrap {
    background: #ffffff;
    border-radius: 32px;
    width: calc(100% - 20px);
    max-width: 500px;
    top: 10px;
    right: 10px;
    position: absolute;
    height: calc(100% - 20px);
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__btn {
    position: absolute;
    right: 20px;
    top: 80px;
    display: flex;
    align-items: center;
  }

  &__notificat {
    background: url(../../assets/img/notificat.svg);
    width: 14px;
    height: 19px;
    cursor: pointer;
  }

  &__login {
    background: url(../../assets/img/login.svg);
    width: 42px;
    height: 58px;
    margin-left: 26px;
    cursor: pointer;
  }

  &__metro {
    display: flex;
    flex-wrap: wrap;
    > li {
      background: rgba(150, 194, 179, 0.1);
      border-radius: 30px;
      padding-left: 12px;
      padding-right: 12px;
      color: #000000;
      display: flex;
      height: 40px;
      align-items: center;
      margin-right: 8px;
      margin-bottom: 8px;
      > span {
        margin-left: 4px;
      }
    }
  }

  &__availability {
    display: flex;
    background: #f6faf9;
    border-radius: 20px;
    margin-bottom: 32px;
    padding: 18px 30px;
    padding-bottom: 33px;
    margin-top: 16px;
    position: relative;
    > li {
      margin-right: 24px;
      font-weight: 500;

      span {
        display: block;
        white-space: nowrap;
      }
      span:first-child {
        font-size: 13px;
        display: block;
        margin-bottom: 9px;
      }
      > div {
        color: rgba(143, 143, 143, 0.7);
      }
      > div.open {
        color: #379f47;
      }
    }
    > li:last-child {
      margin-right: 0;
    }
  }
  &__availability:after {
    content: url(../../assets/img/arrow_r.svg);
    position: absolute;
    left: calc(50% - 16px);
    bottom: -16px;
  }

  &__optional {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
    > li {
      width: calc(50% - 10px);
      background: #f4f9f7;
      border-radius: 20px;
      height: 144px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      font-weight: 500;
      text-align: center;
    }
    > li.tc:before {
      content: url(../../assets/img/tochka.svg);
      margin-bottom: 15px;
    }

    > li.tochka:before {
      content: url(../../assets/img/tc.svg);
      margin-bottom: 15px;
    }
  }

  @media (max-width: 720px) {
    &__optional {
      > li {
        font-size: 14px;
        padding-left: 12px;
        padding-right: 12px;
      }
    }

    &__availability {
      flex-wrap: wrap;
      padding-bottom: 0;
      > li {
        margin-bottom: 20px;
      }
    }
  }
}
</style>