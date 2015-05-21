var gulp = require("gulp"),
    connect = require("gulp-connect"),
    opn = require("opn"),
    sass = require("gulp-sass"),
    jade = require("gulp-jade"),
    browserSync = require('browser-sync').create();

// Локал хост browserSync
gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "yourlocal.dev"
    });
});

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "app"
    });

    gulp.watch("app/sass/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', reload);
});
// Запуск сервера c лайврелоадом
gulp.task('serv_livereload', function() {
    connect.server({
        root: 'app',
        livereload: true,
        port: 8888
    });
    opn('http://localhost:8888');
});

// Запуск сервера без лайврелоада
gulp.task('serv_no_livereload', function() {
    connect.server({
        root: 'app',
        port: 8888
    });
    opn('http://localhost:8888');
});
// Работа с jade
gulp.task('jade', function() {
	return gulp.src('app/templates/index.jade')
    .pipe(jade({pretty: true}))
	.pipe(gulp.dest('app/'));

});
// Работа с Sass
gulp.task('sass', function() {
    return gulp.src('app/sass/style.scss')
        .pipe(sass({
            sourceComments: 'map'
        }))
        // .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('app/css/'));
});
// Работа с html
gulp.task('html', function() {
    gulp.src('./app/*.html')
        .pipe(connect.reload());
});

// Работа с css
gulp.task('css', function() {
    gulp.src('./app/css/*.css')
        .pipe(connect.reload());
});

// Работа с js
gulp.task('js', function() {
    gulp.src('./app/js/*.js')
        .pipe(connect.reload());
});

// Слежка
gulp.task('watch', function() {
    gulp.watch(['./app/*.html'], ['html']);
    gulp.watch(['./app/css/*.css'], ['css']);
    gulp.watch(['./app/js/*.js'], ['js']);
});

// Задача по-умолчанию 
gulp.task('default', ['serv_livereload', 'watch']);

// Для ie
gulp.task('serv', ['serv_no_livereload', 'watch']);
