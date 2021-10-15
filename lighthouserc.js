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
        'categories:performance': 'off',
        'categories:pwa': 'off',
        'categories:accessibility': 'off',
        
        'uses-rel-preload': 'on',
        'uses-rel-preconnect': 'off',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
