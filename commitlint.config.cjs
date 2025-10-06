module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "subject-empty": [2, "never"], // block empty commit messages
    "type-empty": [2, "never"], // require a type (feat, fix, chore, etc.)
  },
};
