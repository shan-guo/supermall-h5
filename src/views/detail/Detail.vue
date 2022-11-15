<template>
  <div class="detail">
    <detail-nav-bar/>
    <detail-swiper :top-images="topImages"/>
  </div>
</template>

<script>
import DetailNavBar from "@/views/detail/childComps/DetailNavBar";
import {getDetail} from "@/network/detail";
import DetailSwiper from "@/views/detail/childComps/DetailSwiper";
import {Shop, Goods} from "@/network/detail";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
    }
  },
  created() {
    this.iid = this.$route.params.iid

    // 获取商品信息
    getDetail(this.iid).then((res) => {
      this.topImages = res.result.itemInfo.topImages

      const data = res.result;

      // 2.获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

      // 3.获取店铺信息
      this.shop = new Shop(data.shopInfo)
    })
  }
}
</script>

<style scoped>

</style>