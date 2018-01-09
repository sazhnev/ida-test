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
	return gulp.src('app/sass/main.sass')
	.pipe(sass(sassOptions))
	.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app"
        },
        notify: false
    });
});

gulp.task('watch', ['browser-sync'], function() {
	gulp.watch('app/sass/**/*.sass', ['sass']);
	gulp.watch('app/**/*.html', browserSync.reload);
});