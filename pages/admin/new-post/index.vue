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
            axios.post('https://gbemisblog-7a042-default-rtdb.firebaseio.com/posts.json', {
                ...postData, updatedDate: new Date()
                }) 
                .then(result => console.log(result))
                .catch(e => console.log(e))
            

        }
    }
}   
</script>