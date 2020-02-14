module.exports = {
  moduleNameMapper: {
    // '^~src(.*)$': '<rootDir>/src$1',
    // '^~public(.*)$': '<rootDir>/public$1',
    '^~components(.*)$': '<rootDir>/src/components$1',
    '^~hocs(.*)$': '<rootDir>/src/hocs$1',
    '^~routes(.*)$': '<rootDir>/src/routes$1',
    '^~services(.*)$': '<rootDir>/src/services$1',
    '^~store(.*)$': '<rootDir>/src/store$1',
    '^~utils(.*)$': '<rootDir>/src/utils$1',

    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js'
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  snapshotSerializers: ['enzyme-to-json/serializer']
};
