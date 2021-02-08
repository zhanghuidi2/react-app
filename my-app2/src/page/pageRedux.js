import React, { Component } from 'react';
import { connect } from 'react-redux'
export default connect(
  // mapStateToProps, 是一个函数，必须返回一个对象
  // es6箭头函数，如果返回一哥对象，大括号会认为是代码块，会报错，要包裹一层小括号
  state => ({ num: state}),
  // mapDispatchToProps
  {
    add: () => ({type: 'ADD'})
  }
)(
  class PageRedux extends Component {
    render() {
      const { num, dispatch, add } = this.props
      return (
        <div>
          <span>{num}</span>
          <div>使用provider的方式，数据是相应的，不需要再去订阅了</div>
          {/* <button onClick={() => dispatch({type: 'ADD'})}>按钮</button> */}
          <button onClick={add}>按钮</button>
        </div>
      );
    }
  }
)
