const { ESLint } = require("eslint");
const config = require('./index.js');

describe('eslint-config-italia', () => {
  test('basic properties of config', () => {
    expect(typeof config.env).toBe('object');
    expect(typeof config.parserOptions).toBe('object');
    expect(Array.isArray(config.plugins)).toBeTruthy();
    expect(Array.isArray(config.extends)).toBeTruthy();
    expect(typeof config.rules).toBe('object')
    expect(typeof config.settings).toBe('object')
  });

  test('loads config correctly', async () => {
    const eslint = new ESLint({
      overrideConfig: config
    });
    const code = `const foo = "bar";`;
    const [result] = await eslint.lintText(code);
    const rules = result.messages.map(m => m.ruleId);
    expect(rules.includes(['no-unused-vars', 'prettier/prettier']));
  })
})