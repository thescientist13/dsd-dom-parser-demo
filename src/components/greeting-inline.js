export default class GreetingInline extends HTMLElement {

  connectedCallback() {
    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <div>
          <h2>Hello Inline!</h2>
        </div>
      `
    }
  }
}

customElements.define('greeting-inline', GreetingInline);