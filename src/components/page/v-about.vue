<template>
  <main class="main frontpage">
    <div class="container">
      <div class="company">
        <div class="company__body">
          <h2 class="company__title">О компании</h2>
          <div class="company__txt">
            {{ company.aboutHGText }}
          </div>
        </div>
        <div class="company__footer">
          <div class="company__box">
            <div class="company__label">Соцсети</div>
            <ul class="company__soc">
              <li><a href="#" class="insta"></a></li>
              <li><a href="#" class="face"></a></li>
              <li><a href="#" class="vk"></a></li>
              <li><a href="#" class="youtube"></a></li>
            </ul>
          </div>
          <div class="company__box">
            <div>
              <div class="company__label">Позвонить</div>
              <p>Наши операторы всегда готовы выслушать ваши пожелания</p>
            </div>
            <a :href="'tel:'+company.call" class="company__phone"
              >{{ company.phone }}</a
            >
          </div>
          <div class="company__box">
            <div>
              <div class="company__label">Написать</div>
              <p>Мы всегда рады вашим отзывам и преждожениям</p>
            </div>
            <a :href="'mailto:'+company.write" class="company__facebook">Свяжитесь с нами</a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "VAbout",
  data() {
    return {};
  },

  computed: {
    ...mapState(["company"]),
  },
  
  mounted() {
    this.GET_COMPANY_FROM_API()
  },
  methods: {
    ...mapActions(["GET_COMPANY_FROM_API"]),

  }
};
</script>
<style lang='scss'>
.company {
  &__body {
    background: rgba(253, 188, 103, 0.4) url(../../assets/img/company.svg)
      no-repeat right 0;
    background-size: contain;
    border-radius: 24.9125px;
    padding: 35px;
    font-size: 26px;
    font-weight: 500;
    line-height: 110%;
  }
  &__title {
    margin-bottom: 140px;
  }
  &__txt {
    max-width: 701px;

    > p:first-child {
      margin-bottom: 25px;
    }
  }
  &__footer {
    display: flex;
    margin-top: 38px;
    margin-bottom: 38px;
    justify-content: space-between;
  }
  &__box {
    width: calc(33.333% - 20px);
    background: #f4f9f7;
    border-radius: 32px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 18px;
  }
  &__label {
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 14px;
  }
  &__phone {
    font-size: 26px;
    font-weight: 500;
    display: inline-block;
  }
  &__facebook {
    background: #5e467d url(../../assets/img/arrow_w.svg) no-repeat
      calc(100% - 28px) center;
    border-radius: 12px;
    height: 66px;
    width: 100%;
    max-width: 364px;
    display: flex;
    align-items: center;
    font-size: 21px;
    color: #fff;
    font-weight: 500;
    padding-left: 27px;
    margin-top: 20px;
  }
  &__soc {
    display: flex;
    > li {
      margin-left: 12px;
      > a {
        height: 32px;
        width: 32px;
        display: block;
      }
      a.insta {
        background: url(../../assets/img/insta.svg);
      }
      a.youtube {
        background: url(../../assets/img/youtube.svg);
        width: 47px;
      }
      a.vk {
        background: url(../../assets/img/vk.svg);
      }
      a.face {
        background: url(../../assets/img/face.svg);
      }
    }
  }
}
@media (max-width: 720px) {

  .company { 
    &__footer {
      flex-direction: column;
    }
    &__box {
      width: 100%;
      margin-bottom: 15px;
    }
    &__body {
      font-size: 18px;
    }
    &__label{
      font-size: 21px;
    }
  }
    
}
</style>