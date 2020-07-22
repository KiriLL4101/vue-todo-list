import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Setting from '@/views/SettingNotes'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes:[
        {
            path:'/',
            component:Home
        },
        {
            path:'/setting/:id',
            component:Setting,
            name:'settingId',
            props: true
        },
    ]
})