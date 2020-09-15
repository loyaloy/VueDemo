//导入实例化
import Vue from 'vue'

//导入App组件
import App from './App.vue'

//创建实例
new Vue({
    el:"#App",
    components:{
        //组件名：组件对象
        App
    },
    template:'<App/>'
})

//挂在App组件
