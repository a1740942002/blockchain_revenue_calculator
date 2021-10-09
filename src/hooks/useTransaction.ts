import { ref, Ref } from 'vue';
import { useApi } from './useApi';

export function useTransaction() {
  const coin = ref('');
  const boughtDatetime = ref('');
  const amount: Ref<'' | number> = ref('');
  const boughtPricing: Ref<'' | number> = ref('');
  const transactions = ref([]);
  const { api } = useApi();

  const fetchTransactions = async () => {
    try {
      const res = await api.get('/transactions');
      transactions.value = res.data;
      return res;
    } catch (error) {
      return error.response;
    }
  };
  const addTransaction = async (token, transactionData) => {
    try {
      const { api } = useApi(token);
      const res = await api.post('/transactions', transactionData);
      transactions.value.push(res.data);
    } catch (error) {
      return error.response;
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
      return error.response;
    }
  };

  return {
    transactions,
    fetchTransactions,
    addTransaction,
    updateTransaction,
    deleteTransaction,
    coin,
    boughtDatetime,
    amount,
    boughtPricing,
  };
}
