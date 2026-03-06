<template>
  <div class="flex flex-col items-center justify-center text-center mt-10 text-gray-500">

    

    <h2 class="text-lg font-semibold text-gray-700">
      {{ title }}
      
    </h2>

    <p class="text-sm mt-1 max-w-sm">
      {{ description }}
    </p>

  </div>
</template>

<script>
export default {
  props: {
    
    title: String,
    description: String
  }
}
</script>