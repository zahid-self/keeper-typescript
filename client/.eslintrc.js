module.exports = {
  extends: ["next", "prettier", "next/core-web-vitals"],
  plugins: ["react", "react-hooks", "prettier"],
  rules: {
    quotes: "off",
    "prefer-const": "error",
    "react-hooks/exhaustive-deps": "error"
  }
}
