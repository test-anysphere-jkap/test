export class PreviewPanel {
  /**
   * @param {HTMLElement} parent
   * @param {{ title: string; placeholder?: string }} options
   */
  constructor(parent, options) {
    this.parent = parent;
    this.options = options;
    this.root = null;
  }

  mount() {
    const section = document.createElement("section");
    section.className = "tetris-panel";

    const label = document.createElement("h2");
    label.className = "tetris-panel__label";
    label.textContent = this.options.title;

    const preview = document.createElement("div");
    preview.className = "tetris-preview";
    preview.setAttribute("aria-label", this.options.title);
    preview.textContent = this.options.placeholder ?? "—";

    section.appendChild(label);
    section.appendChild(preview);
    this.parent.appendChild(section);
    this.root = section;
    this.previewEl = preview;
    return this;
  }

  setPlaceholder(text) {
    if (this.previewEl) {
      this.previewEl.textContent = text;
    }
  }
}
