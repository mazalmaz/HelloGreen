<template>
  <header class="header" @scroll="handleScroll">
    <div class="container">
      <a href="/" class="header__logo">
        <img src="../../assets/img/logo.svg" alt="" />
      </a>
      <div class="header__menu">
        <router-link to="/">Меню</router-link>
        <router-link to="/action">Акции</router-link>
        <router-link to="/restaurants">Рестораны</router-link>
        <router-link to="/about">О Hello Geen</router-link>

        <!-- <ul class="header__list">
          <li v-for="(item, index) in menuList" :key="index">
            <a href="#">{{ item }}</a>
          </li>
        </ul> -->
      </div>
      <!-- <div class="header__lk">
        <span class="header__notificat"></span>
        <span class="header__login"></span>
      </div> -->
      <div class="menu-btn" @click="openMenu" :class="{ active: isActive }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </header>
  <div class="mobile-menu" v-if="isActive">
    <div class="mobile-menu__wrap">
      <span class="mobile-menu__close" @click="isActive = !this.isActive"></span>
      <!-- <div class="mobile-menu__btn">
        <span class="mobile-menu__notificat"></span>
        <span class="mobile-menu__login"></span>
      </div> -->
      <div class="mobile-menu__list">
        <router-link to="/" @click="isActive = false">Меню</router-link>
        <router-link to="/action" @click="isActive = false">Акции</router-link>
        <router-link to="/restaurants" @click="isActive = false">Рестораны</router-link>
        <router-link to="/about" @click="isActive = false">О Hello Geen</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VHeader",
  data() {
    return {
      menuList: ["Меню", "Акции", "Рестораны", "О Hello Green"],
      // isMenufix: false,
      isActive: false,
    };
  },

  // created() {
  //   window.addEventListener("scroll", this.handleScroll);
  // },
  // destroyed() {
  //   window.removeEventListener("scroll", this.handleScroll);
  // },

  methods: {
    openMenu: function () {
      this.isActive = !this.isActive;
      document.body.classList.toggle("open-menu");
      console.log(document.body);
    },

    // handleScroll: function (evt, el) {
    //   if (window.scrollY > 100) {
    //     this.isMenufix = true;
    //   } else {
    //     this.isMenufix = false;
    //   }
    //   // return window.scrollY > 100
    // },
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

  &__menu {
    display: flex;
    > a {
      margin-right: 37px;
    }
    > 
    a.active {
      font-weight: bold;
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
    &__lk,
    &__menu {
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
    display: flex;
    flex-direction: column;
    > a {
      font-weight: 600;
      font-size: 24px;
      margin-bottom: 40px;
      
    }
  }
}
</style>