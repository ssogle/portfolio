<template>
  <nav
    class="
      fixed
      z-40
      top-0
      left-0
      w-full
      flex
      items-center
      justify-between
      flex-wrap
      bg-blue-500
      p-6
    "
  >
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
        @click="menuToggle"
      >
        <fa-icon icon="bars" />
      </button>
    </div>
    <div class="w-full hidden flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <span v-for="(item, index) in menuList" :key="index">
          <nuxt-link
            v-if="!item.url"
            :to="item.path"
            class="
              block
              capitalize
              mt-4
              lg:inline-block
              lg:mt-0
              text-blue-200
              hover:text-white
              mr-4
            "
          >
            {{ item.name }}
          </nuxt-link>
          <a
            v-else
            :href="item.url"
            target="_blank"
            rel="noopener noreferrer"
            class="
              block
              capitalize
              mt-4
              lg:inline-block
              lg:mt-0
              text-blue-200
              hover:text-white
              mr-4
            "
          >
            {{ item.name }}
          </a>
        </span>
      </div>
    </div>

    <div class="fixed top-0 left-0">
      <transition name="opacity">
        <div
          v-show="isMenuShow"
          class="bg-black opacity-50 fixed w-full h-full"
          @click="menuToggle"
        ></div>
      </transition>
      <transition name="slide-right">
        <div
          v-show="isMenuShow"
          class="w-60 h-full fixed top-0 right-0 bg-white"
        >
          <ul>
            <li v-for="(item, index) in menuList" :key="index">
              <nuxt-link
                v-if="!item.url"
                :to="item.path"
                class="
                  block
                  px-3
                  py-2
                  hover:bg-blue-500
                  hover:text-white
                  capitalize
                "
                :class="{
                  'bg-blue-400 text-white': $route.path == item.path,
                }"
                @click.native="menuToggle"
              >
                {{ item.name }}
              </nuxt-link>
              <a
                v-else
                :href="item.url"
                target="_blank"
                rel="noopener noreferrer"
                class="
                  block
                  px-3
                  py-2
                  hover:bg-blue-500
                  hover:text-white
                  capitalize
                "
              >
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      isMenuShow: false,
    }
  },
  computed: {
    ...mapState('common', ['menuList']),
  },
  methods: {
    menuToggle() {
      this.isMenuShow ? (this.isMenuShow = false) : (this.isMenuShow = true)
    },
  },
}
</script>

<style></style>
