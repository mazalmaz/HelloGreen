<template>
  <header class="header" @scroll="handleScroll">
    <div class="container">
      <a href="#" class="header__logo">
        <img src="../../assets/img/logo.svg" alt="" />
      </a>
      <div class="header__menu">
        <ul class="header__list">
          <li v-for="(item, index) in menuList" :key="index"><a href="#">{{item}}</a></li>
        </ul>н
      </div>
      <div class="header__lk">
        <span class="header__notificat"></span>
        <span class="header__login"></span>
      </div>
      <div class="menu-btn" @click="openMenu" :class="{ active: isActive }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </header>
  <div class="mobile-menu" v-if="isActive">
    <div class="mobile-menu__wrap">
      <span class="mobile-menu__close" @click="isActive = !this.isActive"> </span>
      <!-- <div class="mobile-menu__btn">
        <span class="mobile-menu__notificat"></span>
        <span class="mobile-menu__login"></span>
      </div> -->
      <ul class="mobile-menu__list">
         <li v-for="(item, index) in menuList" :key="index"><a href="#">{{item}}</a></li>
      </ul>
    </div>
  </div>

  <div class="menu-fixed" v-if="isMenufix">
    <div class="container">
      <div class="menu-fixed__lt">
        <a href="#" class="menu-fixed__logo">
          <img src="../../assets/img/logo.svg" alt="" />
        </a>
        <ul class="menu-fixed__list">
          <li class="active"><a href="#categoty_0">Супы</a></li>
          <li><a href="#categoty_1">Салаты</a></li>
          <li><a href="#categoty_2">Десерты</a></li>
        </ul>
      </div>
      <span class="menu-fixed__burger"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "VHeader",
  data() {
    return {
      menuList: [
        "Меню",
        "Акции",
        "Рестораны",
        "О Hello Green", 
      ],
      isMenufix: false,
      isActive: false,
    };
  },

  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    openMenu: function () {
      this.isActive = !this.isActive;
      document.body.classList.toggle("open-menu");
      console.log(document.body);
    },

    handleScroll: function (evt, el) {
      if (window.scrollY > 100) {
        this.isMenufix = true;
      } else {
        this.isMenufix = false;
      }
      // return window.scrollY > 100
    },
  },

  mounted() {
    // this.$nextTick(function () {
    //   window.addEventListener("scroll", function() {
    //     // console.log(window.pageYOffset)
    //     if(window.pageYOffset > 100) {
    //       this.isMenufix = true
    //     }
    //     else {
    //       this.isMenufix = false
    //     }
    //   }
    // );
    // })
  },
};
</script>

<style lang="scss">
/* header */

// body.open-menu {
//   overflow: hidden;
// }

.header {
  > .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 134px;
  }
  @media (max-width: 720px) {
    > .container {
      height: 89px;
    }
  }

  &__lk {
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

  &__logo {
    position: relative;
  }

  &__menu {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  &__list {
    display: flex;
    > li {
      margin-right: 37px;
      > a {
        font-weight: 500;
      }
    }
  }

  @media (max-width: 1024px) {
    &__list,
    &__lk {
      display: none;
    }
  }
}

// .open-menu .header__logo {
//   z-index: 300;
// }

.menu-btn {
  display: none;
  height: 20px;
  width: 20px;
  min-width: 20px;
  position: relative;
  cursor: pointer;
  // z-index: 300;

  span {
    border-bottom: 2px solid #000;
    display: block;
    position: absolute;

    &:nth-child(1) {
      width: 50%;
      left: 50%;
      top: 0;
      transform-origin: 100% 100%;
    }
    &:nth-child(2) {
      width: 100%;
      left: 0;
      top: 50%;
      margin-top: -1px;
    }
    &:nth-child(3) {
      width: 50%;
      left: 0;
      bottom: 0;
      transform-origin: 0 0;
    }
  }

  &.active {
    span {
      &:nth-child(1) {
        transform: rotate(-45deg);
        margin-top: 1px;
        margin-left: -2px;
      }
      &:nth-child(2) {
        transform: rotate(45deg);
      }
      &:nth-child(3) {
        transform: rotate(-45deg);
        margin-bottom: 1px;
        margin-left: 2px;
      }
    }
  }
}

@media (max-width: 1024px) {
  .menu-btn {
    display: inline-flex;
  }
}

.mobile-menu {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgba(23, 23, 23, 0.6);
  z-index: 200;
  

  &__close {
    width: 42px;
    height: 42px;
    background: url(../../assets/img/close_2.svg);
    cursor: pointer;
    position: absolute;
    right: 16px;
    top: 16px;
  }

  &__wrap {
    background: #ffffff;
    border-radius: 32px;
    width: 100%;
    max-width: 302px;
    top: 10px;
    right: 10px;
    position: absolute;
    height: calc(100% - 20px);
    display: flex;
  align-items: center;
  padding-left: 48px;
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

  &__list {
    > li {
      margin-bottom: 40px;
      > a {
        font-weight: 600;
        font-size: 24px;
      }
    }
  }
}

.menu-fixed {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 250;
  background: #ffffff;
  box-shadow: 0px 16px 72px rgba(169, 169, 169, 0.24);

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
      a:hover,
      a.active {
        background: #5e467d;
        color: #fff;
      }
    }
  }
  @media (max-width: 720px) {
    &__list {
      display: none;
    }
  }
}
</style>