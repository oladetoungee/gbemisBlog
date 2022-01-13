<template>
    <div>
       <section class="post-list">
            <post-preview
                    v-for="post in posts"
                    :key="post.id"
                    :id="post.id" 
                    :is-admin="isAdmin"
                    :thumbnail="post.thumbnail"
                    :title="post.title"
                    :PreviewText="post.previewText"
            />
            
        </section> 
    </div>
</template>
<script>
import PostPreview from "@/components/Posts/PostPreview.vue";
export default {
    components: {
        PostPreview,
    },
    props: {
       
        isAdmin: {
            type: Boolean,
            default: true
        },
        posts: {
            type: Array,
            required: true,
        },
        // post: {
        //     type: String,
        //     required: true
        // }
    },

}
</script>
<style scoped>
    
    .post-list {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around ;
    }
</style>