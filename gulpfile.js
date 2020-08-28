const gulp=require('gulp');
const source = require('vinyl-source-stream')
const browserify = require('browserify')
const dist="C:/xampp/htdocs/t/admin";

gulp.task("copy-html",()=>{
    return gulp.src("./app/index.html")
            .pipe(gulp.dest(dist))
});
gulp.task("build-js",()=>{
    return browserify('./app/main.js').bundle()
      .pipe(source('bundle.js'))
      .pipe(gulp.dest(dist))
});