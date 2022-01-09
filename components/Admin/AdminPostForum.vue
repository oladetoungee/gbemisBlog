<template>
    <div>
        <form @submit.prevent="onSave">
               <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
        
                <AppControlInput v-model="editedPost.title">Title</AppControlInput>
                        
                <AppControlInput v-model="editedPost.thumbnailLink">Thumbnail Link</AppControlInput>
                        
                <AppControlInput
                        control-type="textarea"
                        v-model="editedPost.content">Content
                </AppControlInput>
                        
                <AppButton type="submit">Save</AppButton>
                        
                <AppButton
                        type="button"
                        style="margin-left: 10px"
                        btn-style="cancel"
                        @click="onCancel">Cancel
                </AppButton> 
                            
         </form>
    </div>
</template>
<script>
import  AppButton  from "@/components/UI/AppButton.vue";
import  AppControlInput  from "@/components/UI/AppControlInput.vue";
export default {
    components: {
        AppButton,
        AppControlInput
    },
    props: {
        post: {
            type: Object,
            required: false
        }
    },
    data() {
        return {
            editedPost: this.post ? {...this.post}: {
                author: '',
                title: '',
                thumbnailLink: '',
                content: ''
            }
        }
    },
    methods: {
        onSave() {
            console.log(this.editedPost)
        },
        onCancel() {
            
         this.$nuxt.$options.router.push('/admin')   
        //  console.log(this.$nuxt.$options.router.push('/admin'))   
        }
    }
}
</script>