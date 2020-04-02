import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/pure-es6/main.js",
  output: [
    {
      dir: "dist",
      format: "es"
    }
  ],
  plugins: [resolve()]
};
