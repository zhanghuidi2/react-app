import React, { Component } from 'react';
import store from '../store/store'
class storeComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // 手动去更新页面，让最新的数据展示在页面上， 或者在render函数那里
  componentDidMount() {
    // 监听每次的变化
    store.subscribe(() => {
      // 刷新当前组件
      this.forceUpdate()
    })
  }
  render() {
    return (
      <div onClick={() => store.dispatch({type: 'ADD'})}>
        add
        <div>{store.getState()}</div>
      </div>
    );
  }
}

export default storeComponents;