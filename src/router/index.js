import VueRouter from "vue-router"

// 引入组件
/*
import LoginPage from "../views/loginpage/LoginPage"
import RegisterPage from '../views/loginpage/RegisterPage'
import Search from '../views/loginpage/Search'*/

// 创建并暴露一个路由器
export default new VueRouter({
    mode: 'history',    // 路由模式，该模式不会在地址中显示井号#
    routes: [
        /*
        {
            path: '/',          // 路径
            redirect: '/login'  // 重定向
        },
        {
            path: '/login',     // 路径
            component: LoginPage    // 跳转到的组件
        },
        {
            path: '/register',     // 路径
            component: RegisterPage    // 跳转到的组件
        },
        {
            path: '/search',
            component: Search
        },*/
        
    ]
})