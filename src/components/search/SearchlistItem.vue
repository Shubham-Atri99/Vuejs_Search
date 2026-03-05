<template>
  <div
    class="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 
           p-6 rounded-xl shadow-md hover:shadow-lg 
           transition duration-300 border border-gray-200"
  >
    <h3 class="text-xl font-semibold text-gray-800 mb-2">
      {{ result.title }}
    </h3>

    <p class="text-gray-600 leading-relaxed">
      {{ result.description }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    result: Object
  }
}
</script>