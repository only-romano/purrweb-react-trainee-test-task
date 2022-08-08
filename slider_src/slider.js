'use strict';

(() => {
	const State = {};
	const appName = 'purrwebSliderImages';
	const appId = 'purrweb-slider';

	State.slider = document.getElementById(appId);
	State.defaultImages = [0,1,2,3,4,5,6,7,8,9].map(el => `slider_src/img/0${el}.webp`);
	State.activeImages = localStorage.getItem(appName) || [...defaultImages];
	State.selectedImageIndex = 0;

	// event handlers functions
	function restoreDefault = withUpdate(() => {
		State.activeImages = [...defaultImages];
	});

	function addImage = withUpdate((link) => {
		State.activeImages.push(link);
	});

	function removeImage = withUpdate((index) => {
		State.activeImages.splice(index, 1);
	});

	function updateSliderView = () => {
		if (State.slider) {
			State.slider.innerHtml = "";
			const wrapper = createElement('div', ['slider-wrapper'], [leftButton, images, rightButton, switchers]);
			for (let i = 0; i < State.activeImages.length; i++) {

			}
		}
	};

	function withUpdate = (f) => {
		return () => {
			f();
			localStorage.setItem(appName, State.activeImages);
			updateSliderView();
		}
	}

	function createElement = (params) => {
		const element = document.createElement(params.tag);

		if (params.classes && params.classes.length) {
			params.classes.forEach(el => element.classList.add(el));	
		}

		if (params.children && params.children.length) {
			children.forEach(el => element.appendChild(el));	
		}

		if (params.onClick) {
			element.addEventListener('click', params.onClick);
		}

		return element;
	}
})();
