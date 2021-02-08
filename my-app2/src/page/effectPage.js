import React, { useState, useEffect } from 'react';
export default function EffectPage() {
  const [count, setCount] = useState(0)
  // const [date, setDate] = useState(new Date())

  useEffect(() => {
    // 相当于didMount和didUpdate
    console.log('useEffect')
    document.title = `count执行了${count}次`
  }, [count]) // 仅仅依赖count

  // useEffect(() => {
  //   // 相当于didMount和didUpdate
  //   console.log('useEffect')
  //   const timer = setInterval(() => {
  //     setDate(new Date())
  //   }, 1000)
  //   return () => clearInterval(timer) // renturn一个函数，相当于willUnmount钩子
  // }, []) // []代表谁也不依赖，就是didmount的之后执行一次
  return (
    <div>
      <p onClick={()=>setCount(count + 1)}>{count}</p>
      {/* <p>{date.toLocaleTimeString()}</p> */}
      <p>{useClock().toLocaleTimeString()}</p>
    </div>
  )
}

// 自定义hook
// 以use开头
function useClock() {
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    // 相当于didMount和didUpdate
    console.log('useEffect')
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000)
    return () => clearInterval(timer) // renturn一个函数，相当于willUnmount钩子
  }, []) // []代表谁也不依赖，就是didmount的之后执行一次
  return date
}