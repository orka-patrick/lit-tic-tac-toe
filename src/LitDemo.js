import { html, css, LitElement } from 'lit';
import { Board } from './Board';

export class LitDemo extends LitElement {
  static properties = {
    history: { type: Array },
    isNext: { type: Boolean },
    stepNumber: { type: Number },
  };

  constructor() {
    super();
    this.history = [
      {
        squares: Array(9).fill(null),
      },
    ];
    this.isNext = true;
    this.stepNumber = 0;
  }

  handleClick(i) {
    const history = this.history.slice(0, this.stepNumber + 1)
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares)||squares[i]) return;
    squares[i] = this.isNext ? 'X' : 'O';
    this.history = history.concat([
      {
        squares: squares,
      },
    ]);
    this.stepNumber = history.length
    this.isNext = !this.isNext;
  }

  jumpTo(step) {
    this.stepNumber = step
    this.isNext = (step % 2) === 0
  }

  render() {
    const history = this.history;
    const current = history[this.stepNumber];
    const winner = calculateWinner(current.squares)

    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move #' + move : 'Go to game start';
      return html`
        <li key=${move}>
          <button @click=${() => this.jumpTo(move)}>${desc}</button>
        </li>
      `;
    });

    let status
    if(winner) status = 'Winner: ' + winner
    else status = 'Next player: ' + (this.isNext ? 'X' : 'O')


    return html`
      <my-board
        .squares=${current.squares}
        .onClick=${i => this.handleClick(i)}
      ></my-board>
      <div>
        ${status}
      </div>
      <ol>
        ${moves}
      </ol>
    `;
  }
}

customElements.define('lit-demo', LitDemo);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}