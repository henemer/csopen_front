const gulp = require('gulp');
const del = require('del');
const typescript = require('gulp-typescript');
const tscConfig = require('./tsconfig.json');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');
const batch = require('gulp-batch');
// const tslint = require('gulp-tslint');
var tsProject = typescript.createProject('tsconfig.json');


// clean the contents of the distribution directory
gulp.task('clean', function () {
    return del('dist/**/*');
});

// TypeScript compile
// gulp.task('compile', ['clean'], function () {
//     return gulp
//         .src('app/**/*.ts')
//         .pipe(typescript(tscConfig.compilerOptions))
//         .pipe(sourcemaps.init())          // <--- sourcemaps
//         .pipe(typescript(tscConfig.compilerOptions))
//         .pipe(sourcemaps.write('.'))      // <--- sourcemaps
//         .pipe(gulp.dest('dist/app'));
// });

gulp.task('compile', function() {
    var tsResult = tsProject.src() // instead of gulp.src(...)
        .pipe(typescript(tsProject));

    return tsResult.js.pipe(gulp.dest('dist/app'));
});


// copy dependencies
gulp.task('copy:libs', ['clean'], function() {
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
gulp.task('copy:css',  ['clean'], function() {
    return gulp.src([
        'form.css',
        'node_modules/bootstrap/dist/css/bootstrap.min.css'])
        .pipe(gulp.dest('dist/css'))
});


// copy static assets - i.e. non TypeScript compiled source
gulp.task('copy:assets', ['clean'], function() {
    return gulp.src(['app/**/*', 'index.html', '!app/**/*.ts'], { base : './' })
        .pipe(gulp.dest('dist'))
});

// gulp.task('tslint', function() {
//     return gulp.src('app/**/*.ts')
//         .pipe(tslint())
//         .pipe(tslint.report('verbose'));
// });



gulp.task('build', ['clean', 'copy:libs', 'copy:css', 'copy:assets', 'compile']);

gulp.task('build-dev', ['copy:libs', 'copy:css', 'copy:assets']);

gulp.task('default', ['build']);

// Watch for changes
gulp.task('watch', ['compile','copy:css'], function () {
    gulp.watch('app/**/*.ts', ['compile']);
    gulp.watch('forms.css', ['copy:css']);
});

