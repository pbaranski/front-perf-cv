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
      assertions: {
        'categories:performance': ["error", {"minScore": 70}],
//         'categories:best-practices': ["error", {"minScore": 1}],
//         'categories:seo': ['error', {'minScore': 1}],
        'categories:pwa': 'off',
        'categories:accessibility': 'off',
//         'color-contrast': 'off',
//         'uses-rel-preload': 'off',
//         'uses-rel-preconnect': 'off',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
