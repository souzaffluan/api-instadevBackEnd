module.exports = {
    "env": {
        "commonjs": true,
        "es2021": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
        'no-param-reassign': 'off',
        camelcase: 'off',
        'no-unused-vars': ['error', {argsIgnorePattern: 'next'}],
        'max-len':['error', {code: 80}]
    },
}
