<template>
  <div class="text-blue-800 opacity-75">{{ level }}</div>
</template>

<script>
export default {
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style></style>
