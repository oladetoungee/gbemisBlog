<template>
    <div class="admin-new-post-page">
        <section class="new-post-form">
          <admin-post-forum @submit="onSubmitted"/>  
        </section>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    layout: 'admin',
    
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