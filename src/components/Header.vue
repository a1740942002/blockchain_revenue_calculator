<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <header class="bg-indigo-600">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div
        class="
          w-full
          py-6
          flex
          items-center
          justify-between
          border-b border-indigo-500
          lg:border-none
        "
      >
        <div class="flex items-center">
          <router-link :to="{ name: 'Home' }">
            <img class="h-10 w-auto" src="../assets/logo.png" alt="" />
          </router-link>
          <div class="hidden ml-10 space-x-8 lg:block">
            <router-link
              v-for="link in navigation"
              :key="link.name"
              :to="{ name: link.name }"
              class="text-base font-medium text-white hover:text-indigo-50"
            >
              {{ link.label }}
            </router-link>
          </div>
        </div>
        <div v-if="!isLogin" class="ml-10 space-x-4">
          <router-link
            :to="{ name: 'Login' }"
            class="
              inline-block
              bg-indigo-500
              py-2
              px-4
              border border-transparent
              rounded-md
              text-base
              font-medium
              text-white
              hover:bg-opacity-75
            "
            >登入</router-link
          >
          <router-link
            :to="{ name: 'SignUp' }"
            class="
              inline-block
              bg-white
              py-2
              px-4
              border border-transparent
              rounded-md
              text-base
              font-medium
              text-indigo-600
              hover:bg-indigo-50
            "
            >註冊</router-link
          >
        </div>
        <div class="space-x-4" v-else>
          <span class="hidden md:inline-block text-indigo-200"
            >你好，{{ user.email }}</span
          >
          <router-link
            :to="{ name: 'DashboardHome' }"
            class="
              inline-block
              bg-indigo-500
              py-2
              px-4
              border border-transparent
              rounded-md
              text-base
              font-medium
              text-white
              hover:bg-opacity-75
            "
            >管理</router-link
          >
          <button
            @click="logout"
            class="
              inline-block
              bg-white
              py-2
              px-4
              border border-transparent
              rounded-md
              text-base
              font-medium
              text-indigo-600
              hover:bg-indigo-50
            "
          >
            登出
          </button>
        </div>
        <MenuIcon
          @click="isMenuOpen = !isMenuOpen"
          class="text-white h-6 w-6 md:hidden"
        />
      </div>
      <div
        v-if="isMenuOpen"
        class="py-4 flex flex-wrap justify-center space-x-6 lg:hidden"
      >
        <a
          v-for="link in navigation"
          :key="link.name"
          :to="link.name"
          class="text-base font-medium text-white hover:text-indigo-50"
        >
          {{ link.label }}
        </a>
      </div>
    </nav>
  </header>
</template>

<script>
import { inject, ref } from "vue";
import { useAuth } from "@/hooks/useAuth";
import { MenuIcon } from "@heroicons/vue/outline";

const navigation = [
  { name: "Home", label: "首頁" },
  { name: "About", label: "關於專案" },
];

export default {
  components: {
    MenuIcon,
  },
  setup() {
    const { logout } = useAuth();
    const user = inject("user");
    const isLogin = inject("isLogin");
    const isMenuOpen = ref(false);

    return {
      isMenuOpen,
      user,
      navigation,
      logout,
      isLogin,
    };
  },
};
</script>