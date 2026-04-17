const DEFAULT_COLS = 10;
const DEFAULT_ROWS = 20;
const CELL = 24;

export class GameBoard {
  /**
   * @param {HTMLElement} parent
   * @param {{ cols?: number; rows?: number; cellSize?: number }} [options]
   */
  constructor(parent, options = {}) {
    this.parent = parent;
    this.cols = options.cols ?? DEFAULT_COLS;
    this.rows = options.rows ?? DEFAULT_ROWS;
    this.cellSize = options.cellSize ?? CELL;
    this.canvas = null;
  }

  mount() {
    const wrap = document.createElement("div");
    wrap.className = "tetris-board-wrap";

    const canvas = document.createElement("canvas");
    canvas.width = this.cols * this.cellSize;
    canvas.height = this.rows * this.cellSize;
    canvas.setAttribute("role", "img");
    canvas.setAttribute("aria-label", "Tetris playfield");

    wrap.appendChild(canvas);
    this.parent.appendChild(wrap);
    this.canvas = canvas;
    this.drawPlaceholderGrid();
    return this;
  }

  drawPlaceholderGrid() {
    if (!this.canvas) return;
    const ctx = this.canvas.getContext("2d");
    if (!ctx) return;

    const w = this.canvas.width;
    const h = this.canvas.height;
    const cs = this.cellSize;

    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--color-bg").trim() || "#0f1419";
    ctx.fillRect(0, 0, w, h);

    ctx.strokeStyle = "rgba(148, 163, 184, 0.15)";
    ctx.lineWidth = 1;
    for (let x = 0; x <= this.cols; x++) {
      ctx.beginPath();
      ctx.moveTo(x * cs, 0);
      ctx.lineTo(x * cs, h);
      ctx.stroke();
    }
    for (let y = 0; y <= this.rows; y++) {
      ctx.beginPath();
      ctx.moveTo(0, y * cs);
      ctx.lineTo(w, y * cs);
      ctx.stroke();
    }
  }

  getContext2D() {
    return this.canvas ? this.canvas.getContext("2d") : null;
  }
}
