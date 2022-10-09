/*
 1. 优先级  v-for > v-if 
 2. v-if 是创建和删除  v-show是显示和隐藏
     加载速度 => v-if
     频繁切换=> v-show
 3.computed有缓存机制  methods没有缓存机制
 4. 进入页面前执行的四个声明周期
        beforeCreate
        created      请求接口
        beforeMount
        mounted     补充dom
5.父子组件执行顺序
    父组件的数据是求过来的  部分传给子组件 按照生命周期加载顺序
    如果子组件拿到父组件的数据 进行操作 在请求接口 那么父组件的请求写在mounted完全不对  必须在父组件声明周期mounted之前请求到子组件
        父：
                beforeCreate  无data 无el
                created       有data 无el
                beforeMount   有data 无el
        子： 
                beforeCreate  无data 无el
                created       有data 无el
                beforeMount   有data 无el
                mounted       有data 有el
        父：
                mounted 
*/



/*

请求
    方式：
        axios.get()
        axios.post()
        axios({})
    get请求
     axios.get('url?act=1&page=2')
        传递给后端的参数是   act：1 page：2
    
    post请求
     axios.post('url',{
        act:1,
        page:2  
    })

    axios({})
        axios({
        url:'',
        params:{}   get==>请求方式给后端传递的参数
        data:{}     post==>post请求方式给后端传递的参数
        methods:''
        })

        


*/
{
    created(){
        // axios.get(
        //     'http://127.0.0.1:4523/m1/1342827-0-default/apitest?read="这是传递的参数"'
        // )
        axios({
                url: 'http://127.0.0.1:4523/m1/1342827-0-default/apitest',
                params: {
                    read: '这是要专递的参数'
                }
            })
            .then(res => {
                console.log(res.data);
            })
    }
}


//跨域问题
    //前端   localgost:8080
    //后端   localhost：3000
    //前端应用和后端 API 服务器没有运行在同一个主机上

  //设置代理
    // 在“开发环境”下将 API请求代理到API服务器
    // vue.config.js中配置
        //https://cli.vuejs.org/zh/config/#devserver

    


