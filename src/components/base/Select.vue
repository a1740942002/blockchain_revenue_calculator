<template>
  <div>
    <select
      v-model="coin"
      class="
        mt-1
        block
        w-full
        pl-3
        pr-10
        py-2
        text-base
        border-gray-300
        focus:outline-none
        focus:ring-indigo-500
        focus:border-indigo-500
        sm:text-sm
        rounded-md
      "
    >
      <option disabled value="">請選擇幣別</option>
      <option v-for="selection in selections" :key="selection.name">
        {{ selection.name }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";

export default defineComponent({
  setup() {
    const coin = inject("coin");
    const selections = inject("selections");

    return {
      coin,
      selections,
    };
  },
});
</script>

