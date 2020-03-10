es6
# 数组方法：
      1、forEach遍历数组
      2、map:把每个数据做相同处理,return的结果是一个数组
      3、filter:过滤,return的结果是一个数组
      4、find:找到符合条件的之后，就不再往后面找。return的结果是符合条件的一个数据
      5、every:一假则假,返回结果是boolean值
      6、some:一真则真，返回结果是boolean值
      7、 reduce：array.reduce((参数1，每一项的值) => {数据处理},初始化参数1的值)
# let 和const
  <script>
  //  1、let 变量
  //  2、const 常量 （const 定义之后是不能改变值的，如果定义的是数组，还可以在里面push数据）
    const colors = []
    // colors="Geree"//报错
    colors.push("red")//不会报错
    console.log(colors);//["red"]
  </script> 
# 模板字符串
  `${定义的变量，常量，函数等}`     
# 箭头函数
     1、减少代码
     2、改变this指向 
     const fn = ((形参1，形参2) => { return....})
     如果只有一个形参,那么形参的括号可以省略；如果return的语句只有一句的时候 可以省略{}和return
     const fun =(形参 => 一条语句) 
# 增强对象字面量
    作用：缩减代码     
# 函数参数默认值
# ... (展开运算符)
     作用 ：更快更便捷操作数组
# 解构
# map：一种数据结构
      键值对：与对象不同的是键值对可以是任何类型 
      把map1转换成正常的数组:Array.from(map1)
      将map1中的key转换成数组:Array.from(map1.keys())
      将map1中的value转换成数组:Array.from(map1.values())
# set：一种数据结构
      集合：可以存储任何数据类型，并且是唯一的（不重复的值） 
# 构造函数：Promise
   <script>
    let promise = new Promise((resolve, reject) => {
      resolve()
      // reject()
    })
    console.log(promise);
    promise.then(() => console.log('成功，没有任何问题'))
      .then(() => console.log('可以无限调用'))
      .catch(() => console.log("现在执行的是reject"));
    // new http:fetch 一个基于promise的请求方法
    let promise1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 3000);
    })
    // console.log(fetch);
    let url = "http://jsonplaceholder.typicode.com/posts"
    fetch(url).then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log("error"))
  </script>     
