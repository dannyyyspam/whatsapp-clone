<template>
  <div class="w-full">
    <div class="bg-teal-600 z-[-1] w-full h-[225px] top-0"></div>
    <div
      class="bg-[#191919] z-[-1] w-full h-[calc(100vh-225px)] fixed bottom-0"
    ></div>

    <div class="max-w-xl mx-auto">
      <div class="mt-10 flex items-center w-full">
        <img width="40" src="https://random.imagecdn.app/100/100" alt="" />
        <div class="font-semibold text-gray-100 ml-6">WHATSAPP WEB</div>
      </div>

      <div class="bg-white z-10 p-24 m-6 mt-10">
        <div class="text-center text-4xl text-gray-700 font-light pb-10">
          WhatsApp Clone
        </div>
        <div class="w-full flex justify-center bg-[#191919] p-3 rounded-md">
          <GoogleLogin />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
