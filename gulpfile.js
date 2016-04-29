const gulp = require('gulp');
const del = require('del');
const typescript = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');
var tsProject = typescript.createProject('tsconfig.json');


// clean the contents of the distribution directory
gulp.task('clean', function () {
    return del('dist/**/*');
});


gulp.task('compile', function() {
    var tsResult = tsProject.src() // instead of gulp.src(...)
        .pipe(typescript(tsProject));

    return tsResult.js.pipe(gulp.dest('dist/app'));
});


// copy dependencies
gulp.task('copy:libs', function() {
    return gulp.src([
            'node_modules/angular2/bundles/angular2-polyfills.js',
            'node_modules/systemjs/dist/system.src.js',
            'node_modules/rxjs/bundles/Rx.js',
            'node_modules/angular2/bundles/angular2.dev.js',
            'node_modules/angular2/bundles/http.dev.js',
            'node_modules/angular2/bundles/router.dev.js'
        ])
        .pipe(gulp.dest('dist/lib'))
});

// copy CSS
gulp.task('copy:css',  function() {
    return gulp.src([
        'forms.css',
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/bootstrap/dist/fonts/**/*'])
        .pipe(gulp.dest('dist/css'))
});

// copy Fonts
gulp.task('copy:fonts',  function() {
    return gulp.src([
            'node_modules/bootstrap/dist/fonts/**/*'])
        .pipe(gulp.dest('dist/fonts'))
});

// copy static assets - i.e. non TypeScript compiled source
gulp.task('copy:assets', function() {
    return gulp.src(['app/**/*', 'index.html', '!app/**/*.ts'], { base : './' })
        .pipe(gulp.dest('dist'))
});


gulp.task('build', ['clean', 'copy:libs', 'copy:css', 'copy:assets', 'compile']);

gulp.task('default', ['build']);

// Watch for changes
gulp.task('watch', ['compile','copy:css', 'copy:fonts', 'copy:assets', 'copy:libs'], function () {
    gulp.watch('app/**/*.ts', ['compile']);
    // gulp.watch('forms.css', ['copy:css']);
    gulp.watch(['app/**/*', 'index.html', '!app/**/*.ts'], ['copy:assets', 'copy:libs', 'copy:css', 'copy:fonts'])
});

