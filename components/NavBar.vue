// components/NavBar.vue
<template>
  <nav class="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
    <div class="container mx-auto px-6">
      <div class="flex justify-between items-center h-16">
        <!-- Logo/Name -->
        <a href="/" class="text-xl font-bold text-blue-600">
          <NuxtImg class="w-full h-[5vh] mt-2" src="/Logo-ZanaMira.png" />
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a
            v-for="item in navItems"
            :key="item.name"
            :href="item.href"
            class="text-gray-700 hover:text-blue-600 transition-colors duration-300"
          >
            {{ item.name }}
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="isMenuOpen = !isMenuOpen"
          class="md:hidden p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <svg
            v-if="!isMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-show="isMenuOpen"
      class="md:hidden bg-white border-t"
      @click="isMenuOpen = false"
    >
      <div class="container mx-auto px-6 py-4 space-y-4">
        <a
          v-for="item in navItems"
          :key="item.name"
          :href="item.href"
          class="block text-gray-700 hover:text-blue-600 transition-colors duration-300"
        >
          {{ item.name }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
const isMenuOpen = ref(false);

const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Tools", href: "#tools" },
  { name: "Projects", href: "#projects" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

// Close mobile menu when clicking outside
onMounted(() => {
  document.addEventListener("click", (event) => {
    const nav = document.querySelector("nav");
    if (nav && !nav.contains(event.target)) {
      isMenuOpen.value = false;
    }
  });
});

// Smooth scroll functionality
const smoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
};

onMounted(() => {
  smoothScroll();
});
</script>
