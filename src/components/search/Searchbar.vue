<template>
<div>
    <input type="text"
    :value="query"
    @input="updatequery"
    placeholder="...search"
    class="  w-full border  rounded-2xl "
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
            this.$emit('search', event.target.value);
            console.log(event.target.value);
        }
        
        
    }
}



</script>