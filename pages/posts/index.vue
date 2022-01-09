<template>
    <div>
        <div class="posts-page">
           <post-list/>
        </div>
    </div>
</template>
<script>
 
import PostList from '@/components/Posts/PostList.vue';
export default {
    components: {
        PostList
        
    }
}
</script>
<style scoped>
    .posts-page {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
</style>