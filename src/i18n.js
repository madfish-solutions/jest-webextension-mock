const i18n = {
  getAcceptLanguages: jest.fn(),
  getMessage: jest.fn(
    (key, substitutions) => substitutions === undefined
      ? `Translated<${key}>`
      : `Translated<${key}, ${JSON.stringify(substitutions)}>`
  ),
  getUILanguage: jest.fn(() => 'en'),
  detectLanguage: jest.fn(),
};

module.exports = { i18n };
