import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // enable the plugin so we can tweak its rules
    plugins: ["eslint-comments"],
    rules: {
      // turn off warnings about unused eslint-disable directives
      "eslint-comments/no-unused-disable": "off",
      // if you also see “no-unused-enable” or “no-unused-remark” errors:
      "eslint-comments/no-unused-enable": "off",
      "eslint-comments/no-unused-remark": "off",
    },
  },
];

export default eslintConfig;
