//checking for the mobile device based on the touch event
// isTouch return true if mobile device

var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));

	if (isTouch) {
		console.log('mobile devices')
	}
