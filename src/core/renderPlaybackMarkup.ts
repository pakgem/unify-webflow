import { UNIFY_MARK_SVG } from "../assets/unifyMark";

export function renderPlaybackMarkup(root: HTMLElement): void {
  root.classList.add("wa-section");

  if (root.querySelector("[data-chat-shell]")) return;

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
          <span class="wa-story-count" data-story-count aria-hidden="true">1 / 5</span>
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
                <span class="wa-signup-scene__logo" data-signup-logo-target aria-hidden="true">${UNIFY_MARK_SVG}</span>
                <h3 class="wa-signup-scene__title">Sign up</h3>
                <div class="wa-signup-field" data-signup-field>
                  <span data-signup-email></span>
                  <button class="wa-signup-field__submit" type="button" data-signup-submit aria-label="Sign in">
                    <svg class="wa-signup-field__submit-icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <path d="M12 5l0 14"></path>
                      <path d="M18 13l-6 6"></path>
                      <path d="M6 13l6 6"></path>
                    </svg>
                  </button>
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
              <span class="wa-history-resume__icon" aria-hidden="true">
                <svg class="wa-history-resume__svg" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M7 4v16l13 -8z"></path>
                </svg>
              </span>
              <span>Continue playing</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}
