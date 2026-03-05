<template>
    <div class=" grid  md:grid-cols-2 lg:grid-cols-3  mt-6 gap-6">
        <SearchlistItem v-for="result in results" :key="result.id" :result="result" />
    </div>
</template>

<script>
import SearchlistItem from './SearchlistItem.vue';
export default{
    components:{SearchlistItem},
    props:{
        results:Array
    },
    
}
</script>