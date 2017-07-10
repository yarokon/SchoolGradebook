const gulp = require('gulp'),
      nodemon = require('gulp-nodemon');

gulp.task('default', () => {
  nodemon({
    script: 'app.js',
    ext: 'js',
    env: {
      NODE_ENV: 'development',
      PORT: 3000
    },
    ignore: ['./node_modules/**']
  })
  .on('restart', () => {
    console.log('Restarting');
  });
});