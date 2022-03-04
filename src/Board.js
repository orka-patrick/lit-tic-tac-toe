import { html, css, LitElement } from 'lit';
import { Square } from './Square';

export class Board extends LitElement {
  static properties = {
    squares: { type: Array },
    onClick: { type: Function },
  };

  renderSquare(i) {
    return html`
      <my-square .value=${this.squares[i]} @click=${() => this.onClick(i)}></my-square>
    `;
  }

  render() {
    return html`
      <div>
        <div>
          ${this.renderSquare(0)} ${this.renderSquare(1)}
          ${this.renderSquare(2)}
        </div>
        <div>
          ${this.renderSquare(3)} ${this.renderSquare(4)}
          ${this.renderSquare(5)}
        </div>
        <div>
          ${this.renderSquare(6)} ${this.renderSquare(7)}
          ${this.renderSquare(8)}
        </div>
      </div>
    `;
  }
}

customElements.define('my-board', Board);
