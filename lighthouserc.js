module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      url: ['https://me-front-perf-feat-test3.herokuapp.com/index.html'],
      settings: {
        chromeFlags: '--no-sandbox',
      },
    },
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        'uses-rel-preload': 'off',
        'uses-rel-preconnect': 'off',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
