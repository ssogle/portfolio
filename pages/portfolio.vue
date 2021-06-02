<template>
  <section>
    <div class="container m-auto">
      <div class="text-gray-700">
        <div class="text-center pt-5">
          <fa-icon icon="briefcase" size="3x" />
        </div>
        <h2 class="text-center text-xl pt-2 pb-4 uppercase">portfolio</h2>
      </div>
      <ul class="flex flex-wrap w-full">
        <li
          v-for="(item, index) in list"
          :key="index"
          class="xl:w-1/3 lg:w-1/3 w-full"
        >
          <portfolio-card
            :company="item.company"
            :img="item.img"
            :name="item.name"
            :content="item.content"
            :desc="item.desc"
            :url="item.url"
            :tag="item.tag"
          ></portfolio-card>
        </li>
      </ul>
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
