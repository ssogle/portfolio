<template>
  <div class="w-full p-3 break-words">
    <div class="rounded overflow-hidden shadow-lg bg-blue-100">
      <div class="px-6 py-4">
        <div class="font-bold text-xl my-2">{{ name }}</div>
        <hr />
        <p class="text-gray-700 text-base mt-2 break-words">
          {{ explain }}
        </p>
      </div>
      <!-- <div class="px-6 pb-4">
        <star-level :level="level"></star-level>
      </div> -->
    </div>
  </div>
</template>

<script>
// import StarLevel from './StarLevel.vue'
export default {
  // components: { StarLevel },
  props: {
    name: {
      type: String,
      required: true,
    },
    explain: {
      type: String,
      required: true,
    },
    level: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style></style>
