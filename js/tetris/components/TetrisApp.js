import { GameBoard } from "./GameBoard.js";
import { PreviewPanel } from "./PreviewPanel.js";
import { StatPanel } from "./StatPanel.js";

export class TetrisApp {
  /**
   * @param {HTMLElement} root
   */
  constructor(root) {
    this.root = root;
    this.panels = {};
  }

  mount() {
    this.root.className = "tetris-shell";
    this.root.innerHTML = "";

    const header = document.createElement("header");
    header.className = "tetris-shell__header";

    const title = document.createElement("h1");
    title.className = "tetris-shell__title";
    title.textContent = "Tetris";

    const subtitle = document.createElement("p");
    subtitle.className = "tetris-shell__subtitle";
    subtitle.textContent = "UI shell — game logic hooks in next phase.";

    header.appendChild(title);
    header.appendChild(subtitle);

    const body = document.createElement("div");
    body.className = "tetris-shell__body";

    const main = document.createElement("main");
    main.setAttribute("aria-label", "Playfield");

    const board = new GameBoard(main);
    board.mount();

    const aside = document.createElement("aside");
    aside.className = "tetris-aside";
    aside.setAttribute("aria-label", "Game status");

    const score = new StatPanel(aside, { label: "Score", initialValue: "0" });
    const level = new StatPanel(aside, { label: "Level", initialValue: "1" });
    const lines = new StatPanel(aside, { label: "Lines", initialValue: "0" });
    score.mount();
    level.mount();
    lines.mount();

    const hold = new PreviewPanel(aside, { title: "Hold", placeholder: "Empty" });
    const next = new PreviewPanel(aside, { title: "Next", placeholder: "—" });
    hold.mount();
    next.mount();

    body.appendChild(main);
    body.appendChild(aside);

    const footer = document.createElement("footer");
    footer.className = "tetris-shell__footer";
    footer.textContent = "Arrow keys: movement (wired in gameplay phase).";

    this.root.appendChild(header);
    this.root.appendChild(body);
    this.root.appendChild(footer);

    this.panels = { score, level, lines, hold, next, board };
    return this;
  }
}
