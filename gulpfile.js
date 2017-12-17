const gulp = require('gulp');
const bs = require('browser-sync').create();
const sass = require('gulp-sass');


gulp.task('browser-sync', function() {
	bs.init({
		server: {
			baseDir: "./"
		}
	})
});

gulp.task("watch",['browser-sync', 'watch:sass'], function() {
	gulp.watch(["./*.html", "./*.css", "./*.js"])
		.on("change", bs.reload);
});

gulp.task("watch:sass", ['sass'], () => {
	return gulp.watch(["./*.scss"], ["sass"]);
})

gulp.task("sass", () => {
	return gulp.src("./styles.scss")
		.pipe(sass())
		.pipe(gulp.dest('./'))
})
