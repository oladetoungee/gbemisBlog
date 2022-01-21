<template>
    <div class="admin-post-page">
        <section class="update-form">
            <admin-post-forum :post="loadedPosts" @submit="onSubmitted"/>
        </section>
    </div>
</template>
<script>
import AdminPostForum from '@/components/Admin/AdminPostForum.vue'
import axios from 'axios'
export default {
    
    components: {
        AdminPostForum

    },
    asyncData(context) {
            return axios
                .get(
                    'https://gbemisblog-7a042-default-rtdb.firebaseio.com/posts/'
                     + context.params.postId + '.json') 
                .then(res => {
                    
                    return {
                        loadedPosts: res.data
                        
                    }
                })
                .catch(e => context.error(e))
        
    },
    methods: {
        onSubmitted(editedPost) {
           this.$store.dispatch('editPost', editedPost).then(() => {
               
           }) 
        }
    }
    // data () {
    //     return {
    //         loadedPosts:{
    //             author: '',
    //             title: '',
    //             content: '',
    //             thumbnail: ''

    //         }
    //     }
    // }
}
</script>