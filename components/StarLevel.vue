<template>
  <div class="text-blue-800 opacity-75 flex">
    <fa-icon
      v-for="index in 3"
      :key="index"
      :icon="index <= level ? 'star' : ['far', 'star']"
    />
  </div>
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
