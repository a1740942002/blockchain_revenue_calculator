<template>
  <h1 class="text-center font-semibold text-2xl">交易紀錄</h1>
  <div class="flex justify-end mb-2">
    <button
      @click="handleAdd"
      class="bg-indigo-500 px-2 py-1 rounded text-white"
    >
      新增紀錄
    </button>
  </div>
  <TransactionList />
  <TransactionModal />
</template>

<script>
import { defineComponent, inject } from "vue";
import _ from "lodash/core";

export default defineComponent({
  setup() {
    const isShowTransactionModal = inject("isShowTransactionModal");
    const isEdit = inject("isEdit");
    const handleAdd = () => {
      isShowTransactionModal.value = true;
      isEdit.value = false;
    };

    return {
      isShowTransactionModal,
      handleAdd,
    };
  },
});
</script>