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

<style>
#tab-bar {
  display: flex;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  background-color: white;
}
</style>