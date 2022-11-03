<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item>
        <template v-slot:item-icon><img src="@/assets/images/tabbar/icon01.png" alt=""></template>
        <template v-slot:item-text><div>首页</div></template>
      </tab-bar-item>
      <tab-bar-item>
        <template v-slot:item-icon><img src="@/assets/images/tabbar/icon02.png" alt=""></template>
        <template v-slot:item-text><div>分类</div></template>
      </tab-bar-item>
      <tab-bar-item>
        <template v-slot:item-icon><img src="@/assets/images/tabbar/icon03.png" alt=""></template>
        <template v-slot:item-text><div>购物车</div></template>
      </tab-bar-item>
      <tab-bar-item>
        <template v-slot:item-icon><img src="@/assets/images/tabbar/icon04.png" alt=""></template>
        <template v-slot:item-text><div>我的</div></template>
      </tab-bar-item>
    </tab-bar>
  </div>

</template>

<script>
import TabBar from '@/components/common/tabBar/TabBar.vue'
import TabBarItem from '@/components/common/tabBar/TabBarItem.vue'
export default {
		name: 'App',
		components: {
			TabBar, TabBarItem
  }
}
</script>

<style>
@import '@/assets/css/normalize.css';

</style>
