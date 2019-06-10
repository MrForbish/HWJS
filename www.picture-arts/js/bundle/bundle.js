(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function() {

	let modal = require('../parts/modal.js');
	let moreStyles = require('../parts/moreStyles.js');
	let slider = require('../parts/slider.js');
	let ajax = require('../parts/ajax.js');
	let numMask = require('../parts/numMask.js');
	let sliderReviews = require('../parts/sliderReviews');
	let checkPicture = require('../parts/checkPicture');
	let accordeonQuestions = require('../parts/accordeonQuestions');

	modal();
	moreStyles();
	slider();
	ajax();
	numMask();
	sliderReviews();
	checkPicture();
	accordeonQuestions();

});
},{"../parts/accordeonQuestions":2,"../parts/ajax.js":3,"../parts/checkPicture":4,"../parts/modal.js":5,"../parts/moreStyles.js":6,"../parts/numMask.js":7,"../parts/slider.js":8,"../parts/sliderReviews":9}],2:[function(require,module,exports){
function accordeonQuestions() {
  var acc = document.getElementsByClassName("accordion-heading");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");

      this.nextElementSibling.classList.toggle("show");
    }
  }

};  
module.exports = accordeonQuestions;
},{}],3:[function(require,module,exports){
function ajax() {

let message = new Object();
		message.loading = '╨Ч╨░╨│╤А╤Г╨╖╨║╨░...';
		message.success = '╨Ь╤Л ╤Б ╨▓╨░╨╝╨╕ ╤Б╨▓╤П╨╢╨╡╨╝╤Б╤П!';
		message.faillure = '╨з╤В╨╛-╤В╨╛ ╨┐╨╛╤И╨╗╨╛ ╨╜╨╡ ╤В╨░╨║...';

let formConsult = document.getElementsByClassName('form')[1],
		formDesign = document.getElementsByClassName('form')[2],
		formMain = document.getElementsByClassName('form-main')[0],
		input = formConsult.getElementsByTagName('input'),
		inputDesign = formDesign.getElementsByTagName('input'),
		inputMain = formMain.getElementsByTagName('input'),
		popupContent = formDesign.getElementsByClassName('popup-content')[0],
		statusMessage = document.createElement('div'),
		statusMessageLoading = document.createElement('div'),
		statusMessageError = document.createElement('div'),
		btnBot = document.getElementById('btn-bot');

		statusMessage.classList.add('success');
		statusMessageLoading.classList.add('loading');
		statusMessageError.classList.add('failure');

		//╨б╨╗╤Г╤И╨░╤В╨╡╨╗╤М ╤Д╨╛╤А╨╝╤Л ╨║╨╛╨╜╤Б╤Г╨╗╤М╤В╨░╤Ж╨╕╨╕
		formConsult.addEventListener('submit', function(event) {
			event.preventDefault();
			formConsult.appendChild(statusMessage);
			formDesign.appendChild(statusMessageLoading);
			formDesign.appendChild(statusMessageError);
			let formData = new FormData(formConsult);

			function postData(data) {

				return new Promise(function(resolve, reject) {
					let request = new XMLHttpRequest();

						request.open('POST', 'server.php')

						request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

						request.onreadystatechange = function() {
							if (request.readyState < 4) {
								resolve()
							} else if (request.readyState === 4) {
								if (request.status == 200 && request.status < 300) {
									resolve()
									//╨┤╨╛╨▒╨░╨▓╨╗╨╡╨╜╨╕╨╡ ╨║╨╛╨╜╤В╨╡╨╜╤В╨░				
								}
								else {
									reject()
								}
							}
						}
						request.send(data);
				})
			}

			function clearInput() {
				for (let i = 0; i < input.length; i++) {
					input[i].value = '';
				}
			}

			postData(formData) 
				.then(() => {
					statusMessage.style.display = 'none';
					statusMessageError.style.display = 'none';
					statusMessageLoading.style.display = 'block';
					statusMessageLoading.innerHTML = message.loading}
					)
				.then(() => {
					statusMessage.style.display = 'block';
					statusMessageError.style.display = 'none';
					statusMessageLoading.style.display = 'none';
					statusMessage.innerHTML = message.success;
				})
				.catch(() => {
					statusMessage.style.display = 'none';
					statusMessageLoading.style.display = 'none';
					statusMessageError.style.display = 'block';
					statusMessageError.innerHTML = message.faillure})
				.then(clearInput)

		});
		//╨б╨╗╤Г╤И╨░╤В╨╡╨╗╤М ╤Д╨╛╤А╨╝╤Л ╨┤╨╕╨╖╨░╨╣╨╜╨░
		formDesign.addEventListener('submit', function(event) {
			event.preventDefault();
			formDesign.appendChild(statusMessage);
			formDesign.appendChild(statusMessageLoading);
			formDesign.appendChild(statusMessageError);
			let formData = new FormData(formDesign);

			function postData(data) {

				return new Promise(function(resolve, reject) {
					let request = new XMLHttpRequest();

						request.open('POST', 'server.php')

						request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

						request.onreadystatechange = function() {
							if (request.readyState < 4) {
								resolve()
							} else if (request.readyState === 4) {
								if (request.status == 200 && request.status < 300) {
									resolve()
									//╨┤╨╛╨▒╨░╨▓╨╗╨╡╨╜╨╕╨╡ ╨║╨╛╨╜╤В╨╡╨╜╤В╨░				
								}
								else {
									reject()
								}
							}
						}
						request.send(data);
				})
			}

			function clearInput() {
				for (let i = 0; i < inputDesign.length; i++) {
					inputDesign[i].value = '';
				}
			}

			postData(formData) 
				.then(() => {
					statusMessage.style.display = 'none';
					statusMessageError.style.display = 'none';
					statusMessageLoading.style.display = 'block';
					statusMessageLoading.innerHTML = message.loading
				})
				.then(() => {
					statusMessage.style.display = 'block';
					statusMessageError.style.display = 'none';
					statusMessageLoading.style.display = 'none';
					statusMessage.innerHTML = message.success;
				})
				.catch(() => {
					statusMessage.style.display = 'none';
					statusMessageLoading.style.display = 'none';
					statusMessageError.style.display = 'block';
					statusMessageError.innerHTML = message.faillure})
				.then(clearInput)

		});
		//╨б╨╗╤Г╤И╨░╤В╨╡╨╗╤М ╨│╨╗╨░╨▓╨╜╨╛╨╣ ╤Д╨╛╤А╨╝╤Л
		formMain.addEventListener('submit', function(event) {
			event.preventDefault();
			formMain.appendChild(statusMessage);
			let formData = new FormData(formMain);

			function postData(data) {

				return new Promise(function(resolve, reject) {
					let request = new XMLHttpRequest();

						request.open('POST', 'server.php')

						request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

						request.onreadystatechange = function() {
							if (request.readyState < 4) {
								resolve()
							} else if (request.readyState === 4) {
								if (request.status == 200 && request.status < 300) {
									resolve()
									//╨┤╨╛╨▒╨░╨▓╨╗╨╡╨╜╨╕╨╡ ╨║╨╛╨╜╤В╨╡╨╜╤В╨░				
								}
								else {
									reject()
								}
							}
						}
						request.send(data);
				})
			}

			function clearInput() {
				for (let i = 0; i < inputMain.length; i++) {
					inputMain[i].value = '';
				}
			}

			postData(formData) 
				.then(() => statusMessage.innerHTML = message.loading)
				.then(() => {
					statusMessage.style.backgroundColor = '#eed4d2';
					btnBot.style.display = 'none' 
					statusMessage.innerHTML = message.success;
				})
				.catch(() => statusMessage.innerHTML = message.faillure)
				.then(clearInput)

		});
}

module.exports = ajax;
},{}],4:[function(require,module,exports){
function checkPicture() {

    $(function() {
      $('.portfolio-menu li').click(function() {
        let get_id = this.id;
        let get_current = $('.portfolio-block .' + get_id);
    
        $('.post').not(get_current).hide(500);
        get_current.show("slow");
      });

      $('#showall').click(function() {
        $('.post').show(500);
      });  
      
      $('#chef').click(function() {
        $('.chef').show(1000);
      });
      $('#girl').click(function() {
        $('.girl').show(1000);
      });
      $('#guy').click(function() {
        $('.guy').show(1000);
      });
      $('#grandmother').click(function() {
        $('.grandmother').show(1000);
      });
      $('#granddad').click(function() {
        $('.granddad').show(1000);
      });
      $('#lovers').click(function() {
        $('.lovers').show(1000);
      });

    });
  };  
module.exports = checkPicture;
},{}],5:[function(require,module,exports){
function modal() {
let btns = document.getElementsByTagName('button'), //╨┐╨╛╨╗╤Г╤З╨░╤О ╨▓╤Б╨╡ ╨║╨╜╨╛╨┐╨║╨╕ ╤Б╤В╤А╨░╨╜╨╕╤Ж╤Л ╨┐╨╛ ╤В╨╡╨│╤Г
		popupDesign = document.querySelector('.popup-design'),//╨╝╨╛╨┤╨░╨╗╨║╨░ ╤Б ╨╖╨░╨║╨░╨╖╨╛╨╝ ╨┤╨╕╨╖╨░╨╣╨╜╨░
		popupConsult = document.querySelector('.popup-consultation'),//╨╝╨╛╨┤╨░╨╗╨║╨░ ╤Б ╨║╨╛╨╜╤Б╤Г╨╗╤М╤В╨░╤Ж╨╕╨╡╨╣
		popupGift = document.querySelector('.popup-gift'),//╨╝╨╛╨┤╨░╨╗╨║╨░ ╤Б ╨┐╨╛╨┤╨░╤А╨╛╤З╨║╨╛╨╝ ^_^
		giftBtnImg = document.getElementsByTagName('img')[0],//╨║╨░╤А╤В╨╕╨╜╨║╨░ ╨┐╨╛╨┤╨░╤А╨╛╤З╨║╨░ ^_^
		popupDialog = document.getElementsByClassName('popup-dialog');

		for (let i = 0; i < popupDialog.length; i++) {
			popupDialog[i].addEventListener('click', function(e) {
				if(e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA' && 
					e.target.tagName !== 'BUTTON' || e.target.className == 'popup-close'){
					popupDesign.style.display = 'none';
				popupConsult.style.display = 'none';
				popupGift.style.display = 'none';
				document.body.style.overflow = '';
			}
		});
		}		

//╨Я╨╡╤А╨╡╨▒╨╕╤А╨░╤О ╨▓╤Б╨╡ ╨║╨╜╨╛╨┐╨║╨╕ ╨╕ ╨▓╨╡╤И╨░╤О ╨╜╨░ ╨╜╨╕╤Е ╨╛╨▒╤А╨░╨▒╨╛╤В╤З╨╕╨║ ╤Б╨╛╨▒╤Л╤В╨╕╤П ╤Б ╤Д╤Г╨╜╨║╤Ж╨╕╨╡╨╣
for(let i = 0; i < btns.length; i++) {
	btns[i].addEventListener('click', openModal);
}
//╨Я╤А╨╛╨▓╨╡╤А╤П╤О ╨╜╨░╨╗╨╕╤З╨╕╨╡ ╨╛╨┐╤А╨╡╨┤╨╡╨╗╨╜╨╜╨╛╨│╨╛ ╨║╨╗╨░╤Б╤Б╨░ ╤Г ╨║╨╜╨╛╨┐╨║╨╕
//╨╕ ╨╡╤Б╨╗╨╕ ╨╡╤Б╤В╤М ╤Б╨╛╨▓╨┐╨░╨┤╨╡╨╜╨╕╨╡, ╨╛╤В╨║╤А╤Л╨▓╨░╤О ╨╜╤Г╨╢╨╜╨╛╨╡ ╨╛╨║╨╜╨╛ ╨╕╨╗╨╕ ╨┐╤А╤П╤З╤Г ╨╛╤В╨║╤А╤Л╤В╨╛╨╡
//╤В╨░╨║ ╨╢╨╡ ╨┤╨╛╨▒╨░╨▓╨╕╨╗ ╨╝╨╡╤В╨║╤Г, ╨╛╤В╤Б╨╗╨╡╨╢╨╕╨▓╨░╤О╤Й╤Г╤О ╨▓╤Л╨┐╨╛╨╗╨╜╨╡╨╜╨╕╨╡ ╤Д╤Г╨╜╨║╤Ж╨╕╨╕
//╨┤╨╗╤П ╨▓╤Л╨┐╨╗╨╛╨╜╨╡╨╜╨╕╤П ╨╛╨┤╨╜╨╛╨│╨╛ ╨╕╨╖ ╤Г╤Б╨╗╨╛╨▓╨╕╨╣ ╨╝╨╛╨┤╨░╨╗╤М╨╜╨╛╨│╨╛ ╨╛╨║╨╜╨░ ╨▓ ╨║╨╛╨╜╤Ж╨╡ ╤Б╤В╤А╨░╨╜╨╕╤Ж╤Л
let mark = false;
function openModal(event){
	if(this.classList.contains('button-design')){
		popupDesign.style.display = 'block';
		giftBtnImg.style.display = 'none';
		document.body.style.overflow = 'hidden';
		mark = true;
	}else if(this.classList.contains('button-consultation')){
		popupConsult.style.display = 'block';
		giftBtnImg.style.display = 'none';
		document.body.style.overflow = 'hidden';
		mark = true;
	}
};
//╨Ю╨▒╤А╨░╨▒╨╛╤В╤З╨╕╨║ ╤Б╨╛╨▒╤Л╤В╨╕╤П ╨┐╨╛ ╨║╨╗╨╕╨║╤Г ╨╜╨░ ╨┐╨╛╨┤╨░╤А╨╛╨║
let markGift = false;
giftBtnImg.addEventListener('click', function() {
	markGift = true;
	popupGift.style.display = 'block';
	giftBtnImg.style.display = 'none';
	document.body.style.overflow = 'hidden';
	clearTimeout(timeModal);
});

//╨Ь╨╛╨┤╨░╨╗╨║╨░ ╤З╨╡╤А╨╡╨╖ 60 ╤Б╨╡╨║╤Г╨╜╨┤

let timeModal = setTimeout(showModal, 60000);
function showModal() {
	if (markGift == false && popupDesign.style.display == 'block' || popupConsult.style.display == 'block' || popupGift.style.display == 'block') {
		clearTimeout(timeModal);
	} else {
		popupConsult.style.display = 'block';
		document.body.style.overflow = 'hidden';
	}
};	

//╨Ь╨╛╨┤╨░╨╗╨║╨░ ╨┐╨╛╤Б╨╗╨╡ ╨┐╤А╨╛╨║╤А╤Г╤В╨║╨╕ ╨▓ ╨║╨╛╨╜╨╡╤Ж ╤Б╤В╤А╨░╨╜╨╕╤Ж╤Л
window.addEventListener('scroll', showGift);
function showGift() {
	if (mark == false && window.pageYOffset == (document.body.scrollHeight - document.documentElement.clientHeight)) {
		popupGift.style.display = 'block';
		giftBtnImg.style.display = 'none';
		document.body.style.overflow = 'hidden';
		window.removeEventListener('scroll', showGift);
		clearTimeout(timeModal);

	} else {
		popupGift.style.display = 'none';
			document.body.style.overflow = '';
	}
}
}
module.exports = modal;
},{}],6:[function(require,module,exports){
function moreStyles() {
	let moreStyles = document.getElementsByClassName('button-styles')[0],
	styles = document.getElementsByClassName('@media (max-width: 1199px) and (min-width: 992px) hidden-md')[0];


	moreStyles.addEventListener('click', () => {
		styles.style.display = 'block';
	});
}

module.exports = moreStyles;
},{}],7:[function(require,module,exports){
function numMask() {
function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    else if (elem.createTextRange) {
        var range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select()
    }
}

function mask(event) {
    var matrix = "+7 (___) ___ ____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) val = def;
    this.value = matrix.replace(/./g, function(a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
    });
    if (event.type == "blur") {
        if (this.value.length == 2) this.value = ""
    } else setCursorPosition(this.value.length, this)
};
    
    var input = document.querySelector("#tel");
    var input1 = document.querySelector("#tel1");
    var input2 = document.querySelector("#tel2");
    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);

    input1.addEventListener("input", mask, false);
    input1.addEventListener("focus", mask, false);
    input1.addEventListener("blur", mask, false);

    input2.addEventListener("input", mask, false);
    input2.addEventListener("focus", mask, false);
    input2.addEventListener("blur", mask, false);

}
module.exports = numMask;
},{}],8:[function(require,module,exports){
function slider() {

let slides = document.querySelectorAll('.main-slider .main-slider-item');
let currentSlide = 0;
let slideTimeout = setTimeout(nextSlide, 500);
let slideInterval = setInterval(nextSlide,8000);
 
function nextSlide() {
    slides[currentSlide].className = 'main-slider-item';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'main-slider slideDown';
	};
}	


module.exports = slider;
},{}],9:[function(require,module,exports){
function sliderReviews() {
  var arrowLeft = document.querySelector('.main-prev-btn');
  var arrowRight = document.querySelector('.main-next-btn');
  var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlide (n) {
    showSlides(slideIndex += n);
  }

  arrowLeft.addEventListener('click', function() {
    plusSlide(-1);
  });
    
  arrowRight.addEventListener('click', function() {
    plusSlide(1);
  });

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("feedback-slider-item");

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
     slides[slideIndex - 1].style.display = "block";
  }   
};

module.exports = sliderReviews;
},{}]},{},[1]);
