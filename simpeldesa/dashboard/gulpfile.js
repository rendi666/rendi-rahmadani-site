const gulp = require('gulp');
//var pug = require('gulp-pug');
var path = require('path');
var sass = require('gulp-sass');
//var mustache = require("gulp-mustache");
var data = require('gulp-data');
var fs = require('fs');
var browserSync = require('browser-sync').create();
var gutil = require('gulp-util');
var plumber = require('gulp-plumber');
var inject = require('gulp-inject-string');

// hbs
var handlebarss = require('handlebars');
var handlebars = require('gulp-compile-handlebars');
var helpers = require('handlebars-helpers')({
  handlebarss: handlebars
});

/* css */
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var paths_sd = {  
  root: ['./'],
  src_sass: ['./sass/sass/**/*.scss'],
  src_json: './json/data.json',
  src_partials: ['./handlebars/partials'],
  src_hbs: './handlebars/**/*.handlebars',
  src_hbs_watch: ['./handlebars/*.handlebars',
                  './handlebars/partials/*.handlebars',
                 ],
  dest_hbs: './',
  dest_sass: './assets/css',
};
var paths = paths_sd;

// pug
// gulp.task('pug', function(done) {
//   gulp.src(paths.src_pug)
//     .pipe(pug({
//     	pretty: true,
//     }))
//     .pipe(gulp.dest(paths.dest_pug))
//     .on('end', done);
// });

// mustache
//gulp.task('mustache', function(done) {  
//	gulp.src(paths.src_mustache)
//		.pipe(mustache({
//			msg: "Hello Gulp!"
//		}))
//		.pipe(gulp.dest(paths.dest_mustache));
//});

gulp.task('html', function (done) {
    var cssContent = fs.readFileSync(paths.dest_css, "utf8");
    gulp.src(paths.dest_html)
        .pipe(inject.after('style amp-custom>', cssContent))
        .pipe(gulp.dest(paths.root))
        .pipe(browserSync.reload({
            stream: true
    }));
    done();
});

// hbs
gulp.task('hbs', function (done) {
    var templateData = {
        author: 'Khoirul Huda'
    },
    options = {
        ignorePartials: true, //ignores the unknown footer2 partial in the handlebars template, defaults to false 
        batch : paths.src_partials,
    }
 
    gulp.src(paths.src_hbs)
	    .pipe(data(function(file) {
			  return JSON.parse(
				fs.readFileSync(paths.src_json)
			  );
			}))
        .pipe(handlebars(templateData, options))
        .pipe(rename(function(path) {
				path.extname = '.html';
			}))
        .pipe(gulp.dest(paths.dest_hbs))
		.pipe(browserSync.reload({
		  stream: true
    }));
    done();
});

// browser refresh / localhost
gulp.task('browserSync', function(done) {
  browserSync.init({
  	ghostMode: false,
  	open: false,
    server: {
      baseDir: paths.root
    },
//    proxy: {
//      target: "http://komps.dev",
//      ws: true,
// },
//    serveStatic: [{
//        route: '/html',
//        dir: 'tmp'
//    }]
  });
  done();
})

// sass
gulp.task('sassrun', function(done) {
  gulp.src(paths.src_sass) // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest(paths.dest_sass))
	  .pipe(browserSync.reload({
      stream: true
    }));
    done();
})

gulp.task('sassmin', function(done) {
  gulp.src(paths.src_sass) // Gets all files ending with .scss in app/scss and children dirs
	.pipe(plumber())
    .pipe(sass())
	.pipe(cssnano())
    .pipe(gulp.dest(paths.dest_sass))
	  .pipe(browserSync.reload({
      stream: true
    }));
    done();
})

// production asset
var unmincss = [paths.root+'/asset/css/*.css', '!'+paths.root+'/asset/css/*.min.css'];
var unminjs = [paths.root+'/asset/js/*.js', '!'+paths.root+'/asset/js/*.min.js'];

// bundle doang
gulp.task('minify', function (done) {
  gulp.src(unmincss)
    .pipe(cssnano())
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(gulp.dest(paths.root+'/asset/css'));

  gulp.src(unminjs)
    .pipe(uglify())
	.on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(gulp.dest(paths.root+'/asset/js'));

    done();
  
});

// sass doang
gulp.task('watch',gulp.series('browserSync','sassrun'), function(done){
	gulp.watch(paths.src_sass, ['sassrun']); 
	done();
})
// sass doang
gulp.task('host',gulp.series('browserSync'), function(done){
	done();
})


// with pug
// gulp.task('pugs',gulp.series('browserSync','sassrun','pug'), function(){
// 	gulp.watch(paths.src_sass, ['sassrun']); 
// 	gulp.watch(paths.src_pug, ['pug']);
// })
// with handlebars
gulp.task('handlebars', gulp.series('browserSync','sassrun','hbs', (done) => {
	gulp.watch(paths.src_sass, gulp.series('sassrun')); 
	gulp.watch(paths.src_hbs_watch, gulp.series('hbs'));
	done();
}))

gulp.task('amp', gulp.series('browserSync','sassmin','hbs','html', (done) => {
	gulp.watch(paths.src_sass, gulp.series('sassmin')); 
	gulp.watch(paths.src_hbs_watch, gulp.series('hbs'));
	gulp.watch(paths.dest_css, gulp.series('html'));
	gulp.watch(paths.dest_html, gulp.series('html'));
	done();
}))

