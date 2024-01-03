export default class GreetingTemplate extends HTMLElement {

  connectedCallback() {
    if (!this.shadowRoot) {
      const template = document.createElement('template');

      template.innerHTML = `
        <div>
          <h2>Hello template!</h2>
        </div>
      `;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
}

customElements.define('greeting-template', GreetingTemplate);