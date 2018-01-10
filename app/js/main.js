// Mobile menu
(function() {
	var burger = document.getElementById('burger');

	burger.addEventListener('click', function() {
		document.body.classList.toggle('open-menu');
	});
})();


// Валидация формы
(function() {
	
	var cardsNumber = document.querySelectorAll('.card-number input');
	var cardsNumberWrap = cardsNumber[1].parentNode;
	var formBtn = document.querySelectorAll('.payment-form__button');
	var paymentForm = document.getElementById('payment-form');
	var regexCard = /^([0-9]{4})+$/;
	var select = document.querySelectorAll('.card-validity__select');
	var cvc = document.querySelector('.card-safety__item');
	var regexCvc = /^([0-9]{3})+$/;
	var owner = document.querySelector('.card-owner__item');
	var regexOwner= /^([a-zA-Z]+)/;
	var arr = [];

	paymentForm.addEventListener('submit', function(e) {

		e.preventDefault();

		validateForm();

	});

	//Валидация всей формы

	function validateForm() {
		validateCard();
		validateSelect();
		validateCvc();
		validateOwner();

		if ( (validateCard() == true && validateSelect() == true && validateCvc() == true && validateOwner() == true) == true) {
			paymentForm.submit();
		} 
	}

	//Проверка поля ввода номера карты

	function validateCard() {
		var callResult = [];
		for(var i = 0; i < cardsNumber.length; i++) {
			
			resetError(cardsNumber[i]);

			if ( (cardsNumber[i].value == '') || (!regexCard.test(cardsNumber[i].value)) ) {
				cardsNumber[i].classList.add('js-error');
				callResult.push(i);
			}

		}

		if (callResult.length != 0) {
			return false;
		} else {
			return true;
		}
		
	}

	//Сброс ошибки

	function resetError(item) {

		if (item.classList.contains('js-error')) {

			item.classList.remove('js-error');

		}
	}

	//Проверка поля ввода даты

	function validateSelect() {
		var callResult = [];
		for(var i = 0; i < select.length; i++) {

			resetError(select[i]);

			if (select[i].value == 'default') {
				select[i].classList.add('js-error');
				callResult.push(i);
			}
		}

		if (callResult.length != 0) {
			return false;
		} else {
			return true;
		}

	}
	
	//Проверка поля ввода защитного кода

	function validateCvc() {

		resetError(cvc);

		if ( (cvc.value == '') || (!regexCvc.test(cvc.value)) ) {
			cvc.classList.add('js-error');
			return false;
		} else {
			return true;
		}
	}

	//Проверка поля ввода имени и фамилии

	function validateOwner() {

		resetError(owner);

		if ( owner.value.length < 4 || (!regexOwner.test(owner.value)) ) {
			owner.classList.add('js-error');
			return false;
		} else {
			return true;
		}

	}

})();