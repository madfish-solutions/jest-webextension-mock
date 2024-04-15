const webNavigation = {
  onCompleted: {
    addListener: jest.fn(),
  },
  onHistoryStateUpdated: {
    addListener: jest.fn(),
  },
};

module.exports = { webNavigation };
