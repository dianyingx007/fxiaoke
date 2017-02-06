var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var reload = browserSync.reload;

//静态服务器，并监听文件变化
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: {
            baseDir: "./",
            index: "./index.html"
        }
    });

    gulp.watch("css/*.scss",['sass']);
    gulp.watch(["*.html","js/*.js"]).on('change',reload);
});

// scss编译后的css将注入到浏览器里实现更新
gulp.task('sass', function(){
    return gulp.src("css/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("css"))
        .pipe(reload({stream:true}));
});

gulp.task('default',['serve']);