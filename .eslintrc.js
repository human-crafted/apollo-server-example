module.exports = {
    "parser": "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint/eslint-plugin", "prettier"],
    "env": {
        "jest": true,
        "browser": true,
    },
    "extends": [
        "airbnb-base",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
        "plugin:prettier/recommended",
        "prettier/@typescript-eslint"],
    "rules": {
        /**
         * @description rules of eslint official
         */
        /**
         * @bug https://github.com/benmosher/eslint-plugin-import/issues/1282
         * "import/named" temporary disable.
         */
        "import/named": "off",
        "no-underscore-dangle": "off",
        /**
         * @bug?
         * "import/export" temporary disable.
         */
        "import/export": "off",
        "import/extensions": "off",
        "import/no-extraneous-dependencies": "off",
        "import/prefer-default-export": "off", // Allow single Named-export
        "no-unused-expressions": ["warn", {
            "allowShortCircuit": true,
            "allowTernary": true
        }], // https://eslint.org/docs/rules/no-unused-expressions

        /**
         * @description rules of @typescript-eslint
         */
        "@typescript-eslint/prefer-interface": "off", // also want to use "type"
        "@typescript-eslint/explicit-function-return-type": "off", // annoying to force return type
        "@typescript-eslint/explicit-member-accessibility": "off",
        "@typescript-eslint/camelcase": "off", // Apollo GraphQL auto-generated types
        "@typescript-eslint/ban-ts-ignore": "off", // annoying to have this when we need ts-ignore to make tests work
        "@typescript-eslint/no-empty-function": "off",

        /**
         * @description rules of eslint-plugin-prettier
         */
        "prettier/prettier": ["error", {
            "singleQuote": true,
            "printWidth": 80,
            "tabWidth": 2,
            "useTabs": true,
            "trailingComma": "none"
        }],
    }
};

