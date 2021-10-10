<template>
  <Header v-if="isShow" />
  <main>
    <router-view></router-view>
  </main>
  <Footer v-if="isShow" />
</template>

<script>
import { useRoute } from "vue-router";
import { computed, watchEffect, inject } from "vue";
import { useNotification } from "naive-ui";

export default {
  setup() {
    const error = inject("error");
    const notification = useNotification();
    const route = useRoute();
    const isShow = computed(() => {
      if (
        route.name == "Login" ||
        route.name == "SignUp" ||
        route.name == "Dashboard" ||
        route.name == "DashboardHome"
      )
        return false;

      return true;
    });

    watchEffect(() => {
      if (error.value) {
        const content =
          error.value == "Invalid token." && "驗證失敗，請重新登入。";
        notification.error({ content, duration: 3000 });
        error.value = "";
      }
    });

    return { route, isShow, error };
  },
};
</script>