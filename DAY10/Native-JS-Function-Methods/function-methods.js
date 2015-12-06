// new를 사용한 Function 생성자
// var fn = new Function();


// 실체화된 함수 객체의 원형(객체)
// Function.prototype


// 익명함수를 전달할 경우, fn.name이 존재하지 않음
// var fn = function () {};

// 기명함수를 전달할 경우, fn.name이 존재
var fn = function y9() {};

// fn(); (O) // 실행 됨
// y9(); (X) // 실행 안됨

function init() {
	'use strict';
	var demo = document.querySelector('.demo'),
		desc = document.querySelector('.desc');

	var links = demo.querySelectorAll('a');

	for ( var i = links.length; i--; ) {
		links[i].addEventListener('click', clickFn.bind(document) );
	}
}

// function(event) {
	// console.log(this);
	// window.clickFn();
	// clickFn.call(this, event, event.currentTarget, event.target);
	// clickFn.apply(this, [event, event.currentTarget, event.target]);
	// clickFn.bind(this)();
// event.preventDefault();
// }

function clickFn(event) {
	event.preventDefault();
	console.log('this: ', this);
	console.log('event.target: ', event.target);
}

window.addEventListener('DOMContentLoaded', init);