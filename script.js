const progressBar = {
	circle: document.querySelector('.progress-ring__circle'),
	radius: 62.4,
	circumference: 2 * Math.PI * 62.4,

	initialize() {
		this.circle.style.strokeDasharray = `${this.circumference} ${this.circumference}`;
		this.circle.style.strokeDashoffset = this.circumference;
	},

	setProgress(percent) {
		if (percent >= 0 && percent <= 100 && !isNaN(percent)) {
			const offset = this.circumference - (percent / 100) * this.circumference;
			this.circle.style.strokeDashoffset = offset;
		} else {
			console.log('Invalid percentage value');
		}
	},

	toggleAnimation(enable) {
		this.circle.style.transition = enable ? 'stroke-dashoffset 0.3s linear' : '';
	},

	toggleVisibility(visible) {
		const progressBarContainer = document.querySelector('.progress-bar');
		progressBarContainer.style.visibility = visible ? 'hidden' : 'visible';
	},
};

progressBar.initialize();

// Изменение значения прогресс бара через input
const input = document.querySelector('.percent');
input.addEventListener('change', () => progressBar.setProgress(input.value));

// Включение/Выключение анимации
const checkboxAnimation = document.querySelector('.checkbox-animate');
checkboxAnimation.addEventListener('change', () => progressBar.toggleAnimation(checkboxAnimation.checked));

// Видимость блока
const checkboxHidden = document.querySelector('.checkbox-hidden');
checkboxHidden.addEventListener('change', () => progressBar.toggleVisibility(checkboxHidden.checked));

//Стартовые значения
input.value= 50
progressBar.setProgress(50);
checkboxAnimation.checked = true
