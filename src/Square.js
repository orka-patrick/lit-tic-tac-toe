import { html, css, LitElement } from 'lit';

export class Square extends LitElement {
  static properties = {
    value: { type: String },
  };

  static styles = css`
    button {
      background: #fff;
      border: 1px solid #999;
      float: left;
      font-size: 24px;
      font-weight: bold;
      line-height: 34px;
      height: 34px;
      margin-right: -1px;
      margin-top: -1px;
      padding: 0;
      text-align: center;
      width: 34px;
    }
  `;

  render() {
    return html` <button>${this.value}</button> `;
  }
}

customElements.define('my-square', Square);
