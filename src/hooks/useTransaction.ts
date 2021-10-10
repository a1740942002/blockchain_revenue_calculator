import { ref, Ref } from 'vue';
import { useApi } from './useApi';

export function useTransaction(token?) {
  const transactions = ref([]);
  const { api, coinApi, coinApiKey } = useApi(token);
  const tickers = ref([]);
  const isEdit = ref(false);
  const editTransaction = ref({});
  const isShowTransactionModal = ref(false);

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
  const addTransaction = async (transactionData) => {
    try {
      const res = await api.post('/transactions', transactionData);
      transactions.value.push(res.data);
    } catch (error) {
      return Promise.reject(error);
    }
  };
  const updateTransaction = async (id, transactionData) => {
    try {
      const res = await api.put(`/transactions/${id}`, transactionData);
      transactions.value = transactions.value.map((transaction) => {
        return transaction.id == id ? res.data : transaction;
      });
    } catch (error) {
      return Promise.reject(error);
    }
  };
  const deleteTransaction = async (id) => {
    try {
      await api.delete(`/transactions/${id}`);
      transactions.value = transactions.value.filter((transaction) => {
        return transaction.id !== id;
      });
    } catch (error) {
      return Promise.reject(error);
    }
  };

  return {
    isShowTransactionModal,
    isEdit,
    editTransaction,
    transactions,
    tickers,
    fetchCoinData,
    fetchTransactions,
    addTransaction,
    updateTransaction,
    deleteTransaction,
  };
}
