const form = document.getElementById("form") as HTMLInputElement;
const username = document.getElementById("username") as HTMLInputElement;
const telefone = document.getElementById("telefone") as HTMLInputElement;
const cpf = document.getElementById("cpf") as HTMLInputElement;
const email = document.getElementById("email") as HTMLInputElement;
const cep = document.getElementById("cep") as HTMLInputElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const telefoneValue = telefone.value.trim();
  const cpfValue = cpf.value.trim();
  const cepValue = cep.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "Preencha esse campo");
  } else {
    setSuccessFor(username);
  }

  if (telefoneValue === "") {
    setErrorFor(telefone, "Preencha esse campo");
  } else if (!isTelefone(telefoneValue)) {
    setErrorFor(telefone, "Telefone Inválido");
  } else {
    setSuccessFor(telefone);
  }

  if (cpfValue === "") {
    setErrorFor(cpf, "Preencha esse campo");
  } else if (!isCpf(cpf.value)) {
    setErrorFor(cpf, "CPF Inválido");
  } else {
    setSuccessFor(cpf);
  }

  if (emailValue === "") {
    setErrorFor(email, "Preencha esse campo");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email inválido");
  } else {
    setSuccessFor(email);
  }

  if (cepValue === "") {
    setErrorFor(cep, "Preencha esse campo");
  } else if (!isCep(cepValue)) {
    setErrorFor(cep, "CEP inválido");
  } else {
    setSuccessFor(cep);
  }

  function setErrorFor(input: HTMLInputElement, message: string) {
    const formControl = input.parentElement;
    if (!formControl) return;
    const small = formControl.querySelector("small");
    if (!small) return;
    small.innerText = message;

    formControl.className = "form-control error";
  }

  function setSuccessFor(input: HTMLInputElement) {
    const formControl = input.parentElement;
    if (!formControl) return;

    formControl.className = "form-control success";
  }

  function isTelefone(telefone: string): boolean {
    return /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/.test(
      telefone
    );
  }

  function isCpf(cpf: string): boolean {
    var Soma: number;
    var Resto: number;
    var cpfValue: any = cpf;
    var i: number = 0;
    Soma = 0;

    if (cpf == "00000000000") return false;

    for (i = 1; i <= 9; i++)
      Soma = Soma + parseInt(cpfValue.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if (Resto == 10 || Resto == 11) Resto = 0;
    if (Resto != parseInt(cpfValue.substring(9, 10))) return false;

    Soma = 0;
    for (i = 1; i <= 10; i++)
      Soma = Soma + parseInt(cpfValue.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if (Resto == 10 || Resto == 11) Resto = 0;
    if (Resto != parseInt(cpfValue.substring(10, 11))) return false;
    return true;
  }

  function isEmail(email: string): boolean {
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
      email
    );
  }

  function isCep(cep: string): boolean {
    return /^[0-9]{8}$/.test(cep.replace(/-/g, ""));
  }
}
