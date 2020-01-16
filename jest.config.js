module.exports = {
  moduleNameMapper: {
    '^~components(.*)$': '<rootDir>/src/components$1',
    '^~hocs(.*)$': '<rootDir>/src/hocs$1',
    '^~store(.*)$': '<rootDir>/src/store$1',
    '^~utils(.*)$': '<rootDir>/src/utils$1',
    '^~services(.*)$': '<rootDir>/src/services$1',

    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    // '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(css|scss)$': 'identity-obj-proxy'
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.js']
};
