module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        "plugin:react/recommended",
        "plugin:prettier/recommended", // Uncomment this if you want to use prettier
        "react-app"
    ],
    overrides: [
        {
            env: {
                node: true
            },
            files: ["**/*.ts", "**/*.tsx", "**/*.js"],
            parserOptions: {
                ecmaVersion: 2021,
                sourceType: "module"
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module"
    },
    plugins: ["react", "prettier"],
    rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-confusing-void-expression": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/no-misused-promises": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/array-type": "off",
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/prefer-optional-chain": "off",
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "@typescript-eslint/promise-function-async": "off",
        "@typescript-eslint/restrict-plus-operands": "off",
        "react/prop-types": "off",
        "react/no-unescaped-entities": "off"
    }
};
