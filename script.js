const div = document.createElement("div");
div.classList.add("wrapper");

document.body.append(div);

const generateAutoCard = (brand, model) => {
  return `
    <div class='autoCard'>
    <ul class='ul'>
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
// console.log(listAuto);

const carsHtml = listAuto
  .map((car) => {
    return generateAutoCard(car.brand, car.model);
  })
  .join();

  div.innerHTML = carsHtml

console.log(carsHtml);
