<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-gray-50">
    <div class="relative overflow-hidden">
      <!-- 裝飾品 -->
      <div class="absolute inset-y-0 h-full w-full" aria-hidden="true">
        <div class="relative h-full">
          <svg
            class="
              absolute
              right-full
              transform
              translate-y-1/3 translate-x-1/4
              md:translate-y-1/2
              sm:translate-x-1/2
              lg:translate-x-full
            "
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="e229dbec-10e9-49ee-8ec3-0286ca089edf"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#e229dbec-10e9-49ee-8ec3-0286ca089edf)"
            />
          </svg>
          <svg
            class="
              absolute
              left-full
              transform
              -translate-y-3/4 -translate-x-1/4
              sm:-translate-x-1/2
              md:-translate-y-1/2
              lg:-translate-x-3/4
            "
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="d2a68204-c383-44b1-b99f-42ccff4e5365"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#d2a68204-c383-44b1-b99f-42ccff4e5365)"
            />
          </svg>
        </div>
      </div>

      <div class="relative pt-6 pb-16 sm:pb-24">
        <div class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
          <div class="text-center">
            <h1
              class="
                text-4xl
                tracking-tight
                font-extrabold
                text-gray-900
                sm:text-5xl
                md:text-6xl
              "
            >
              <span class="block">次世代加密貨幣</span>
              <span class="block text-indigo-600">記錄倉庫</span>
            </h1>
            <p
              class="
                mt-3
                max-w-md
                mx-auto
                text-base text-gray-500
                sm:text-lg
                md:mt-5
                md:text-xl
                md:max-w-3xl
              "
            >
              一鍵控管資產，邁向財富自由
            </p>
          </div>
        </div>
      </div>

      <!-- 圖片 -->
      <div class="relative">
        <div class="absolute inset-0 flex flex-col" aria-hidden="true">
          <div class="flex-1" />
          <div class="flex-1 w-full bg-gray-800" />
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
          <img
            class="relative rounded-lg shadow-lg"
            src="../assets/homepage_hero.png"
            alt="App screenshot"
          />
        </div>
      </div>
    </div>

    <!-- 底下 Logo 列表 -->
    <div class="bg-gray-800">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2
          class="
            text-center text-gray-400 text-sm
            font-semibold
            uppercase
            tracking-wide
          "
        >
          Trusted by over 26,000 forward-thinking companies
        </h2>
        <div class="mt-8 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          <div
            class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
          >
            <img
              class="h-12"
              src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
              alt="Tuple"
            />
          </div>
          <div
            class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
          >
            <img
              class="h-12"
              src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
              alt="Mirage"
            />
          </div>
          <div
            class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
          >
            <img
              class="h-12"
              src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
              alt="StaticKit"
            />
          </div>
          <div
            class="col-span-1 flex justify-center md:col-span-3 lg:col-span-1"
          >
            <img
              class="h-12"
              src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
              alt="Transistor"
            />
          </div>
          <div
            class="col-span-2 flex justify-center md:col-span-3 lg:col-span-1"
          >
            <img
              class="h-12"
              src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
              alt="Workcation"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    MenuIcon,
    XIcon,
  },
  setup() {
    return {
      navigation,
    };
  },
};
</script>