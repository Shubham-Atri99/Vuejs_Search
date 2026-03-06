<template>
  <div
    @click="toggleexpand"
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
     <span class="text-gray-500 text-sm mt-4">
    {{ expanded ? "show less" : "show more" }}
  </span>
    
    <Transition name="expand">
      <div v-if="expanded"
      class=" mt-4 pt-4 border-t border-gray-300 space-y-1 text-sm text-gray-700 ">
        <p><span class="font-medium">Price:</span> ${{result.price||"not defined"}}</p>
        <p><span class="font-medium">Brand:</span> {{result.brand||"not defined"}}</p>
        <p><span class="font-medium">Rating:</span> {{result.rating||"not defined"}} stars</p>
        <p><span class="font-medium">Stock:</span> {{result.stock||"not defined"}}</p>
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  props: {
    result: Object
  },
   data(){
    return{
     expanded:false
    }
    
      
    
  },
  methods:{
    toggleexpand(){
      this.expanded=!this.expanded
    }
  }
}
</script>

<style>
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>