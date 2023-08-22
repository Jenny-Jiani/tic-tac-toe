import React, { useEffect, useState } from "react";

function Clock2() {
  const [date, setDate] = useState(new Date());
  
  useEffect(() => {
    let timerID = setInterval(
      () => setDate(new Date()),
      1000
    )
  })

  return (
    <div className="tc">
      <h1>Hello, world!</h1>
      <h2 className="clock2">It is {date.toLocaleTimeString()}.</h2>
    </div>
  )
}

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       date: new Date()
//     }
//   }

//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     )
//   }
  
//   componentWillUnmount() {
//     clearInterval(this.timerID)
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     })
//   }

//   render() {
//     return (
//       <div className="tc">
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     )
//   }
// }

export default Clock2;