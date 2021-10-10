<template>
  <div>
    <h3 class="text-2xl font-semibold text-center mb-6">新增紀錄</h3>
    <form
      @submit.prevent="handleSubmit"
      class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
    >
      <div class="sm:col-span-1">
        <label for="coin" class="block text-sm font-medium text-gray-700"
          >幣別</label
        >
        <div class="mt-1">
          <Select />
        </div>
      </div>
      <div class="sm:col-span-1">
        <label
          for="boughtDatetime"
          class="block text-sm font-medium text-gray-700"
          >購入日期</label
        >
        <input v-model="boughtDatetime" type="datetime-local" />
      </div>
      <div class="sm:col-span-1">
        <label for="amount" class="block text-sm font-medium text-gray-700"
          >數量</label
        >
        <div class="mt-1">
          <input
            v-model="amount"
            type="number"
            step="any"
            name="amount"
            id="amount"
            autocomplete="organization"
            class="
              py-3
              px-4
              block
              w-full
              shadow-sm
              focus:ring-indigo-500
              focus:border-indigo-500
              border-gray-300
              rounded-md
            "
          />
        </div>
      </div>
      <div class="sm:col-span-1">
        <label
          for="boughtPricing"
          class="block text-sm font-medium text-gray-700"
          >購入價格</label
        >
        <div class="mt-1">
          <input
            v-model="boughtPricing"
            type="number"
            step="any"
            id="boughtPricing"
            autocomplete="organization"
            class="
              py-3
              px-4
              block
              w-full
              shadow-sm
              focus:ring-indigo-500
              focus:border-indigo-500
              border-gray-300
              rounded-md
            "
          />
        </div>
      </div>
      <div class="sm:col-span-1">
        <label for="cost" class="block text-sm font-medium text-gray-700"
          >成本 (USD)</label
        >
        <div class="mt-1">
          <input
            v-model="cost"
            type="number"
            step="any"
            id="cost"
            autocomplete="organization"
            class="
              py-3
              px-4
              block
              w-full
              shadow-sm
              focus:ring-indigo-500
              focus:border-indigo-500
              border-gray-300
              rounded-md
            "
          />
        </div>
      </div>

      <div class="sm:col-span-2">
        <button
          type="submit"
          class="
            w-full
            inline-flex
            items-center
            justify-center
            px-6
            py-3
            border border-transparent
            rounded-md
            shadow-sm
            text-base
            font-medium
            text-white
            bg-indigo-600
            hover:bg-indigo-700
            focus:outline-none
            focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
          "
        >
          送出
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, provide, inject, Ref } from "vue";
import { useTransaction } from "../../hooks/useTransaction";

export default defineComponent({
  setup() {
    const token = inject("token");
    const addTransaction = inject("addTransaction") as Function;
    const { cost, coin, boughtDatetime, amount, boughtPricing } =
      useTransaction();
    const isShowTranscationModal: Ref<boolean> = inject(
      "isShowTranscationModal"
    );
    const selections = ref([
      {
        name: "BTC",
      },
      {
        name: "ETC",
      },
    ]);
    provide("coin", coin);
    provide("selections", selections);

    const handleSubmit = async () => {
      const transactionData = {
        cost: cost.value,
        coin: coin.value,
        boughtDatetime: boughtDatetime.value,
        amount: amount.value,
        boughtPricing: boughtPricing.value,
      };
      await addTransaction(token, transactionData);
      coin.value = "";
      boughtDatetime.value = "";
      amount.value = "";
      boughtPricing.value = "";
      cost.value = "";
      isShowTranscationModal.value = false;
    };

    return {
      cost,
      coin,
      boughtDatetime,
      amount,
      boughtPricing,
      handleSubmit,
      isShowTranscationModal,
      selections,
    };
  },
});
</script>