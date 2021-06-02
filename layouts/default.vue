<template>
  <div>
    <header-box></header-box>
    <div class="pt-24 pb-12">
      <nuxt />
    </div>
    <hr />
    <footer-box></footer-box>
  </div>
</template>

<script>
import FooterBox from '../components/FooterBox.vue'
import HeaderBox from '../components/HeaderBox.vue'
export default {
  components: { HeaderBox, FooterBox },
}
</script>

<style></style>
