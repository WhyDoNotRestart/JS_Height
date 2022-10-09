    // <
    // !--
    // 1. js为单线程 一个任务执行完成后才能执行另一个任务
    // 2. 宏任务： 计时器 ajax、 读取文件 setImmediate setTimeout setInterval
    // 微任务； promise的then
    // new Promise 中代码是同步代码 then是异步
    // 3. 执行顺序： 同步 - > process.nextTick - > 微任务 - > 宏任务 - > setimmediate
        // 如果宏任务是定时器 会在执行宏任务等待 时继续执行setImmediate


    // 在js中 存在运行栈 任务队列 和事件循环
    // 运行栈： 存放同步的任务
    // 任务队列： 存放异步任务， 定时器时间为100s 则 在100s后放入任务队列中执行 如果前面还有任务则先执行前面
    // 事件循环； 侦测任务队列 并运行
    // 俩个定时器0s 一个1s
    // 为俩次事件循环-- >






    // js为单线程
    //同步执行完成后再执行异步
    {
        console.log(1);

        //同步之后    异步之前
        process.nextTick(() => {
            console.log('同步之后异步之前');
        })

        setImmediate(() => {
            console.log('异步之后');
        })

        setTimeout(() => {
            console.log(2);
        }, 0)

        setTimeout(() => {
            console.log(3);
        }, 0)
        setTimeout(() => {
            console.log(4);
        }, 0)
        console.log(5);
        // 1  5  2  3 4
    }


    {
        let p1 = new Promise((resolve) => {
            return 1
        })

        let p2 = new Promise((resolve) => {
            return
        })
        async function fun() {
            let a = await p1; //直接拿到resolve 的值
            let b = await p2;
            console.log(a);
            console.log(b);
        }
    }