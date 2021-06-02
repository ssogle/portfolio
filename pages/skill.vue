<template>
  <section>
    <div class="container m-auto">
      <div class="text-gray-700">
        <div class="text-center pt-5">
          <fa-icon icon="brain" size="3x" />
        </div>
        <h2 class="text-center text-xl pt-2 pb-4 uppercase">skill</h2>
      </div>
      <ul class="flex flex-wrap w-full">
        <li
          v-for="(item, index) in list"
          :key="index"
          class="xl:w-1/3 lg:w-1/3 w-full"
        >
          <skill-card
            :name="item.name"
            :explain="item.explain"
            :level="item.level"
          ></skill-card>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import SkillCard from '../components/SkillCard.vue'
export default {
  components: { SkillCard },
  computed: {
    ...mapState('skill', ['list']),
  },
}
</script>

<style></style>
