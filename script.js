const div = document.createElement("div");
div.classList.add("wrapper");

const body = document.body;

body.appendChild(div);

const generateAutoCard = (brand, model) => {
  return `
  <div  class='autoCard'>
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

const carsHtml = listAuto
  .map((car) => {
    return generateAutoCard(car.brand, car.model);
  })
  .join();

div.innerHTML = carsHtml;

const deleteHandler = (e) => {
  const currentButton = e.currentTarget;
  currentButton.parentElement.remove();
};

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  return button.addEventListener("click", deleteHandler);
});

console.log(carsHtml);
