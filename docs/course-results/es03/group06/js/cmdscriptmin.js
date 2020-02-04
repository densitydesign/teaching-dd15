/*!
* CMDScript - Fullscreen and overlay class functions
* from Scolerov scoolerov@gmail.com
* Suppost keyboard shortcuts
* 8: 'backspace',
* 9: 'tab',
* 13: 'enter',
* 16: 'shift',
* 17: 'ctrl',
* 18: 'alt',
* 20: 'capslock',
* 27: 'esc',
* 32: 'space',
* 33: 'pageup',
* 34: 'pagedown',
* 35: 'end',
* 36: 'home',
* 37: 'left',
* 38: 'up',
* 39: 'right',
* 40: 'down',
* 45: 'ins',
* 46: 'del',
* 91: 'meta',
* 93: 'meta',
* 224: 'meta'
* 106: '*',
* 107: '+',
* 109: '-',
* 110: '.',
* 111 : '/',
* 186: ';',
* 187: '=',
* 188: ',',
* 189: '-',
* 190: '.',
* 191: '/',
* 192: '`',
* 219: '[',
* 220: '\\',
* 221: ']',
* 222: '\''
* '~': '`',
* '!': '1',
* '@': '2',
* '#': '3',
* '$': '4',
* '%': '5',
* '^': '6',
* '&': '7',
* '*': '8',
* '(': '9',
* ')': '0',
* '_': '-',
* '+': '=',
* ':': ';',
* '\"': '\'',
* '<': ',',
* '>': '.',
* '?': '/',
* '|': '\\'
* 'option': 'alt',
* 'command': 'meta',
* 'return': 'enter',
* 'escape': 'esc'
*/
            
$(document).ready(function() {

var FScreen = document.querySelector( 'div.overlay' );

 	// Change main overlay keyboard close shortcut	

	Mousetrap.bind('esc', function(e) {
 	classie.remove( FScreen, 'open' )}
 	),
 	
 	// Change main overlay keyboard open shortcut
 	
 	Mousetrap.bind('m', function(e) {
 	classie.add( FScreen, 'open' )}
 	) 	
});


(function() {var TBtn = document.getElementById( 'trigger-overlay' ),FScreen = document.querySelector( 'div.overlay' ),CBtn = FScreen.querySelector( 'button.overlay-close' );TNames = {'WebkitTransition': 'webkitTransitionEnd','MozTransition': 'transitionend','OTransition': 'oTransitionEnd','msTransition': 'MSTransitionEnd','transition': 'transitionend'},EName = TNames[ Modernizr.prefixed( 'transition' ) ],support = { transitions : Modernizr.csstransitions };function toggleFScreen() {if( classie.has( FScreen, 'open' )) {classie.remove( FScreen, 'open' );classie.add( FScreen, 'close' );var onEndTransitionFn = function( ev ) {if( support.transitions ) {if( ev.propertyName !== 'visibility' ) return;this.removeEventListener( EName, onEndTransitionFn );}classie.remove( FScreen, 'close' );};if( support.transitions ) {FScreen.addEventListener( EName, onEndTransitionFn );}else {onEndTransitionFn();}}else if( !classie.has( FScreen, 'close' ) ) {classie.add( FScreen, 'open');}}TBtn.addEventListener( 'click', toggleFScreen );CBtn.addEventListener( 'click', toggleFScreen );})();



