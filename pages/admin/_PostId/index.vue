<template>
    <div class="admin-post-page">
        <section class="update-form">
            <admin-post-forum :post="loadedPost"/>
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
            loadedPost:{
                author: 'Gbemisola',
                title: 'My Post',
                content: 'Omo, I dey write sha',
                thumbnailLink: 'https://store.hp.com/app/assets/images/uploads/prod/how-to-become-an-information-technology-specialist160684886950141.jpg'

            }
        }
    }
}
</script>