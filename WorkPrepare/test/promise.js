//promise 正常使用
{
    function fun() {
        return new Promise((resolve, reject) => {
            resolve('asd')
        })
    }
    fun().then(res => {
        console.log(res);   
    }) //asd

}



//async
{
    async function fn() {
        return 1
        //返回一个promise对象  里面有1
    }
    let a = fn()
    console.log(a);

    a.then(res => {
        console.log(res);
    }) //1
}


let p1=new Promise((resolve, reject) => {
    resolve('a')
})

let p2=new Promise((resolve, reject) => {
    resolve('b')
})

let p3=new Promise((resolve, reject) => {
    resolve('c')
})

async function ffn() {
    let a=await p1
    let b=await p2
    let c = await p3
    console.log(a);
    console.log(b);
    console.log(c);
}
ffn()