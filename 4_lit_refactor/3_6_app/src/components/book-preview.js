import { LitElement, property, html, css } from "lit-element";
import { Button } from "@material/mwc-button";
import {
  trbl,
  flxGrow,
  flx,
  flxVert,
  flxCtr,
  flxCtrCtr,
  marginBot,
  paddingAll,
  radiusAll,
  border
} from "@andreas-galster/inkling/dist/ink-layout-helpers-lit";
import { inkReset } from "@andreas-galster/inkling";

class BookPreview extends LitElement {
  static styles = css`
    :host {
      cursor: pointer;
    }
  `;

  @property({ type: Object }) book = {};
  // ${this.book.author.pictures.cardPic}
  render() {
    return html`
      ${inkReset}

      <style>
        :host {
          display: block;
          flex: auto;
          margin: 10px;
          color: white;
          position: relative;
          overflow: hidden;
          ${border.g80}
          ${radiusAll.lg}
        }

        :host(:hover) div {
          opacity: 1;
        }

        div {
          transition: opacity 0.4s ease-in-out;
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;
          background: var(--secondary-fade);
          opacity: 0;

          ${paddingAll.md}
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;

        }
      </style>

        <img src=${this.book.image[Math.floor(Math.random()*this.book.image.length)]}>

        <div>
          <h1>
            ${this.book.teaser}
          </h1>

          <h1>
            ${this.book.title}
          </h1>
          <h2>
            ${this.book.author.firstName} ${this.book.author.firstName}
          </h2>        
        </div>


    `;
  }
}

customElements.define("book-preview", BookPreview);
