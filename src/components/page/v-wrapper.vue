<template>
  
    <VHeader/>
    <VFrontpage/>
    <VFooter/>


</template>

<script>
import VHeader from "../layouts/v-header.vue"
import VFooter from "../layouts/v-footer.vue"
import VFrontpage from "./v-frontpage.vue"


export default {
  name: "VWrapper",
  components: {
    VHeader,
    VFooter,
    VFrontpage
  },
};
</script>