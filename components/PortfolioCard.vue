<template>
  <div class="w-full p-3 break-words">
    <div class="rounded overflow-hidden shadow-lg">
      <img
        v-if="img"
        class="w-full h-48 object-contain cursor-pointer bg-blue-100"
        :src="require(`~/assets/images/${img}`)"
        @click="openTapImg(require(`~/assets/images/${img}`))"
      />
      <div
        v-else
        class="
          text-center
          h-48
          flex
          justify-center
          items-center
          bg-blue-400
          text-white
        "
      >
        <fa-icon icon="grin-alt" size="3x" />
      </div>
      <div class="px-6 py-4">
        <span class="text-gray-500">{{ company }}</span>
        <div class="font-bold text-xl mb-2">{{ name }}</div>
        <p class="text-gray-700 text-base">
          {{ content }}
          <br />
          <span class="text-gray-500 text-sm">{{ desc }}</span>
        </p>
        <a
          v-if="url"
          class="text-blue-400"
          :href="url"
          target="_blank"
          rel="noopener noreferrer"
          >{{ url }}</a
        >
      </div>
      <div class="px-6 py-4">
        <span
          v-for="(item, index) in tag"
          :key="index"
          class="
            inline-block
            bg-gray-200
            rounded-full
            px-3
            py-1
            text-sm
            font-semibold
            text-gray-700
            mr-2
            mb-2
          "
          >{{ item }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    company: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      default: '',
    },
    tag: {
      type: Array,
      required: true,
    },
  },
  methods: {
    openTapImg(uri) {
      window.open(uri)
    },
  },
}
</script>

<style></style>
