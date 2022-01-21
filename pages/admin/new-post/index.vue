<template>
    <div class="admin-new-post-page">
        <section class="new-post-form">
          <admin-post-forum @submit="onSubmitted"/>  
        </section>
    </div>
</template>
<script>
import axios from 'axios'
import AdminPostForum from '../../../components/Admin/AdminPostForum.vue';
export default {
    layout: 'admin',
    components: {
        
        AdminPostForum,
    },
    methods: {
       onSubmitted(postData) {
           
           this.$store.dispatch('addPost', postData)
           .then(() => {
               this.$router.push('/admin')
           })
            

        }
    }
}   
</script>