<template>
    <div class="admin-page">
        <section class="new-post">
            <app-button @click="$router.push('/admin/new-post/')">Create Post</app-button>
        </section>
        <section class="existing-posts">
            <h1>Existing Posts</h1>
            <post-list :posts="loadedPosts"/>
        </section>
    </div>
</template>
<script>

export default {
    layout: 'admin',
  
 computed: {
      loadedPosts() {
          return this.$store.getters.loadedPosts
      }
  }
 
  // asyncData(context, callback) {
  //   console.log('async data')
  //   setTimeout(() => {
  //     callback(null, {
  //       loadedPosts:   [
  //       {
  //         id: "1",
  //         title: "First post",
  //         previewText: "This is my first post",
  //         thumbnail:
  //           "https://store.hp.com/app/assets/images/uploads/prod/how-to-become-an-information-technology-specialist160684886950141.jpg",
  //       },
  //       {
  //         id: "2",
  //         title: "Second post",
  //         previewText: "This is my first post",
  //         thumbnail:
  //           "https://store.hp.com/app/assets/images/uploads/prod/how-to-become-an-information-technology-specialist160684886950141.jpg",
  //       },
  //     ]
  //     })
      
  //   }, 1500) 
    
  // },
    
}
</script>
<style scoped>
    .admin-page {
    padding: 20px;
    }

    .new-post {
    text-align: center;
    border-bottom: 2px solid #ccc;
    padding-bottom: 10px;
    }

    .existing-posts h1 {
    text-align: center;
    }
</style>