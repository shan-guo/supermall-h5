<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "TabBar"
}
</script>

<style scoped>
#tab-bar {
  display: flex;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  background-color: 'f6f6f6';
}
</style>