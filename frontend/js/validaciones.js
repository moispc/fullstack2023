// JavaScript

const inputs = document.querySelectorAll("input, textarea"); 

const validacion = (input) => {
  const tipoDeInput = input.dataset.tipo;

  formulas[tipoDeInput] && formulas[tipoDeInput](input);

  if (input.validity.valid) {
    input.parentElement.classList.remove("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = "";
  } else {
    input.parentElement.classList.add("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML =
      mostrarMensajeError(tipoDeInput, input);
  }
};

const errorType = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "tooLong",
  "tooShort",
  "customError",
];

const mensajesError = {
  usuario: {
    valueMissing: "El campo usuario no puede estar vacio",
    patternMismatch: "Tiene que tener al menos 5 caracteres y máximo 10.",
  },
  name: {
    valueMissing: "El nombre no puede estar vacio",
  },
  email: {
    valueMissing: "Este campo no puede estar vacio.",
    typeMismatch: "No es un formato de mail válido.",
  },
  password: {
    valueMissing: "La contraseña es requerida.",
    patternMismatch:
      "Tiene que tener al menos 6 caracteres, máximo 12, debe tener al menos una letra minúscula, una mayúscula, un número y no puede contener caracteres especiales.",
  },
  phone: {
    valueMissing: "Este campo no puede estar vacio.",
    patternMismatch: "Solo puedes ingresar 10 números sin espacios",
  },
  check: {
    valueMissing: "Necesita volver a ingresar su contraseña.",
    customError: "Las contraseñas no coinciden.",
  },
  subject: {
    valueMissing: "El campo Asunto no puede estar vacío.",
  },
  message: {
    valueMissing: "El campo Mensaje no puede estar vacío.",
  },
};

const mostrarMensajeError = (tipoDeInput, input) => {
  let message = tipoDeInput;

  errorType.forEach((e) => {
    input.validity[e] && (message = mensajesError[tipoDeInput][e]);
  });

  return message;
};

const formulas = {
  check: (input) => {
    asignarValor(input);
  },
};

const asignarValor = (input) => {
  const { value } = input;
  let mensaje = "";

  checkPassword(value) && (mensaje = "Las contraseñas no coinciden.");

  input.setCustomValidity(mensaje);
};

const checkPassword = (check) => {
  const { value } = document.querySelector("#password");
  return value !== check;
};

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    validacion(input.target);
  });
});
