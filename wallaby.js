module.exports = function (wallaby) {
  return {
    files: [
      'source/entities/*.ts'
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