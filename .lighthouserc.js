module.exports = {
    ci: {
      collect: {
        staticDistDir: './build',
        numberOfRuns: 1,
        isSinglePageApplication: true,
        url: ['http://localhost:3000/'],
        settings: {
          onlyCategories: ['accessibility', 'performance', 'seo']
        },
        assert: {
          preset: 'lighthouse:no-pwa',
          assertions: {
            'categories:performance': ['error', { minScore: 0.1 }],
            'categories:accessibility': ['error', { minScore: 0.1 }],
            'categories:seo': ['error', { minScore: 0.1 }]
          }
        },
        upload: {
          target: 'temporary-public-storage'
        },
      }
    }
  };