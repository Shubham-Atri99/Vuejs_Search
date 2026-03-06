<template>
    <Searchbar :query="query" @search="handlesearch"/>
    <Loader v-if="isloading"/>
       <p v-if="query.length==0" class="text-center text-gray-500 mt-4">
            Please enter a search query.

       </p>
    
        <p v-else-if="!isloading && hassearched&& results.length === 0" class="text-center text-gray-500 mt-4">
            No results found.
        </p>
    
    <Searchlist  v-else :results="results"/>
    
</template>

<script>
import Searchbar from '@/components/search/Searchbar.vue';
import Searchlist from '@/components/search/Searchlist.vue';
import Loader from '@/components/ui/Loader.vue';
import { search } from '@/Services/api';
import { ref } from 'vue';

export default {
    components: { Searchbar, Searchlist, Loader },
    setup(){
   const query=ref ('');
   const results=ref ([]);
   const isloading=ref(false);
   const hassearched=ref(false);
   let debouncetimeout;
   
    const handlesearch = async (value) => {
    

      query.value = value
      clearTimeout(debouncetimeout)

      
      if (value.length < 3) {
       results.value = []
       hassearched.value = false 
       return
      }
      

      debouncetimeout=setTimeout(async()=>{
      
      isloading.value = true
      hassearched.value = true

      try {
        const data = await search(value)
        console.log(data);
        results.value = data
      } catch (error) {
        console.log(error)
      }

      isloading.value = false
      },1000)
     
    }
    return {
        query,
        results,
        isloading,
        handlesearch,
        hassearched

    }
    }
}






</script>