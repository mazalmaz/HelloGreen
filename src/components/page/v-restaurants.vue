<template>
  <main class="main">
    <div class="container">
      <div class="restaurans-list-to-maps">
        <!-- <div class="restaurans-list-to-maps__title">Москва</div> -->

        <div class="restaurans-list-to-maps__work">
          <input
            type="checkbox"
            id="work"
            v-model="checked"
            class="restaurans-list-to-maps__input"
          />
          <label for="work"></label>
          Работает сейчас
        </div>

        <div class="yandex-map-container">
          <yandex-map  
             :coords="center"
             :zoom="10" 
             
             >
            <ymap-marker
              v-for="(marker, i) in map_restaurants"
              :key="i"
              @click="openRestaurantСard(marker)"
              :coords="[marker.coords.latitude, marker.coords.longitude]"
              :marker-id="i"
              :icon="markerIcon"
            />
          </yandex-map>
        </div>

        <!-- <l-map :zoom="zoom" :center="center">
          <LTileLayer :url="url"></LTileLayer>

          <l-marker
            v-for="(marker, i) in map_restaurants"
            :key="i"
            @click="openRestaurantСard(marker)"
            :lat-lng="[marker.coords.latitude, marker.coords.longitude]"
          >
            <l-icon
              :icon-size="dynamicSize"
              icon-url="/src/assets/img/icon_marker.svg"
            >
            </l-icon>
          </l-marker>
        </l-map> -->
      </div>

      <div class="restaurants">
        <div
          v-for="(item, i) in restaurants"
          :key="i"
          class="restaurant"
          @click="openRestaurantСard(item)"
        >
          <div class="restaurant__title">{{ item.restaurantName }}</div>

          <ul class="restaurant__metro">
            <li>Тверская,</li>
            <li>Чеховская,</li>
            <li>Пушкинская</li>
          </ul>

          <ul class="restaurant__availability">
            <li v-for="(el, index) in item.orderAvailability" :key="index">
              <div
                :class="{ open: item.workingHoursNow[index].status == 'Open' }"
              >
                <span v-if="index == 'delivery'" class="restaurant__av"
                  >Доставка</span
                >
                <span v-if="index == 'pickup'" class="restaurant__av"
                  >Самовывоз</span
                >
                <span v-if="index == 'inside'" class="restaurant__av">Зал</span>
                {{ item.workingHoursNow[index].openingTime }} -
                {{ item.workingHoursNow[index].closingTime }}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>

  <v-restaurant-modal
    v-if="isActive"
    :data_restaurant="data_restaurant"
    @closeRestaurantCard="closeRestaurantCard"
  >
  </v-restaurant-modal>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import "leaflet/dist/leaflet.css";
import VRestaurantModal from "../module/v-restaurant-modal.vue";
import { yandexMap, ymapMarker } from "vue-yandex-maps";

// import { latLngBounds, latLng } from "leaflet";
import {
  LMap,
  LTileLayer,
  LMarker,
  LIcon,
  LFeatureGroup,
} from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    LFeatureGroup,
    yandexMap,
    ymapMarker,
    VRestaurantModal,
  },

  data() {
    return {
      coords: [54, 39],
      markerIcon: {
        layout: "default#imageWithContent",
        imageHref: "/src/assets/img/icon_marker.svg",
        imageSize: [60, 60],
        imageOffset: [0, 0],
        contentOffset: [0, 15],
        contentLayout:
          '<div style="background: red; width: 50px; color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>',
      },

      url: "https://{s}.tile.osm.org/{z}/{x}/{y}.png",
      zoom: 12,
      center: [55.755864, 37.617698],
      // bounds: latLngBounds([
      //   [48.055358, 46.359924],
      // ]),
      // maxBounds: latLngBounds([
      //    [48.055358, 46.359924],
      // ]),
      bounds: null,
      iconSize: 60,
      checked: false,
      map_restaurants: [],
      isActive: false,
      data_restaurant: [],
    };
  },

  computed: {
    ...mapState(["restaurants", "FirstlatLng"]),
    ...mapGetters(["GET_WORK_RESTAURANTS"]),

    dynamicSize() {
      return [this.iconSize, this.iconSize * 1.25];
    },
  },

  created() {
    this.GET_RESTAURANTS_LIST_FROM_API();
  },

  updated() {
    this.center = this.FirstlatLng;
    if (this.checked) {
      this.map_restaurants = this.GET_WORK_RESTAURANTS;
    } else {
      this.map_restaurants = this.restaurants;
    }
  },

  methods: {
    ...mapActions(["GET_RESTAURANTS_LIST_FROM_API"]),
    openRestaurantСard(data) {
      this.isActive = true;
      this.data_restaurant = data;
    },
    closeRestaurantCard() {
      this.isActive = false;
    },
  },
  // watch: {

  //   checked(prev,next) {
  //     if(prev) {
  //       this.map_restaurants = []
  //     }

  //   }

  // }
};
</script>

<style lang='scss'>
.yandex-map-container {
  background: #ccc;
}
.ymap-container {
  height: 476px;
}

.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {
  border-radius: 20px;
}

.restaurans-list-to-maps {
  width: 100%;
  height: 476px;
  position: relative;
  &__title {
    position: absolute;
    font-size: 26px;
    font-weight: 600;
    top: 55px;
    left: 50px;
    z-index: 1000;
  }
  &__work {
    position: absolute;
    right: 15px;
    top: 55px;
    display: flex;
    align-items: center;
    z-index: 1000;
  }
}

.restaurants {
  display: flex;
  flex-wrap: wrap;
  margin-top: 38px;
}

.restaurant {
  background: #ffffff;
  border-radius: 32px;
  padding: 29px 32px;
  width: calc(33.333% - 20px);
  margin-right: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  user-select: none;
  filter: drop-shadow(0px 32px 40px rgba(0, 0, 0, 0.1));

  &__metro {
    margin-bottom: 34px;
    padding-left: 38px;
    font-size: 14px;
    font-weight: bold;
    display: flex;
    flex-wrap: wrap;
    background: url(../../assets/img/metro.svg) no-repeat 0 8px;
    > li {
      margin-right: 5px;
    }
  }

  &__title {
    font-size: 24px;
    margin-bottom: 20px;
    font-weight: 500;
  }
  &__availability {
    display: flex;
    font-size: 14px;
    color: #aeafaf;
    > li {
      margin-right: 16px;
      > .open {
        color: #379f47;
      }
    }
    li:last-child {
      margin-right: 0;
    }
  }
  &__av {
    display: block;
    margin-bottom: 3px;
  }
}

@media (max-width: 1024px) {
  .restaurant {
    width: calc(50% - 20px);
    margin-right: 20px;
  }
}

@media (max-width: 720px) {
  .restaurants {
    margin-top: 80px;
  }
  .restaurant {
    width: 100%;
    margin-right: 0;

  }
  .restaurans-list-to-maps {
    &__title {
      position: static;
      margin-bottom: 20px;
    }
    &__work {
      position: static;
      margin-bottom: 20px;

    }
  }
}

.restaurans-list-to-maps {
  &__input {
    display: none;
  }
  &__input + label {
    display: inline-flex;
    position: relative;
    width: 51px;
    height: 31px;
    background: rgba(120, 120, 128, 0.16);
    backdrop-filter: blur(8px);
    margin-right: 12px;
    border-radius: 25px;
    cursor: pointer;
  }
  &__input + label::after {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 27px;
    height: 27px;
    background: #ffffff;
    border: 0.5px solid rgba(0, 0, 0, 0.04);
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15), 0px 3px 1px rgba(0, 0, 0, 0.06);
    border-radius: 50%;
  }
  &__input:checked + label {
    background: #554674;
  }
  &__input:checked + label::after {
    left: 21px;
  }
}
</style>