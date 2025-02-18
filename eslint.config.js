import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,vue}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  // to disable eslint multi word component names
  // {
  //   'vue/multi-word-component-names': 'off',
  // },
  // or like this: https://eslint.vuejs.org/rules/multi-word-component-names
  // {
  //   "vue/multi-word-component-names": ["error", {
  //     "ignores": []
  //   }]
  // },
  ...pluginVue.configs["flat/essential"],
];