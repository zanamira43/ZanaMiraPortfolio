<template>
  <section id="projects" class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold text-center mb-12">My Projects</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="project in projects"
          :key="project.title"
          class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
        >
          <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {{ tech }}
              </span>
            </div>
            <div class="flex gap-4">
              <a :href="project.demo" class="text-blue-600 hover:text-blue-800"
                >Live Demo</a
              >
              <a :href="project.github" class="text-gray-600 hover:text-gray-800"
                >GitHub</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = ref([
  {
    title: "Nas Company Website",
    description:
      "A full-featured website platform for NaS General Trading Company The site includes both static and dynamic pages, he combination of Vue.js for reactive components and Nuxt.js for (server-side SSR & universal) rendering ensures optimal performance, SEO, and a seamless user experience across all devices",
    image: "projects/nas-website.png",
    technologies: ["NodeJS", "VueJs", "NuxtJs", "Tailwind CSS"],
    demo: "https://ngtcltd.com/",
    github: "#",
  },
  {
    title: "Sero Qawechi Website",
    description:
      "The site integrates both static and dynamically rendered pages, offering a fast, interactive experience.Nuxt.js enhances performance with its (server-side & universal ) rendering capabilities, improving SEO and load times, while Vue.js ensures smooth, reactive interactions for users, This combination delivers an efficient user-friendly web experience.",
    image: "projects/sero-qawechi.png",
    technologies: ["React", "Firebase", "Material-UI", "Redux"],
    demo: "https://seroqawechi.com/",
    github: "#",
  },
  // {
  //   title: "AI Image Generator",
  //   description: "Web application that generates images using AI models",
  //   image: "https://picsum.photos/400/300?random=3",
  //   technologies: ["Python", "TensorFlow", "Flask", "AWS"],
  //   demo: "#",
  //   github: "#",
  // },
]);
</script>
