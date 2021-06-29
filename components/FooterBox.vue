<template>
  <div class="text-center py-5">
    <button class="text-gray-500 mb-2" @click="scrollTop">
      <fa-icon icon="arrow-circle-up" size="3x" />
    </button>
    <nav>
      <span v-for="(item, index) in menuList" :key="index">
        <nuxt-link
          v-if="!item.url"
          :to="item.path"
          class="mt-4 inline-block text-gray-600 hover:text-gray-400 mr-4"
        >
          {{ item.name }}
        </nuxt-link>
        <a
          v-else
          :href="item.url"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-4 inline-block text-gray-600 hover:text-gray-400 mr-4"
        >
          {{ item.name }}
        </a>
      </span>
    </nav>
    <p class="pt-5 text-gray-500">SoByeongcheon</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('common', ['menuList']),
  },
  methods: {
    scrollTop() {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    },
  },
}
</script>

<style></style>
