<template>
  <div class="main-bg">
    <img
      src="@/assets/global-backgrounds/symbols-bg.png"
      alt="symbols-bg"
    >
  </div>
</template>

<script>
export default {
  name: 'MainBg',
};
</script>

<style lang="scss" scoped>
.main-bg{
  width: 50px;
  height: min-content;
  max-height: 10000px;
  overflow: hidden;
  position: absolute;
  left: 50px;
  top: 118px;
  bottom: 0px;
  z-index: -999999;
}
</style>
