import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        vuexContext.commit('setPosts', [
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
                        ]);
                        resolve();

                    }, 1000);
                })
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit('setPosts', posts)
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            }
        }
    })
}

export default createStore