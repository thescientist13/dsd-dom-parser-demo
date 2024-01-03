export default class GreetingInline extends HTMLElement {

  connectedCallback() {
    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <template shadowrootmode="open">
          <div>
            <h2>Hello inline!</h2>
          </div>
        </template>
      `
    }
  }
}

customElements.define('greeting-inline', GreetingInline);