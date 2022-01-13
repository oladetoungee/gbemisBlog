<template>
    <div class="admin-new-post-page">
        <section class="new-post-form">
          <admin-post-forum/>  
        </section>
    </div>
</template>
<script>

import AdminPostForum from '../../../components/Admin/AdminPostForum.vue';
export default {
    
    components: {
        
        AdminPostForum,
    }
}   
</script>