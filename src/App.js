import React from 'react'
import {
  render
} from 'react-dom'
import {
  connect
} from 'react-redux'
import * as actionCreators from './actionCreators.js'
import count from './reducer.js'

console.log(actionCreators)

class App extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)

    // this.addNumHandler.bind(this)
  }

  addNumHandler() {
    console.log(456)
    console.log(this)

    let num = this.refs.num.value.trim()
    this.props.addNum(Number(num))
  }

  render() {
    return (
      <div>
        <h1>小小计数器   react-redux</h1>
        <h2>{this.props.other}</h2>
        <h2 style={{backgroundColor:'#6d6d6d', color: '#fff'}}>{this.props.sum}</h2>
        <button onClick={this.props.onAdd}>点我加1</button>&nbsp;
        <button onClick={this.props.onDesc}>点我减1</button><br/>
        <input type="text" ref="num"/>&nbsp;
        <button onClick={this.addNumHandler.bind(this)}>点我任意增加</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    sum: state.total,
    other: state.a
  }
}

const mapDispatchToProps = dispatch => {
  let vm = this
  console.log(this)
  return {
    onAdd: () => {
      dispatch(actionCreators.addOne())
    },
    onDesc: () => {
      dispatch(actionCreators.descOne())
    },
    addNum: (num) => {
      dispatch(actionCreators.addNum(num))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)