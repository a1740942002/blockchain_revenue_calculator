<template>
  <h1 class="text-center font-semibold text-2xl">交易紀錄</h1>
  <div class="flex justify-end mb-2">
    <button class="bg-indigo-500 px-2 py-1 rounded text-white">新增紀錄</button>
  </div>
  <n-data-table :columns="columns" :data="data" />
</template>

<script>
import { defineComponent, ref } from "vue";
import _ from "lodash/core";

export default defineComponent({
  setup() {
    const createColumns = () => {
      return [
        {
          title: "幣別",
          key: "coin",
          align: "right",
        },
        {
          title: "數量",
          key: "amount",
          align: "right",
        },
        {
          title: "現價",
          key: "pricing",
          align: "right",
        },
        {
          title: "當日變動(%)",
          key: "changing",
          align: "right",
        },
        {
          title: "購入價格",
          key: "bought_pricing",
          align: "right",
        },
        {
          title: "利潤/損失(%)",
          key: "gain_loss",
          align: "right",
        },
        {
          title: "購入日期",
          key: "bought_at",
          align: "right",
        },
      ];
    };

    const createData = () => [
      {
        coin: "BTC",
        amount: 0.009458,
        pricing: 54821.32,
        changing: 5.14,
        gain_loss: 10,
        bought_at: "2021-05-13 07:38:31",
        bought_pricing: 51807.9932332,
      },
    ];

    const temp = [
      {
        coin: "BTC",
        amount: 0.009458,
        pricing: 54821.32,
        changing: 5.14,
        gain_loss: 10,
        bought_at: "2021-05-13 07:38:31",
        bought_pricing: 51807.99,
      },
    ];

    const data = temp.map((tmp) => {
      return {
        ...tmp,
        gain_loss:
          ((tmp.pricing - tmp.bought_pricing) / tmp.bought_pricing) * 100,
      };
    });

    return {
      data,
      columns: createColumns(),
    };
  },
});
</script>