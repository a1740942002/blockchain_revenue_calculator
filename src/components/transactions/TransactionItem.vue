<template>
  <tr :class="idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'">
    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
      {{ newTransaction.coin }}
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      {{ newTransaction.amount }}
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      {{ newTransaction.pricing }}
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      {{ newTransaction.dayChanging }}
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      {{ newTransaction.boughtPricing }}
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      {{ newTransaction.gainLoss }}
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      {{ newTransaction.boughtDatetime }}
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
      <button class="text-indigo-600 hover:text-indigo-900">修改</button>
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
      <button @click="handleDelete" class="text-red-600 hover:text-red-900">
        刪除
      </button>
    </td>
  </tr>
  <button @click="pricing += 1">+</button>
</template>

<script lang="ts">
import { defineComponent, toRefs, ref, inject, computed } from "vue";

export default defineComponent({
  props: {
    transaction: Object,
    idx: Number,
  },
  setup(props) {
    const { transaction } = toRefs(props);
    const newTransaction = ref({});
    const deleteTransaction = inject("deleteTransaction") as Function;
    const token = inject("token");
    const handleDelete = async () => {
      await deleteTransaction(token, newTransaction.value.id);
    };
    const pricing = ref(54088);
    // const gainLoss = computed(()=>)

    newTransaction.value = { ...transaction.value, pricing };

    return {
      newTransaction,
      handleDelete,
      pricing,
    };
  },
});
</script>
