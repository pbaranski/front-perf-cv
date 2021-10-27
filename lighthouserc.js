module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      url: ['https://me-front-perf-staging.herokuapp.com/index.html'],
      settings: {
        chromeFlags: '--no-sandbox',
      },
    },
    assert: {      
      assertions: {
        'categories:performance': ["error", {"minScore": 0.45}],
        'categories:pwa': 'off',
        'categories:accessibility': 'off',
      },
    },
    upload: {
//       target: 'temporary-public-storage',
      target: "lhci",
      serverBaseUrl: "https://light-ci.herokuapp.com/",
      token: process.env.LHCI_TOKEN_ENV,
    },
  },
}
