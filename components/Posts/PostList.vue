<template>
    <div>
       <section class="post-list">
            <post-preview
                    id="1" 
                    :is-admin="isAdmin"
                    thumbnail="https://store.hp.com/app/assets/images/uploads/prod/how-to-become-an-information-technology-specialist160684886950141.jpg"
                    title="Hii!"
                    PreviewText="Here is another blogpost"
            />
            <post-preview
                    id="2"
                     :is-admin="isAdmin"
                    thumbnail="https://store.hp.com/app/assets/images/uploads/prod/how-to-become-an-information-technology-specialist160684886950141.jpg"
                    title="I am back again!"
                    PreviewText="This is my second blogpost"
            />
            <post-preview
                    id="3"
                     :is-admin="isAdmin"
                    thumbnail="https://store.hp.com/app/assets/images/uploads/prod/how-to-become-an-information-technology-specialist160684886950141.jpg"
                    title="Hello!"
                    PreviewText="This is my third blogpost"
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
        }
    }
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