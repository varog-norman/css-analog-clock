'use strict';

window.addEventListener('DOMContentLoaded', render);

function render() {
	var rend = (function() {
		var deg = 0;
		return function() {
			var clock = document.querySelector('.rim');
			var elem = document.createElement('div');
			var visiblePart = document.createElement('div');
			var transpatentPart = document.createElement('div');
			visiblePart.className = 'visible-part';
			transpatentPart.className = 'transparent-part';
			if((deg != 0) && (deg != 90) && (deg != 180) && (deg != 270)) {
				visiblePart.style.height = '20px';
				transpatentPart.style.height = '180px'
			}
			elem.appendChild(visiblePart);
			elem.appendChild(transpatentPart);
			elem.className = 'time-point';
			elem.style.MozTransform = `rotate(${deg}deg)`;
			elem.style.WebkitTransform = `rotate(${deg}deg)`;
			clock.appendChild(elem);
			deg += 30;
		}
	})();
	for(var i = 0; i < 12; i++) rend();
	assignTime();
}

function assignTime() {
	var date = new Date();
	var timeValue = [date.getHours(), date.getMinutes(), date.getSeconds()];
	var time = [document.querySelector('.hour'), document.querySelector('.minute'), document.querySelector('.second')];
	time.forEach( (elem, i) => {
		if(i == 0) {
			elem.style.MozTransform = `rotate(${timeValue[i]*30}deg)`;
			elem.style.WebkitTransform = `rotate(${timeValue[i]*30}deg)`;
			if(parseInt(timeValue[1]) > parseInt('29')) {
				elem.style.MozTransform = `rotate(${timeValue[i]*30+15}deg)`;
				elem.style.WebkitTransform = `rotate(${timeValue[i]*30+15}deg)`;
			}
		} else {
			elem.style.MozTransform = `rotate(${timeValue[i]*6}deg)`;
			elem.style.WebkitTransform = `rotate(${timeValue[i]*6}deg)`;
		}
	});
	setTimeout(assignTime, 999);
}