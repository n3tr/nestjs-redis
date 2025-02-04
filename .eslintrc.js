module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        project: 'tsconfig.json'
    },
    plugins: ['@typescript-eslint', 'eslint-plugin-tsdoc', 'deprecation'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:jest/recommended',
        'plugin:jest/style',
        'plugin:prettier/recommended'
    ],
    root: true,
    env: {
        node: true,
        jest: true,
        es2017: true
    },
    ignorePatterns: ['dist/*', 'health/*', '.eslintrc.js', 'health.ts', 'compat.js'],
    reportUnusedDisableDirectives: true,
    rules: {
        'tsdoc/syntax': 'warn',
        'deprecation/deprecation': 'warn'
    }
};
