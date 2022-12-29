<template>
  <div class="">
    <div class="flex w-full px-4 py-3 items-center cursor-pointer">
      <img class="rounded-full mr-4 w-12" :src="chat.user.picture || ''" />

      <div class="w-full">
        <div class="flex justify-between items-center">
          <div class="text-[15px] text-gray-600">{{ chat.user.firstName }}</div>
          <div class="text-[12px] text-gray-600">Date</div>
        </div>

        <div class="flex items-center">
          <CheckAllIcon :size="18" class="mr-1" />
          <div
            class="text-[15px] w-full text-gray-500 flex items-center justify-between"
          >
            This is a message...
          </div>
        </div>
      </div>
    </div>

    <div class="border-b w-[calc(100%-80px)] float-right"></div>
  </div>
</template>

<script setup>
import CheckAllIcon from "vue-material-design-icons/CheckAll.vue";
import { toRefs } from "vue";

const props = defineProps({ chat: Object });
const { chat } = toRefs(props);
</script>
