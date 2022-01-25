<template>
    <div class="admin-post-page">
        <section class="update-form">
            <admin-post-forum :post="loadedPosts" @submit="onSubmitted"/>
        </section>
    </div>
</template>
<script>


export default {
    
    
    asyncData(context) {
            return context.app.$axios
                .$get(
                    process.env.baseUrl + '/posts/'
                     + context.params.postId + '.json') 
                .then(data => {
                    
                    return {
                        loadedPosts: {...data, id: context.params.postId}
                        
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