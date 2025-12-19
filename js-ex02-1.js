/**
 * 函数声明与函数表达式
 */

// 示例程序

/**
 * 定义一个函数 multiplyByTwo，接受一个数字参数并返回其两倍。
 * 试着用函数表达式来定义 multiplyByTwo，并调用它来输出结果。
 * 然后尝试提前调用这个函数，观察结果并思考原因。
 */
// 独立完成
console.log(multiplyByTwo(2));
function multiplyByTwo(a){
    return 2*a;
}


/**
 * 函数作为值传递
 */

// 示例程序

/**
 * 定义一个函数 perform，它接受两个数字参数和一个操作函数 op。
 * 定义两个操作函数 subtract 和 divide，分别计算减法和除法。
 * 使用 perform 传递不同的操作函数来计算并输出结果。
 */
// 独立完成
function perform(a,b,op){
    console.log(op(a,b));
}
// function substract(a,b){
//     return a-b;
// }
// function divide(a,b){
//     return a/b;
// }
let substract = (a,b) => a-b;
let divide = (a,b) => a/b;
perform(2,3,substract);
perform(6,2,divide);


/**
 * 箭头函数
 */

// 示例程序

/**
 * 将下列函数 isEven 重写成箭头函数形式。
 * isEven 函数接受一个数字参数，返回该数字是否为偶数。
 * 然后调用该函数并在控制台输出结果。
 */
// 独立完成
// function isEven(number) {
//   return number % 2 === 0;
// }
let num = (number) => number % 2 === 0;
console.log(num);


/**
 * 参数传递与默认值
 */

// 示例程序

/**
 * 定义一个函数 introduce，它接受两个参数 name 和 city。
 * 为 city 参数设置默认值 "Unknown"。
 * 该函数输出一条欢迎信息，如 "Hello, [name]! Welcome to [city]!"。
 * 尝试只传递 name 参数，并观察输出结果。
 */
// 独立完成
function introduce(name,city="Unknow"){
    console.log(`Hello,${name}! Welcome to ${city}!`)
}
introduce("zhangsan","深圳");
introduce("zhangsan");


/**
 * 函数的返回值
 */

// 示例程序

/**
 * 定义一个函数 calculateArea，接受两个参数 length 和 width。
 * 如果两个参数都被提供，返回矩形的面积（length \* width）；
 * 如果没有传递 width，则默认为正方形的面积（length \* length）。
 * 调用此函数并观察返回结果。
 */
// 独立完成
function calculateArea(length,width=0){
    if(width!=0){
        return length * width;
    }else{
        return length * length;
    }
}
console.log(calculateArea(5,2));
console.log(calculateArea(5));