module.exports = {
	// 파일 경로
	'paths': {
		'html': './src/**/*.html',
		'sass': {
			'src': './src/sass/*.{sass,scss}',
			'dest': './src/css'
		}
	},
	// 옵션
	'options' : {
		'sass': {
			'outputStyle': 'expanded'
		},
		'browserSync': {
			'server': './src'
		}
	}
};