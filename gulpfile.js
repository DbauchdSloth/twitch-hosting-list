var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('clean', function () {
  // TODO: move out file definition to cfg and/or commandline
	return gulp.src('host-list.txt', {read: false})
		.pipe(clean());
});

gulp.task('default', ['clean'], function() {

});
