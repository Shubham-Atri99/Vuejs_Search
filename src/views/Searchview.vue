<template>
    <Searchbar />
    <Loader />
    <Searchlist />
    
</template>

<script>
import Searchbar from '@/components/search/Searchbar.vue';
import Searchlist from '@/components/search/Searchlist.vue';
import Loader from '@/components/ui/Loader.vue';
import { ref } from 'vue';

export default {
    components: { Searchbar, Searchlist, Loader }
}
const query=ref ('');
const results=ref ([]);
const isloading=ref(false);




</script>