<template>
  <div class="goods-item" @click="itemClick">
    <img :src="goods_item.show.img" alt="" @load="imageLoad">
    <div class="goods-info">
      <p>{{ goods_item.title }}</p>
      <span class="price"> {{ goods_item.price }}</span>
      <span class="collect"> {{ goods_item.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goods_item: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods:{
    imageLoad(){
      this.$eventBus.emit("imageLoad")
    },
    itemClick(){
      this.$router.push('/detail/' + this.goods_item.iid)
    }
  }
}
</script>

<style scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}

.goods-item img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("@/assets/img/common/collect.svg");
}

</style>