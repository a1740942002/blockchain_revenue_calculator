<template>
  <tr :class="idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'">
    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
      {{ newTransaction.coin }}
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      {{ newTransaction.amount }}
    </td>
    <td
      :class="
        newTransaction.dayChanging > 0 ? 'text-green-500' : 'text-red-500'
      "
      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
    >
      {{ newTransaction.pricing }}
    </td>
    <td
      :class="
        newTransaction.dayChanging > 0 ? 'text-green-500' : 'text-red-500'
      "
      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
    >
      {{ newTransaction.dayChanging }}%
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      {{ newTransaction.boughtPricing }}
    </td>
    <td
      :class="newTransaction.gainLoss > 0 ? 'text-green-500' : 'text-red-500'"
      class="px-6 py-4 whitespace-nowrap text-sm"
    >
      {{ newTransaction.gainLoss }}%
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      {{ newTransaction.cost }}
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      {{ newTransaction.boughtDatetime }}
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
      <button @click="handleEdit" class="text-indigo-600 hover:text-indigo-900">
        修改
      </button>
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
      <button @click="handleDelete" class="text-red-600 hover:text-red-900">
        刪除
      </button>
    </td>
  </tr>
</template>

<script lang="ts">
import { defineComponent, toRefs, ref, inject, computed, Ref } from "vue";
import _ from "lodash";

export default defineComponent({
  props: {
    transaction: Object,
    idx: Number,
  },
  setup(props) {
    const { transaction } = toRefs(props);
    const isShowTransactionModal = inject(
      "isShowTransactionModal"
    ) as Ref<boolean>;
    const deleteTransaction = inject("deleteTransaction") as Function;
    const tickers = inject("tickers") as Ref;
    const ticker = tickers.value.find(
      (ticker) => transaction.value.coin == ticker.id
    );
    const pricing = ref(_.round(ticker?.price, 2));
    const dayChanging = ref(_.round(ticker["1d"].price_change_pct * 100, 2));
    const handleDelete = async () => {
      await deleteTransaction(newTransaction.id);
    };

    const isEdit = inject("isEdit") as Ref<boolean>;
    const editTransaction = inject("editTransaction") as Ref;

    const handleEdit = () => {
      editTransaction.value = transaction.value;
      isEdit.value = true;
      isShowTransactionModal.value = true;
    };

    const gainLoss = computed(() =>
      _.round((pricing.value / transaction.value.boughtPricing - 1) * 100, 2)
    );

    const date = new Date(
      transaction.value.boughtDatetime
    ).toLocaleDateString();
    const time = new Date(
      transaction.value.boughtDatetime
    ).toLocaleTimeString();

    const newTransaction = computed(() => {
      return {
        ...transaction.value,
        boughtDatetime: date + " " + time,
        pricing,
        gainLoss,
        dayChanging,
        boughtPricing: _.round(transaction.value.boughtPricing, 2),
      };
    });

    return {
      newTransaction,
      isShowTransactionModal,
      handleDelete,
      handleEdit,
      pricing,
      transaction,
    };
  },
});
</script>


