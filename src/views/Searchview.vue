<template>
    <Searchbar :query="query" @search="handlesearch"/>
    <Loader v-if="isloading"/>
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

   let debouncetimeout;
   
    const handlesearch = async (value) => {
      clearTimeout(debouncetimeout)
      debouncetimeout=setTimeout(async()=>{
       query.value = value
      isloading.value = true

      try {
        const data = await search(value)
        console.log(data);
        results.value = data
      } catch (error) {
        console.log(error)
      }

      isloading.value = false
      },2000)
     
    }
    return {
        query,
        results,
        isloading,
        handlesearch
    }
    }
}






</script>