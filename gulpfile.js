var gulp = require("gulp");
var ts = require("gulp-typescript");
const del = require('del');
var tsProject = ts.createProject("tsconfig.json");

gulp.task("build", ['clean'], function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("./dist"));
});

gulp.task('clean', function(){
    return del(['dist/**', '!dist'], {
        force:true
    });
});