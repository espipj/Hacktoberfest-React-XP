var ghpages = require('gh-pages');

ghpages.publish(
  'dist-web',
  {
    user: {
      name: 'Pablo Espinosa',
      email: 'espipj@gmail.com',
    },
    repo:
      'https://' +
      process.argv.slice(2)[0] +
      '@github.com/espipj/Hacktoberfest.git',
    silent: true,
  },
  () => console.log('Successfully published!')
);
