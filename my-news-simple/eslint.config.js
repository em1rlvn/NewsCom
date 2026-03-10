import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'
import nextPlugin from 'eslint-config-next';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default defineConfig([
  ...nextPlugin.configs['core-web-vitals'],
  {
    rules: {
      'no-console': 'warn',
      'react/jsx-uses-react': 'off', // если React 17+
      'react/react-in-jsx-scope': 'off',
    },
  },

  // Игнорируем ненужное
  {
    ignores: ['node_modules/', '.next/', 'out/', 'build/'],
  },

  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      
    },
  },
  
])

