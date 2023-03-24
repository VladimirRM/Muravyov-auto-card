const div = document.createElement("div");
div.classList.add("wrapper");

const body = document.body;
body.appendChild(div);

console.log(div);

const generateAutoCard = (brand, model) => {
  return `
    <div class='autoCard'>
    <ul>
    <li>${brand}</li>
    <li>${model}</li>
    </ul>
    <button class='btn'>Delete</button>
    </div>
    `;
};

const listAuto = [
  { brand: "Toyota", model: "Camry" },
  { brand: "Lexus", model: "Es 350" },
];

const carsHtml = listAuto.map((car) => {
  return generateAutoCard(car.brand, car.model);
});

div.innerHTML = carsHtml;

const buttons = document.querySelectorAll(".btn");

const deleteHandler = (e) => {
  const currentButton = e.currentTarget;
  currentButton.parentElement.remove();
};

buttons.forEach((button) => {
  button.addEventListener("click", deleteHandler);
});
