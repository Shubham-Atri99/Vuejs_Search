<template>
<div>
    <input type="text"
    :value="query"
    @input="updatequery"
    placeholder="...search"
    class="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300
             bg-white shadow-sm
             focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400
             transition duration-300"
    />
</div>
</template>

<script>
export default{
    props:{
        query:String
    },
    methods:{
        updatequery(event){
            this.$emit('search', event.target.value);//event emitter to send the updated query to the parent component
            console.log(event.target.value);
        }
        
        
    }
}



</script>