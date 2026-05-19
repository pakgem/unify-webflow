# Webflow Usage

Build the runtime:

```bash
npm run build
```

Upload `dist/chatbot-stories.js` to your CDN or Webflow assets, then add:

```html
<section data-chatbot-stories data-auto-init></section>
<script src="https://your-cdn.example/chatbot-stories.js"></script>
```

The runtime injects its own CSS by default and uses these font families:

```css
--wa-font-sans: "Saans";
--wa-font-feature: "Feature Text";
```

If Webflow already loads Saans and Feature Text, the section will use them automatically. To use custom markup, keep these hooks:

```html
<section data-chatbot-stories>
  <div data-chat-shell>
    <div data-chat-thread></div>
    <div data-thinking><span data-thinking-label></span></div>
    <div data-result-grid></div>
    <div data-chat-input>
      <span data-composer-text></span>
      <button data-send-button>Send</button>
    </div>
  </div>
  <div data-story-tabs></div>
  <input data-story-scrubber type="range" min="0" max="1000" value="0">
</section>
```

Initialize manually when you want to pass options:

```html
<script>
  const stories = ChatbotStories.init("[data-chatbot-stories]", {
    autoplay: true,
    loop: true,
    autoAdvanceDelay: 1.2
  });
</script>
```

Theme styles are centralized at the top of `src/styles/chatbot-stories.css`. Use a `data-theme` attribute on the root when embedding:

```html
<section data-chatbot-stories data-auto-init data-theme="light"></section>
<section data-chatbot-stories data-auto-init data-theme="dark"></section>
<section data-chatbot-stories data-auto-init data-theme="system"></section>
```

Cursor targets should use semantic anchors, not fixed pixels:

```ts
ctx.cursor.moveTo({
  target: "[data-send-button]",
  anchor: "center",
  humanOffset: true
});
```

Story `entry` should be the first thing the cursor actually interacts with. The controller starts the story body shortly before the entry move completes, so lightweight setup such as status changes can begin while the cursor is still arriving.

```ts
export const story = {
  id: "lead-scoring",
  entry: {
    desktop: {
      target: "[data-chat-input]",
      anchor: "center",
      offset: { x: -72 },
      humanOffset: true
    },
    mobile: {
      target: "[data-chat-input]",
      anchor: "center",
      offset: { x: -54 },
      humanOffset: true
    }
  },
  entryLeadTime: 0.24,
  build(ctx) {
    return ctx.timeline()
      .add(ctx.chat.setStatus("Listening"))
      .add(ctx.cursor.click("text"))
      .add(ctx.chat.typeComposer("Show me the best accounts."));
  }
};
```

For breakpoint-specific choreography:

```ts
ctx.cursor.moveTo({
  desktop: { target: "[data-result-card='lead-list']", anchor: "right" },
  mobile: { target: "[data-result-action='create-sequence']", anchor: "center" }
});
```
