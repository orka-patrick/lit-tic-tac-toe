import { html, css, LitElement } from 'lit';

export class Square extends LitElement {
  static properties = {
    value: { type: String },
  };

  static styles = css`
    button {
      background-color: #4caf50; /* Green */
      border: black;
      border-style: solid;
      border-width: 2px;
      color: white;
      padding: 10px 15px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 15px;
    }
  `;

  render() {
    return html` <button>${this.value}</button> `;
  }
}

customElements.define('my-square', Square);
