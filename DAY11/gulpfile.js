// CommonJS 진영의 표준 모듈로더 방식 사용
'use strict';
var gulp        = require('gulp'),
	sass        = require('gulp-sass'),
	sourcemaps  = require('gulp-sourcemaps'),
	browserSync = require('browser-sync').create(),

	// 환경 설정
	config = require('./config');

// 기본 업무 (Default Task) 등록
gulp.task('default', ['server']);

// 관찰(Watch) 업무
gulp.task('watch', function() {
	gulp.watch( config.paths.sass.src , ['sass']);
});

gulp.task('server', ['sass'], function() {
	browserSync.init( config.options.browserSync );
	gulp.watch( config.paths.sass.src, ['sass'] );
	gulp.watch( config.paths.html ).on( 'change', browserSync.reload );
});

// Sass → CSS 업무
gulp.task('sass', function() {
	// 업무 Sass → CSS
	gulp
		// Sass 파일이 있는 디렉토리(Source) 경로 설정
		.src( config.paths.sass.src )
		.pipe( sourcemaps.init() )
		// 파이프(|) Sass() 함수를 사용해서 CSS로 변경 [Stream 데이터]
		.pipe( sass( config.options.sass ).on('error', sass.logError) )
		// 파이프(|) .... 소스맵(Sourcemap)
		.pipe( sourcemaps.write() )
		// 스트림 데이터(CSS 코드)를 목적지(Destination)에 생성(Write Files)
		.pipe( gulp.dest( config.paths.sass.dest ) )
		// 목적지에 출력한 CSS가 변경된 것을 감지해서 자동으로 브라우저 화면을 업데이트
		.pipe( browserSync.stream() );
});