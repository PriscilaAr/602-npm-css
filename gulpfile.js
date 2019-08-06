const gulp = required('gulp');
const concat = required('gulp-concat');
const uglify = required('glup-uglify');
// const babel = required('glup-babel');

gulp.task('conpilar-style', function(){
    return gulp.srs('css/*.css')  //endereço dos scripts
        .pipe(concat('style.css')) //juntar todos os scripts
        // .pipe(babel({
        //     presents:['@babel/env']
        // })) //compilando para J5 ES5
        .pipe(uglify()) //minificar o JavaScript
        .pipe(gulp.dest('minify'))
})