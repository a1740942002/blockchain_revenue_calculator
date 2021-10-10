<template>
  <h1 class="text-center font-semibold text-2xl">交易紀錄</h1>
  <div class="flex justify-end mb-2">
    <button
      @click="isShowTranscationModal = true"
      class="bg-indigo-500 px-2 py-1 rounded text-white"
    >
      新增紀錄
    </button>
  </div>
  <TransactionList />
  <TransactionModal />
</template>

<script>
import { defineComponent, ref, provide, inject } from "vue";
import _ from "lodash/core";

export default defineComponent({
  setup() {
    const isShowTranscationModal = ref(false);
    provide("isShowTranscationModal", isShowTranscationModal);

    return {
      isShowTranscationModal,
    };
  },
});
</script>