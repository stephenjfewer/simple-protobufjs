var gulp   = require("gulp"),
    bundle = require("./bundle");

function defineTask(name, entry, target) {
    gulp.task(name + "-bundle", bundle.bind(this, {
        entry    : entry,
        target   : target
    }));
    gulp.task(name + "-minify", bundle.bind(this, {
        entry    : entry,
        target   : target,
        compress : true
    }));
    gulp.task(name, gulp.series(
        name + "-bundle",
        name + "-minify"
    ), function(done) { done(); });
}

defineTask("simple"   , "../src/index"        , "../dist"        );

gulp.task("default", gulp.parallel(
    "simple"
, function(done) { done(); }));

/* var typedoc = require("gulp-typedoc");
gulp.task("typedoc", function() {
    return gulp
        .src(["../index.d.ts"])
        .pipe(typedoc({
            module: "commonjs",
            target: "es5",
            mode: "file",
            theme: "default",
            includeDeclarations: true,
            excludePrivate: true,
            out: "../tsdocs",
            name: "protobuf.js"
        }))
}); */

