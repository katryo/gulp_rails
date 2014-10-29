var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");

gulp.task("webpack", function(callback) {
    // run webpack
    webpack({
        entry: './app/assets/javascripts/welcome.js',
        output: {
            filename: './public/assets/bundle.js'
        },
 resolve: {
      modulesDirectories: ['node_modules', 'bower_components'],
      }
        // configuration
    }, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            filename: 'webpack.log.txt'
        }));
        callback();
    });
});



gulp.task('default', ['webpack']);
