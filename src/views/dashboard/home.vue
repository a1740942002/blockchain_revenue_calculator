<template>
  <h1 class="text-center font-semibold text-3xl">交易記錄</h1>
  <div class="flex justify-end mb-2">
    <button
      @click="handleAdd"
      class="
        bg-indigo-500
        px-3
        py-2
        text-xl
        rounded-md
        text-white
        hover:bg-indigo-600
        transition
        duration-300
      "
    >
      新增記錄
    </button>
  </div>
  <TransactionList v-if="!isLoadingTransactions" />
  <n-space v-else vertical>
    <n-skeleton height="40px" round />
    <n-skeleton height="40px" width="66%" :sharp="false" />
    <n-skeleton height="40px" width="33%" />
  </n-space>
  <TransactionModal />
</template>

<script>
import { defineComponent, inject } from "vue";
import _ from "lodash/core";

export default defineComponent({
  setup() {
    const isShowTransactionModal = inject("isShowTransactionModal");
    const isEdit = inject("isEdit");
    const tickers = inject("tickers");
    const isLoadingTransactions = inject("isLoadingTransactions");
    const handleAdd = () => {
      isShowTransactionModal.value = true;
      isEdit.value = false;
    };

    return {
      isShowTransactionModal,
      isLoadingTransactions,
      handleAdd,
      tickers,
    };
  },
});
</script>