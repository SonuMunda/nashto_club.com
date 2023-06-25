import { defineConfig } from "vite";
const history = require("connect-history-api-fallback");
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});

module.exports = {
  server: {
    middleware: {
      // Add the history API fallback middleware
      // to redirect all requests to the index.html file
      before: function(app, server, compiler) {
        app.use(history());
      },
    },
  },
};
