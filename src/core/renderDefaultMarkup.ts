type RenderDefaultMarkupOptions = {
  showBuilder?: boolean;
};

export function renderDefaultMarkup(root: HTMLElement, options: RenderDefaultMarkupOptions = {}): void {
  root.classList.add("wa-section");

  if (root.querySelector("[data-chat-shell]")) return;

  const builderMarkup =
    options.showBuilder === false
      ? ""
      : `
      <div class="wa-builder" data-story-builder>
        <div class="wa-builder__header">
          <div>
            <p class="wa-builder__eyebrow">Story builder</p>
            <h3 class="wa-builder__title">Homepage story draft</h3>
          </div>
        </div>

        <div class="wa-builder__tabs" data-builder-tabs aria-label="Builder stories"></div>
        <div class="wa-builder__story-meta" data-builder-story-meta aria-label="Story title and summary"></div>

        <div class="wa-builder__layout">
          <div class="wa-builder__workspace">
            <div class="wa-builder__add-rail" data-builder-add-rail aria-label="Add message"></div>
            <div class="wa-builder__thread" data-builder-thread aria-label="Editable story chat"></div>
          </div>

          <aside class="wa-builder__side">
            <div class="wa-builder__panel" data-builder-panel aria-label="Selected message inspector"></div>
            <div class="wa-builder-export" hidden>
              <div class="wa-builder-export__header">
                <span class="wa-builder-export__label">Story JSON</span>
                <button class="wa-builder-export__copy" type="button" data-builder-copy-json aria-label="Copy story JSON">
                  <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                    <path d="M7 7.5h8v8H7z M5 13H4.5a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1H12a1 1 0 0 1 1 1V5"></path>
                  </svg>
                  <span data-builder-copy-label>Copy</span>
                </button>
              </div>
              <textarea class="wa-builder-export__textarea" data-builder-export spellcheck="false" aria-label="Story JSON export"></textarea>
            </div>
            <p class="wa-builder__status" data-builder-status>Draft ready</p>
          </aside>
        </div>
      </div>
    `;

  root.innerHTML = `
    <div class="wa-section__inner">
      <div class="wa-copy">
        <h2 class="wa-copy__title" aria-label="Escape tab hell with a unified platform for prospecting, researching, and sequencing, all backed by frontier AI models.">
          <span>Escape tab hell with a unified platform for</span>
          <span>
            <em>prospecting</em><span>, </span><em>researching</em><span>, and </span><em>sequencing</em>
          </span>
          <span>all backed by frontier AI models.</span>
        </h2>
      </div>

      <div class="wa-story-controls" data-story-controls>
        <div class="wa-story-tabs" data-story-tabs></div>
        <div class="wa-controls-row" aria-label="Animation controls">
          <button class="wa-control-button" type="button" data-prev-story aria-label="Previous story">
            <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
              <path d="M10 3.5 5.5 8l4.5 4.5"></path>
            </svg>
          </button>
          <button class="wa-control-button" type="button" data-toggle-play aria-label="Pause animation">Pause</button>
          <button class="wa-control-button" type="button" data-next-story aria-label="Next story">
            <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
              <path d="m6 3.5 4.5 4.5L6 12.5"></path>
            </svg>
          </button>
          <input class="wa-scrubber" data-story-scrubber type="range" min="0" max="1000" value="0" aria-label="Story progress">
        </div>
      </div>

      <div class="wa-stage">
        <div class="wa-stage__media" aria-hidden="true"></div>
        <div class="wa-window">
          <div class="wa-chat-shell" data-chat-shell>
            <div class="wa-chat-shell__bar">
              <div class="wa-chat-shell__lights" aria-hidden="true">
                <span></span><span></span><span></span>
              </div>
              <div class="wa-chat-shell__tab">
                <svg class="wa-chat-shell__mark" width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                  <path d="M5.71835 3.84074V0H0V5.12789C0 7.97387 2.13981 10.9988 6.10463 10.9988H8.4998V5.49938L7.40298 5.48406C6.46808 5.4708 5.71706 4.7386 5.71706 3.8395L5.71835 3.84074Z" fill="#FE3C01"/>
                  <path d="M11.2814 7.15899V10.9997H16.9998V5.87225C16.9998 3.02586 14.86 0.000976562 10.8952 0.000976562H8.5V5.50036L9.59682 5.51568C10.5317 5.52893 11.2827 6.26113 11.2827 7.16023L11.2814 7.15899Z" fill="#FE3C01"/>
                </svg>
                <span class="wa-chat-shell__title">Unify</span>
              </div>
            </div>

            <div class="wa-chat-shell__body">
              <div class="wa-signup-scene" data-signup-scene>
                <svg class="wa-signup-scene__logo" width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                  <path d="M5.71835 3.84074V0H0V5.12789C0 7.97387 2.13981 10.9988 6.10463 10.9988H8.4998V5.49938L7.40298 5.48406C6.46808 5.4708 5.71706 4.7386 5.71706 3.8395L5.71835 3.84074Z" fill="#FE3C01"/>
                  <path d="M11.2814 7.15899V10.9997H16.9998V5.87225C16.9998 3.02586 14.86 0.000976562 10.8952 0.000976562H8.5V5.50036L9.59682 5.51568C10.5317 5.52893 11.2827 6.26113 11.2827 7.16023L11.2814 7.15899Z" fill="#FE3C01"/>
                </svg>
                <h3 class="wa-signup-scene__title">sign up</h3>
                <div class="wa-signup-field" data-signup-field>
                  <span data-signup-email></span>
                </div>
              </div>

              <div class="wa-thread" data-chat-thread></div>
            </div>

            <div class="wa-composer" data-chat-input>
              <span class="wa-composer__placeholder" data-composer-text></span>
              <div class="wa-composer__controls">
                <span class="wa-composer__select" aria-hidden="true">
                  GPT 5.5
                  <svg class="wa-composer__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M6 9l6 6l6 -6"></path>
                  </svg>
                </span>
                <span class="wa-composer__select" aria-hidden="true">
                  High
                  <svg class="wa-composer__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M6 9l6 6l6 -6"></path>
                  </svg>
                </span>
                <button class="wa-composer__send" type="button" data-send-button aria-label="Send message">
                  <svg class="wa-composer__send-icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M12 5l0 14"></path>
                    <path d="M18 11l-6 -6"></path>
                    <path d="M6 11l6 -6"></path>
                  </svg>
                </button>
              </div>
            </div>

            <button class="wa-history-resume" type="button" data-history-resume aria-hidden="true" tabindex="-1">
              <span class="wa-history-resume__icon" aria-hidden="true">▶</span>
              <span>Continue playing</span>
            </button>
          </div>
        </div>
      </div>

      ${builderMarkup}
    </div>
  `;
}
