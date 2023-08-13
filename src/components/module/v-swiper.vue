<template>
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
      :breakpoints="swiperOptions.breakpoints"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        @click="sliderPopUpShow"
        v-for="(slide, index) in sliderData"
        :key="index"
      >
        <div class="swiper-slide__item hits">
          <div>
            <h3>
              {{ slide.title }}
            </h3>
            <p>{{ slide.intro }}</p>
          </div>
          <img :src="slide.pic" alt="" class="swiper-slide__pic" />
        </div>
        
      </swiper-slide>
    </swiper>
    <div ref="prev" class="swiper-button__prev"></div>
    <div ref="next" class="swiper-button__next"></div>

    <div
      class="swiper-slide__popup swiper-popup"
      v-if="show"
      @click="popUpClick"
      ref="modal"
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
</template>
  
  <script>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Navigation } from "swiper";
import { mapState, mapActions } from "vuex";

export default {
  name: "VSwiper",
  components: {
    Swiper,
    SwiperSlide,
  },

  computed: {
    // ...mapState(["actions"]),
  },

  data: function () {
    return {
      sliderData: {
        slide_1: {
          title: "Сэндвич в подарок!",
          intro: "при покупке 2 супов дня",
          pic: "src/assets/img/dish.png",
        },
        slide_2: {
          title: "Сэндвич в подарок!",
          intro: "при покупке 2 супов дня",
          pic: "src/assets/img/dish.png",
        },
        slide_3: {
          title: "Сэндвич в подарок!",
          intro: "при покупке 2 супов дня",
          pic: "src/assets/img/dish.png",
        },
      },

      show: false,
      swiperOptions: {
        breakpoints: {
          320: {
            slidesPerView: 1,
          },
          980: {
            slidesPerView: 2,
          },
        },
      },
    };
  },
  
  mounted() {
    let vm = this;

    addEventListener("click", function(item) {
      if(vm.$refs.modal === item.target) {
        vm.show = false;
      }
    })
    
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
    // ...mapActions(["GET_ACTIONS_LIST_FROM_API"]),
    sliderPopUpShow() {
      this.show = true;
    },
    sliderPopUpHide() {
      console.log();
      this.show = false;
    },
    popUpClick(e) {
      
    },
  },
};
</script>

<style lang="scss">
.frontpage__swiper {
  position: relative;
}




.swiper-slide__item {
  background: #dddc8e;
  border-radius: 25px;
  height: 260px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 44px;
  padding-right: 44px;
  cursor: pointer;
  user-select: none;
  overflow: hidden;
 
  > div {
    position: relative;
    z-index: 10;
    > h3 {
      font-weight:500;
      font-size: 3rem;
      line-height: 2.5rem;
      color: #000000;
    }
    > p {
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 1.185rem;
      color: #000000;
    }
  }
}
.swiper-slide__item.hits {
  &::after {
    content: "";
    background: url(../../assets/img/hits.svg) no-repeat;
    background-size: cover;
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: 0 0 25px 0;
    width: 202px;
    height: 156px;
  }
}
.swiper-slide__pic {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  border-radius: 0 25px 25px 0;
}
.swiper-button__prev {
  background: #ffffff url(../../assets/img/arrow.svg) no-repeat 14px center;
  border-radius: 20px;
  width: 42px;
  height: 58px;
  cursor: pointer;
  position: absolute;
  top: calc(50% - 29px);
  z-index: 100;
  left: -21px;
  box-shadow: 0px 16px 24px rgba(94, 70, 125, 0.32);
  &:hover {
    background: #5e467d url(../../assets/img/arrow_hover.svg) no-repeat 14px
      center;
  }
}

.swiper-button__next {
  background: #ffffff url(../../assets/img/arrow.svg) no-repeat 14px center;
  border-radius: 20px;
  width: 42px;
  height: 58px;
  cursor: pointer;
  position: absolute;
  top: calc(50% - 29px);
  z-index: 100;
  right: -21px;
  box-shadow: 0px 16px 24px rgba(94, 70, 125, 0.32);
  transform: rotate(-180deg);
  &:hover {
    background: #5e467d url(../../assets/img/arrow_hover.svg) no-repeat 14px
      center;
    
  }
}

.swiper-button-disabled {
  display: none;
}

.swiper-popup {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(23, 23, 23, 0.6);
  left: 0;
  top: 0;
  z-index: 300;
}
.swiper-popup__wrap {
  position: absolute;
  right: 10px;
  top: 10px;
  height: calc(100% - 20px);
  width: calc(100% - 20px);
  max-width: 434px;
  padding: 1.875rem;
  background: linear-gradient(0deg, #ffe6c8, #ffe6c8), #ffffff;
  background-image: url(../../assets/img/pattern.svg);
  background-position: 0 right;
  border-radius: 2rem;
  overflow: hidden;
}
.swiper-popup__close {
  position: absolute;
  right: 1.25rem;
  top: 1.25rem;
  width: 42px;
  height: 42px;
  box-shadow: 0px 16px 24px rgba(94, 70, 125, 0.32);
  border-radius: 12px;
  background: #5e467d url(../../assets/img/close.svg) no-repeat center;
  cursor: pointer;
  z-index: 100;
}
.swiper-popup__pic {
  position: absolute;
  right: 0;
  bottom: 0;
  border-radius: 0 0 2rem 0;
  max-width: 100%;
}
.swiper-popup__intro {
  position: relative;
  z-index: 10;
  > p {
    font-weight: 500;
    line-height: 1.6;
  }
}
.swiper-popup__label {
  margin-bottom: 1.93rem;
  display: block;
}
.swiper-popup__title {
  font-size: 3rem;
  line-height: 2.5rem;
  margin-bottom: 1.6rem;
  display: block;
  font-weight: 500;
}
@media (max-width: 720px) {
  .swiper-slide__item {
    height: 180px;
    padding-left: 22px;
    padding-right: 22px;
    > div {
      > h3 {
        font-size: 1.3rem;
        line-height: 1.5rem;
      }
      > p {
         line-height: 1rem;
      }
    }
  }
  .swiper-slide__item.hits {
    &::after {
      height: 93px;
      width: 121px;
    }
  }
  .swiper-button__next {
    display: none;
  }
  .swiper-button__prev {
    display: none;
  }
  .swiper-popup__title {
    font-size: 1.8rem;
  }
}
</style>