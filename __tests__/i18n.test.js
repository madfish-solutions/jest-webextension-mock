describe('browser.i18n', () => {
  test('getMessage', () => {
    expect(browser.i18n.getMessage('keyToTranslate')).toBe(
      'Translated<keyToTranslate>'
    );
    expect(browser.i18n.getMessage('keyToTranslate', ['arg1', 'arg2'])).toBe(
      'Translated<keyToTranslate, ["arg1","arg2"]>'
    );
  });

  test('getUILanguage', () => {
    return expect(browser.i18n.getUILanguage()).toBe('en');
  });
});
