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
                    process.env.baseUrl + '/posts/'
                     + context.params.postId + '.json') 
                .then(res => {
                    
                    return {
                        loadedPosts: {...res.data, id: context.params.postId}
                        
                    }
                })
                .catch(e => context.error(e))
        
    },
    methods: {
        onSubmitted(editedPost) {
           this.$store.dispatch('editPost', editedPost).then(( ) => {
               this.$router.push('/admin')
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