import data from '../../data/data'

class Form {
	private servicesFieldset = document.querySelector<HTMLElement>(
		'#services-form fieldset'
	)
	private inputName = [
		...document.querySelectorAll<HTMLInputElement>('input[name="name"]'),
	]
	private inputSurname = [
		...document.querySelectorAll<HTMLInputElement>('input[name="surname"]'),
	]
	private inputNif = [
		...document.querySelectorAll<HTMLInputElement>('input[name="nif"]'),
	]
	private inputEmail = [
		...document.querySelectorAll<HTMLInputElement>('input[name="email"]'),
	]
	private inputPlace = [
		...document.querySelectorAll<HTMLInputElement>('input[name="place"]'),
	]
	private inputCp = [...document.querySelectorAll<HTMLInputElement>('input[name="cp"]')]
	private mappingRadio = document.querySelector<HTMLInputElement>('#mapping')

	constructor() {
		if (
			this.inputName &&
			this.inputSurname &&
			this.inputNif &&
			this.inputEmail &&
			this.inputPlace &&
			this.inputCp
		) {
			this.addInputListener([
				this.inputName,
				this.inputSurname,
				this.inputNif,
				this.inputEmail,
				this.inputPlace,
				this.inputCp,
			])
		}

		this.formsSubmit()
		this.checkRadios()
	}

	addInputListener(inputs: HTMLInputElement[][]) {
		inputs.forEach((element) => {
			element.forEach((ele) => ele.addEventListener('input', this.fillFields))
		})
	}

	checkRadios() {
		const quantityField = document.querySelector<HTMLElement>('#quantity')
		const dateField = document.querySelector<HTMLElement>('#date')
		if (this.servicesFieldset && this.mappingRadio && quantityField && dateField) {
			this.servicesFieldset.addEventListener('click', () => {
				if (this.mappingRadio!.checked) {
					quantityField.children[1].removeAttribute('required')
					quantityField.style.display = 'none'

					dateField.style.display = 'grid'
					dateField.children[1].setAttribute('required', 'required')
				} else {
					quantityField.style.display = 'grid'
					quantityField.children[1].setAttribute('required', 'required')

					dateField.children[1].removeAttribute('required')
					dateField.style.display = 'none'
				}
			})
		}
	}

	fillFields(event: Event) {
		const input = event.currentTarget as HTMLInputElement
		const nameValue = input.getAttribute('name')
		const twinFields = document.querySelectorAll<HTMLInputElement>(
			`input[name="${nameValue}"]`
		)
		if (twinFields.length) {
			twinFields.forEach((element) => {
				element.value = input.value
			})
		}
	}

	formsSubmit() {
		const forms = document.querySelectorAll<HTMLFormElement>('form')
		if (forms.length) {
			forms.forEach((form) => {
				form.addEventListener('submit', function (event) {
					event.preventDefault()
					this.innerHTML =
						'<h4>Agradecemos o seu pedido, mais informações serão enviadas ao seu email! ;)</h4>'
				})
			})
		}
	}
}

export default Form
