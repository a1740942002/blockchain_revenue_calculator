import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import './tailwind.css';
import 'nprogress/nprogress.css';
import {
  create,
  NButton,
  NIcon,
  NCard,
  NTabs,
  NTabPane,
  NForm,
  NFormItemRow,
  NInput,
  NNotificationProvider,
  NDataTable,
  NDatePicker,
} from 'naive-ui';
const naive = create({
  components: [
    NButton,
    NIcon,
    NCard,
    NTabs,
    NTabPane,
    NForm,
    NFormItemRow,
    NInput,
    NNotificationProvider,
    NDataTable,
    NDatePicker,
  ],
});
createApp(App).use(store).use(router).use(naive).mount('#app');
