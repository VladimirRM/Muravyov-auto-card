const div = document.createElement("div");
div.classList.add("wrapper");

const body = document.body;

body.appendChild(div);

const generateAutoCard = (brand, model) => {
  return `
  <div class='autoCard'>
  <ul>
  <li>${brand}</li>
  <li>${model}</li>
  <button class='btn'>Delete</button>
</ul>
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

const handlerRemove = (e) => {
  const currentButton = e.currentTarget;
};

const buttons = document.querySelectorAll("btn");

buttons.forEach((button) => {
  button.addEventListener("click", handlerRemove);
});

console.log(carsHtml);
