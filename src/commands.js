// https://developer.chrome.com/extensions/commands

const commands = {
  getAll: jest.fn((cb) => {
    if (cb !== undefined) {
      return cb();
    }
    return Promise.resolve();
  }),
  onCommand: {
    addListener: jest.fn(),
  },
};

module.exports = { commands };
