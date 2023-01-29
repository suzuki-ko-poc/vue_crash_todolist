'use strict'

const isWindows = require('is-windows')()

module.exports = {
  exclude: [
    'coverage',
    'self-coverage',
    'test/fixtures/coverage.js',
    'test/build/*',
    'test/src/*',
    'test/nyc.js',
    'test/process-args.js',
    'test/fixtures/_generateCoverage.js'
  ],
  extention: ['.js', '.vue'],
  /* Unknown why we don't get 100% coverage on Windows. */
  'check-coverage': !isWindows,
  branches: 100,
  functions: 100,
  lines: 100,
  statements: 100,
  // .nyc_outputを出力するpath
  // nyc report --reporter=htmlを実行する時に参照する
  "temp-dir": "tests/.nyc_output",
  // nyc report --reporter=htmlの出力先
  "report-dir":  "tests/coverage"

}