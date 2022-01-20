<template>
    <div class="admin-post-page">
        <section class="update-form">
            <admin-post-forum :post="loadedPosts"/>
        </section>
    </div>
</template>
<script>
import AdminPostForum from '@/components/Admin/AdminPostForum.vue'
export default {
    
    components: {
        AdminPostForum

    },
    data () {
        return {
            loadedPosts:{
                author: '',
                title: '',
                content: '',
                thumbnail: ''

            }
        }
    }
}
</script>