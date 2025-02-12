// components/TechnologySection.vue
<template>
  <section id="tools" class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <!-- title & subtitle section -->
      <div class="flex flex-col justify-center items-center mb-5">
        <h2 class="text-4xl font-bold text-center">Tools & Technologies</h2>
        <h2 class="font-normal text-lg text-gray-600 tracking-[1px] p-1">
          The technologies that I use for my projects
        </h2>
      </div>

      <!-- Technology Categories -->
      <div class="space-y-12">
        <div
          v-for="category in techCategories"
          :key="category.name"
          class="bg-gray-50 rounded-xl p-8"
        >
          <h3 class="text-2xl font-semibold mb-6 text-blue-600">
            {{ category.name }}
          </h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div
              v-for="tech in category.technologies"
              :key="tech.name"
              class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div class="flex items-center mb-3">
                <NuxtImg :src="tech.icon" class="text-3xl mr-1 h-10 w-12"></NuxtImg>
                <NuxtImg
                  v-if="tech.secondicon"
                  :src="tech.secondicon"
                  class="text-3xl mr-1 h-10 w-10"
                ></NuxtImg>
                <h4 class="font-medium">{{ tech.name }}</h4>
              </div>
              <div class="space-y-2">
                <!-- <div class="relative pt-1">
                  <div class="flex items-center justify-between mb-2">
                    <div class="text-sm font-medium text-gray-600">
                      {{ tech.level }}
                    </div>
                    <div class="text-sm font-medium text-blue-600">
                      {{ tech.percentage }}%
                    </div>
                  </div>
                  <div class="overflow-hidden h-2 text-xs flex rounded bg-gray-100">
                    <div
                      :style="{ width: `${tech.percentage}%` }"
                      class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                    ></div>
                  </div>
                </div> -->
                <p class="text-sm text-gray-600">{{ tech.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const techCategories = ref([
  {
    name: "Frontend Development",
    technologies: [
      {
        name: "HTML",
        icon: "/services/frontend/html-5-svgrepo-com.svg",
        level: "Expert",
        percentage: 95,
        description: "A markup language used to structure content on the web",
      },
      {
        name: "CSS",
        icon: "/services/frontend/css3-svgrepo-com.svg",
        level: "Expert",
        percentage: 95,
        description:
          "A stylesheet language that controls the presentation and layout of web pages.",
      },
      {
        name: "JavaScript",
        icon: "/services/frontend/javascript-svgrepo-com.svg",
        level: "Advanced",
        percentage: 85,
        description:
          "A programming language that enables interactive features on websites.",
      },
      {
        name: "TypeScript",
        icon: "/services/frontend/Typescript_logo_2020.svg.png",
        level: "Advanced",
        percentage: 90,
        description:
          "A superset of JavaScript that adds static typing for improved development and maintenance.",
      },
      {
        name: "Vue.js",
        icon: "/services/frontend/vue-js.png",
        level: "Expert",
        percentage: 95,
        description:
          "A progressive JavaScript framework for building user interfaces and single-page applications.",
      },
      {
        name: "Nuxt.js",
        icon: "/services/frontend/nuxt-svgrepo-com.svg",
        level: "Expert",
        percentage: 95,
        description:
          "A framework based on Vue.js that simplifies server-side rendering and static site generation.",
      },
      {
        name: "Tailwind CSS",
        icon: "/services/frontend/tailwindcss-svgrepo-com.svg",
        level: "Expert",
        percentage: 95,
        description:
          "A utility-first CSS framework for rapidly building custom designs without leaving your HTML.",
      },
    ],
  },
  {
    name: "Backend Development",
    technologies: [
      {
        name: "Go Programming",
        icon: "/services/backend/golang-svgrepo-com.svg",
        level: "Intermediate",
        percentage: 75,
        description:
          "A statically typed, compiled programming language designed for simplicity and efficiency, particularly in concurrent applications",
      },
      {
        name: "Python Programming",
        icon: "/services/backend/Python-programming.png",
        level: "Advanced",
        percentage: 85,
        description:
          "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. It uses for web development, data analysis.",
      },
      {
        name: "Node.js",
        icon: "/services/backend/node-js-icon.png",
        level: "Expert",
        percentage: 90,
        description:
          "A runtime environment that allows JavaScript to be executed server-side, enabling the development of scalable network applications.",
      },
    ],
  },
  {
    name: "Database & Storage",
    technologies: [
      {
        name: "MySQL",
        icon: "services/database/mysql-svgrepo-com.svg",
        level: "Advanced",
        percentage: 80,
        description:
          "An open-source relational database management system known for its reliability and ease of use, often used in web applications",
      },
      {
        name: "PostgreSQL",
        icon: "services/database/postgresql-svgrepo-com.svg",
        level: "Advanced",
        percentage: 85,
        description:
          "An advanced open-source relational database that emphasizes extensibility and standards compliance, supporting complex queries and data types",
      },
      {
        name: "MongoDB",
        icon: "services/database/mongo-svgrepo-com.svg",
        level: "Expert",
        percentage: 90,
        description:
          "A NoSQL database that stores data in flexible, JSON-like documents, making it ideal for applications with variable data structures and high scalability.",
      },
    ],
  },
  {
    name: "DevOps & Cloud",
    technologies: [
      {
        name: "Docker",
        icon: "services/devops/docker-svgrepo-com.svg",
        level: "Advanced",
        percentage: 85,
        description:
          "A platform that enables developers to create, deploy, and run applications in containers, ensuring consistency across different environments.",
      },
      {
        name: "Kubernetes",
        icon: "services/devops/kubernetes-svgrepo-com.svg",
        level: "Intermediate",
        percentage: 75,
        description:
          "An open-source orchestration system for automating the deployment, scaling, and management of containerized applications.",
      },
      {
        name: "AWS",
        icon: "services/devops/aws-logo.png",
        level: "Advanced",
        percentage: 80,
        description:
          "A comprehensive cloud computing platform that offers a wide range of services, including computing power, storage, databases, and machine learning, allowing businesses to build and scale applications efficiently",
      },
      {
        name: "CI/CD",
        icon: "services/devops/cicd-icon.jpg",
        level: "Advanced",
        percentage: 85,
        description:
          "A set of practices that automates the integration of code changes and the deployment of applications, improving development speed and reliability.",
      },
    ],
  },
]);
</script>
