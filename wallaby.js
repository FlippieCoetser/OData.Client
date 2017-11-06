module.exports = function (wallaby) {
  return {
    files: [
      'src/*.ts',
      'demo/**/*.ts'
    ],
    tests: [
      'test/*.test.ts'
    ],
    testFramework: 'mocha',
    env: {
        type: 'node'
    },
    debug: true
  };
};