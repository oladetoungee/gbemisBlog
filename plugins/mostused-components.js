import Vue from 'vue'

import PostList from "@/components/Posts/PostList.vue";
import AppButton from '@/components/UI/AppButton.vue'
import AppControlInput from '@/components/UI/AppControlInput'
import AdminPostForum from '@/components/Admin/AdminPostForum.vue';

Vue.component('AppButton', AppButton)
Vue.component('PostList', PostList)
Vue.component('AppControlInput', AppControlInput)
Vue.component('AdminPostForum', AdminPostForum)