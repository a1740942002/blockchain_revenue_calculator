<template>
  <div
    class="
      h-screen
      bg-gray-50
      flex flex-col
      justify-center
      py-12
      sm:px-6
      lg:px-8
    "
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img class="mx-auto h-12 w-auto" src="../assets/logo.png" alt="bitcord" />
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        註冊
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        已經有帳號了嗎？直接
        {{ " " }}
        <router-link
          :to="{ name: 'Login' }"
          class="font-medium text-indigo-600 hover:text-indigo-500"
        >
          登入
        </router-link>
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" @submit.prevent="handleSubmit">
          <div>
            <label
              for="username"
              class="block text-sm font-medium text-gray-700"
            >
              使用者名稱
            </label>
            <div class="mt-1">
              <input
                v-model="username"
                id="username"
                name="username"
                type="text"
                required
                class="
                  appearance-none
                  block
                  w-full
                  px-3
                  py-2
                  border border-gray-300
                  rounded-md
                  shadow-sm
                  placeholder-gray-400
                  focus:outline-none
                  focus:ring-indigo-500
                  focus:border-indigo-500
                  sm:text-sm
                "
              />
            </div>
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div class="mt-1">
              <input
                v-model="email"
                id="email"
                name="email"
                type="email"
                required
                class="
                  appearance-none
                  block
                  w-full
                  px-3
                  py-2
                  border border-gray-300
                  rounded-md
                  shadow-sm
                  placeholder-gray-400
                  focus:outline-none
                  focus:ring-indigo-500
                  focus:border-indigo-500
                  sm:text-sm
                "
              />
            </div>
          </div>

          <div>
            <label
              for="password"
              class="block text-sm font-medium text-gray-700"
            >
              密碼
            </label>
            <div class="mt-1">
              <input
                v-model="password"
                id="password"
                name="password"
                type="password"
                required
                class="
                  appearance-none
                  block
                  w-full
                  px-3
                  py-2
                  border border-gray-300
                  rounded-md
                  shadow-sm
                  placeholder-gray-400
                  focus:outline-none
                  focus:ring-indigo-500
                  focus:border-indigo-500
                  sm:text-sm
                "
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="
                w-full
                flex
                justify-center
                py-2
                px-4
                border border-transparent
                rounded-md
                shadow-sm
                text-sm
                font-medium
                text-white
                bg-indigo-600
                hover:bg-indigo-700
                focus:outline-none
                focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
              "
            >
              註冊
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useNotification } from "naive-ui";
import { defineComponent, ref, watchEffect, inject, ComputedRef } from "vue";
import { useAuth } from "../hooks/useAuth";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const username = ref("");
    const email = ref("");
    const password = ref("");
    const { error, register } = useAuth();
    const notification = useNotification();
    const isLogin = inject("isLogin") as ComputedRef<number>;
    const router = useRouter();

    const handleSubmit = async () => {
      const userData = {
        username: username.value,
        email: email.value,
        password: password.value,
      };
      notification.warning({ content: "註冊中...", duration: 3000 });
      const res = await register(userData);
      if (res.status == 200) {
        notification.success({
          content: "註冊成功，將進行跳轉...",
          duration: 3000,
        });
        location.href = "/";
      } else {
        notification.error({ content: error.value, duration: 3000 });
      }
    };

    watchEffect(() => {
      if (isLogin.value) {
        router.push({ name: "DashboardHome" });
      }
    });

    return {
      username,
      email,
      password,
      handleSubmit,
      error,
      isLogin,
    };
  },
});
</script>