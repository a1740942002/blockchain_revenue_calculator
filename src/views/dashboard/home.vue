<template>
  <h1 class="text-center font-semibold text-2xl">交易記錄</h1>
  <div class="flex justify-end mb-2">
    <button
      @click="handleAdd"
      class="bg-indigo-500 px-2 py-1 rounded text-white"
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