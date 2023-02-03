module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    extends: ['plugin:react/recommended', 'standard-with-typescript', 'plugin:react/jsx-runtime', 'plugin:i18next/recommended', 'plugin:storybook/recommended'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json']
    },
    plugins: ['react', '@typescript-eslint', 'i18next'],
    rules: {
        indent: [2, 4],
        '@typescript-eslint/indent': [2, 4],
        '@typescript-eslint/explicit-function-return-type': 'warn',
        '@typescript-eslint/no-non-null-assertion': 'warn',
        '@typescript-eslint/prefer-includes': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/naming-convention': 'off'
    },
    globals: {
        __IS_DEV__: true
    },
    ignorePatterns: ['jest.config.ts', 'jestEmptyComponent.tsx'],
    overrides: [{
        files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
        rules: {
            'i18next/no-literal-string': 'off'
            // 'max-len': 'off'
        }
    }]
}
