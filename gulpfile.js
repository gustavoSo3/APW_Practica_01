let gulp = require('gulp');
let sass = require('gulp-sass')(require('sass'));

gulp.task('buildSass', ()=>{
	return gulp.src('src/sass/**/*.scss')
					.pipe(sass())
					.pipe(gulp.dest('public/css'));
});