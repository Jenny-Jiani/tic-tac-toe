import React, { useState } from "react";

function CountUseFunc () {
  const [count, setCount] = useState(0)

  function reset() {
    setCount(0)
  }

  function countChange(step) {
    setCount(count+step)
  }
  
  return (
    <div className="countBox" style={{textAlign: 'center', marginTop: '100px'}}>
      <h1>{count}</h1>
      <button onClick={() => countChange(1)}>Increase</button>
      <button onClick={() => countChange(-1)}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}


class CountUseClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.reset = this.reset.bind(this)
  }

  countChange(step) {
    this.setState(prevState => ({
      count: prevState.count + step
    }))
  }

  test() {
    const obj = {
      name: '张三',
      info: {
        a: 1,
        b: 2
      }
    };
    Object.freeze(obj);
    obj.name = '李四';
    console.log(obj); 
    // obj.info.a = 66;console.log(obj); 
    // { name: '张三', info: { a: 66, b: 2 } }
  }

  reset() {
    this.setState({
      count: 0
    })
  }

  render() {
    return (
      <div className="countBox" style={{textAlign: 'center', marginTop: '100px'}}>
        <h1>{this.state.count}</h1>
        <button onClick={this.countChange.bind(this, 1)}>Increase</button>
        <button onClick={this.countChange.bind(this, -1)}>Decrease</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}

export default CountUseFunc