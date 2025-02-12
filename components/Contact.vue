<template>
  <section id="contact" class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold text-center mb-12">Get In Touch</h2>
      <div class="max-w-2xl mx-auto">
        <form @submit.prevent="submitForm" class="space-y-6">
          <div>
            <label class="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              v-model="form.name"
              class="w-full px-4 py-3 rounded-lg border focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div>
            <label class="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              v-model="form.email"
              class="w-full px-4 py-3 rounded-lg border focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div>
            <label class="block text-gray-700 mb-2">Message</label>
            <textarea
              v-model="form.message"
              rows="5"
              class="w-full px-4 py-3 rounded-lg border focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            >
            </textarea>
          </div>
          <button
            type="submit"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
const form = ref({
  name: "",
  email: "",
  message: "",
});

const submitForm = () => {
  // Handle form submission
  console.log(form.value);
};
</script>
