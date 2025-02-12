<script setup>
const newDate = ref(new Date().getFullYear());
</script>

<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-6 md:mb-0">
          <h3 class="text-2xl font-bold">Zana Mira</h3>
          <p class="text-gray-400">Full Stack Developer</p>
        </div>
        <div class="flex gap-6">
          <a
            href="https://github.com/zanamira43"
            target="_blank"
            class="hover:text-blue-500 transition"
          >
            <Icon name="mdi:github" size="32" />
          </a>
          <a
            href="https://www.linkedin.com/in/zana-mira-3758a176/"
            target="_blank"
            class="hover:text-blue-500 transition"
          >
            <Icon name="mdi:linkedin" size="32" />
          </a>
          <a
            href="https://x.com/AhMira83"
            target="_blank"
            class="hover:text-blue-500 transition"
          >
            <Icon name="ant-design:x-outlined" size="32" />
          </a>
        </div>
      </div>
      <div class="mt-8 text-center text-gray-400">
        <p>&copy; {{ newDate }} Zana Mira. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
