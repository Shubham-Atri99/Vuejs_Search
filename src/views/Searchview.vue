<template>
    <Searchbar :query="query" @search="handlesearch"/>
    <Loader v-if="isloading"/>
    <Emptystate v-else-if="query.length === 0"
         title="start searching"
         description="please enter at least 3 characters to search."
         />
    
      <Emptystate v-else-if="!isloading && hassearched && results.length === 0"
        title="no results found"
        description="try different keywords"
       />
    
    <Searchlist  v-else :results="results"/>
    
</template>

<script>
import Searchbar from '@/components/search/Searchbar.vue';
import Searchlist from '@/components/search/Searchlist.vue';
import Loader from '@/components/ui/Loader.vue';
import { search } from '@/Services/api';
import { ref } from 'vue';
import Emptystate from '@/components/ui/Emptystate.vue';

export default {
    components: { Searchbar, Searchlist, Loader, Emptystate },
    setup(){
   const query=ref ('');
   const results=ref ([]);
   const isloading=ref(false);
   const hassearched=ref(false); //additonal state to check if the search has been made
   let debouncetimeout;
   
    const handlesearch = async (value) => {
    

      query.value = value
      clearTimeout(debouncetimeout)

      
      if (value.length < 3) {
       results.value = []
       hassearched.value = false 
       return
      }
      

      debouncetimeout=setTimeout(async()=>{ //debounce logic to avoid unesccary api calls
      
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
        hassearched,
        Emptystate

    }
    }
}






</script>