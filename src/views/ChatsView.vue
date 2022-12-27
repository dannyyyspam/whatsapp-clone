<template>
  <div
    id="Messages"
    class="pt-1 z-0 overflow-auto fixed h-[calc(100vh-100px)] w-[420px]"
  >
    <MessageRowComponent />
  </div>
</template>

<script setup>
import MessageRowComponent from "../components/MessageRowComponent.vue";
</script>

<style lang="scss" scoped></style>
