var gulp = require('gulp')
const uglify = require ('gulp-uglify')

const javascript = (done) => {

    gulp.src("./src/js/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("./dist/js/"))

    done()

    console.log("YAYAYA")

    done()
}
exports.default = javascript