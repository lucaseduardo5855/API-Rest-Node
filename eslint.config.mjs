import js from "@eslint/js";

export default [
  // 1. Importa as regras recomendadas do ESLint (substitui o antigo "extends")
  js.configs.recommended,

  // 2. Sua configuração personalizada
  {
    files: ["**/*.{js,mjs,cjs}"], // Aplica a esses arquivos
    languageOptions: {
      globals: globals.node, // Define variáveis globais do Node (process, __dirname, etc.)
      sourceType: "commonjs", // Define que você usa require/module.exports
    },
    rules: {
      "no-console": "off", // Permite console.log
      "no-unused-vars": "warn", // (Opcional) Apenas avisa sobre variáveis não usadas, não quebra o código
      "class-methods-use-this": "off", // Permite métodos de classe que não usam 'this'
      "camelcase": "off"
    },
  },
];
