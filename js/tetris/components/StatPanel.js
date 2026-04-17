export class StatPanel {
  /**
   * @param {HTMLElement} parent
   * @param {{ label: string; initialValue?: string }} options
   */
  constructor(parent, options) {
    this.parent = parent;
    this.options = options;
    this.valueEl = null;
  }

  mount() {
    const section = document.createElement("section");
    section.className = "tetris-panel";

    const label = document.createElement("h2");
    label.className = "tetris-panel__label";
    label.textContent = this.options.label;

    const value = document.createElement("p");
    value.className = "tetris-panel__value";
    value.textContent = this.options.initialValue ?? "0";

    section.appendChild(label);
    section.appendChild(value);
    this.parent.appendChild(section);
    this.valueEl = value;
    return this;
  }

  setValue(text) {
    if (this.valueEl) {
      this.valueEl.textContent = text;
    }
  }
}
