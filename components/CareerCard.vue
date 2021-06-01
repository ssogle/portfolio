<template>
  <div class="w-full p-3 break-words">
    <div class="rounded overflow-hidden shadow-lg">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-3">{{ company }}</div>
        <hr />
        <div class="text-gray-500 mt-3 mb-2">{{ date }}</div>
        <div class="text-xl">{{ department }} {{ rank }}</div>
      </div>
      <div class="px-6 pb-4">
        <div class="text-blue-500 mb-1">#업무내용</div>
        <div
          v-for="(item, index) in explain"
          :key="index"
          class="
            block
            py-1
            text-sm
            font-semibold
            text-gray-700
            mb-1
            ml-2
            pl-3
            relative
          "
        >
          <span class="absolute top-1 left-0">- </span>{{ item }}
        </div>
      </div>
      <div class="px-6 pb-4">
        <div class="text-blue-500 mb-1">#진행프로젝트</div>
        <div
          v-for="(item, index) in project"
          :key="index"
          class="
            block
            py-1
            text-sm
            font-semibold
            text-gray-700
            mb-1
            ml-2
            pl-3
            relative
          "
        >
          <span class="absolute top-1 left-0">- </span>{{ item }}
        </div>
      </div>
      <div class="px-6 pb-4">
        <span
          v-for="(item, index) in skill"
          :key="index"
          class="
            inline-block
            bg-blue-400
            rounded-full
            px-3
            py-1
            text-sm
            font-semibold
            text-white
            mr-2
            mb-2
          "
          >#{{ item }}</span
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
    date: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    rank: {
      type: String,
      required: true,
    },
    explain: {
      type: Array,
      required: true,
    },
    project: {
      type: Array,
      required: true,
    },
    skill: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style></style>
