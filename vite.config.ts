import { defineConfig } from "vite";

export default defineConfig(({ mode }) => ({
  build: mode === "app"
    ? {}
    : {
        lib: {
          entry: "src/index.ts",
          name: "ChatbotStories",
          formats: ["iife", "es"],
          fileName: (format) => (format === "iife" ? "chatbot-stories.js" : "chatbot-stories.es.js"),
        },
      },
}));
