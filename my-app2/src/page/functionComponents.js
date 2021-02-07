import React, { useState, useEffect } from 'react';
export default function FunctionComponents() {
  const [date, setDate] = useState(new Date())
  // 还相当于一个componentDidUpdate
  useEffect(() => {
    // 这里相当于componentDidMount
    const timer = setInterval(() => {
      setDate(new Date()) // 不用负值，直接写最新的变化
    }, 1000)
    // 这里相当于componentWillUnmount
    return () => clearInterval(timer)
  }, [])
  return (
    <div>{date.toLocaleTimeString()}</div>
  )
}