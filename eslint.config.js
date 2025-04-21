import { FlatCompat } from "@eslint/eslintrc";
import tseslint from 'typescript-eslint';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default tseslint.config(
  {
    ignores: ['.next']
  },
  ...compat.extends("next/core-web-vitals"),
  {
    files: ['**/*.ts', '**/*.tsx'],
    extends: [
      ...tseslint.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked
    ],
    rules: {
      // Disable all "type" related checks that are unnecessary or too strict for your needs
      "@typescript-eslint/array-type": "off", // Disables warnings about array types
      "@typescript-eslint/consistent-type-definitions": "off", // Disables warnings about type alias vs interface
      "@typescript-eslint/consistent-type-imports": "off", // Disables warnings about consistent type imports
      "@typescript-eslint/no-unused-vars": "off", // Disables unused variable warnings
      "@typescript-eslint/require-await": "off", // Disables warnings about requiring async functions to have await
      "@typescript-eslint/no-misused-promises": "off", // Disables warnings about promises being misused
      "@typescript-eslint/no-explicit-any": "off", // Allows the use of `any`
      "@typescript-eslint/no-empty-interface": "off", // Disables warnings about empty interfaces
      "@typescript-eslint/no-non-null-assertion": "off", // Allows non-null assertions (`!` operator)
      "@typescript-eslint/explicit-module-boundary-types": "off", // Disables warnings about function return types
      "@typescript-eslint/no-unsafe-assignment": "off", // Disables warnings about unsafe assignment (e.g., assigning `any`)
      "@typescript-eslint/no-unsafe-call": "off", // Disables warnings about unsafe calls
      "@typescript-eslint/no-unsafe-member-access": "off", // Disables warnings about unsafe member access
      "@typescript-eslint/no-unsafe-return": "off", // Disables warnings about unsafe return values
      "@typescript-eslint/explicit-member-accessibility": "off", // Disables explicit member accessibility rules
      "@typescript-eslint/member-ordering": "off" // Disables member ordering rule (order of methods/properties)
    }
  },
  {
    linterOptions: {
      reportUnusedDisableDirectives: false // Also suppress warning for unused eslint-disable comments
    },
    languageOptions: {
      parserOptions: {
        projectService: true
      }
    }
  }
);
