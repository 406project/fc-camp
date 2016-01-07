// ------------------------------
// Modernizr Build
// ------------------------------
var modernizr = require("modernizr"),
	uglifyJS  = require('uglify-js'),
	fs        = require('fs');

// 옵션
var feature_detaction_options = require('./build-option');

// 빌드
modernizr.build(feature_detaction_options, function(result) {

	var path                = './src/js/lib/',
		modernizr_dir_path  = path + 'modernizr',
		modernizr_file_path = modernizr_dir_path + '/modernizr.min.js';

	if ( !fs.existsSync(modernizr_dir_path) ) {
		fs.mkdirSync(modernizr_dir_path);
	}

	fs.writeFile(modernizr_file_path, result, 'utf-8', function() {
		// 압축
		var uglify_result = uglifyJS.minify( modernizr_file_path);
		// 압축 파일 쓰기
		fs.writeFileSync(modernizr_file_path, uglify_result.code);
		console.log('modernizr.min.js 파일이 ' + path + 'modernizr/ 경로에 성공적으로 생성되었습니다. :-)');
	});

});