<template>
  <main class="main action">
    <div class="container">


      <div class="main__title">Акции</div>
      <div class="action">
        <div
          class="action__wrap"
          v-for="(item, index) in actionData"
          :key="index"
        >
          <div class="action__item hits">
            <div>
              <h3>
                {{ item.title }}
              </h3>
              <p>{{ item.intro }}</p>
            </div>
            <img :src="item.pic" alt="" class="action__pic" />
          </div>

          <div class="action__text">
            Волшебный мир оживает на нашей кухне: яркая упаковка с игрой, пицца
            в форме мишки и игрушка в подарок! Герои любимого мультфильма
            приготовили пиццу, в основе – соус Альфредо, внутри – ветчина,
            моцарелла и картошечка.
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>

export default {
  name: "VPromo",

  data() {
    return {
  

      actionData: {
        slide_1: {
          title: "Сэндвич в подарок!",
          intro: "при покупке 2 супов дня",
          pic: "/src/assets/img/dish.png",
        },
        slide_2: {
          title: "Сэндвич в подарок!",
          intro: "при покупке 2 супов дня",
          pic: "/src/assets/img/dish.png",
        },
        slide_3: {
          title: "Сэндвич в подарок!",
          intro: "при покупке 2 супов дня",
          pic: "/src/assets/img/dish.png",
        },
      },
    };
  },
  // Жизненный цикл-создание завершено (доступ к текущему экземпляру этого)
  created() {},
  // Lifecycle-Mount завершена (доступ к элементам DOM)
  mounted() {},
};
</script>
<style lang='scss'>


.main {
  &__title {
    font-size: 36px;
    line-height: 110%;
    font-weight: 600;
    margin-bottom: 32px;
  }
}

.action {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  &__wrap {
    width: calc(50% - 10px);
    margin-bottom: 20px;
    background: #f6faf9;
    border-radius: 24px;
  }
  &__text {
    line-height: 170%;
    padding: 30px;
  }
  &__item {
    background: #dddc8e;
    border-radius: 25px;

    min-height: 244px;
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
        font-weight: 500;
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
  &__item.hits {
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
  &__pic {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    border-radius: 0 25px 25px 0;
  }
}

@media (max-width: 1024px) {
  .action {
    &__wrap {
      width: 100%;
    }
    &__text {
      padding: 25px;
    }
    &__item {
      > div {
        > h3 {
          font-size: 2.4rem;
          line-height: 2rem;
        }
      }
    }
  }
}

@media (max-width: 720px) {
  .action {
    &__wrap {
      width: 100%;
    }
    &__text {
      padding: 25px;
    }
    &__item {
      padding-left: 22px;
      padding-right: 22px;
      > div {
        > h3 {
          font-size: 2rem;
        }
      }
    }
  }
}
</style>