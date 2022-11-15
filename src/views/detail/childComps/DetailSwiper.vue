<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="image in topImages">
      <img :src="image" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from "@/components/common/swiper";

export default {
  name: "DetailSwiper",
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem,
  }
}
</script>

<style scoped>
.detail-swiper {
  height: 400px;
  overflow: hidden;
}

</style>