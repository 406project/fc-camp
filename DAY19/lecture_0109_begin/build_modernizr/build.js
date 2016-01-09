/**
 * --------------------------------
 * Modernizr Build
 * ----------------------------- */
var fs               = require('fs'),
	modernizr        = require('modernizr'),
	modernizr_option = require('./build_option'),
	uglifyJS         = require("uglify-js"),

	// 생성할 디렉토리/파일 경로
	output_dir = './src/js/lib/modernizr',
	output_path = output_dir + '/modernizr.js';

modernizr.build( modernizr_option , function(result) {
	// 빌드된 결과 코드
	// console.log(result);

	// 조건 확인: 폴더가 이미 존재하는지 여부를 확인
	if ( !fs.existsSync( output_dir ) ) {
		// 폴더 생성
		fs.mkdirSync( output_dir );
	}

	// 파일 쓰기 (file system 모듈 사용)
	fs.writeFile(output_path, result, 'utf-8', function() {

		// 코드 압축 (실제 생성된 파일이 요구)
		var result_min = uglifyJS.minify( output_path );

		// 압축된 코드를 다시 파일 쓰기
		fs.writeFileSync(output_path.replace('.js', '.min.js'), result_min.code);

		// 빌드 성공 시, 콘솔에 메시지 출력
		console.log(output_path + ' 파일 빌드가 성공적으로 수행되었습니다. :-)');

	});
});