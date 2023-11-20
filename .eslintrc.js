module.exports = {
  extends: ["next", "prettier", "next/core-web-vitals"],
  plugins: ["react", "react-hooks", "prettier"],
  rules: {
    quotes: "off",
    semi: ["error", "always"],
    "prefer-const": "error",
    "react-hooks/exhaustive-deps": "error"
  }
}
