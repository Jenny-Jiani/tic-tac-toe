import React from "react";
import "../../assets/css/react/tic-tac-toe.scss"

function Square(props) {
  return (
    <button
      className="square fontMedievalSharp"
      onClick={props.onClick}
      style={{color: props.needHighlight ? '#fea543' : '#323234'}}
    >
      {props.value}
    </button>
  )
}

class Board extends React.Component {
  renderSquare(i, needHighlight) {
    return (
      <Square 
        value={this.props.squares[i]}
        key={'square' + i}
        needHighlight={needHighlight}
        onClick={()=>this.props.onClick(i)}
      />);
  }

  render() {
    let items = []
    let xAxis = 3, yAxis = 3
    for (let i=0; i<xAxis; i++) {
      let subItems = []
      for (let j=0; j<yAxis; j++) {
        subItems.push(
          this.renderSquare(i*3+j, this.props.winnerLine&&this.props.winnerLine.indexOf(i*3+j) >= 0 ? true : false)
        )
      }
      items.push(
        <div key={'board' + i} className="board-row">{subItems}</div>
      )
    }

    return (
      <div>
        {items}
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        sitPosition: null,
        curStepNumber: null
      }],
      stepNumber: 0,
      xIsNext: true,
      isSortAsend: true,
    }
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    const current = history[history.length - 1]
    const squares = current.squares.slice() // 实现深拷贝，slice返回一个新数组
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O'
    this.setState({
      history: history.concat([{
        squares: squares,
        sitPosition: [Math.ceil((i+1)/3) - 1, i%3],
        curStepNumber: history.length
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    })
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    })
  }

  sortHistory() {
    this.setState({
      isSortAsend: !this.state.isSortAsend,
      history: this.state.history.sort((a, b) => {
        return (a.curStepNumber - b.curStepNumber) * (this.state.isSortAsend ? -1 : 1)
      })
    })
    console.log('sort history: ' + this.state.history)
  }

  render() {
    const history = this.state.history
    const current = history.filter((item) => {return (this.state.stepNumber === 0 && !item.curStepNumber) || (item.curStepNumber === this.state.stepNumber)})[0]
    const winner = calculateWinner(current.squares)

    const moves = history.map((step) => {
      const desc = step.curStepNumber ?
        'Go to move #' + step.curStepNumber + ' (sit position: ' + step.sitPosition.join(',') + ')':
        'Go to game start';
      return (
        <li key={step.curStepNumber} style={{fontWeight: this.state.stepNumber === step.curStepNumber ? 'bold' : 'normal', marginBottom: '5px'}}>
          <button className={this.state.stepNumber === step.curStepNumber ? 'fontSunflowerBold' : 'fontSunflower'} onClick={() => this.jumpTo(step.curStepNumber?step.curStepNumber:0)}>{desc}</button>
        </li>
      )
    })

    let status;
    if (winner) {
      status = 'Winner: ' + winner.winner
      console.log(winner.winnerLine)
    } else {
      if (current.curStepNumber === 9) {
        status = '平局'
      } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }
    }

    return (
      <div className="game tc">
        <h1 className="fontOswaldRegular">Tic Tac Toe</h1>
        <div className="game-board">
          <Board 
          squares={current.squares}
          onClick={(i) => this.handleClick(i)}
          winnerLine={winner ? winner.winnerLine : null}
          />
        </div>
        <div className="game-info">
          <div className="fontMedievalSharp">{status}</div>
          <button style={{margin: '20px 0 0 '}} onClick={() => this.sortHistory()}>{this.state.isSortAsend ? 'Sort Desend' : 'Sort Asend'}</button>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const list = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  for(let i=0; i<list.length; i++) {
    const [a, b, c] = list[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winner: squares[a],
        winnerLine: list[i]
      }
    }
  }

  return null
}

function TicTacToe() {
  return (<Game />)
}

export default TicTacToe;