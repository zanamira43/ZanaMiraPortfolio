<template>
  <section
    class="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 flex items-center"
  >
    <div class="container mx-auto px-6">
      <div class="flex flex-col items-center text-center">
        <NuxtImg
          src="/hero-secion.png"
          alt="Profile"
          class="rounded-full mb-8 border-4 border-blue-500 object-cover h-48 w-48"
        />
        <h1 class="text-5xl font-bold text-white mb-4">Zana Mira</h1>
        <p class="text-2xl text-gray-300 mb-8">Full Stack Developer</p>
        <div class="flex gap-4">
          <a
            href="#contact"
            class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            class="border border-blue-600 text-blue-500 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg transition"
          >
            View Work
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// https://picsum.photos/150/150
</script>
