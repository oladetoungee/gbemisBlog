<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get my latest blogpost here!</h1>
    </section>
    <post-list :posts="loadedPost" isAdmin />
  </div>
</template>
<script>
import PostList from "@/components/Posts/PostList.vue";

export default {
  components: {
    PostList,
  },
  asyncData(context, callback) {
      console.log('Async dart')
      setTimeout(() =>{
          callback(null, {loadedPost: [
            {
            id: "1",
            title: "First post",
            previewText: "This is my first post",
            thumbnail:
                "https://store.hp.com/app/assets/images/uploads/prod/how-to-become-an-information-technology-specialist160684886950141.jpg",
            },
            {
            id: "2",
            title: "Second post",
            previewText: "This is my first post",
            thumbnail:
                "https://store.hp.com/app/assets/images/uploads/prod/how-to-become-an-information-technology-specialist160684886950141.jpg",
            },
          ]})
      }, 1500)
  },
//   data() {
//     return {
//       loadedPost: [
//         {
//           id: "1",
//           title: "First post",
//           previewText: "This is my first post",
//           thumbnail:
//             "https://store.hp.com/app/assets/images/uploads/prod/how-to-become-an-information-technology-specialist160684886950141.jpg",
//         },
//         {
//           id: "2",
//           title: "Second post",
//           previewText: "This is my first post",
//           thumbnail:
//             "https://store.hp.com/app/assets/images/uploads/prod/how-to-become-an-information-technology-specialist160684886950141.jpg",
//         },
//       ],
//     };
//   },
};
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url("~assets/images/background.jpg");
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}
</style>