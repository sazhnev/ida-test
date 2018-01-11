var gulp 			        = require('gulp'),
	sass 			          = require('gulp-sass'),
	browserSync 	      = require('browser-sync'),
	autoprefixer 	      = require('gulp-autoprefixer');

var sassOptions = {
  // errLogToConsole: true,
  outputStyle: 'expanded'
  // outputStyle: 'compact'
  // outputStyle: 'compressed'
};

gulp.task('sass', function() {
	return gulp.src('sass/main.sass')
	.pipe(sass(sassOptions))
	.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
	.pipe(gulp.dest('css'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        notify: false
    });
});

gulp.task('watch', ['browser-sync'], function() {
	gulp.watch('sass/**/*.sass', ['sass']);
	gulp.watch('**/*.html', browserSync.reload);
});