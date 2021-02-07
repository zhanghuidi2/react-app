import React, { Component } from 'react';
class ClassComponent extends Component {
  constructor(props) {
    super(props)
    // 出发页面更新的数据
    this.state = {
      date: new Date()
    }
  }
  // 组件挂载
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000)
  }
  // 组件卸载
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  render() { 
    // 解构
    const { date } = this.state
    return (
      <div>{date.toLocaleTimeString()}</div>
    )
  }
}
 
export default ClassComponent;