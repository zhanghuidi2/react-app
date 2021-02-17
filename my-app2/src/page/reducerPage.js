function f1(arg) {
  console.log('f1')
  return arg
}
function f2(arg) {
  console.log('f2')
  return arg
}
function f3(arg) {
  console.log('f3')
  return arg
}

// f1('omg')
// f2('omg')
// f3('omg')


// f3(f2(f1('omg')))

// reduce如果没有默认值，a代表的就是第一个参数
// var result = componse(f1, f2, f3)('omg')
var result = componse()('omg')
console.log(result);
function componse(...fun) {
  console.log(Array.isArray(fun)) // TRUE

  if (fun.length === 0) {
    // 这里返回一个匿名函数，传入参数是什么返回参数就行
    //  类同
    // return function (arg) { return arg }
    return arg => arg
  }
  return fun.reduce((a, b) => (...arg) => {
    console.log('b', b);
    console.log('a', a);
    return a(b(arg))
    // f1(f2(f3(...arg)))
  })
}
a(f1, f2, f3)
function a(...fun) {
  fun.reduce((i, m) => {
    console.log(i);
    console.log(m)
    return 0
  })
}