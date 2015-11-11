/*!
 * fc-toggleGrid.js © yamoo9.net, 2015
 * ------------------------------------------
 * 화면 단에 그리드를 가득 채워서 표시합니다.
 * 960px, 12컬럼, 컬럼 폭 60px, 거터 폭 10+10px
 * .container 요소는 화면 가운데 정렬
 * 버튼을 그린 다음에 그 버튼을 클릭하면
 * 그리드가 토글 되는 기능 구현
*/

// ------------------------------------------
// 변수 정의
// var user_variable, my_variable; // undefined

// ------------------------------------------
// 변수에 값을 할당(대입)
// user_variable = 9;
// my_variable   = true;

// ------------------------------------------
// 진보 이벤트 모델
// W3C 표준 addEventListener, removeEventListener (IE 9+)
// MS 비표준 attachEvent, detachEvent

// 문서객체모델(DOM)이 준비되면... 실행 코드
// window.addEventListener('DOMContentLoaded', callback);

// jQuery 레디 이벤트
// jQuery(document).ready( callback );
// jQuery( callback );

// ------------------------------------------
// var single pattern
// IIFE pattern
// ------------------------------------------
(function(){

	// 1. 문서에서 토글 그리드 버튼(.toggle-grid-btn)을 찾는다.
	var toggle_grid_btn = document.querySelector('.toggle-grid-btn'),
		container       = document.querySelector('.container'),
	// console.log( toggle_grid_btn );
	// console.log( container );

		// 2. 클릭했을 때 처리할 함수(이벤트 핸들러)를 정의한다.
		toggleGrid = function (event) {
			var type       = event.type,
				key        = event.keyCode,
				class_name = 'grid';

			if (
				// 클릭 할 때
				type === 'click' ||
				// 키보드 누를 때 (Enter || Space)
				( type === 'keydown' && ( key === 13 || key === 32 ) )
			) {
				// 최신 DOM 방식의 Javascript 코드
				container.classList.toggle(class_name);
				// if ( container.classList.contains(class_name) ) {
				// 	container.classList.remove(class_name);
				// } else {
				// 	container.classList.add(class_name);
				// }
			}

			// 예전 HTML DOM 방식의 Javascript 코드
			// console.log('clicked');
			// if( container.className.indexOf(c_name) > -1 ) { // 'container grid'
			// 	container.className.replace(/grid/, '');
			// } else {
			// 	container.className += ' ' + c_name;
			// }
		};

	// 3. 찾은 버튼을 클릭하면 ... (클릭 이벤트 핸들링)
	toggle_grid_btn.onclick = toggleGrid;
	// toggle_grid_btn.addEventListener('click', toggleGrid);

	// 4. 비 포커스 요소를 사용자 정의 컴포넌트 접근성 적용을 위한 키보드 이벤트 처리
	toggle_grid_btn.onkeydown = toggleGrid;

}());