const inputNumber = document.querySelector("#input-number");
const searchForm = document.querySelector("#search_form");
const messageContainer = document.querySelector("#message__container");

class Pizza {
  constructor(id, nombre, ingredientes, precio) {
    this.id = id;
    this.nombre = nombre;
    this.ingredientes = ingredientes;
    this.precio = precio;
  }
}

const pizzas = [
  {
    id: 1,
    nombre: "Muzzarella",
    ingredientes: ["Queso muzzarella", "Tomate"],
    precio: 1200,
  },
  {
    id: 2,
    nombre: "Napolitana",
    ingredientes: [
      "Queso muzzarella",
      "Tomate",
      "Rodaja de tomate natural",
      "Ajo",
      "Perejil picado",
    ],
    precio: 1440,
  },
  {
    id: 3,
    nombre: "Jamon",
    ingredientes: ["Queso muzzarella", "Tomate", "Jamon"],
    precio: 1440,
  },
  {
    id: 4,
    nombre: "Fugazzeta",
    ingredientes: ["Queso muzzarella", "Cebolla", "Aceitunas"],
    precio: 1440,
  },
  {
    id: 5,
    nombre: "Calabresa",
    ingredientes: ["Queso muzzarella", "Longaniza calabresa", "Tomate"],
    precio: 1500,
  },
  {
    id: 6,
    nombre: "Jamon y morron",
    ingredientes: ["Queso muzzarella", "Jamon", "Morron", "Tomate"],
    precio: 1500,
  },
];

const isEmpty = (array) => !array.length;

const inputValue = () => inputNumber.value;

const changeColorBackground = () => {
  messageContainer.classList.add("color-change");
};

const changeColorBackgroundError = () => {
  messageContainer.classList.add("error-background");
};

const showError = (message) => {
  messageContainer.innerHTML = message;
};

const borderError = () => {
  inputNumber.style.border = "1px solid #CF0A0A";
};

const clearBorderError = () => {
  inputNumber.style.border = "";
};

const clearBackgroundError = () => {
  messageContainer.classList.remove("error-background");
};

const renderNombreYPrecio = () => {
  const nombrePizza = pizzas.find((element) => element.id == inputValue());
  const precioYNombre =
    (messageContainer.innerHTML = `<h2>🍕 Pizza: ${nombrePizza.nombre}</h2>
                <h3>💲 Precio: $${nombrePizza.precio}</h3>`);
  return precioYNombre;
};

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (isEmpty(inputValue())) {
    showError("⛔ Se requiere un número ⛔");
    changeColorBackground();
    borderError();
    changeColorBackgroundError();
  } else if (inputValue() <= 0 || inputValue() > 6) {
    showError("⛔​ ID inválido ⛔​");
    changeColorBackground();
    borderError();
    changeColorBackgroundError();
  } else {
    renderNombreYPrecio();
    changeColorBackground();
    clearBorderError();
    clearBackgroundError();
  }
  searchForm.reset();
});
