// [의존 모듈]
// window.Type
// window.Events

var DOM = (function(global, doc, Type, Events){
	'use strict';

	/**
	 * dom 생성자 함수 정의
	 * ----------------------------------------------------------------
	 */
	var dom = function( selector ) {

		// new를 강제화하는 패턴
		if ( Type.isUndefined(this) || this.constructor !== dom ) {
			return new dom( selector );
		};

		// selector 데이터 유형 검증
		if ( !Type.isString( selector ) && selector.nodeType !== 1 ) {
			console.error( 'CSS 선택자 또는 DOM 요소노드를 전달해야 합니다.' );
		}

		// selector가 요소노드일 경우, 생성된 객체 인스턴스의 elements 속성에 요소노드 추가
		if ( selector.nodeType === 1 ) {
			(this.elements || (this.elements = [])).push( selector );
		} else {
			// 생성된 객체 인스턴스의 elements 속성에 selector 노드리스트(요소) 참조
			this.elements = doc.querySelectorAll( selector );
		}

	};



	/**
	 * dom 생성자 함수 메소드 정의 (정적 메소드, 유틸리티 메소드)
	 * ----------------------------------------------------------------
	 */
	// 유틸리티 메소드 확장 메소드 (정적 메소드 확장)
	dom.include = function( prop, value ) {
		if ( Type.isObject(prop) ) {
			this.override( this, prop );
			return;
		}
		if ( !Type.isString(prop) ) {
			return console.error('DOM.include() 유틸리티 메소드의 첫번째 인자 값은 문자열이어야 합니다.');
		}
		this[prop] = value;
	};
	// 인스턴스 메소드 확장 메소드 (프로트타입 확장)
	dom.extend = function( prop, value ) {
		if ( Type.isObject(prop) ) {
			this.override( this.fn, prop );
			return;
		}
		if ( !Type.isString(prop) ) {
			return console.error('DOM.extend() 유틸리티 메소드의 첫번째 인자 값은 문자열이어야 합니다.');
		}
		this.fn[prop] = value;
	};
	// 객체 복사 메소드
	dom.override = function( objA, objB ) {
		if ( ( !Type.isFunction(objA) && !Type.isObject(objA) ) || !Type.isObject(objB) ) {
			return console.error('DOM.override() 메소드 전달인자는 첫번째는 함수 또는 객체, 두번째는 객체여야만 합니다.');
		}
		for ( var prop in objB ) {
			if ( objB.hasOwnProperty( prop ) ) {
				objA[prop] = objB[prop];
			}
		}
		return objA;
	};
	// ----------------------------------------------------------------
	// DOM 생성자 함수 유틸리티 메소드 확장
	dom.include({
		// each() 유틸리티 메소드 확장
		'each' : (function(){
			var _each = [].forEach;
			if ( _each ) {
				// 네이티브 .forEach() 메소드 활용
				return function( list, callback ) {
					// callback( item, index, list )
					_each.call( list, callback );
				};
			} else {
				return function( list, callback ) {
					// for문 활용
					// callback( item, index, list )
					for ( var item, index=list.length; index--; ) {
						item = list[index];
						callback.call( null, item, index, list );
					}
				};
			}
		}()),

		'elementSets': function (element, attributes) {
			for ( var key in attributes ) {
				var value = attributes[key];
				element.setAttribute(key, value);
			}
		}
		// ※ 메소드를 추가로 확장할 경우 아래에 작성합니다.
	});




	/**
	 * dom.prototype 객체 메소드 정의 (동적 메소드, 인스턴스 메소드)
	 * dom.fn 별칭(Alias) 설정
	 * ----------------------------------------------------------------
	 */
	dom.fn = dom.prototype;

	// ----------------------------------------------------------------
	// dom.prototype 객체 메소드 확장
	dom.extend({

		'version': '0.0.1',

		'each': function(callback) {
			dom.each( this.elements, callback );
		},

		'attr': function(prop, value) {
			if ( Type.isObject(prop) ) {
				this.each( function(el, index) {
					for ( var key in prop ) {
						el.setAttribute( key, prop[key] );
					}
				} );
			} else {
				if ( !Type.isString(prop) ) {
					return console.error('.attr() 메소드의 첫번째 인자는 객체 또는 문자여야 합니다.');
				}
				if ( Type.isUndefined(value) ) {
					// GET
					return this.elements[0].getAttribute( prop );
				} else {
					// SET
					this.each( function(el, index) {
						el.setAttribute( prop, value );
					} );
				}
			}
		},

		'on': function( type, handler ) {
			this.each( function(el, index) {
				Events.on(el, type, handler);
			} );
		},

		'off': function( type, handler ) {
			this.each( function(el, index) {
				Events.off(el, type, handler);
			} );
		}

	});


	// ----------------------------------------------------------------
	// dom 생성자 반환
	return dom;

})(window, window.document, window.Type, window.Events);