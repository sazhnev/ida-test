var form = document.getElementById('payment-form');

form.addEventListener('submit', function(e) {
	e.preventDefault();
	myFunc.validate();
});

var myFunc = {
	errorArr: [],

	validate: function() {

		this.errorArr = [];
		this.validateCard();
		this.validateSelect();
		this.validateSafety();
		this.validateOwner();

		if (this.errorArr.length == 0) {
			form.submit();
		}

	},

	validateCard: function() {

		var cardsNumber = document.querySelectorAll('.card-number input');
		var regexCard = /^([0-9]{4})+$/;

		for (var i = 0; i < cardsNumber.length; i++) {

			if (!regexCard.test(cardsNumber[i].value)) {

				this.errorSignal(cardsNumber[i], false);
				this.errorArr.push(cardsNumber[i]);

			} else {

				this.errorSignal(cardsNumber[i], true);

			}
			
		}

	},

	validateSelect: function() {

		var selects = document.querySelectorAll('.card-validity__select');

		for (var i = 0; i < selects.length; i++) {

			if (selects[i].value == '') {

				this.errorSignal(selects[i], false);
				this.errorArr.push(selects[i]);

			} else {

				this.errorSignal(selects[i], true);

			}

		}

	},

	validateSafety: function() {

		var safety = document.querySelector('.card-safety__item');
		var regexSafety = /^([0-9]{3})+$/;

		if (!regexSafety.test(safety.value)) {

			this.errorSignal(safety, false);
			this.errorArr.push(safety);

		} else {

			this.errorSignal(safety, true);

		}
	},

	validateOwner: function() {

		var owner = document.querySelector('.card-owner__item');
		var regexOwner = /[^a-z ]/i;

		if (owner.value == '' || regexOwner.test(owner.value)) {

			this.errorSignal(owner, false);
			this.errorArr.push(owner);

		} else {

			this.errorSignal(owner, true);

		}

	},

	errorSignal: function(item, bool) {

		bool ? item.classList.remove('js-error') : item.classList.add('js-error');
		
	}

};

;(function() {
	var burger = document.getElementById('burger');

	burger.addEventListener('click', function() {
		document.body.classList.toggle('open-menu');
	});
})();