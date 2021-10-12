<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  幣別
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  數量
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  現價
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  當日變動
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  購入價格
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  利潤/損失
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  成本(USD)
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  購入日期
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">修改</span>
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">刪除</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <TransactionItem
                v-for="(transaction, idx) in transactions"
                :transaction="transaction"
                :idx="idx"
                :key="idx"
              />
            </tbody>
          </table>
        </div>
        <h4
          class="text-lg text-gray-500 text-center py-4"
          v-if="transactions.length == 0"
        >
          目前沒有交易記錄
        </h4>
        <warning v-if="error?.message" class="mt-8">
          <template v-slot:title>
            Sorry! There is a {{ error.message }}!
          </template>
          <template v-slot:content>
            抱歉，伺服器出了點狀況，因此無法獲得幣的即時資訊。</template
          >
        </warning>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    const transactions = inject("transactions");
    const error = inject("error");

    return {
      transactions,
      error,
    };
  },
};
</script>
