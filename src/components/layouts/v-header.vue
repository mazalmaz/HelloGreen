<template>
   <header class="header">
        <div class="container">
            <a href="#" class="header__logo">
                <img src="../../assets/img/logo.svg" alt="">
            </a>
            <div class="header__menu">
                <ul class="header__list">
                    <li><a href="#">Меню</a></li>
                    <li><a href="#">Акции</a></li>
                    <li><a href="#">Рестораны</a></li>
                    <li><a href="#">О Hello Green</a></li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "VHeader",
  data() {
    return {
      usermenu: false,
      sidebar: false,
    };
  },
  computed: {
      ...mapGetters([
      'CART'
    ])
  },
  methods: {
    // showUserMenu: function () {
    //   this.usermenu = !this.usermenu;
    // },

    // showSidebar: function () {
    //   this.sidebar = !this.sidebar;
    // },
    
  },

  
};
</script>