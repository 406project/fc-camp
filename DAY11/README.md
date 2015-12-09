![Gulp](../SUMMARY/assets/D11/gulp.jpg)

## Tree 명령을 OSX 에서 사용하는 방법
- [yamoo9.net/terminal-tree/](http://yamoo9.net/terminal-tree/)

---

## Gulp + Sass + Sourcemaps + BrowseSync 프로젝트 구성

### 0. package.json 파일 생성 :

```sh
$ npm init # -y
```

### 1. Gulp 글로벌/로컬 설치:

- [Gulp](http://gulpjs.com/)

```sh
$ npm i -g gulp && npm i -D gulp
```

### 2. Sass(LibSass) 관련 모듈 로컬 설치:

- [gulp-sass](https://github.com/dlmanning/gulp-sass)
- [gulp-sourcemaps](https://github.com/floridoo/gulp-sourcemaps)

```sh
$ npm i -D gulp-sass gulp-sourcemaps
```

### 3. BrowserSync 모듈 로컬 설치:

- [Browsersync + Gulp.js](http://www.browsersync.io/docs/gulp/)
- [Browsersync Options](http://www.browsersync.io/docs/options/)

```sh
$ npm i -D browser-sync
```

### 4. gulpfile.js 파일 생성 및 코드 작성:

```js
'use strict';
var gulp        = require('gulp'),
	sass        = require('gulp-sass'),
	sourcemaps  = require('gulp-sourcemaps'),
	browserSync = require('browser-sync').create();

...
```