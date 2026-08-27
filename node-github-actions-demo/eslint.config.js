const globals = require("globals");
const eslint = require("@eslint/js");

module.exports = [
    eslint.configs.recommended,

    {
        files: ["**/*.js"],
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
    },

    {
        files: ["test/**/*.js"],
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.jest,
            },
        },
    },
];