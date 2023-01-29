const config= {
  webServer: {
    command: 'yarn serve',
    port: 8080,
    reuseExistingServer: !process.env.CI,
  },
  baseURL: "http://localhost:8080",
  timeout: 10000000,

  // retries: テストが失敗した際にリトライする回数
  retries: 0,
  // workerでは、各ファイルごとに並列実行(ファイル内にある複数テストは、並列ではない)だが、
  // fullyParallel は、各ファイルのその中の全てのテストを並列実行する。
  fullyParallel: true,
  testMatch: /.spec.js/,


  //use: ブラウザに対するオプション
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    // 操作に対するタイムアウト。
    actionTimeout: 5000000,
    ignoreHTTPSErrors: true,
    video: 'on',
    screenshot: 'off',
    
  },
  // reporterはuseの外に設定するので注意。
  // reporter: [['json', { outputFile: 'test-results.json' }]],
  // reporter: [['junit', {outputFolder: 'test-report'}]],

  reporter: [['html', { outputFolder: './test-report/', open: 'never' }]],

  // projects: プロジェクトごとに設定を保存できる。defaultはconfigの一番上の階層の設定.
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
      testDir: './tests/'
      // テストを実行するディレクトリを指定できる。
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
      testDir: './tests/',
    },
    {
      name: 'Webkit',
      use: { browserName: 'webkit' },
      testDir: './tests/',
    },
  ],

  expect: {
    // アサーションに対するタイムアウト。
    timeout: 15000,
  },
}

export default config