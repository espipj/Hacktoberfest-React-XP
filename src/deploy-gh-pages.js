var ghpages = require('gh-pages');
console.log(process.argv.slice(2)[0].substring(1, 4));
ghpages.publish(
  'dist-web',
  {
    repo:
      'https://' +
      process.argv.slice(2)[0] +
      '@github.com/espipj/Hacktoberfest.git',
    silent: true,
  },
  () => console.log('Successfully published!')
);
