<template>
  <nav class="flex items-center justify-between flex-wrap bg-blue-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <nuxt-link to="/" class="font-semibold text-xl tracking-tight"
        >Portfolio for Ssogle</nuxt-link
      >
    </div>
    <div class="block lg:hidden">
      <button
        class="
          flex
          items-center
          px-3
          py-2
          rounded
          text-blue-200
          hover:text-white
          hover:border-white
        "
      >
        <!-- <FontAwesomeIcon icon={faBars} /> -->
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <nuxt-link
          to="/career"
          class="
            block
            mt-4
            lg:inline-block
            lg:mt-0
            text-blue-200
            hover:text-white
            mr-4
          "
        >
          Career
        </nuxt-link>
        <nuxt-link
          to="/skill"
          class="
            block
            mt-4
            lg:inline-block
            lg:mt-0
            text-blue-200
            hover:text-white
            mr-4
          "
        >
          Skill
        </nuxt-link>
        <nuxt-link
          to="/portfolio"
          class="
            block
            mt-4
            lg:inline-block
            lg:mt-0
            text-blue-200
            hover:text-white
            mr-4
          "
        >
          Portfolio
        </nuxt-link>
        <a
          href="https://github.com/ssogle/newPortfolio"
          target="_blank"
          rel="noopener noreferrer"
          class="
            block
            mt-4
            lg:inline-block
            lg:mt-0
            text-blue-200
            hover:text-white
            mr-4
          "
        >
          Github
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style></style>
