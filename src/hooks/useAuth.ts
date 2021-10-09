import { useApi } from './useApi';
import { useCookies } from '@vueuse/integrations/useCookies';
import { ref, computed } from 'vue';

export function useAuth() {
  const { api } = useApi();
  const user = ref({});
  const isLogin = computed(() => Object.keys(user.value).length);
  const token = ref('');
  const cookies = useCookies(['token']);
  const error = ref('');

  token.value = cookies.get('token') || '';

  const getMe = async (token) => {
    try {
      const { api } = useApi(token);
      const res = await api.get('/users/me');
      return res.data;
    } catch (err) {
      error.value = err.response.data.message;
      return err.response;
    }
  };

  const login = async (userData) => {
    try {
      const res = await api.post(`/auth/local`, userData);
      token.value = res.data.jwt;
      cookies.set('token', token.value);
      user.value = await getMe(token);
      return res;
    } catch (err) {
      error.value = err.response.data.message[0].messages[0].message;
      return err.response;
    }
  };

  const register = async (userData) => {
    try {
      const res = await api.post('/auth/local/register', userData);
      token.value = res.data.jwt;
      cookies.set('token', token.value);
      user.value = await getMe(token);
      return res;
    } catch (err) {
      error.value = err.response.data.message[0].messages[0].message;
      return err.response;
    }
  };

  const logout = () => {
    cookies.remove('token');
    token.value = '';
    location.href = '/';
  };

  return {
    user,
    token,
    cookies,
    error,
    isLogin,
    register,
    login,
    logout,
    getMe,
  };
}
