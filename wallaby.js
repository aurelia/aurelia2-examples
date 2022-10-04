module.exports = function (w) {

    process.env.NODE_ENV = 'test';
  
    return {
      files: [
        { pattern: 'packages/**/src/**/*.ts', load: true },
        { pattern: 'packages/**/*.spec.ts', ignore: true }
      ],
  
      tests: [
        { pattern: 'packages/**/**/*.spec.ts', load: true }
      ],
  
      filesWithNoCoverageCalculated: [
        'packages/**/src/index.ts',
      ],
  
    //   env: {
    //     type: 'node'
    //   },
  
      testFramework: 'jest',
  
    };
  };