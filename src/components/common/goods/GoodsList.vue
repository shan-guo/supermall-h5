<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :goods_item="item"/>
  </div>
</template>

<script>
import GoodsListItem from "@/components/common/goods/GoodsListItem";

export default {
  name: "GoodsList",
  components: {
    GoodsListItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  created() {
    console.log(this.goods[0])
  }
}
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

</style>