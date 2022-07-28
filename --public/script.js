var form = document.getElementById("form");
var username = document.getElementById("username");
var telefone = document.getElementById("telefone");
var cpf = document.getElementById("cpf");
var email = document.getElementById("email");
var cep = document.getElementById("cep");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    checkInputs();
});
function checkInputs() {
    var usernameValue = username.value.trim();
    var emailValue = email.value.trim();
    var telefoneValue = telefone.value.trim();
    var cpfValue = cpf.value.trim();
    var cepValue = cep.value.trim();
    if (usernameValue === "") {
        setErrorFor(username, "Preencha esse campo");
    }
    else {
        setSuccessFor(username);
    }
    if (telefoneValue === "") {
        setErrorFor(telefone, "Preencha esse campo");
    }
    else if (!isTelefone(telefoneValue)) {
        setErrorFor(telefone, "Telefone Inválido");
    }
    else {
        setSuccessFor(telefone);
    }
    if (cpfValue === "") {
        setErrorFor(cpf, "Preencha esse campo");
    }
    else if (!isCpf(cpf.value)) {
        setErrorFor(cpf, "CPF Inválido");
    }
    else {
        setSuccessFor(cpf);
    }
    if (emailValue === "") {
        setErrorFor(email, "Preencha esse campo");
    }
    else if (!isEmail(emailValue)) {
        setErrorFor(email, "Email inválido");
    }
    else {
        setSuccessFor(email);
    }
    if (cepValue === "") {
        setErrorFor(cep, "Preencha esse campo");
    }
    else if (!isCep(cepValue)) {
        setErrorFor(cep, "CEP inválido");
    }
    else {
        setSuccessFor(cep);
    }
    function setErrorFor(input, message) {
        var formControl = input.parentElement;
        if (!formControl)
            return;
        var small = formControl.querySelector("small");
        if (!small)
            return;
        small.innerText = message;
        formControl.className = "form-control error";
    }
    function setSuccessFor(input) {
        var formControl = input.parentElement;
        if (!formControl)
            return;
        formControl.className = "form-control success";
    }
    function isTelefone(telefone) {
        return /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/.test(telefone);
    }
    function isCpf(cpf) {
        var Soma;
        var Resto;
        var cpfValue = cpf;
        var i = 0;
        Soma = 0;
        if (cpf == "00000000000")
            return false;
        for (i = 1; i <= 9; i++)
            Soma = Soma + parseInt(cpfValue.substring(i - 1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;
        if (Resto == 10 || Resto == 11)
            Resto = 0;
        if (Resto != parseInt(cpfValue.substring(9, 10)))
            return false;
        Soma = 0;
        for (i = 1; i <= 10; i++)
            Soma = Soma + parseInt(cpfValue.substring(i - 1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;
        if (Resto == 10 || Resto == 11)
            Resto = 0;
        if (Resto != parseInt(cpfValue.substring(10, 11)))
            return false;
        return true;
    }
    function isEmail(email) {
        return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email);
    }
    function isCep(cep) {
        return /^[0-9]{8}$/.test(cep.replace(/-/g, ""));
    }
}
