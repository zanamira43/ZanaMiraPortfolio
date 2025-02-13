<template>
  <section id="resume" class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold text-center mb-12">Resume</h2>
      <div class="max-w-3xl mx-auto">
        <!-- Experience -->
        <div class="mb-12">
          <h3 class="text-2xl font-semibold mb-6">Work Experience</h3>
          <div v-for="job in experience" :key="job.id" class="mb-8">
            <div class="flex justify-between items-center mb-2">
              <h4 class="text-xl font-bold">{{ job.title }}</h4>
              <!-- <span class="text-gray-600">{{ job.company }}</span> -->
            </div>
            <h5 class="text-gray-700 font-medium mb-2">{{ job.role }}</h5>
            <ul class="list-disc list-inside text-gray-600">
              <li v-for="(achievement, index) in job.achievements" :key="index">
                {{ achievement }}
              </li>
            </ul>
          </div>
        </div>
        <!-- Education -->
        <div>
          <h3 class="text-2xl font-semibold mb-6">Education</h3>
          <div v-for="edu in education" :key="edu.degree" class="mb-6">
            <h4 class="text-xl font-medium mb-2">{{ edu.degree }}</h4>
            <p class="text-gray-700">{{ edu.school }}</p>
            <p class="text-gray-600">{{ edu.period }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const experience = ref([
  {
    id: 1,
    title: "Front-End Development",
    // company: "Tech Solutions Inc.",
    // period: "2021 - Present",
    role: "Responsiblities:",
    achievements: [
      "Designing user-friendly and responsive interfaces",
      "Ensuring cross-browser compatibility.",
      "Implementing interactive features and dynamic content.",
      "Integrating front-end with back-end functionality.",
      "Optimizing performance and user experience (UX).",
    ],
  },
  {
    id: 2,
    title: "Back-End Development",
    // company: "Digital Innovations Ltd",
    // period: "2019 - 2021",
    role: "Responsiblities:",
    achievements: [
      "Building server-side logic and database interactions.",
      "Creating RESTful APIs for communication between client and server.",
      "Handling user authentication and authorization.",
      "Ensuring data security and server scalability.",
      "Managing databases (SQL or NoSQL) and integrating them into front-end applications.",
    ],
  },
  {
    id: 3,
    title: "Database Management:",
    // company: "Digital Innovations Ltd",
    // period: "2019 - 2021",
    role: "Responsiblities:",
    achievements: [
      "Designing, managing, and maintaining databases.",
      "Writing efficient queries to retrieve and manipulate data.",
      "Ensuring data integrity and optimization.",
    ],
  },
  {
    id: 4,
    title: "Devops & Deployment",
    // company: "Digital Innovations Ltd",
    // period: "2019 - 2021",
    role: "Responsiblities:",
    achievements: [
      "Setting up and managing deployment pipelines",
      "Automating deployment processes.",
      "Handling cloud-based infrastructure and hosting.",
      "Ensuring seamless integration and delivery of features.",
    ],
  },
]);

const education = ref([
  {
    degree: "High School",
    school: "Sulaimanyh Preparatory School",
    period: "1998 - 2001",
  },
  {
    degree: "Deploma",
    school: "Sulaimany Technical Institutes",
    period: "2001 - 2003",
  },
]);
</script>
