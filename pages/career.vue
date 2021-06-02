<template>
  <section>
    <div class="container m-auto">
      <div class="text-gray-700">
        <div class="text-center pt-5">
          <fa-icon icon="building" size="3x" />
        </div>
        <h2 class="text-center text-xl pt-2 pb-4 uppercase">career</h2>
      </div>
      <career-card
        v-for="(item, index) in list"
        :key="index"
        :company="item.company"
        :date="item.date"
        :department="item.department"
        :rank="item.rank"
        :explain="item.explain"
        :project="item.project"
        :skill="item.skill"
      ></career-card>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import CareerCard from '../components/CareerCard.vue'
export default {
  components: { CareerCard },
  computed: {
    ...mapState('career', ['list']),
  },
}
</script>

<style></style>
