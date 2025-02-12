<template>
  <section id="resume" class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold text-center mb-12">Resume</h2>
      <div class="max-w-3xl mx-auto">
        <!-- Experience -->
        <div class="mb-12">
          <h3 class="text-2xl font-semibold mb-6">Work Experience</h3>
          <div v-for="job in experience" :key="job.company" class="mb-8">
            <div class="flex justify-between items-center mb-2">
              <h4 class="text-xl font-medium">{{ job.title }}</h4>
              <span class="text-gray-600">{{ job.period }}</span>
            </div>
            <p class="text-gray-700 mb-2">{{ job.company }}</p>
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
    title: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2021 - Present",
    achievements: [
      "Led development of microservices architecture",
      "Improved application performance by 40%",
      "Mentored junior developers",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Innovations Ltd",
    period: "2019 - 2021",
    achievements: [
      "Developed e-commerce platform with 100k+ users",
      "Implemented CI/CD pipeline",
      "Reduced server costs by 30%",
    ],
  },
]);

const education = ref([
  {
    degree: "Master of Computer Science",
    school: "Tech University",
    period: "2017 - 2019",
  },
  {
    degree: "Bachelor of Computer Science",
    school: "State University",
    period: "2013 - 2017",
  },
]);
</script>
