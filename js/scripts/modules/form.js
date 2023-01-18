class Form {
    servicesFieldset = document.querySelector('#services-form fieldset');
    inputName = [
        ...document.querySelectorAll('input[name="name"]'),
    ];
    inputSurname = [
        ...document.querySelectorAll('input[name="surname"]'),
    ];
    inputNif = [
        ...document.querySelectorAll('input[name="nif"]'),
    ];
    inputEmail = [
        ...document.querySelectorAll('input[name="email"]'),
    ];
    inputPlace = [
        ...document.querySelectorAll('input[name="place"]'),
    ];
    inputCp = [...document.querySelectorAll('input[name="cp"]')];
    mappingRadio = document.querySelector('#mapping');
    constructor() {
        if (this.inputName &&
            this.inputSurname &&
            this.inputNif &&
            this.inputEmail &&
            this.inputPlace &&
            this.inputCp) {
            this.addInputListener([
                this.inputName,
                this.inputSurname,
                this.inputNif,
                this.inputEmail,
                this.inputPlace,
                this.inputCp,
            ]);
        }
        this.formsSubmit();
        this.checkRadios();
    }
    addInputListener(inputs) {
        inputs.forEach((element) => {
            element.forEach((ele) => ele.addEventListener('input', this.fillFields));
        });
    }
    checkRadios() {
        const quantityField = document.querySelector('#quantity');
        const dateField = document.querySelector('#date');
        if (this.servicesFieldset && this.mappingRadio && quantityField && dateField) {
            this.servicesFieldset.addEventListener('click', () => {
                if (this.mappingRadio.checked) {
                    quantityField.children[1].removeAttribute('required');
                    quantityField.style.display = 'none';
                    dateField.style.display = 'grid';
                    dateField.children[1].setAttribute('required', 'required');
                }
                else {
                    quantityField.style.display = 'grid';
                    quantityField.children[1].setAttribute('required', 'required');
                    dateField.children[1].removeAttribute('required');
                    dateField.style.display = 'none';
                }
            });
        }
    }
    fillFields(event) {
        const input = event.currentTarget;
        const nameValue = input.getAttribute('name');
        const twinFields = document.querySelectorAll(`input[name="${nameValue}"]`);
        if (twinFields.length) {
            twinFields.forEach((element) => {
                element.value = input.value;
            });
        }
    }
    formsSubmit() {
        const forms = document.querySelectorAll('form');
        if (forms.length) {
            forms.forEach((form) => {
                form.addEventListener('submit', function (event) {
                    event.preventDefault();
                    this.innerHTML =
                        '<h4>Agradecemos o seu pedido, mais informações serão enviadas ao seu email! ;)</h4>';
                });
            });
        }
    }
}
export default Form;
//# sourceMappingURL=form.js.map