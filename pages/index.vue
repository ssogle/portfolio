<template>
  <section>
    <div class="container m-auto">
      <div class="flex flex-wrap justify-center content-center mb-4 py-12">
        <div class="item text-center w-full overflow-hidden p-3 break-words">
          <div class="rounded overflow-hidden shadow-lg bg-blue-400 py-12">
            <div class="lg:px-12 block lg:text-left">
              <div class="text-2xl font-bold text-white">
                Portfolio for Ssogle
              </div>
              <p class="text-white">Welcome to my page</p>
            </div>
          </div>
        </div>
        <nuxt-link
          to="/career"
          class="
            item
            text-center
            xl:w-1/3
            lg:w-1/3
            w-full
            overflow-hidden
            p-3
            break-words
          "
        >
          <div
            class="
              rounded
              overflow-hidden
              shadow-lg
              bg-blue-300
              hover:bg-blue-200
              text-white
              py-12
            "
          >
            <fa-icon icon="building" class="text-yellow-200" size="3x" />
            <div class="pt-4 uppercase text-xl block">career</div>
          </div>
        </nuxt-link>
        <nuxt-link
          to="/skill"
          class="
            item
            text-center
            xl:w-1/3
            lg:w-1/3
            w-full
            overflow-hidden
            p-3
            break-words
          "
        >
          <div
            class="
              rounded
              overflow-hidden
              shadow-lg
              bg-blue-300
              hover:bg-blue-200
              text-white
              py-12
            "
          >
            <fa-icon icon="brain" class="text-green-200" size="3x" />
            <div class="pt-4 uppercase text-xl block">skill</div>
          </div>
        </nuxt-link>
        <nuxt-link
          to="/portfolio"
          class="
            item
            text-center
            xl:w-1/3
            lg:w-1/3
            w-full
            overflow-hidden
            p-3
            break-words
          "
        >
          <div
            class="
              rounded
              overflow-hidden
              shadow-lg
              bg-blue-300
              hover:bg-blue-200
              text-white
              py-12
            "
          >
            <fa-icon icon="briefcase" class="text-pink-200" size="3x" />
            <div class="pt-4 uppercase text-xl block">portfolio</div>
          </div>
        </nuxt-link>
        <div class="item text-center w-full overflow-hidden p-3 break-words">
          <div class="rounded overflow-hidden shadow-lg bg-blue-200 py-12">
            <div class="lg:px-12 block lg:text-right">
              <div class="border-b-4 border-white border-dotted opacity-50" />
              <div class="text-2xl font-bold text-white mt-2">
                Portfolio for Ssogle
              </div>
              <p class="text-white">Welcome to my page</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
