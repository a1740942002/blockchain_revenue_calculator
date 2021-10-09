<template>
  <n-notification-provider>
    <Layout />
  </n-notification-provider>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useAuth } from "./hooks/useAuth";
import { provide } from "vue";

export default defineComponent({
  setup() {
    const { user, isLogin, token, getMe, error } = useAuth();
    if (token.value) {
      getMe(token).then((userData) => (user.value = userData));
    }
    provide("user", user);
    provide("isLogin", isLogin);
    provide("error", error);
    return { user, isLogin, token };
  },
});
</script>

<style>
#nprogress .bar {
  background: rgb(214, 214, 255) !important;
}
</style>
