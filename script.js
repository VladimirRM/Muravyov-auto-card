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

console.log(carsHtml);
