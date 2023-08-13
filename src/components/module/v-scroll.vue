<template>
  <pre class="debug" ref="debug"></pre>

  <div class="box" :id="i" v-for="(item, i) in box" :key="i" ref="items">
    {{ item }}, {{ i }}
  </div>

  <div class="menu-fixed">
    <div class="container">
      <div class="menu-fixed__lt">
        <a href="#" class="menu-fixed__logo">
          <img src="../../assets/img/logo.svg" alt="" />
        </a>
        <ul class="menu-fixed__list">
          <li v-for="(item, i) in box" :key="i" ref="list">
            <a :href="'#box_' + i">{{ item }}</a>
          </li>
        </ul>
      </div>
      <span class="menu-fixed__burger"></span>
    </div>
  </div>
</template>

<script>

export default {
  name: "VScroll",
  data() {
    return {
      box: [1, 2, 3, 4, 5, 6, 7],
      isMenufix: false,
    };
  },
  // Жизненный цикл-создание завершено (доступ к текущему экземпляру этого)
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll: function (evt, el) {
      if (window.scrollY > 100) {
        // this.CHANGE_FIXED_MENU();
        this.isMenufix = true;
      } else {
        this.isMenufix = false;
      }
      // return window.scrollY > 100
    },
  },

  mounted() {

    const list = this.$refs.list;
    const sections = this.$refs.items;

    const changeNav = (entries, observer) => {
      entries.forEach((entry) => {
        // чекаем, то элемент пересекает наблюдаемую область более, чем на 55%
        if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
          // удаляем активный класс у элемента меню

          // document.querySelector('.active').classList.remove('active');
          // получаем ID секции, которая текущая
          let id = entry.target.getAttribute("id");

          list.forEach((element) => {
              if (element.classList.contains("active")) element.classList.remove("active")
          });
          
          list.forEach((element, index) => {
              if (index == id) element.classList.add("active");
          });
        }
      });
    };

    // обратите внимание на значение опции threshold
    const options = {
      threshold: 0.55,
    };

    const observer = new IntersectionObserver(changeNav, options);

    // передаём все секции в обсервер
  
    sections.forEach((section) => {
      observer.observe(section);
    });

 
  },
};
</script>
<style lang='scss'>
.debug {
  position: fixed;
  top: 0;
  right: 0;
  margin: 0;
  padding: 10px;
  background: #000000;
  color: #ffffff;
  z-index: 400;
}

.box {
  padding: 50px;
  margin: 50px;
  font: 200px "Segoe UI", Arial, Helvetica, sans-serif;
  background: #dddddd;
  color: rgba(0, 0, 0, 0.5);
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
      a:hover {
        background: #5e467d;
        color: #fff;
      }
    }
    > li.active
    > a  {
      background: #5e467d;
        color: #fff;
    }
  }
  @media (max-width: 720px) {
    &__list {
      display: none;
    }
  }
}
</style>