import { ref, Ref } from 'vue';
import { useApi } from './useApi';

export function useTransaction() {
  const coin = ref('');
  const boughtDatetime = ref('');
  const cost: Ref<'' | number> = ref('');
  const amount: Ref<'' | number> = ref('');
  const boughtPricing: Ref<'' | number> = ref('');
  const transactions = ref([]);
  const { api, coinApi, coinApiKey } = useApi();
  const tickers = ref([]);

  const fetchCoinData = async () => {
    try {
      const res = await coinApi.get(`/currencies/ticker?key=${coinApiKey}&ids=BTC,ETH,interval=1d`);
      tickers.value = res.data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const fetchTransactions = async (id) => {
    try {
      const res = await api.get(`/transactions?belong_to.id=${id}&_sort=boughtDatetime:DESC`);
      transactions.value = res.data;
      return res;
    } catch (error) {
      return Promise.reject(error);
    }
  };
  const addTransaction = async (token, transactionData) => {
    try {
      const { api } = useApi(token);
      const res = await api.post('/transactions', transactionData);
      transactions.value.push(res.data);
    } catch (error) {
      return Promise.reject(error);
    }
  };
  const updateTransaction = async () => {};
  const deleteTransaction = async (token, id) => {
    try {
      const { api } = useApi(token);
      await api.delete(`/transactions/${id}`);
      transactions.value = transactions.value.filter((transaction) => {
        return transaction.id !== id;
      });
    } catch (error) {
      return Promise.reject(error);
    }
  };

  return {
    transactions,
    tickers,
    fetchCoinData,
    fetchTransactions,
    addTransaction,
    updateTransaction,
    deleteTransaction,
    coin,
    cost,
    boughtDatetime,
    amount,
    boughtPricing,
  };
}
