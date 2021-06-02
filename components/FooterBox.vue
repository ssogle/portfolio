<template>
  <div class="text-center py-5">
    <button class="text-gray-500 mb-2">
      <fa-icon icon="arrow-circle-up" size='3x' />
    </button>
    <nav>
      <nuxt-link
        to="/"
        class="mt-4 inline-block text-gray-600 hover:text-gray-400 mr-4"
      >
        Home
      </nuxt-link>
      <nuxt-link
        to="/career"
        class="mt-4 inline-block text-gray-600 hover:text-gray-400 mr-4"
      >
        Career
      </nuxt-link>
      <nuxt-link
        to="/Skill"
        class="mt-4 inline-block text-gray-600 hover:text-gray-400 mr-4"
      >
        Skill
      </nuxt-link>
      <nuxt-link
        to="/portfolio"
        class="mt-4 inline-block text-gray-600 hover:text-gray-400 mr-4"
      >
        Portfolio
      </nuxt-link>
      <a
        href="https://github.com/ssogle/newPortfolio"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-4 inline-block text-gray-600 hover:text-gray-400 mr-4"
      >
        Github
      </a>
    </nav>
    <p class="pt-5 text-gray-500">
      Copyright 2020 . SoByeongcheon . All rights reserved
    </p>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
