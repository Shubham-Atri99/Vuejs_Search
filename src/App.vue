<template> 
  <h1 class=" text-4xl text-center py-2 font-bold mt-5"> Search Project </h1>
  <Searchview />
</template>

<script>
import Searchview from './views/Searchview.vue';
export default {
  components: { Searchview }
}
</script>