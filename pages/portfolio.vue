<template>
  <section>
    <div class="container m-auto">
      <div class="text-gray-700">
        <div class="text-center pt-5">
          <fa-icon icon="briefcase" size="3x" />
        </div>
        <h2 class="text-center text-xl pt-2 pb-4 uppercase">portfolio</h2>
      </div>
      <portfolio-card
        v-for="(item, index) in list"
        :key="index"
        :company="item.company"
        :img="item.img"
        :name="item.name"
        :content="item.content"
        :desc="item.desc"
        :url="item.url"
        :tag="item.tag"
      ></portfolio-card>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import PortfolioCard from '../components/PortfolioCard.vue'
export default {
  components: { PortfolioCard },
  computed: {
    ...mapState('portfolio', ['list']),
  },
}
</script>

<style></style>
