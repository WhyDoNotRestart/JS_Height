//创建对象四种方式
// {
//         //工厂模式
//         //优点： 解决了创建多个类似对象的问题
//         //缺点： 没解决对象标识问题（ 即新建对象是什么类型
//         function fn(a, b) {
//             let obj = new Object()
//             obj.a = a
//             obj.b = b
//             return obj
//         }
//         const test = fn(1, 2)

//         //函数模式    
//         //优点： new隐式创建对象， 写法简洁
//         //缺点： 构造函数定义的方法会在每个实例上都要创建一遍（ 除非该方法声明提到全局）
//         function Fn(a, b) {
//             this.a = a
//             this.b = b
//             this.c = function () {
//                 console.log(this.a)
//             }
//         }

//         const test1 = new Fn(1, 2)
//         const test2 = new Fn(1, 2)
//         console.log(test1.c === test2.c) // false

//         //原型模式
//         // 优点： 构造函数中定义的属性和方法都可以被对象实例共享
//         // 缺点： 原型上的属性值如果是引用值， 该值会在创建后的实例之间被污染
//         function Fn1(a, b) {
//             Fn1.prototype.a = a
//             Fn1.prototype.b = b
//             Fn1.prototype.c = function () {
//                 console.log(a)
//             }
//         }
//         const f = new Fn1(1, 2)

//         //污染
//         function Fnn() {
//             Fnn.prototype.a = [1, 2]
//         }

//         const te = new Fnn()
//         const te1 = new Fnn()
//         test1.a.push(3)
//         console.log(te == te1);
//         console.log(test1.b, test2.b) // [1,2,3] [1,2,3] 
//         const test3 = new Fnn() // 原型上属性会重新赋值
//         console.log(test1.b, test2.b, test3.b) // [1,2] [1,2] [1,2]


//         //组合模式
//         //构造函数+原型
//         function Person(name, age) {
//             this.name = name
//             this.age = age
//         }

//         Person.prototype.sayname = () => {
//             console.log(this.name)
//         }

//         const p1 = new Person('dz', 23)
//         const p2 = new Person('dz1', 24)
//         console.log(p1.name, p2.name) // dz dz1

//         //es6
//         class Person {
//             constructor(name, age) { // constructor构造函数
//                 this.name = name
//                 this.age = age
//             }

//             sayname() { //原型上的
//                 console.log(this.name)
//             }
//             static sayAge() {
//                 console.log(this.age)
//             }
//         }

//         const per = new Person('dz', 23)
//         per.sayname() // -> dz
//         Person.sayAge() // 23
// }

//继承
{
    function Super() {
        this.a = [1, 2]
    }
    Super.prototype.say = function () {
        console.log('kk')
    }

    function Sub() {
        Super.call(this)  //this指向Super
        console.log('0');
        this.b = 2
    }

    Sub.prototype = Object.create(Super.prototype)
    Sub.prototype.constructor = Sub

    const test = new Sub()
}