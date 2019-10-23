var ghpages = require('gh-pages');
console.log(process.argv.slice(2)[0].substring(1, 4));
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
  },
  () => console.log('Successfully published!')
);
